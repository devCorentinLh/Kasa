import './footer.scss'
import logo from '../../assets/logo_footer.png'

export default function Footer() {
	return (
		<footer className='footer'>
			<a href='/Kasa/'>
			<img src={logo} alt="Kasa - agence de location d'appartements entre particuliers" />
			</a>
			<p className='footer_copyright'>© 2020 Kasa. All rights reserved. Codé par Corentin Lh.</p>
		</footer>
	)
}
