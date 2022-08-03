import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Wrapper } from "../wrapper";
import Logo from "../../assets/icons/logo.svg";
import Phone from "../../assets/icons/phone.svg";
import { Button } from "../button";

// Шапка

const Head = styled.header`
background: rgb(70,67,65);
background: linear-gradient(0deg, rgba(70,67,65,1) 0%, rgba(1,1,1,1) 100%);
  ${tw`
  w-full
  py-[20px]
  mb-[82px]
  `};
`;

// Контейнер

const LogoContainer = styled.div`
${tw`
  flex justify-between items-center
`}
`;

export const Header: React.FC = () => {
    return (
        <Head>
          <Wrapper>
            <LogoContainer>
              <Button theme="logo"><Logo /></Button>
              <Button href="tel:+74954954954" theme="phone"><Phone /></Button>
              <Button phones href="tel:+74954954954" theme="phone">+7 (495) 495-49-54</Button>
            </LogoContainer>
          </Wrapper>
        </Head>
    );
};