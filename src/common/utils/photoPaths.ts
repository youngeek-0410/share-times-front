import koyoLogo from 'assets/koyo_logo.jpg'

import class2m from 'assets/class2m.jpg'
import class2e from 'assets/class2e.jpg'
import class2i from 'assets/class2i.jpg'
import class2c from 'assets/class2c.jpg'
import class2a from 'assets/class2a.jpg'

import class3a from 'assets/class3a.jpg'

import class4m from 'assets/class4m.jpg'
import class4e from 'assets/class4e.jpg'
import class4i from 'assets/class4i.jpg'
import class4c from 'assets/class4c.jpg'
import class4a from 'assets/class4a.jpg'

import trick from 'assets/trick.jpg'
import shogi from 'assets/shogi.jpg'
import drama_and_film from 'assets/drama_and_film.jpg'
import astronomy from 'assets/astronomy.jpg'
import brass_band from 'assets/brass_band.jpg'
import picture from 'assets/picture.jpg'
import band_club from 'assets/band_club.jpg'
import art from 'assets/art.jpg'
import art_create from 'assets/art_create.jpg'
import aeronautical from 'assets/aeronautical.jpg'
import railway_and_plane from 'assets/railway_and_plane.jpg'
import sado from 'assets/sado.jpg'
import computer_club from 'assets/computer_club.jpg'
import robocon_b from 'assets/robocon_b.jpg'
import robocon_a from 'assets/robocon_a.jpg'

const getPhotoPath = (organizationName: string) => {
  switch (organizationName) {
    case '2M':
      return class2m
    case '2E':
      return class2e
    case '2I':
      return class2i
    case '2C':
      return class2c
    case '2A':
      return class2a
    case '3A':
      return class3a
    case '4M':
      return class4m
    case '4E':
      return class4e
    case '4I':
      return class4i
    case '4C':
      return class4c
    case '4A':
      return class4a
    case '機巧同好会':
      return trick
    case '囲碁・将棋部':
      return shogi
    case '演劇部':
      return drama_and_film
    case '天文同好会':
      return astronomy
    case '吹奏楽部':
      return brass_band
    case '写真部':
      return picture
    case '軽音楽部':
      return band_club
    case '美術部':
      return art
    case 'アートクリエイト同好会':
      return art_create
    case '総合航空技術研究会':
      return aeronautical
    case '鉄道航空研究同好会':
      return railway_and_plane
    case '茶道部':
      return sado
    case 'コンピューター部':
      return computer_club
    case 'ロボコンB':
      return robocon_b
    case 'ロボコンA':
      return robocon_a
    default:
      return koyoLogo
  }
}

export default getPhotoPath
