/*********************************************************************************************************
 * Constants.ts has Constants used in App
 * Once you update values here, whole app is updated.
 */

/***
 * Default Avatar if user has not uploaded yet.
 * (Not used, but recommended)
 */
export const DEFAULT_AVATAR =
  "https://static.productionready.io/images/smiley-cyrus.jpg";

/***
 * Language Menu used In everywhere(Search Panel ...)
 */
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

/***
 * Country Codes Constants
 */

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

/***
 * Role Menu (Search Panel)
 */

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

/***
 * Root Number Menu (Search Panel)
 */
export const ROOT_NUMBER_MENU = ["ANY"].concat(
  [...Array(10).keys()].map((i) => String(i + 1))
);

/***
 * Frequency Menu
 */

export const FREQUENCY_MENU = ["ANY", 1, 25, 75, 125, 175, 255];

/***
 * Program Type Menu
 */
export const PROGRAM_TYPE_MENU = ["ANY", "Analys", "Syntheses", "Tree"];

/***
 * Program Stage Menu
 */
export const PROGRAM_STAGE_MENU = ["ANY", "0", "1", "2", "3", "5", "6", "7"];

/***
 * Class Distance Menu
 */
export const CLASS_DISTANCE_MENU = ["ANY"].concat(
  [...Array(6).keys()].map((i) => String(i + 1))
);

/***
 * Permission Menu
 * The order is important. Index indicates the binary values.
 */
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

/***
 * Mask positions
 * The index indicates the positions in mask binary code.
 */
export const CONCEPT_MASKS = [
  "armWords",
  "engWords",
  "wamWords",
  "rusWords",
  "oamWords",
  "latWords",
  "talWords",
  "",
  "caption",
  "relations",
  "programs",
  "desc",
  "classes",
  "environments",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "definition",
  "trkWords",
  "gerWords",
  "itlWords",
  "fraWords",
  "zazWords",
  "hamWords",
  "asrWords",
  "lezWords",
  "chrWords",
  "lazWords",
  "prsWords",
  "spnWords",
];

/***
 * Languages used in Definition
 */
export const DEFINITION_LANGUAGE_MENU = [...Array(6).keys()].map((i) => i + 1);

/***
 * Font size menu used in Definition
 */
export const FONT_SIZE_MENU = [
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
];

/***
 * Concept Theme
 */

export const CONCEPT_THEME_LIST = [
  { label: "Auto Detect", labelField: 0 },
  { label: "Vol0", labelField: 1 },
  { label: "Vol1", labelField: 2 },
  { label: "Vol2", labelField: 3 },
  { label: "Vol3", labelField: 4 },
  { label: "Mathematics", labelField: 5 },
  { label: "Physics", labelField: 6 },
  { label: "Chemistry", labelField: 7 },
  { label: "Techniques", labelField: 9 },
  { label: "Informatics", labelField: 10 },
  { label: "Medicine", labelField: 11 },
  { label: "Biology", labelField: 12 },
  { label: "Economics", labelField: 13 },
  { label: "Jurisprudence/Law", labelField: 14 },
  { label: "Geology", labelField: 15 },
  { label: "Military", labelField: 16 },
  { label: "Subject of Art", labelField: 17 },
  { label: "Chess Player/Footballer Names", labelField: 18 },
  { label: "Phis./Math./Biol. Names", labelField: 19 },
  { label: "Philosopher  Names", labelField: 20 },
  { label: "Cathol./Pres./Astr. Names", labelField: 21 },
  { label: "Epic Hero/God", labelField: 22 },
  { label: "Arts", labelField: 23 },
  { label: "Personal Names", labelField: 24 },
  { label: "Surenames", labelField: 25 },
  { label: "Inanimate Names", labelField: 26 },
  { label: "Linguistic", labelField: 27 },
  { label: "Construction/Building", labelField: 28 },
];
