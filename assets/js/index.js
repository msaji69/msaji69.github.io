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
  if (window.location.pathname === '/projects') projectsMount()
})

document.addEventListener('turbo:before-cache', function () {
  removeEventListeners()
})
