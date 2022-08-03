import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Wrapper } from "../wrapper";

const Container = styled.footer`
  ${tw`
  w-full
  bg-primary
  text-white
  flex
  items-end
  h-[200px]
  `};
`;

const CopyR = styled.div`
${tw`
    flex
    justify-center
    pb-[18px]
    select-none
`}
`;

export const Footer: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <CopyR>
                    © TEST, 1022–2022
                </CopyR>
            </Wrapper>
        </Container>
    );
};