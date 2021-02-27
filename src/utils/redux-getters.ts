/***************************************************************************
 *        MANY TIMES, WE NEED TO GET PRE-ORGANIZED DATA REPEATEDLY.        *
 * HERE WE DEFINE FUNCTIONS THAT RETURNS THOSE DATA, CALLED REDUX GETTERS. *
 ***************************************************************************/

export const currentWordData = (store: any) => {
  return store.words.find((word: any) => word.id == store.currentWord);
};
