import React from 'react'
import style from './index.module.css'
import MainSectionPresentation from '../MainSection/Presentation.jsx'
import MainSectionProyects from '../MainSection/Proyects.jsx'
const Main = () => {
	return (
		<div className={style.main}>
			<MainSectionPresentation />
			<MainSectionProyects />
		</div>
	)
}

export default Main
