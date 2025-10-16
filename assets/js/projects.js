document.addEventListener('DOMContentLoaded', function () {
  const projects = document.querySelectorAll('.project-wrap')

  projects.forEach(project => {
    const card = Array.from(project.children).find(
      el => el instanceof HTMLButtonElement,
    )
    const modal = Array.from(project.children).find(
      el => el instanceof HTMLDialogElement,
    )

    if (modal) {
      const closeBtn = modal.querySelector('.modal-close')

      if (closeBtn) {
        closeBtn.addEventListener('click', () => modal.close())
      }

      if (typeof modal.showModal === 'function') {
        card.addEventListener('click', () => {
          modal.showModal()
          if (closeBtn) closeBtn.focus()
        })
      }
    }
  })
})
