const { Router, Response } = require("pepesan");
const BotController = require("./controller/BotController");
const f = require("./utils/Formatter");

const router = new Router();

//================== Menu Utama (1-6) ==================//
// Menangani input angka 1-6 untuk menu utama
router.keyword("1", [BotController, "handleInput"]);
router.keyword("2", [BotController, "handleInput"]);
router.keyword("3", [BotController, "handleInput"]);
router.keyword("4", [BotController, "handleInput"]);
router.keyword("5", [BotController, "handleInput"]);
router.keyword("6", [BotController, "handleInput"]);

//================== Submenu (format x.y) ==================//
// Menu 1: Informasi Pendaftaran
router.keyword("1.1", [BotController, "handleInput"]);
router.keyword("1.2", [BotController, "handleInput"]);
router.keyword("1.3", [BotController, "handleInput"]);
router.keyword("1.4", [BotController, "handleInput"]);
router.keyword("1.5", [BotController, "handleInput"]);

// Menu 2: Biaya Pendidikan
router.keyword("2.1", [BotController, "handleInput"]);
router.keyword("2.2", [BotController, "handleInput"]);
router.keyword("2.3", [BotController, "handleInput"]);
router.keyword("2.4", [BotController, "handleInput"]);
router.keyword("2.5", [BotController, "handleInput"]);

// Menu 3: Program Unggulan
router.keyword("3.1", [BotController, "handleInput"]);
router.keyword("3.2", [BotController, "handleInput"]);
router.keyword("3.3", [BotController, "handleInput"]);
router.keyword("3.4", [BotController, "handleInput"]);
router.keyword("3.5", [BotController, "handleInput"]);

// Menu 4: Jadwal Kegiatan
router.keyword("4.1", [BotController, "handleInput"]);
router.keyword("4.2", [BotController, "handleInput"]);
router.keyword("4.3", [BotController, "handleInput"]);
router.keyword("4.4", [BotController, "handleInput"]);
router.keyword("4.5", [BotController, "handleInput"]);

// Menu 5: Fasilitas Sekolah
router.keyword("5.1", [BotController, "handleInput"]);
router.keyword("5.2", [BotController, "handleInput"]);
router.keyword("5.3", [BotController, "handleInput"]);
router.keyword("5.4", [BotController, "handleInput"]);
router.keyword("5.5", [BotController, "handleInput"]);

//================== Kata Kunci Khusus ==================//
// Keyword untuk kembali ke menu utama
router.keyword("menu", [BotController, "introduction"]);
router.keyword("Menu", [BotController, "introduction"]);
router.keyword("MENU", [BotController, "introduction"]);

//================== Default Route ==================//
// Menangani semua input yang tidak cocok dengan route di atas
router.keyword("*", [BotController, "handleInput"]);

module.exports = router;
