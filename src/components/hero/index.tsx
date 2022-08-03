import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Wrapper } from "../wrapper";
import { StaticImage } from "gatsby-plugin-image";

// Hero

const Container = styled.section<{ active?: boolean }>`
${({ active }) =>
active ? tw`block` : tw`display[none]`
}
`;

// Заголовок

const Title = styled.h1`
${tw`
    font-orchidea
    font-medium
    text-4xl
    lg:text-6xl
    uppercase
    mb-[30px]
    lg:mb-[70px]
`}
`;

// Выделение текста в Title

export const Br = styled.span`
${tw`
    font-orchidea
    font-medium
    lowercase
    italic
`}
`;

// Статья мобильный

const PostMobile = styled.div<{ two?: boolean }>`
${tw`
    lg:display[none]
    flex flex-col justify-center
`}
${({ two }) =>
two ? tw`mb-[80px]` : tw`mb-[60px]` 
}
`;

// Статья с картинкой desctop

const PostContainer = styled.div<{ one?: boolean }>`
${tw`display[none]`}
${({one}) =>
one ? tw`lg:flex lg:justify-between lg:items-center mb-[222px]` : 
tw`lg:flex lg:mb-[112px]`
}
`;

// Обёртка

const Content = styled.div`
${tw`
    flex
    flex-2
`}
`;

// if второй или первой статьи

const TextContainer = styled.div<{ two?: boolean }>`
${({ two }) => 
two ? tw`w-5/12 pl-10`: tw`w-1/2 pr-6`
}
`;

// Заголовок статьи

const TextTitle = styled.h2`
${tw`
    font-orchidea
    font-medium
    lg:text-5xl
    text-xl
    mb-[25px]
`}
`;

//  Параграф статьи

const Paragraph = styled.p<{ marg?: boolean }>`
${tw`
    font-manrope
    font-medium
    text-sm
    lg:text-lgS
`}
${({ marg }) => 
marg ? tw`mb-[60px]` : tw`mb-2`
}
`;

const ImageCont = styled.div`
${tw`
    w-screen
    md:max-w-screen-lg
    md:h-screen
    h-[370px]
    flex justify-center
`}
`;


export const Hero: React.FC<{
    active: boolean;
}> = ({active}) => {
    return (
        <Container active={active} >
            <Wrapper>
                <Title>Lorem ipsum dolor <Br>sit</Br> amet</Title>
            </Wrapper>
            <PostMobile>
                <Wrapper>
                    <TextTitle>Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit</TextTitle>
                    <Paragraph>Incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex 
                        ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur.</Paragraph>
                    <Paragraph marg>
                        Excepteur sint 
                        occaecat cupidatat non proident, sunt in culpa 
                        qui officia deserunt mollit anim id est laborum/ 
                        Incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat. Duis aute irure dolor 
                        in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur. Excepteur sint 
                        occaecat cupidatat.
                    </Paragraph>
                </Wrapper>
                <StaticImage 
                    placeholder={"blurred"}
                    src={"../../assets/images/julia_mob.png"} 
                    alt={"Julia"}
                    style={{
                        height: '360px',
                    }}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                />
            </PostMobile>
            <PostMobile two>
                <Wrapper>
                    <TextTitle>Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit</TextTitle>
                    <Paragraph>Incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore eu fugiat 
                        nulla pariatur. 
                    </Paragraph>
                    <Paragraph marg>
                        Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui 
                        officia deserunt mollit anim id est laborum
                    </Paragraph>
                </Wrapper>
                <StaticImage 
                    placeholder={"blurred"}
                    src={"../../assets/images/taisiia.png"} 
                    alt={"taisiia"}
                    style={{
                        height: '360px',
                    }}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                />
            </PostMobile>
            <PostContainer>
                <Content>
                    <Wrapper>
                        <TextContainer>
                            <TextTitle>Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit</TextTitle>
                            <Paragraph>Incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex 
                                ea commodo consequat. Duis aute irure dolor in 
                                reprehenderit in voluptate velit esse cillum 
                                dolore eu fugiat nulla pariatur.</Paragraph>
                            <Paragraph>
                                Excepteur sint 
                                occaecat cupidatat non proident, sunt in culpa 
                                qui officia deserunt mollit anim id est laborum/ 
                                Incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip 
                                ex ea commodo consequat. Duis aute irure dolor 
                                in reprehenderit in voluptate velit esse cillum 
                                dolore eu fugiat nulla pariatur. Excepteur sint 
                                occaecat cupidatat.
                            </Paragraph>
                        </TextContainer>
                    </Wrapper>
                </Content>
                <StaticImage 
                    placeholder={"blurred"}
                    src={"../../assets/images/julia.png"} 
                    alt={"Julia"}
                    objectFit={"fill"}
                    imgStyle={{
                        maxWidth: '100%',
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        top: '0',
                        left: '0',
                    }}
                    style={{
                        height: '480px',
                        width: '860px',
                        position: 'relative',
                        transform: 'translate(-100%, 0px)',
                        flex: '0 0 calc(((100vw - 40px) * 0.42) + 20px)',
                    }}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                />
            </PostContainer>
            <Wrapper>
                <PostContainer one>
                    <StaticImage 
                        placeholder={"blurred"}
                        src={"../../assets/images/taisiia.png"} 
                        alt={"taisiia"}
                        quality={100}
                        formats={["auto", "webp", "avif"]}
                    />
                    <TextContainer two>
                        <TextTitle>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit</TextTitle>
                        <Paragraph>Incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis 
                            nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in 
                            voluptate velit esse cillum dolore eu fugiat 
                            nulla pariatur. 
                        </Paragraph>
                        <Paragraph>
                            Excepteur sint occaecat 
                            cupidatat non proident, sunt in culpa qui 
                            officia deserunt mollit anim id est laborum
                        </Paragraph>
                    </TextContainer>
                </PostContainer>
            </Wrapper>
        </Container>
    );
};