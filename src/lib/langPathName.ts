export const LangPathName = (pathName: string) => {
    const segment = pathName.split('/')
    return segment[1]
  }