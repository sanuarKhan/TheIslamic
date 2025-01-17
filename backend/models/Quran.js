// models/Verse.js
const mongoose = require("mongoose");

const VerseSchema = new mongoose.Schema(
  {
    surah_number: {
      type: Number,
      required: true,
      index: true,
    }, // Surah number (1-114)
    ayah_number: {
      type: Number,
      required: true,
      index: true,
    }, // Ayah number within the Surah
    surah_name: {
      arabic: { type: String, required: true }, // Arabic name of the surah
      english: {
        type: String,
        required: true,
      }, // English name of the surah
      bangla: {
        type: String,
        required: true,
      }, // Bangla name of the surah
    },
    keywords: {
      type: [String],
      index: true,
    }, // Tags for searching
    themes: {
      type: [String],
      index: true,
    }, // Themes associated with the verse
    arabicText: {
      type: String,
      required: true,
    }, // Quranic verse in Arabic
    transliteration: {
      english: {
        type: String,
      }, // English transliteration
      bangla: {
        type: String,
      }, // Bangla transliteration
    },
    translations: {
      english: {
        type: String,
      }, // English translation
      bangla: {
        type: String,
      }, // Bangla translation
    },
    tafsirs: [
      {
        source: {
          type: String,
          required: true,
        }, // Tafsir source (e.g., "Ibn Kathir")
        language: {
          type: String,
          required: true,
        }, // Tafsir language (e.g., "English")
        content: {
          type: String,
          required: true,
        }, // Tafsir content
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Quran", VerseSchema);
