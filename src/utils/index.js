/* eslint-disable no-unused-vars */

import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.jpg'
import img7 from '../assets/7.jpg'
import img8 from '../assets/8.jpg'
import img9 from '../assets/9.jpg'
import img10 from '../assets/10.jpg'
import img11 from '../assets/11.jpg'
import img12 from '../assets/12.jpg'
import img13 from '../assets/13.jpg'
import img14 from '../assets/14.jpg'
import img15 from '../assets/15.jpg'
import img16 from '../assets/16.jpg'
import img17 from '../assets/17.jpg'
import img18 from '../assets/18.jpg'
import img19 from '../assets/19.jpg'
import img20 from '../assets/20.jpg'

const imageArray = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20]
export const getRandomImage = (random) => {
  return imageArray[random]
}

export const randomNumberByRange = (lower, upper) => {
  const posibilities = upper - lower
  let random = Math.random() * (posibilities + 1)
  random = Math.floor(random)
  return lower + random
}

export const getMapCoordinates = (random) => {
  const coordinates = {
    0: { x: 24.28041, y: -98.77857 },
    1: { x: 23.28514, y: -102.99732 },
    2: { x: 25.62407, y: -103.49171 },
    3: { x: 27.02330, y: -101.41529 },
    4: { x: 20.68767, y: -101.65699 },
    5: { x: 22.710, y: -102.54847 },
    6: { x: 24.02175, y: -102.99342 },
    7: { x: 21.92304, y: -102.67481 },
    8: { x: 20.77190, y: -101.42787 },
    9: { x: 18.25582, y: -99.47779 },
    10: { x: 17.18841, y: -96.67628 }
  }
  return coordinates[random]
}
