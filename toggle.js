const toggleBtn = document.getElementsByClassName('menu-toggle')[0]
const navLinks = document.getElementById('resize')

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})