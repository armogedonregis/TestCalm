import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import "./index.css";
import { Br } from '../hero';
import Left from '../../assets/icons/left.svg';
import Right from '../../assets/icons/right.svg';
import { Wrapper } from '../wrapper';
import { PageCarousel } from '../pageCarousel';
import { ModalCarousel } from '../modalCarousel';
import Close from '../../assets/icons/closeIcon.svg';

// Контейнер для таба 2

const Container = styled.section<{ active?: boolean }>`
${({ active }) =>
active ? tw`flex flex-col items-center` : tw`display[none]`
}
`;

// Заголовок

const Title = styled.h1`
${tw`
    lg:text-center
    text-left
    font-orchidea
    font-medium
    uppercase
    text-4xl
    lg:text-6xl
    mb-[30px]
    lg:mb-[70px]
`}
`;

// Контейнер для карусели

const SliderContainer = styled.div`
${tw`
    max-w-[1920px]
    mb-[70px]
    relative
`}
`;

// Контейнер для кнопок

const IconContainer = styled.div<{ iconClose?: boolean; }>`
${({ iconClose }) => 
iconClose ? tw`fixed top-[25px] right-[25px] cursor-pointer` : 
tw`display[none] lg:flex justify-between w-[206px] mb-[113px]`
}
`;

// Иконка

const Icon = styled.div`
${tw`
    cursor-pointer
    flex justify-between
`}
`;

// Маска под картинки

const MaskImg = styled.div<{ leftImg?: boolean }>`
background: linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0.05) 100%);
${({ leftImg }) =>
leftImg && `transform: matrix(-1, 0, 0, 1, 0, 0);`
}
${({ leftImg }) => 
leftImg ? tw`bottom-0 xl:w-[375px] xl:left-[0px]
lg:left-[19.5rem] w-[292px] lg:w-[470px] left-[33.5rem]` : 
tw`bottom-0 right-[33.5rem] xl:w-[395px] xl:right-[0px]
lg:right-[19.5rem] lg:w-[470px] w-[294px]`
}
${tw`  
    z-50
    absolute
    h-[400px]
    lg:h-[551px]
    pointer-events-none
`}
`;

export const Carousel: React.FC<{
    active?: boolean;
}> = ({active}) => {

    // Рефы на слайдеры

    const sliderRef1 = useRef<any>();
    const sliderRef2 = useRef<any>();

    // Синхронизация слайдеров

    const [slide, setSlide] = useState({
        nav1: null,
        nav2: null
    });

    useEffect(() => {
        setSlide({
            nav1: sliderRef1.current,
            nav2: sliderRef2.current
        })
    }, []);

    
    const { nav1, nav2 } = slide;

    // Функции переключения слайдов основного слайдера

    const next = () => {
        sliderRef1.current.slickNext();
      }
      const previous = () => {
        sliderRef1.current.slickPrev();
      }

      // Открытие модального окна

      const [open, setOpen] = useState(false);

      // Открытие слайда в полноэкранном режиме

      const [slideIndex, setSlideIndex] = useState<Number>(null);

  const onOpenModal = (id) => {
    setSlideIndex(id);
    setOpen(true);
};
const onCloseModal = () => setOpen(false);

  return (  
    <Container active={active}>
        <Wrapper>
            <Title>
                Lorem ipsum dolor <Br>sit</Br> amet
            </Title>
        </Wrapper>
        <SliderContainer>
            <MaskImg leftImg />
            <PageCarousel 
                nav2={nav2}
                sliderRef={sliderRef1} 
                onClick={onOpenModal}
            />
            <MaskImg />
        </SliderContainer>
        <Modal 
            open={open}
            onClose={onCloseModal}
            center
            showCloseIcon={false}
            classNames={{
            overlay: 'customOverlay',
            modal: 'customModal',
            }}
        >
            <ModalCarousel 
                slideIndex={slideIndex}
                nav1={nav1}
                sliderRef2={sliderRef2} 
                />
            <IconContainer onClick={onCloseModal} iconClose>
                <Close />
            </IconContainer>
        </Modal>
        <IconContainer>
            <Icon>
                <Left onClick={previous} />
            </Icon>
            <Icon>
                <Right onClick={next} />
            </Icon>
        </IconContainer>
    </Container>
  );
}