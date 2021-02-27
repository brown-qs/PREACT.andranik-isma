/************************************************************************
 * LOCALSTORAGE CACHES USER'S INFORMATION AND USE IT ON LATER SIGN-INS. *
 *    THIS UTIL FUNCTION IS USED TO GET CERTAIN VALUE FROM STORAGE.     *
 ************************************************************************/

export default function parseStorageGet (key: string) {
  try {
    const value = localStorage.getItem(key) || ''
    return JSON.parse(value)
  } catch (e) {
    return null
  }
}
