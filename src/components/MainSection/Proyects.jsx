import React from 'react'
import style from './proyects.module.css'
import Card from '../Card/Card'

function MainSectionProyects() {
	return (
		<mai id='proyects' className={style.main}>
			<h2>MIS PROYECTOS</h2>
			<div className={style.container}>
				<Card
					par={true}
					imageWindow='url("src/assets/737shots_so.png")'
					imagePhone='src/assets/175shots_so.png'
					title='NAVAJAFINA'
					estado='En desarrollo'
					color1='#240d3d'
					color2='#b4a2ca'
					logo='src/assets/nflogo.png'
					desc='NavajaFina es un eCommerce especializado en productos de barbería funcional. Ofrecemos una amplia gama de herramientas y productos de alta calidad para el cuidado personal y el afeitado, con opciones de compra segura a través de PayPal.'
					desc2='Nuestra plataforma, respaldada por tecnología de vanguardia, utiliza .NET 6 en el backend y React en el frontend para proporcionar a nuestros clientes una experiencia de compra fluida y atractiva. Desde administrar productos hasta realizar compras'
				/>

				<Card
					par={false}
					title='CHAMPION CLASH'
					desc='Es juego de cartas sobre fútbol donde se encuentran la emoción y la estrategia! En esta épica confrontación, tendrás que tomar decisiones cruciales al elegir entre dos jugadores de fútbol de las ligas principales.'
					desc2='El objetivo del juego es obtener la maxima puntuación posible, para lograrlo debes elegir cual carta tiene mayor calificación entre las digerentes categorias: "Goles", "Asistencias", "Altura", "Partidos Jugados", "Edad", "Pases".  '
					url='https://valenti-franco.github.io/CHAMPION_CLASH/'
					imageWindow='url("src/assets/556shots_so.png")'
					imagePhone='src/assets/180shots_so.png'
					estado='Finalizado'
					logo='src/assets/ccLogo.png'
					color1='#927842'
					color2='#242424'
				/>
				{/* <Card par={true} />
				<Card par={false} />
				<Card par={true} /> */}
			</div>
		</mai>
	)
}

export default MainSectionProyects
