const Quran = require("../models/Quran");

// Helper function for handling errors
const handleError = (res, error, statusCode = 500) => {
  res.status(statusCode).json({ success: false, message: error.message });
};

// Get all verses
exports.getAllVerses = async (req, res) => {
  try {
    const verses = await Quran.find();
    res.status(200).json({ success: true, data: verses });
  } catch (error) {
    handleError(res, error);
  }
};

// Get a verse by surah number and ayah number
exports.getVerse = async (req, res) => {
  const { surah_number, ayah_number } = req.params;
  try {
    const verse = await Quran.findOne({ surah_number, ayah_number });
    if (!verse) {
      return res.status(404).json({ success: false, message: "Verse not found" });
    }
    res.status(200).json({ success: true, data: verse });
  } catch (error) {
    handleError(res, error);
  }
};

// Create a new verse
exports.createVerse = async (req, res) => {
  try {
    const verse = await Quran.create(req.body);
    res.status(201).json({ success: true, data: verse });
  } catch (error) {
    handleError(res, error, 400);
  }
};

// Update a verse
exports.updateVerse = async (req, res) => {
  const { surah_number, ayah_number } = req.params;
  try {
    const verse = await Quran.findOneAndUpdate(
      { surah_number, ayah_number },
      req.body,
      { new: true, runValidators: true }
    );
    if (!verse) {
      return res.status(404).json({ success: false, message: "Verse not found" });
    }
    res.status(200).json({ success: true, data: verse });
  } catch (error) {
    handleError(res, error);
  }
};

// Delete a verse
exports.deleteVerse = async (req, res) => {
  const { surah_number, ayah_number } = req.params;
  try {
    const verse = await Quran.findOneAndDelete({ surah_number, ayah_number });
    if (!verse) {
      return res.status(404).json({ success: false, message: "Verse not found" });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    handleError(res, error);
  }
};

// Search verses by keyword or theme
exports.searchVerses = async (req, res) => {
  const { keyword, theme } = req.query;
  try {
    const query = {};
    if (keyword) query.keywords = { $in: [keyword] };
    if (theme) query.themes = { $in: [theme] };

    const verses = await Quran.find(query);
    res.status(200).json({ success: true, data: verses });
  } catch (error) {
    handleError(res, error);
  }
};

// Get verses by surah number
exports.getVersesBySurah = async (req, res) => {
  const { surah_number } = req.params;
  try {
    const verses = await Quran.find({ surah_number });
    res.status(200).json({ success: true, data: verses });
  } catch (error) {
    handleError(res, error);
  }
};

// Get verses by theme
exports.getVersesByTheme = async (req, res) => {
  const { theme } = req.params;
  try {
    const verses = await Quran.find({ themes: { $in: [theme] } });
    res.status(200).json({ success: true, data: verses });
  } catch (error) {
    handleError(res, error);
  }
};

// Get verses by keyword
exports.getVersesByKeyword = async (req, res) => {
  const { keyword } = req.params;
  try {
    const verses = await Quran.find({ keywords: { $in: [keyword] } });
    res.status(200).json({ success: true, data: verses });
  } catch (error) {
    handleError(res, error);
  }
};

// Get a random verse
exports.getRandomVerse = async (req, res) => {
  try {
    const count = await Quran.countDocuments();
    const random = Math.floor(Math.random() * count);
    const verse = await Quran.findOne().skip(random);
    res.status(200).json({ success: true, data: verse });
  } catch (error) {
    handleError(res, error);
  }
};

// Get verses by range
exports.getVersesByRange = async (req, res) => {
  const { start, end } = req.params;
  try {
    const verses = await Quran.find({ ayah_number: { $gte: start, $lte: end } });
    res.status(200).json({ success: true, data: verses });
  } catch (error) {
    handleError(res, error);
  }
};

// Get verses by range and surah number
exports.getVersesByRangeAndSurah = async (req, res) => {
  const { start, end, surah_number } = req.params;
  try {
    const verses = await Quran.find({
      ayah_number: { $gte: start, $lte: end },
      surah_number,
    });
    res.status(200).json({ success: true, data: verses });
  } catch (error) {
    handleError(res, error);
  }
};
