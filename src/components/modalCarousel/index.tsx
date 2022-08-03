import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Left from '../../assets/icons/leftWhite.svg';
import Right from '../../assets/icons/rightWhite.svg';

// Контейнер под картинки

const Item = styled.div`
${tw`
    relative
    xl:min-w-[1300px]
    xl:h-[789px]
    min-w-[375px]
    h-[550px]
`}
`;

// Текст под картинкой 

const Text = styled.p<{ two?: boolean; }>`
${tw`
    font-manrope
    text-lgS
    text-white
    display[none] lg:block
`}
${({ two }) => 
two ? tw`pt-2` : tw`pt-[25px]`
}
`;

// Контейнер для кнопок

const IconContainer = styled.div`
${tw`
    absolute
    flex
    items-center justify-between
    lg:bottom-[6.5rem]
    bottom-0
    right-0
    bg-primary
    w-[135px]
    h-[70px]
`}
`;

// Иконка

const Icon = styled.div`
${tw`
    px-[27px]
`}
`;

export const ModalCarousel: React.FC<{
    sliderRef2: any;
    nav1: any;
    slideIndex: any;
}> = ({sliderRef2, nav1, slideIndex}) => {
    const settings = {
        centerMode: true, // Центрация фокуса
        className: "center",
        centerPadding: "60px",
        dots: false, // Точки
        arrows: false, // Дефолтные стрелки
        infinite: true,  // бесконечная прокрутка
        focusOnSelect: true, // Выбранный слайд в фокусе
        swipeToSlide: true, // Передвижение слайдеров мышкой до точки
        speed: 500, // Скорость прокрутки при клике
        autoplay: false, // Автопрокрутка
        slidesToShow: 1, // Количество показанных слайдов
        slidestoScroll: 1, // Количество переключений слайдов
        initialSlide: slideIndex, // Изначальный слайд присваивается из стейта
    };

    // Функции переключения картинок

    const next = () => {
        sliderRef2.current.slickNext();
    };

    const previous = () => {
        sliderRef2.current.slickPrev();
    };
  return (  
    <>
        <Slider 
            asNavFor={nav1}
            ref={slider => (sliderRef2.current = slider)}
            {...settings}
        >
            <Item>
                <StaticImage 
                    placeholder={"blurred"}
                    src={"../../assets/images/carousel/jasmin.png"} 
                    alt={"jasmin"}
                    quality={100}
                    objectFit={"fill"}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    imgStyle={{
                        width: '100%',
                        height: '100%'
                    }}
                    formats={["auto", "webp", "avif"]}
                />
            </Item>
            <Item>
                <StaticImage 
                    placeholder={"blurred"}
                    src={"../../assets/images/carousel/angelica.png"} 
                    alt={"angelica"}
                    quality={100}
                    objectFit={"fill"}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    imgStyle={{
                        width: '100%',
                        height: '100%'
                    }}
                    formats={["auto", "webp", "avif"]}
                />
            </Item>
            <Item>
                <StaticImage 
                    placeholder={"blurred"}
                    src={"../../assets/images/carousel/joeyy.png"} 
                    alt={"joeyy"}
                    quality={100}
                    objectFit={"fill"}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    imgStyle={{
                        width: '100%',
                        height: '100%'
                    }}
                    formats={["auto", "webp", "avif"]}
                />
            </Item>
            <Item>
                <StaticImage 
                    placeholder={"blurred"}
                    src={"../../assets/images/carousel/cat-han-BJ3grTerqY4-unsplash 1.png"} 
                    alt={"cat_han"}
                    quality={100}
                    objectFit={"fill"}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    imgStyle={{
                        width: '100%',
                        height: '100%'
                    }}
                    formats={["auto", "webp", "avif"]}
                />
                <Text>
                    Incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu fugiat 
                    nulla pariatur.</Text>
                    <Text two> Excepteur sint occaecat cupidatat 
                    non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum
                </Text>
            </Item>
            <Item>
                <StaticImage 
                    placeholder={"blurred"}
                    src={"../../assets/images/carousel/andres.png"} 
                    alt={"andres"}
                    quality={100}
                    objectFit={"fill"}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    imgStyle={{
                        width: '100%',
                        height: '100%'
                    }}
                    formats={["auto", "webp", "avif"]}
                />  
                <Text>
                    Lorem ipsum dolor sit amet
                </Text>
            </Item>
            <Item>
                <StaticImage 
                    placeholder={"blurred"}
                    src={"../../assets/images/carousel/jasmin.png"} 
                    alt={"jasmin"}
                    quality={100}
                    objectFit={"fill"}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    imgStyle={{
                        width: '100%',
                        height: '100%'
                    }}
                    formats={["auto", "webp", "avif"]}
                />
            </Item>
            <Item>
                <StaticImage 
                    placeholder={"blurred"}
                    src={"../../assets/images/carousel/angelica.png"} 
                    alt={"angelica"}
                    quality={100}
                    objectFit={"fill"}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    imgStyle={{
                        width: '100%',
                        height: '100%'
                    }}
                    formats={["auto", "webp", "avif"]}
                />
            </Item>
            <Item>
                <StaticImage 
                    placeholder={"blurred"}
                    src={"../../assets/images/carousel/joeyy.png"} 
                    alt={"joeyy"}
                    quality={100}
                    objectFit={"fill"}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    imgStyle={{
                        width: '100%',
                        height: '100%'
                    }}
                    formats={["auto", "webp", "avif"]}
                />
            </Item>
            <Item>
                <StaticImage 
                    placeholder={"blurred"}
                    src={"../../assets/images/carousel/cat-han-BJ3grTerqY4-unsplash 1.png"} 
                    alt={"cat_han"}
                    quality={100}
                    objectFit={"fill"}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    imgStyle={{
                        width: '100%',
                        height: '100%'
                    }}
                    formats={["auto", "webp", "avif"]}
                />
            </Item>
            <Item>
                <StaticImage 
                    placeholder={"blurred"}
                    src={"../../assets/images/carousel/andres.png"} 
                    alt={"andres"}
                    quality={100}
                    objectFit={"fill"}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    imgStyle={{
                        width: '100%',
                        height: '100%'
                    }}
                    formats={["auto", "webp", "avif"]}
                />
            </Item>
        </Slider>
        <IconContainer>
            <Icon>
                <Left className="cursor-pointer" onClick={previous} />
            </Icon>
            <Icon>
                <Right className="cursor-pointer" onClick={next} />
            </Icon>
        </IconContainer>
    </>
  );
}