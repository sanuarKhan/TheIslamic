const Quran = require("../models/Quran");

/**
 * Error Handler Utility
 * @param {Object} res - Response object
 * @param {Error} error - Error object
 * @param {number} statusCode - HTTP status code (default: 500)
 */
const handleError = (res, error, statusCode = 500) => {
  res.status(statusCode).json({
    success: false,
    message: error.message,
  });
};

class QuranController {
  /**
   * Retrieve all verses from the Quran
   * @route GET /api/verses
   */
  static async getAllVerses(req, res) {
    try {
      const verses = await Quran.find();
      res.status(200).json({ success: true, data: verses });
    } catch (error) {
      handleError(res, error);
    }
  }

  /**
   * Retrieve a specific verse by surah and ayah number
   * @route GET /api/verses/:surah_number/:ayah_number
   */
  static async getVerse(req, res) {
    const { surah_number, ayah_number } = req.params;
    try {
      const verse = await Quran.findOne({ surah_number, ayah_number });
      if (!verse) {
        return res.status(404).json({
          success: false,
          message: "Verse not found",
        });
      }
      res.status(200).json({ success: true, data: verse });
    } catch (error) {
      handleError(res, error);
    }
  }

  /**
   * Create a new verse
   * @route POST /api/verses
   */
  static async createVerse(req, res) {
    try {
      const verse = await Quran.create(req.body);
      res.status(201).json({ success: true, data: verse });
    } catch (error) {
      handleError(res, error, 400);
    }
  }

  /**
   * Update an existing verse
   * @route PUT /api/verses/:surah_number/:ayah_number
   */
  static async updateVerse(req, res) {
    const { surah_number, ayah_number } = req.params;
    try {
      const verse = await Quran.findOneAndUpdate(
        { surah_number, ayah_number },
        req.body,
        { new: true, runValidators: true }
      );
      if (!verse) {
        return res.status(404).json({
          success: false,
          message: "Verse not found",
        });
      }
      res.status(200).json({ success: true, data: verse });
    } catch (error) {
      handleError(res, error);
    }
  }

  /**
   * Delete a verse
   * @route DELETE /api/verses/:surah_number/:ayah_number
   */
  static async deleteVerse(req, res) {
    const { surah_number, ayah_number } = req.params;
    try {
      const verse = await Quran.findOneAndDelete({ surah_number, ayah_number });
      if (!verse) {
        return res.status(404).json({
          success: false,
          message: "Verse not found",
        });
      }
      res.status(200).json({ success: true, data: {} });
    } catch (error) {
      handleError(res, error);
    }
  }

  /**
   * Search verses by keyword or theme
   * @route GET /api/verses/search
   */
  static async searchVerses(req, res) {
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
  }

  /**
   * Get verses by surah number
   * @route GET /api/verses/surah/:surah_number
   */
  static async getVersesBySurah(req, res) {
    const { surah_number } = req.params;
    try {
      const verses = await Quran.find({ surah_number });
      res.status(200).json({ success: true, data: verses });
    } catch (error) {
      handleError(res, error);
    }
  }

  /**
   * Get verses by theme
   * @route GET /api/verses/theme/:theme
   */
  static async getVersesByTheme(req, res) {
    const { theme } = req.params;
    try {
      const verses = await Quran.find({ themes: { $in: [theme] } });
      res.status(200).json({ success: true, data: verses });
    } catch (error) {
      handleError(res, error);
    }
  }

  /**
   * Get verses by keyword
   * @route GET /api/verses/keyword/:keyword
   */
  static async getVersesByKeyword(req, res) {
    const { keyword } = req.params;
    try {
      const verses = await Quran.find({ keywords: { $in: [keyword] } });
      res.status(200).json({ success: true, data: verses });
    } catch (error) {
      handleError(res, error);
    }
  }

  /**
   * Get a random verse
   * @route GET /api/verses/random
   */
  static async getRandomVerse(req, res) {
    try {
      const count = await Quran.countDocuments();
      const random = Math.floor(Math.random() * count);
      const verse = await Quran.findOne().skip(random);
      res.status(200).json({ success: true, data: verse });
    } catch (error) {
      handleError(res, error);
    }
  }

  /**
   * Get verses by range
   * @route GET /api/verses/range/:start/:end
   */
  static async getVersesByRange(req, res) {
    const { start, end } = req.params;
    try {
      const verses = await Quran.find({
        ayah_number: { $gte: start, $lte: end },
      });
      res.status(200).json({ success: true, data: verses });
    } catch (error) {
      handleError(res, error);
    }
  }

  /**
   * Get verses by range and surah number
   * @route GET /api/verses/range/:start/:end/:surah_number
   */
  static async getVersesByRangeAndSurah(req, res) {
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
  }
}

// Export all controller methods
module.exports = QuranController;
