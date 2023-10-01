import React from 'react'
import style from './index.module.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'

const Card = ({ par, title }) => {
	// console.log(par)

	const [hovered, setHovered] = useState(false)

	const handleMouseEnter = () => {
		setHovered(true)
	}

	const handleMouseLeave = () => {
		setHovered(false)
	}
	return (
		<main className={par === false ? style.main : style.main1}>
			{par === false ? (
				<>
					<div
						className={style.images1}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
					>
						<AnimatePresence>
							{hovered && (
								<>
									<motion.img
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										src='src\assets\180shots_so.png'
										alt=''
									/>
									<motion.svg
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										className={style.svg}
										width='100px'
										height='100px'
										viewBox='-6.24 -6.24 36.48 36.48'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										transform='rotate(270)'
									>
										<g
											id='SVGRepo_bgCarrier'
											stroke-width='0'
											transform='translate(1.8000000000000007,1.8000000000000007), scale(0.85)'
										>
											<rect
												x='-6.24'
												y='-6.24'
												width='36.48'
												height='36.48'
												rx='18.24'
												strokewidth='0'
											></rect>
										</g>
										<g
											id='SVGRepo_tracerCarrier'
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke='#f0ff1a'
											stroke-width='0.096'
										></g>
										<g id='SVGRepo_iconCarrier'>
											{' '}
											<path
												d='M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212'
												stroke='#ffffff'
												stroke-width='1.7759999999999998'
												stroke-linecap='round'
											></path>{' '}
											<path
												d='M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373'
												stroke='#ffffff'
												stroke-width='1.7759999999999998'
												stroke-linecap='round'
											></path>{' '}
										</g>
									</motion.svg>
								</>
							)}
						</AnimatePresence>
					</div>
					<div
						style={{ borderRadius: '0 10px 10px 0' }}
						className={style.description}
					>
						<h1 className={style.title}>{title}</h1>
					</div>
				</>
			) : (
				<>
					<div
						style={{ borderRadius: '10px 0px 0px 10px' }}
						className={style.description}
					>
						<h1 className={style.title}>{title}</h1>
					</div>

					<div
						className={style.images}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
					>
						<AnimatePresence>
							{hovered && (
								<>
									<motion.img
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										src='src\assets\180shots_so.png'
										alt=''
									/>

									<motion.svg
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										className={style.svg}
										width='100px'
										height='100px'
										viewBox='-6.24 -6.24 36.48 36.48'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										transform='rotate(270)'
									>
										<g
											id='SVGRepo_bgCarrier'
											stroke-width='0'
											transform='translate(1.8000000000000007,1.8000000000000007), scale(0.85)'
										>
											<rect
												x='-6.24'
												y='-6.24'
												width='36.48'
												height='36.48'
												rx='18.24'
												strokewidth='0'
											></rect>
										</g>
										<g
											id='SVGRepo_tracerCarrier'
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke='#f0ff1a'
											stroke-width='0.096'
										></g>
										<g id='SVGRepo_iconCarrier'>
											{' '}
											<path
												d='M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212'
												stroke='#ffffff'
												stroke-width='1.7759999999999998'
												stroke-linecap='round'
											></path>{' '}
											<path
												d='M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373'
												stroke='#ffffff'
												stroke-width='1.7759999999999998'
												stroke-linecap='round'
											></path>{' '}
										</g>
									</motion.svg>
								</>
							)}
						</AnimatePresence>
					</div>
				</>
			)}
		</main>
	)
}

export default Card
