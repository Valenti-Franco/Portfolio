import React, { useEffect, useState } from 'react'
import Main from './components/Main/Main.jsx'
import './App.css'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
	const [currentSection, setCurrentSection] = useState('inicio')

	const handleScroll = () => {
		const inicioSection = document.getElementById('inicio')
		const proyectsSection = document.getElementById('proyects')
		const aboutSection = document.getElementById('about')
		const contactSection = document.getElementById('contact')

		const currentScrollY = window.scrollY
		const windowHeight = window.innerHeight

		const inicioMidpoint =
			inicioSection.offsetTop + inicioSection.offsetHeight / 2
		const proyectsMidpoint =
			proyectsSection.offsetTop + proyectsSection.offsetHeight / 2
		const aboutMidpoint = aboutSection.offsetTop + aboutSection.offsetHeight / 2
		const contactMidpoint =
			contactSection.offsetTop + contactSection.offsetHeight / 2

		if (currentScrollY < inicioMidpoint) {
			setCurrentSection('inicio')
		} else if (currentScrollY < proyectsMidpoint) {
			setCurrentSection('proyects')
		} else if (currentScrollY < aboutMidpoint) {
			setCurrentSection('about')
		} else if (currentScrollY < contactMidpoint) {
			setCurrentSection('contact')
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])
	return (
		<body>
			<Header currentSection={currentSection} />
			<Main />
		</body>
	)
}
export default App
