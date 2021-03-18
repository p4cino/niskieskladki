import {FunctionComponent} from "react";
import styled from 'styled-components';
import classNames from 'classnames';

const HeadingStyle = styled.h2`
  display: flex;
  width: fit-content;
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

  &.small {
    font-size: 1rem;
  }

  &.underline {
    text-decoration: underline ${props => props.theme.mainColor};
    text-underline-position: under;
  }
`;

type Color = "black" | "gray" | "red" | "main" | "text" | "heading" | "white";
type Size = "small" | "normal" | "medium" | "large";

type Props = {
    size?: Size;
    color?: Color;
    children: any;
    underline?: boolean;
}

const Heading: FunctionComponent<Props> = (
    {
        size,
        color,
        underline = true,
        children,
        ...props
    }) => {
    return (
        <HeadingStyle
            className={classNames(size, {underline: underline}, color)}
            {...props}
        >
            {children}
        </HeadingStyle>
    )
};

export default Heading;