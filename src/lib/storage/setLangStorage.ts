export const setLangStorage = (lang: string): void => {
  if (typeof window === 'undefined') {
    throw new Error("no se ha podido acceder al context-window, ya que es undefined")
  }
  const langStorage = lang ? JSON.stringify(lang) : "en"
  window.localStorage.setItem("lang", langStorage)
}
