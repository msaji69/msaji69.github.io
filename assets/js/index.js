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

function setLandingPageArt() {
  const enterLink = document.getElementById('enter-link')
  if (!enterLink.querySelector('img')) {
    const randomArt =
      LANDING_PAGE_ART[Math.floor(Math.random() * LANDING_PAGE_ART.length)]

    const img = document.createElement('img')
    img.src = randomArt
    img.alt = 'Enter'
    img.ariaLabel = 'A piece of art made by Maiyo Saji.'

    enterLink.appendChild(img)
  }
}

// [ { DOMElement: EventHandler } ]
const eventListeners = []

function projectsMount() {
  const projects = document.querySelectorAll('.project-wrap')

  projects.forEach(project => {
    const card = project.querySelector('button')
    const modal = project.querySelector('dialog')

    if (modal) {
      const closeBtn = modal.querySelector('.modal-close')

      if (closeBtn) {
        const modalClose = () => modal.close()
        closeBtn.addEventListener('click', modalClose)

        eventListeners.push({
          element: closeBtn,
          handler: modalClose,
          type: 'click',
        })
      }

      if (typeof modal.showModal === 'function') {
        const modalOpen = () => {
          modal.showModal()
          if (closeBtn) closeBtn.focus()
        }
        card.addEventListener('click', modalOpen)

        eventListeners.push({
          element: card,
          handler: modalOpen,
          type: 'click',
        })
      }
    }
  })
}

function removeEventListeners() {
  while (eventListeners.length) {
    const { element, handler, type } = eventListeners.pop()
    element.removeEventListener(type, handler)
  }
}

document.addEventListener('turbo:load', function () {
  if (window.location.pathname === '/') setLandingPageArt()
  if (window.location.pathname === '/projects') projectsMount()
})

document.addEventListener('turbo:before-cache', function () {
  removeEventListeners()
})
