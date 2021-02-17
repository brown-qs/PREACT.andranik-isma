export const currentWordData = (store: any) => {
  return store.words.find((word: any) => word.id == store.currentWord);
};
