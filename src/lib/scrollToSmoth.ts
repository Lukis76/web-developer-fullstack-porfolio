export const scrollToSmoth = (id: string) => {
  const section = document.getElementById(id)
  section?.scrollIntoView({ behavior: "smooth" })
}
