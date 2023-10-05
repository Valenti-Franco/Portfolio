import React from 'react'
import style from './AboutMe.module.css'

const AboutMe = () => {
	return (
		<main id='about' className={style.main}>
			<div className={style.container}>
				<section className={style.containerInfo}>
					<h2>SOBRE MI</h2>

					<div>
						<h3>Información Personal</h3>
						<div className={style.containerPersonal}>
							<section className={style.section + ' ' + style.Barritas}>
								<p>
									<strong>Nombre Completo:</strong> Franco Ignacio Valenti
								</p>
								<p>
									<strong>Email:</strong> valentifranco23@gmail.com
								</p>
								<p>
									<strong>Numero de Teléfono:</strong> +54 341 595 3323
								</p>

								<p>
									<strong>GitHub:</strong>
									<a href='https://github.com/Valenti-Franco'>
										{' '}
										Mis Proyectos en GitHub
									</a>
								</p>

								<img src='src/assets/newells.png' alt='' />
							</section>

							<section className={style.section}>
								<p>
									<strong>Nacionalidad:</strong> Argentino{' '}
								</p>
								<p>
									<strong>Mapa:</strong> Rosario{' '}
								</p>
								<strong>
									<iframe
										src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107134.75304368988!2d-60.77904151424174!3d-32.95203820068085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b6539335d7d75b%3A0xec4086e90258a557!2sRosario%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1696290619863!5m2!1ses-419!2sar'
										style={{ border: '0' }}
										allowFullScreen=''
										loading='lazy'
										referrerPolicy='no-referrer-when-downgrade'
										className={style.map} // Agrega la propiedad className aquí
									></iframe>
								</strong>
								<p>
									<strong> Localidad:</strong>Zona Sur, Rosario, Santa Fe{' '}
								</p>
							</section>
						</div>
					</div>
				</section>
				<section className={style.containerInfo}>
					<h3>Objetivos</h3>
					<div className={style.containerObj}>
						<section>
							<p className={style.objetivo}>
								Soy un apasionado por el <strong>aprendizaje</strong> y el
								<strong> crecimiento constante</strong>. Mi enfoque en el
								<strong> trabajo en equipo</strong> y mi{' '}
								<strong> habilidad</strong> para abordar desafíos de manera
								creativa me han permitido contribuir de manera significativa en
								proyectos interesantes.
							</p>
							<p className={style.objetivo}>
								A pesar de mi falta de experiencia laboral, mi entusiasmo y
								disposición para colaborar me han llevado a buscar oportunidades
								donde puedo aplicar mis <strong> habilidades</strong> y{' '}
								<strong> aprender de forma activa</strong>.
							</p>
						</section>
						<section>
							<img src='src\assets\4433150.png' alt='' />
						</section>
					</div>
				</section>
			</div>
		</main>
	)
}

export default AboutMe
