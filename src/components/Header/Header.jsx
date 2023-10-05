import React, { useEffect, useState } from 'react'
import style from './index.module.css'
import { Link } from 'react-router-dom'
const Header = ({ currentSection }) => {
	const [isMovil, setIsMovil] = useState(false)
	const [headerClick, serHeaderClick] = useState(true)
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		// Función para verificar el tamaño de la pantalla y actualizar isMovil
		const checkWindowSize = () => {
			setIsMovil(window.innerWidth <= 1280)
		}

		// Llama a la función inicialmente para establecer el valor inicial de isMovil
		checkWindowSize()

		// Agrega un event listener para escuchar cambios en el tamaño de la ventana
		window.addEventListener('resize', checkWindowSize)

		// Limpia el event listener cuando el componente se desmonta
		return () => {
			window.removeEventListener('resize', checkWindowSize)
		}
	}, [])
	useEffect(() => {
		// Función para verificar el tamaño de la pantalla y actualizar isMovil
		console.log(isMovil)
	}, [isMovil])

	// Función para manejar el evento de desplazamiento
	const handleScroll = () => {
		// Verifica la posición del desplazamiento actual
		if (window.scrollY > 0) {
			// Si el usuario ha realizado un desplazamiento hacia abajo, establece isScrolled en true
			setIsScrolled(true)
		} else {
			// Si el usuario ha regresado al principio, establece isScrolled en false
			setIsScrolled(false)
		}
	}
	// Agrega un oyente de eventos de desplazamiento cuando el componente se monta
	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		// Elimina el oyente de eventos cuando el componente se desmonta
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])
	// console.log(currentSection)
	const handleNavLinkClick = (event, targetId) => {
		event.preventDefault()

		// Obtén la referencia al elemento de destino por su ID
		const targetElement = document.getElementById(targetId)

		// Verifica si el elemento de destino existe
		if (targetElement) {
			// Realiza el desplazamiento suave hacia el elemento de destino
			targetElement.scrollIntoView({ behavior: 'smooth' })
		}
	}

	const handlerClickBtn = () => {
		serHeaderClick(!headerClick)
	}
	return (
		<header
			className={`${style.header} ${isScrolled ? style.scrolled : ''} ${
				headerClick ? style.activeNav : ''
			}`}
		>
			<div>
				<img
					className={isScrolled ? style.scrolledImg : ''}
					src='src/assets/logoFV.png'
					alt=''
				/>
			</div>

			<section className={style.navbar}>
				<a
					className={currentSection === 'inicio' ? style.linkActive : ''}
					href='#'
					onClick={e => {
						handleNavLinkClick(e, 'inicio')
						handlerClickBtn()
					}}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						class='icon icon-tabler icon-tabler-home-2'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						stroke-width='2'
						stroke='currentColor'
						fill='none'
						stroke-linecap='round'
						stroke-linejoin='round'
					>
						<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
						<path d='M5 12l-2 0l9 -9l9 9l-2 0'></path>
						<path d='M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7'></path>
						<path d='M10 12h4v4h-4z'></path>
					</svg>
					Inicio
				</a>
				<a
					href='#'
					onClick={e => {
						handleNavLinkClick(e, 'proyects')
						handlerClickBtn()
					}}
					className={currentSection === 'proyects' ? style.linkActive : ''}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						class='icon icon-tabler icon-tabler-briefcase'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						stroke-width='2'
						stroke='currentColor'
						fill='none'
						stroke-linecap='round'
						stroke-linejoin='round'
					>
						<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
						<path d='M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z'></path>
						<path d='M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2'></path>
						<path d='M12 12l0 .01'></path>
						<path d='M3 13a20 20 0 0 0 18 0'></path>
					</svg>
					Proyectos
				</a>
				<a
					href='#'
					onClick={e => {
						handleNavLinkClick(e, 'about')
						handlerClickBtn()
					}}
					className={currentSection === 'about' ? style.linkActive : ''}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						class='icon icon-tabler icon-tabler-info-octagon'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						stroke-width='2'
						stroke='currentColor'
						fill='none'
						stroke-linecap='round'
						stroke-linejoin='round'
					>
						<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
						<path d='M12.802 2.165l5.575 2.389c.48 .206 .863 .589 1.07 1.07l2.388 5.574c.22 .512 .22 1.092 0 1.604l-2.389 5.575c-.206 .48 -.589 .863 -1.07 1.07l-5.574 2.388c-.512 .22 -1.092 .22 -1.604 0l-5.575 -2.389a2.036 2.036 0 0 1 -1.07 -1.07l-2.388 -5.574a2.036 2.036 0 0 1 0 -1.604l2.389 -5.575c.206 -.48 .589 -.863 1.07 -1.07l5.574 -2.388a2.036 2.036 0 0 1 1.604 0z'></path>
						<path d='M12 9h.01'></path>
						<path d='M11 12h1v4h1'></path>
					</svg>
					Sombre Mi
				</a>
				<a
					href='#'
					onClick={e => {
						handleNavLinkClick(e, 'contact')
						handlerClickBtn()
					}}
					className={currentSection === 'contact' ? style.linkActive : ''}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						class='icon icon-tabler icon-tabler-address-book'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						stroke-width='2'
						stroke='currentColor'
						fill='none'
						stroke-linecap='round'
						stroke-linejoin='round'
					>
						<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
						<path d='M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z'></path>
						<path d='M10 16h6'></path>
						<path d='M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0'></path>
						<path d='M4 8h3'></path>
						<path d='M4 12h3'></path>
						<path d='M4 16h3'></path>
					</svg>
					Contacto
				</a>
			</section>
			{!isMovil ? null : (
				<>
					<svg
						id={style.btnHeader}
						onClick={handlerClickBtn}
						xmlns='http://www.w3.org/2000/svg'
						class='icon icon-tabler icon-tabler-menu-2'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						stroke-width='2'
						stroke='currentColor'
						fill='none'
						stroke-linecap='round'
						stroke-linejoin='round'
					>
						{headerClick ? (
							<>
								{' '}
								<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
								<path d='M4 6l16 0'></path>
								<path d='M4 12l16 0'></path>
								<path d='M4 18l16 0'></path>
							</>
						) : (
							<>
								<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
								<path d='M18 6l-12 12'></path>
								<path d='M6 6l12 12'></path>
							</>
						)}
					</svg>
				</>
			)}
		</header>
	)
}

export default Header
