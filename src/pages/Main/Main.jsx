import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getAllPetsThunk } from '../../redux/thunks/getAllPetsThunk';
import { getAllTipsThunk } from '../../redux/thunks/getAllTipsThunk';
import AdoptionCard from './AdoptionCard/AdoptionCard';
import AdviceCard from './AdviceCard/AdviceCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import './Main.sass';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const randomIndexArray = (array, quantityNumbers) => {
  const arrayNumbers = [];
  while (arrayNumbers.length <= quantityNumbers) {
    const randomNumber = Math.floor(Math.random() * array);
    if (!arrayNumbers.includes(randomNumber)) {
      arrayNumbers.push(randomNumber);
    }
  }
  return arrayNumbers;
};
const randomIndex = randomIndexArray(10, 5);

function Main() {
  const [otherStyle, setOthersStyle] = useState({ condition: false });

  const otherStyleChange = () => {
    setOthersStyle({ condition: !otherStyle.condition });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPetsThunk());
    dispatch(getAllTipsThunk());
  }, []);

  const cards = useSelector((state) => state.getAllPets);
  const tips = useSelector((state) => state.getAllTips);

  return (
    <main className="main">
      <div className="main__bg"></div>
      <section className="container main__wrapper">
        <div className="main__search">
          <div className="cards-pet__species cards-pet__input">
            <select>
              <option value="dog">Собаки</option>
              <option value="cat">Кошки</option>
              <option value="small&furry">Мелкие грызуны</option>
              <option value="rabbits">Кролики</option>
              <option value="lizard">Ящерицы, змеи</option>
              <option value="pisces">Рыбы</option>
              <option value="birds">Птицы</option>
              <option value="bugs">Жуки, пауки</option>
              <option value="barnyard">Скотный двор</option>
            </select>
          </div>
          <div className="cards-pet__city cards-pet__input">
            <select>
              <option value="city1">Москва</option>
              <option value="city2">Санкт-Петербург</option>
              <option value="city3">Новосибирск</option>
              <option value="city4">Екатеринбург</option>
              <option value="city5">Казань</option>
              <option value="city6">Нижний Новгород</option>
              <option value="city7">Челябинск</option>
              <option value="city8">Самара</option>
              <option value="city9">Ростов-на-Дону</option>
              <option value="city10">Уфа</option>
              <option value="city11">Омск</option>
              <option value="city12">Красноярск</option>
              <option value="city13">Воронеж</option>
              <option value="city14">Пермь</option>
              <option value="city15">Волгоград</option>
            </select>
          </div>
          <button className="main__search-btn">
            <img
              src="./icons/navigate/search.png"
              alt="search"
              className="main__search-img"
            />
          </button>
        </div>
        <div className="main__slogan">
          Найди своего нового друга с
          <span className="main__slogan-sub"> getPet</span>
        </div>
        <div className="main__category">
          <ul>
            <li>
              <NavLink to="/advertisements/?species=Собаки">
                <img src="./icons/animals/dog.svg" alt="dog" />
                <span>Собаки</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/advertisements/?species=Кошки">
                <img src="./icons/animals/cat.svg" alt="cat" />
                <span>Кошки</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/advertisements/?species=Грызуны">
                <img src="./icons/animals/hamster.svg" alt="hamster" />
                <span>Мелкие грызуны</span>
              </NavLink>
            </li>
            <li>
              <button className="main__category-btn" onClick={otherStyleChange}>
                <img src="./icons/animals/others.svg" alt="hamster" />
                <span>Другие животные</span>
              </button>
            </li>
          </ul>
        </div>

        <div
          className={
            !otherStyle.condition
              ? 'main__other-pet'
              : 'main__other-pet main__other-pet_active'
          }
        >
          <button onClick={otherStyleChange}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <div className="main__other-title">
            Какого домашнего животного вы ищете?
          </div>
          <ul>
            <li>
              <NavLink to="/advertisements/?species=Кролики">
                <img src="./icons/animals/rabbit.svg" alt="rabbit" />
                <span>Кролики</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/advertisements/?species=Ящерицы">
                <img src="./icons/animals/lizard.svg" alt="lizard" />
                <span>Ящерицы, змеи</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/advertisements/?species=Рыбы">
                <img src="./icons/animals/fish.svg" alt="fish" />
                <span>Рыбы</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/advertisements/?species=Птицы">
                <img src="./icons/animals/bird.svg" alt="bird" />
                <span>Птицы</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/advertisements/?species=Насекомые">
                <img src="./icons/animals/bug.svg" alt="bug" />
                <span>Жуки, пауки</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/advertisements/?species=Скотный двор">
                <img src="./icons/animals/cow.svg" alt="cow" />
                <span>Скотный двор</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </section>

      <section className="container adoption">
        <div className="slider">
          <div className="slider__title">
            Домашние животные которые ищут новый дом
          </div>
          <button className="slider__button-prev adoption__button-prev">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="slider__button-next adoption__button-next">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: '.adoption__button-prev',
              nextEl: '.adoption__button-next',
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {cards?.map((card, index) => {
              if (randomIndex.includes(index)) {
                return (
                  <SwiperSlide key={'key' + card.id}>
                    <AdoptionCard
                      id={card.id}
                      name={card.title}
                      img={card.images[0]}
                    />
                  </SwiperSlide>
                );
              }
            })}
          </Swiper>
        </div>
      </section>

      <section className="container advice">
        <div className="advice__bg"></div>
        <div className="slider">
          <div className="slider__title">
            Планируете завести домашнее животное?
          </div>
          <button className="slider__button-prev advice__button-prev">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="slider__button-next advice__button-next">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: '.advice__button-prev',
              nextEl: '.advice__button-next',
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {tips.map((item, index) => {
              if (randomIndex.includes(index)) {
                return (
                  <SwiperSlide key={'key' + item.id}>
                    <AdviceCard
                      id={item.id}
                      title={item.title}
                      content={item.tipText}
                      link={item.webSite}
                    />
                  </SwiperSlide>
                );
              };
            })}
          </Swiper>
        </div>
      </section>
    </main>
  );
}

export default Main;
