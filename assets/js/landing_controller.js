import { Controller } from 'https://unpkg.com/@hotwired/stimulus/dist/stimulus.js'

const LANDING_PAGE_ART = [
  '/assets/images/saji-painting.png',
  '/assets/images/moonhouse.jpeg',
  '/assets/images/BK_AptWindow_1.jpg',
  '/assets/images/BK_AptWindow_2.jpg',
  '/assets/images/constructionwindow.jpg',
  '/assets/images/man_painting.jpg',
  '/assets/images/plant_monoprint.jpg',
  '/assets/images/toiletflowers_photo.jpg',
]

export default class extends Controller {
  static targets = ['enterLink']

  connect() {
    if (!this.enterLinkTarget.querySelector('img')) {
      const randomArt =
        LANDING_PAGE_ART[Math.floor(Math.random() * LANDING_PAGE_ART.length)]

      const img = document.createElement('img')
      img.src = randomArt
      img.alt = 'Enter'
      img.ariaLabel = 'A piece of art made by Maiyo Saji.'

      this.enterLinkTarget.appendChild(img)
    }
  }
}
