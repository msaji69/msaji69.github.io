import { Controller } from 'https://unpkg.com/@hotwired/stimulus/dist/stimulus.js'

export default class extends Controller {
  static targets = ['modal']

  openModal() {
    this.modalTarget.showModal()
  }

  closeModal() {
    this.modalTarget.close()
  }
}
