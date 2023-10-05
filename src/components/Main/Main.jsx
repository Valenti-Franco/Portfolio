import React from 'react'
import style from './index.module.css'
import MainSectionPresentation from '../MainSection/Presentation.jsx'
import MainSectionProyects from '../MainSection/Proyects.jsx'
import AboutMe from '../MainSection/aboutMe'
import ContacMe from '../MainSection/ContacMe'
const Main = () => {
	return (
		<div className={style.main}>
			<MainSectionPresentation />
			<MainSectionProyects />
			<AboutMe />
			<ContacMe />
		</div>
	)
}

export default Main
