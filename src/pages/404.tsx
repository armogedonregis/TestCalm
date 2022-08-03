import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Wrapper } from '../components/wrapper';

const Container = styled.div`
${tw`
    w-screen text-left h-screen flex
`}
`;

const Content = styled.div`
${tw`
    flex flex-col items-center
`}
`;

const Title = styled.h1`
${tw`
    text-white
    mb-40
`}
`;

const Text = styled.p`
${tw`
    text-white
    mb-5
`}
`;

const Btn = styled(Link)`
${tw`
    text-white
    underline hover:no-underline
`}
`;

export default function NotFound() {
    return (
        <Container>
            <Wrapper>
                <Content>
                    <Title>404</Title>
                    <Text>К сожалению, такой страницы нет</Text>
                    <Btn to={'/'}>Перейти на главную</Btn>
                </Content>
            </Wrapper>
        </Container>
    );
  }
  