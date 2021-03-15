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

  &.small {
    font-size: 1rem;
  }

  &.underline {
    text-decoration: underline ${props => props.theme.mainColor};
    text-underline-position: under;
  }
`;

type Size = "small" | "normal" | "medium" | "large";

type Props = {
    size?: Size;
    children: any;
    underline?: boolean;
}

const Heading: FunctionComponent<Props> = (
    {
        size,
        underline = true,
        children,
        ...props
    }) => {
    return (
        <HeadingStyle
            className={classNames(size, {underline: underline})}
            {...props}
        >
            {children}
        </HeadingStyle>
    )
};

export default Heading;