import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import AdoptionCard from '../AdoptionCard/AdoptionCard';
import AdviceCard from '../AdviceCard/AdviceCard';

import './Main.sass';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { dbAdoption, dbAdvice } from './dbTest';

function Main() {
  const [otherStyle, setOthersStyle] = useState({ condition: false });

  const otherStyleChange = () => {
    setOthersStyle({ condition: !otherStyle.condition });
  };

  return (
    <main className="main">
      <div className="main__bg"></div>
      <section className="container main__wrapper">
        <div className="main__search">
          <input
            id="search-pet"
            type="text"
            className="main__search-pet"
            placeholder="Search pet"
          />
          <input
            id="search-city"
            type="text"
            className="main__search-city"
            placeholder="Search city"
          />
          <img
            src="./icons/navigate/search.png"
            alt="search"
            className="main__search-img"
          />
        </div>
        <div className="main__slogan">
          Найди своего нового друга с
          <span className="main__slogan-sub"> getPet</span>
        </div>
        <div className="main__category">
          <ul>
            <li>
              <NavLink to="/">
                <img src="./icons/animals/dog.svg" alt="dog" />
                <span>Собаки</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <img src="./icons/animals/cat.svg" alt="cat" />
                <span>Коты</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
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
              <NavLink to="/">
                <img src="./icons/animals/rabbit.svg" alt="rabbit" />
                <span>Кролики</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <img src="./icons/animals/lizard.svg" alt="lizard" />
                <span>Ящерицы, змеи</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <img src="./icons/animals/fish.svg" alt="fish" />
                <span>Рыбы</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <img src="./icons/animals/bird.svg" alt="bird" />
                <span>Птицы</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <img src="./icons/animals/bug.svg" alt="bug" />
                <span>Жуки, пауки</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <img src="./icons/animals/cow.svg" alt="cow" />
                <span>Скотный двор</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </section>

      <section className="container adoption">
        <div className="slider">
          <div className="slider__title">Домашние животные которые ищут новый дом</div>
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
            {dbAdoption.map((item) => {
              return (
                <SwiperSlide key={'key' + item.id}>
                  <AdoptionCard
                    id={item.id}
                    name={item.name}
                    image={item.image}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      <section className="container advice">
        <div className="advice__bg"></div>
        <div className="slider">
          <div className="slider__title">Планируете завести домашнее животное?</div>
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
            {dbAdvice.map((item) => {
              return (
                <SwiperSlide key={'key' + item.id}>
                  <AdviceCard
                    id={item.id}
                    title={item.title}
                    content={item.content}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </main>
  );
}

export default Main;