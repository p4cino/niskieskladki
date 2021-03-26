import {FunctionComponent} from "react";
import styled from 'styled-components';
import classNames from 'classnames';

const HeadingStyle = styled.h2`
  display: flex;
  width: fit-content;
  align-items: center;
  color: ${props => props.theme.headingColor};
  text-transform: uppercase;
  margin: 0;
  padding: 0;
  font-size: 1.5rem;

  &.black {
    color: ${props => props.theme.blackColor};
  }

  &.gray {
    color: ${props => props.theme.grayColor};
  }

  &.red {
    color: ${props => props.theme.redColor};
  }

  &.main {
    color: ${props => props.theme.mainColor};
  }

  &.text {
    color: ${props => props.theme.textColor};
  }

  &.heading {
    color: ${props => props.theme.headingColor};
  }

  &.white {
    color: ${props => props.theme.whiteColor};
  }

  &.large {
    font-size: 3rem;
  }

  &.small {
    font-size: 1rem;
  }
  
  &.smallest {
    font-size: 0.75rem;
    line-height: 1.5rem;
  }

  &.underline {
    text-decoration: underline ${props => props.theme.mainColor};
    text-underline-position: under;
  }
`;

type Color = "black" | "gray" | "red" | "main" | "text" | "heading" | "white";
type Size = "smallest" | "small" | "normal" | "medium" | "large";
type Type = "h1" | "h2" | "h3";

type Props = {
    size?: Size;
    color?: Color;
    children: any;
    underline?: boolean;
    type?: Type;
}

const Heading: FunctionComponent<Props> = (
    {
        size,
        color,
        underline = true,
        type,
        children,
        ...props
    }) => {
    return (
        <HeadingStyle as={type}
                      className={classNames(size, {underline: underline}, color)}
                      {...props}
        >
            {children}
        </HeadingStyle>
    )
};

export default Heading;