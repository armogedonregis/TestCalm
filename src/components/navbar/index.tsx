import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
import { Wrapper } from "../wrapper";

// Навигация

const Nav = styled.nav`
${tw`
    lg:mb-[113px]
    mb-[54px]
`};
`;

const List = styled.ul`
${tw`
    flex
`}
`;

const Item = styled.li`
${tw`
    pr-[32px]
`}
`;


export const Navbar: React.FC<{
    tab1?: any;
    tab2?: any;
    btnTab1?: boolean;
    btnTab2?: boolean;
}> = ({btnTab1, btnTab2, tab1, tab2}) => {
    return (
        <Nav>
            <Wrapper>
                <List>
                    <Item><Button activeBtn={btnTab1} onClick={tab1} theme="nav">lorem</Button></Item>
                    <Item><Button activeBtn={btnTab2} onClick={tab2} theme="nav">ipsum</Button></Item>
                </List>
            </Wrapper>
        </Nav>
    );
};