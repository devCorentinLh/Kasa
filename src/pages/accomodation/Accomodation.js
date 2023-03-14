import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import Slider from '../../components/carousel/Carousel';
import Footer from '../../components/footer/Footer';
import Collapse from '../../components/collapse/Collapse';
import greyStar from '../../assets/grey_star.png';
import redStar from '../../assets/red_star.png';

export default function Accomodation() {
  const [data, setData] = useState({});
  const [imageSlider, setImageSlider] = useState([]);

  const { id: idAccomodation } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('../public/data/data.json');
        const jsonData = await response.json();
        const currentAccomodation = jsonData.find((data) => data.id === idAccomodation);
        if (!currentAccomodation) {
          navigate('/NotFound');
        } else {
          setData(currentAccomodation);
          setImageSlider(currentAccomodation.pictures);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [idAccomodation, navigate]);

  const name = data?.host?.name?.split(' ');
  const rating = data?.rating;
  const description = data?.description;
  const equipments = data?.equipments;

  return (
    <>
      <Header />
      <Slider imageSlider={imageSlider} />
      <main className="accomodation">
        <div className="accomodation_content">
          <div className="accomodation_content_infos">
            <h1>{data?.title}</h1>
            <p>{data?.location}</p>
            <div>
              {data?.tags?.map((tag, index) => (
                <button key={index}>{tag}</button>
              ))}
            </div>
          </div>
          <div className="accomodation_content_host">
            {name && (
              <div>
                <div className="accomodation_content_host_name">
                  <span>{name[0]}</span>
                  <span>{name[1]}</span>
                </div>
                <img src={data.host?.picture} alt="host of this accomodation" />
              </div>
            )}

            <div className="accomodation_content_host_stars">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return <img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />;
              })}
            </div>
          </div>
        </div>
        <div className="accomodation_collapse">
          <div className="accomodation_collapse_item">
            <Collapse title={'Description'} content={description} />
          </div>
          <div className="accomodation_collapse_item">
            <Collapse title={'Équipements'} content={equipments} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
