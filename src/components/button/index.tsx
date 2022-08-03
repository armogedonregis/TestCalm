import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

// Кнопки

// Кнопка звонка

const ButtonForPhone = styled.a<{ phones?: boolean }>`
${({ phones })=>
phones ? tw`lg:block display[none] lg:text-white lg:font-manrope 
lg:font-medium lg:text-2xl` : tw`lg:display[none] block`
}
`;

// Кнопка логотипа

const ButtonForLogo = styled(Link)`
`;

// Кнопка навигации

const ButtonForNav = styled.button<{ activeBtn?: boolean }>`
${tw`
    text-primary
    text-lg lg:text-3xl
    font-manrope
    font-bold
    uppercase
`}
${({ activeBtn }) => 
activeBtn && tw`border-b-[3px] border-primary`
}
`;

export const Button: React.FC<{
  children?: React.ReactNode;
  className?: string;
  theme?: string;
  href?: string;
  to?: string;
  phones?: boolean;
  onClick?: any;
  activeBtn?: boolean;
}> = ({ children, className, phones, onClick, activeBtn,
  href, theme = "phone" }) => {
  if (theme === "logo") {
    return <ButtonForLogo to="/" className={className}>{children}</ButtonForLogo>;
  }
  if (theme === "nav") {
    return <ButtonForNav activeBtn={activeBtn} onClick={onClick} className={className}>{children}</ButtonForNav>;
  }
  return <ButtonForPhone phones={phones} className={className} href={href}>{children}</ButtonForPhone>;
};
