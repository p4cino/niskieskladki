import styled from 'styled-components';
import classNames from 'classnames';
import { FunctionComponent } from 'react';

type Color = 'black' | 'gray' | 'red' | 'main' | 'text' | 'heading' | 'white';
type Size = 'smallest' | 'small' | 'big';

type Props = {
    color?: Color;
    size?: Size;
    center?: boolean;
};

const Paragraph: FunctionComponent<Props> = ({
    color = 'text',
    size,
    center,
    children,
    ...props
}) => {
    return (
        <ParagraphStyle
            className={classNames(color, size, { center: center })}
            {...props}
        >
            {children}
        </ParagraphStyle>
    );
};

const ParagraphStyle = styled.p`
    color: ${props => props.theme.textColor};
    line-height: 1.6rem;
    margin: 0;
    padding: 0;
    font-size: 1rem;

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
        font-size: 0.8rem;
        line-height: 1.5rem;
    }

    &.center {
        text-align: center;
    }
`;

export default Paragraph;
