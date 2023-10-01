import React from 'react'
import style from './proyects.module.css'
import Card from '../Card/Card'

function MainSectionProyects() {
	return (
		<main className={style.main}>
			<h2>MIS PROYECTOS</h2>
			<div className={style.container}>
				<Card par={true} title='CHAMPION CLASH' />
				<Card par={false} title='NAVAJAFINA' />
				<Card par={true} />
				<Card par={false} />
				<Card par={true} />
			</div>
		</main>
	)
}

export default MainSectionProyects
