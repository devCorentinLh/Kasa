import './home.scss'
import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import Gallery from '../../components/gallery/Gallery'
import Footer from '../../components/footer/Footer'
import { useEffect } from 'react';


export default function Home() {
useEffect(() => {
    fetch('../logements.json')
    .then((response) => response.json())
    .catch((error) =>console.error(error));
   },);

	return (
		<div className='home'>
			<Header />
			<Banner />
			<Gallery/>
			<Footer />
		</div>
	)
}
