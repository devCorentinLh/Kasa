import './accomodation.scss';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import datas from '../../data/data';
import Header from '../../components/header/Header';
import Slider from '../../components/carousel/Carousel';
import Footer from '../../components/footer/Footer';
import Collapse from '../../components/collapse/Collapse';
import greyStar from '../../assets/grey_star.png';
import redStar from '../../assets/red_star.png';

export default function Accomodation() {
  const [imageSlider, setImageSlider] = useState([]);

  const { id: idAccomodation } = useParams();
  const dataCurrentAccomodation = datas.find((data) => data.id === idAccomodation);

  const navigate = useNavigate();

  useEffect(() => {
    if (!dataCurrentAccomodation) {
      navigate('/NotFound');
    } else {
      setImageSlider(dataCurrentAccomodation.pictures);
    }
  }, [dataCurrentAccomodation, idAccomodation, navigate]);

  const name = dataCurrentAccomodation?.host?.name.split(' ');
  const rating = dataCurrentAccomodation?.rating;
  const description = dataCurrentAccomodation?.description;
  const equipments = dataCurrentAccomodation?.equipments;

  return (
    <>
      <Header />
      <Slider imageSlider={imageSlider} />
      <main className="accomodation">
        <div className="accomodation_content">
          <div className="accomodation_content_infos">
            <h1>{dataCurrentAccomodation?.title}</h1>
            <p>{dataCurrentAccomodation?.location}</p>
            <div>
              {dataCurrentAccomodation?.tags?.map((tag, index) => (
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
                <img src={dataCurrentAccomodation.host.picture} alt="host of this accomodation" />
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
