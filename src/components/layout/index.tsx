import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Footer } from "../footer";
import { Header } from "../header";
import { Navbar } from "../navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    text-primary
    items-center
    w-full
    min-h-screen
    overflow-x-hidden
  `}
`;

const Mains = styled.main`
${tw`
  flex-auto
  text-primary
  w-screen
`}
`;

export default function Layout({
  children,
}: LayoutProps) {
  return (
    <PageContainer>
      <Header />
      <Mains>
        {children}
      </Mains>
      <Footer />
    </PageContainer>
  );
}
