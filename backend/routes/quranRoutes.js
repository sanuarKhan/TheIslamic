const express = require("express");
const router = express.Router();
const {
  getAllVerses,
  getVerse,
  createVerse,
  searchVerses,
  // updateVerse,
  // deleteVerse
} = require("../controllers/quranController");

/**
 * @route   GET /api/quran
 * @desc    Get all Quran verses
 */
router.get("/", getAllVerses);

/**
 * @route   GET /api/quran/:surah_number/:ayah_number
 * @desc    Get a specific verse by surah and ayah number
 */
router.get("/:surah_number/:ayah_number", getVerse);

/**
 * @route   POST /api/quran/add
 * @desc    Create a new verse
 */
router.post("/add", createVerse);

/**
 * @route   GET /api/quran/search
 * @desc    Search verses
 */
router.get("/search", searchVerses);

// Commented routes for future implementation
/**
 * @route   PUT /api/quran/:surah_number/:ayah_number
 * @desc    Update a specific verse
 */
// router.put("/:surah_number/:ayah_number", updateVerse);

/**
 * @route   DELETE /api/quran/:surah_number/:ayah_number
 * @desc    Delete a specific verse
 */
// router.delete("/:surah_number/:ayah_number", deleteVerse);

module.exports = router;
