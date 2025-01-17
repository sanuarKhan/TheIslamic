const express = require("express");
const router = express.Router();

const quranController = require("../controllers/quranController");

router.route("/").get(quranController.getAllVerses); // Get all verses
router.route("/:surah_number/:ayah_number").get(quranController.getVerse); //Get a specific verse
router.route("/add").post(quranController.createVerse); // create a new verses
// router.route("/:surah_number/:ayah_number").put(quranController.updateVerse); // update a specific verse
// router.route("/:surah_number/:ayah_number").delete(quranController.deleteVerse); // delete a specific verse
router.route("/search").get(quranController.searchVerses); // delete a specific verse

module.exports = router;
