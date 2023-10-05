import React, { useRef, useState } from 'react'
import style from './ContacMe.module.css'
import emailjs from '@emailjs/browser'
import { Toaster, toast } from 'sonner'

// ...

function App() {
	return (
		<div>
			<Toaster />
			<button onClick={() => toast('My first toast')}>Give me a toast</button>
		</div>
	)
}
// import { send } from 'vite'

const ContacMe = () => {
	const [error, setError] = useState('')
	const form = useRef()
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	})
	const isEmailValid = email => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return emailRegex.test(email)
	}

	const sendEmail = e => {
		e.preventDefault()

		if (
			!formData.name ||
			!formData.email ||
			!formData.subject ||
			!formData.message
		) {
			setError('Por favor, complete todos los campos.')
			toast.error(error)

			return
		}
		if (!isEmailValid(formData.email)) {
			setError('Por favor, ingrese una dirección de correo electrónico válida.')
			return
		}
		emailjs
			.sendForm(
				'service_uleylub',
				'template_90ncj9i',
				form.current,
				'U9FP06-mnuchhRtY5'
			)
			.then(
				result => {
					setError('')
					toast.success('Email enviado exitosamente')
					// Restablecer los campos del formulario a valores iniciales
					setFormData({
						name: '',
						email: '',
						subject: '',
						message: '',
					})
				},
				error => {
					setError('Error al enviar el correo electrónico')
					toast.error('Error, email no enviado')
				}
			)
	}

	const handleInputChange = e => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value,
		})
	}

	return (
		<main id='contact' className={style.main}>
			<div className={style.container}>
				<h2>Contacto</h2>

				<h3>Contactame</h3>

				<div className={style.containerContact}>
					<ul>
						<li>
							<p>
								<strong>Teléfono</strong>

								<a href='https://w.app/FrancoValenti'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										class='icon icon-tabler icon-tabler-brand-whatsapp'
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
										<path d='M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9'></path>
										<path d='M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1'></path>
									</svg>
									<p>+54 341 595 3323</p>{' '}
									<svg
										xmlns='http://www.w3.org/2000/svg'
										class='icon icon-tabler icon-tabler-external-link'
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
										<path d='M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6'></path>
										<path d='M11 13l9 -9'></path>
										<path d='M15 4h5v5'></path>
									</svg>
								</a>
							</p>
						</li>
						<li>
							<strong>Email</strong>
							<p className={style.email}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									class='icon icon-tabler icon-tabler-mail'
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
									<path d='M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z'></path>
									<path d='M3 7l9 6l9 -6'></path>
								</svg>
								valentifranco23@gmail.com
							</p>{' '}
						</li>
						<li>
							<p>
								<strong>Linkedin:</strong>

								<a href='https://www.linkedin.com/in/franco-valenti-57b643246/'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										class='icon icon-tabler icon-tabler-brand-linkedin'
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
										<path d='M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z'></path>
										<path d='M8 11l0 5'></path>
										<path d='M8 8l0 .01'></path>
										<path d='M12 16l0 -5'></path>
										<path d='M16 16v-3a2 2 0 0 0 -4 0'></path>
									</svg>{' '}
									<p>A traves de Linkedin</p>{' '}
									<svg
										xmlns='http://www.w3.org/2000/svg'
										class='icon icon-tabler icon-tabler-external-link'
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
										<path d='M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6'></path>
										<path d='M11 13l9 -9'></path>
										<path d='M15 4h5v5'></path>
									</svg>
								</a>
							</p>
						</li>
					</ul>
					<section className={style.coantainerForm}>
						<strong>Enviame un correo electronico</strong>
						<form className={style.form} ref={form} onSubmit={sendEmail}>
							<label htmlFor='name'>
								Nombre
								<input
									id='name'
									name='name'
									type='text'
									value={formData.name}
									onChange={handleInputChange}
								/>
							</label>
							<label htmlFor='email'>
								Correo Electrónico
								<input
									id='email'
									name='email'
									type='email'
									value={formData.email}
									onChange={handleInputChange}
								/>
							</label>
							<label htmlFor='subject'>
								Asunto
								<input
									id='subject'
									name='subject'
									type='text'
									value={formData.subject}
									onChange={handleInputChange}
								/>
							</label>
							<label htmlFor='message'>
								Mensaje
								<textarea
									name='message'
									id='message'
									cols='30'
									rows='5'
									value={formData.message}
									onChange={handleInputChange}
								></textarea>
							</label>
							<button type='submit'>Enviar</button>
						</form>
					</section>
				</div>
			</div>
			<Toaster />
		</main>
	)
}

export default ContacMe
