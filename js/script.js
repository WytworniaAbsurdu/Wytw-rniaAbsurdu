document.addEventListener('DOMContentLoaded', function () {
	const navbar = document.querySelector('.navbar')
	const allNavLinks = document.querySelectorAll('.nav-link')
	const navList = document.querySelector('.navbar-collapse')
    
    
    function addShadow() {
		if (window.scrollY >= 300) {
			navbar.classList.add('shadow-bg')
		} else {
			navbar.classList.remove('shadow-bg')
		}
	}



	allNavLinks.forEach(item => item.addEventListener('click', () => 
		{
			navList.classList.remove('show')
		}))

    window.addEventListener('scroll', addShadow)
})


