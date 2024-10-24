const { Controller, Response } = require("pepesan");
const f = require("../utils/Formatter");

module.exports = class BotController extends Controller {
  // Menu Utama
  async introduction(request) {
    const menuItems = Object.entries(f("menu"))
      .filter(([key]) => key !== "title")
      .map(([key, value]) => `${key}. ${value}`)
      .join("\n");

    return this.reply(
      f("messages.welcome") +
        "\n\n" +
        f("menu.title") +
        "\n" +
        menuItems +
        f("messages.menu_footer")
    );
  }

  // Handler untuk semua input
  async handleInput(request) {
    const userInput = request.input.trim();

    // Menu Utama (1-6)
    if (["1", "2", "3", "4", "5", "6"].includes(userInput)) {
      return this.handleMainMenu(request, userInput);
    }

    // Submenu (format: 1.1, 1.2, dst)
    if (userInput.includes(".")) {
      return this.handleSubMenu(request, userInput);
    }

    return this.reply(f("messages.invalid_input"));
  }

  // Handler Menu Utama
  async handleMainMenu(request, input) {
    // Untuk menu 6 (Hubungi Resepsionis)
    if (input === "6") {
      return this.reply(f("messages.connect_admin"));
    }

    // Untuk menu 1-5
    const submenu = f(`submenu.${input}`);
    if (submenu) {
      const menuItems = Object.entries(submenu)
        .filter(([key]) => key !== "title")
        .map(([key, value]) => `${input}.${key} - ${value}`)
        .join("\n");

      return this.reply(
        submenu.title + "\n\n" + menuItems + "\n\n" + f("messages.back_to_menu")
      );
    }

    return this.reply(f("messages.invalid_input"));
  }

  // Handler Sub Menu
  async handleSubMenu(request, input) {
    const [mainMenu, subMenu] = input.split(".");

    // Handler untuk kembali ke menu utama
    if (subMenu === "5") {
      return this.introduction(request);
    }

    const content = f(`content.${input}`);
    if (content) {
      return this.reply(content + "\n\n" + f("messages.back_to_menu"));
    }

    return this.reply(f("messages.invalid_input"));
  }
};
