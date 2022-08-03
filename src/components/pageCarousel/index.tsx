import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

// Контейнер под картинки

const Item = styled.div`
${tw`
    relative
    select-none
    ml-[15px]
    cursor-pointer
    max-w-[261px]
    max-h-[400px]
    lg:max-w-[360px]
    lg:max-h-[550px]
`}
`;

// Контейнер под маску

const MaskContainer = styled.div<{ bgcr?: boolean }>`
${tw`
    flex justify-center
    absolute
`}
${({ bgcr }) => 
bgcr ? tw`right-0 bottom-0 items-start` : tw`items-center bottom-0 left-0`
}
`;

// Маска под текст

const Mask = styled.div<{ mscr?: boolean }>`
${tw`
    bg-primary
    opacity-50
`}
${({ mscr }) => 
mscr ? tw`lg:w-[160px] lg:h-[550px] w-[120px] h-[400px]` : 
tw`w-[260px] lg:w-[360px] h-[100px] lg:h-[145px]`
}
`;

// Текст на картинках

const Text = styled.p<{ textMask?: boolean }>`
${tw`   
    absolute
    text-white
    font-medium
    font-orchidea text-lg lg:text-xl leading-[26px]
`}
${({ textMask }) => 
textMask ? tw`z-50 p-[48px 9px] lg:p-[48px 0 0 20px] text-center` : 
tw`px-[15px] lg:px-[30px]`
}
`;

export const PageCarousel: React.FC<{
    sliderRef: any;
    onClick?: any;
    nav2: any;
}> = ({sliderRef, onClick, nav2}) => {
    const settings = {
        centerMode: true, // Центрация фокуса
        dots: false,
        arrows: false,
        infinite: true,  // бесконечная прокрутка
        focusOnSelect: true, // Выбранный слайд в фокусе
        swipeToSlide: true, // Передвижение слайдеров мышкой до точки
        speed: 500, // Скорость прокрутки при клике
        autoplay: false, // Автопрокрутка
        slidestoScroll: 1, // Количество переключений слайдов
        initialSlide: 2,
        slidesToShow: 5,
    };
  return (  
        <Slider 
            asNavFor={nav2}
            ref={slider => (sliderRef.current = slider)}
            {...settings}
        >
            <Item onClick={() => onClick(0)}>
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
                        height: '100%',
                    }}
                    formats={["auto", "webp", "avif"]}
                /> 
            </Item>
            <Item onClick={() => onClick(1)}>
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
                        height: '100%',
                    }}
                    formats={["auto", "webp", "avif"]}
                />
            </Item>
            <Item onClick={() => onClick(2)}>
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
                        height: '100%',
                    }}
                    formats={["auto", "webp", "avif"]}
                />
            </Item>
            <Item onClick={() => onClick(3)}>
                <StaticImage 
                    placeholder={"blurred"}
                    src={"../../assets/images/carousel/cat_han.png"} 
                    alt={"cat_han"}
                    quality={100}
                    objectFit={"fill"}
                    style={{
                        width: '100%',
                        height: '100%',

                    }}
                    imgStyle={{
                        width: '100%',
                        height: '100%',
                    }}
                    formats={["auto", "webp", "avif"]}
                />
                <MaskContainer>
                    <Mask /> 
                    <Text>Lorem ipsum dolorsit amel, 
                        consectetur adipiscing elit</Text>
                </MaskContainer>       
            </Item>
            <Item onClick={() => onClick(4)}>
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
                        height: '100%',
                    }}
                    formats={["auto", "webp", "avif"]}
                /> 
                <MaskContainer bgcr>
                    <Mask mscr /> 
                    <Text textMask>Lorem ipsum dolor sit amet</Text>
                </MaskContainer>   
            </Item>
            <Item onClick={() => onClick(5)}>
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
                        height: '100%',
                    }}
                    formats={["auto", "webp", "avif"]}
                />
            </Item>
            <Item onClick={() => onClick(6)}>
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
                        height: '100%',
                    }}
                    formats={["auto", "webp", "avif"]}
                />
            </Item>
            <Item onClick={() => onClick(7)}>
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
                        height: '100%',
                    }}
                    formats={["auto", "webp", "avif"]}
                />
            </Item>
            <Item onClick={() => onClick(8)}>
                <StaticImage 
                    placeholder={"blurred"}
                    src={"../../assets/images/carousel/cat_han.png"} 
                    alt={"cat_han"}
                    quality={100}
                    objectFit={"fill"}
                    style={{
                        width: '100%',
                        height: '100%',

                    }}
                    imgStyle={{
                        width: '100%',
                        height: '100%',
                    }}
                    formats={["auto", "webp", "avif"]}
                />
            </Item>
            <Item onClick={() => onClick(9)}>
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
                        height: '100%',
                    }}
                    formats={["auto", "webp", "avif"]}
                />
            </Item>
        </Slider>
  );
}