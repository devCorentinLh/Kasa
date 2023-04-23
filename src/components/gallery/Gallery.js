import './gallery.scss'
import Card from '../card/Card'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Gallery() {

    const [accommodations, setAccommodations] = useState([])
    const navigate = useNavigate()

useEffect(() => {
    fetch('/Kasa/logements.json')
    .then((response) => response.json())
    .then((data) => {setAccommodations(data);
         }).catch((error) =>{
            console.error(error)
            navigate('/notFound')
        });
   },[navigate]);
    return (
        <main className='home_gallery'>
            {accommodations && accommodations.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </main>
    )
}
