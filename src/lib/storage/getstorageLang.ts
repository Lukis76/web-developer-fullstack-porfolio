import { Locale } from "@/i18n.config"

export const getStorageLang = (lang: string): Locale => {
  // if (typeof window === 'undefined') {
  //   throw new Error("no se ha podido acceder al window, ya que es undefined")
  // }
  const langStorage = localStorage.getItem("lang")
  if (!langStorage) {
    localStorage.setItem("lang", JSON.stringify("en"))
    return "en"
  }
  return JSON.parse(langStorage)
}
