function animateScroll() {
  const sections = document.querySelectorAll('.js-scroll')
  const windowMetade = window.innerHeight * 0.5

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top
    const isSectionVisible = sectionTop - windowMetade < 0
    if (isSectionVisible) {
      section.classList.add('active')
    } else {
      section.classList.remove('active')
    }
  })
}
animateScroll()
window.addEventListener('scroll', animateScroll)