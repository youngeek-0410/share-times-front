import koyoLogo from 'assets/koyo_logo.jpg'

import e4 from 'assets/e4.jpg'

const getPhotoPath = (organizationName: string) => {
  switch (organizationName) {
    case '2M':
      return koyoLogo
    case '2E':
      return koyoLogo
    case '2I':
      return koyoLogo
    case '2C':
      return koyoLogo
    case '2A':
      return koyoLogo
    case '4M':
      return koyoLogo
    case '4E':
      return e4
    case '4I':
      return koyoLogo
    case '4C':
      return koyoLogo
    case '4A':
      return koyoLogo
    default:
      return koyoLogo
  }
}

export default getPhotoPath
