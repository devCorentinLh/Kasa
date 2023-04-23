import './header.scss'
import Logo from '../../assets/logo.png'
import Navbar from '../navbar/Navbar'

export default function Header() {
	return (
		<header className='header'>
			<h1>
			<a href='/'>
				<img src={Logo} alt="kasa, location d'appartements" />
				</a>
			</h1>
			<Navbar />
		</header>
	)
}
