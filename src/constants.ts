export const DEFAULT_AVATAR =
  "https://static.productionready.io/images/smiley-cyrus.jpg";
export const LANGUAGE_MENU = [
  "ALL",
  "Armenian",
  "English",
  "WArmenian",
  "Russian",
  "OArmenian",
  "Latin",
  "Talyshi",
  "Turkish",
  "Germany",
  "Qurdish",
  "French",
  "Zazaki",
  "Hamshen",
  "Lezgin",
  "Yezid",
  "Cherkess",
  "Laz",
  "Persian",
  "Spanish",
];

export const COUNTRY_3CODES = [
  "",
  "arm",
  "eng",
  "wam",
  "rus",
  "oam",
  "lat",
  "tal",
  "trk",
  "ger",
  "itl",
  "fra",
  "zaz",
  "ham",
  "asr",
  "lez",
  "chr",
  "laz",
  "prs",
  "spn",
];

export const ROLE_MENU = [
  "ANY",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "16",
  "23",
];

export const ROOT_NUMBER_MENU = ["ANY"].concat(
  [...Array(10).keys()].map((i) => String(i + 1))
);

export const FREQUENCY_MENU = ["ANY", 1, 25, 75, 125, 175, 255];

export const PROGRAM_TYPE_MENU = ["ANY", "Analys", "Syntheses", "Tree"];

export const PROGRAM_STAGE_MENU = ["ANY", "0", "1", "2", "3", "5", "6", "7"];

export const CLASS_DISTANCE_MENU = ["ANY"].concat(
  [...Array(6).keys()].map((i) => String(i + 1))
);

export const PERMISSION_MENU = [
  "Armenian Words",
  "English Words",
  "WArmenian Words",
  "Russian Words",
  "Old Armenian Words",
  "Latin Words",
  "Talyshi Words",
  "",
  "Concept Caption",
  "Concept Relations",
  "Concept Programs",
  "Concept Comments",
  "Deformations",
  "Syntax",
  "Matrix",
  "Tasks",
  "Administration",
  "Translation",
  "Help",
  "Concept",
  "Delete Concept",
  "New Concept",
  "Definition",
  "Turkish Words",
  "Germany Words",
  "Italian Words",
  "French Words",
  // "Zazaki Words",
  // "Hamshen Words",
  // "Assyrian Words",
  // "Laz Words",
  // "Cherkess Words",
  // "Lezgian Words",
  // "Persian Words",
  // "Spanish Words",
];
