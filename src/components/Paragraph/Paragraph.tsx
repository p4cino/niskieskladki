import classNames from 'classnames';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

type Color = 'black' | 'gray' | 'red' | 'main' | 'text' | 'heading' | 'white';
type Size = 'smallest' | 'small' | 'big';

type Properties = {
    color?: Color;
    size?: Size;
    center?: boolean;
};

const Paragraph: FunctionComponent<Properties> = ({
    color = 'text',
    size,
    center,
    children,
    ...properties
}) => {
    return (
        <ParagraphStyle
            className={classNames(color, size, { center: center })}
            {...properties}
        >
            {children}
        </ParagraphStyle>
    );
};

const ParagraphStyle = styled.p`
    color: ${properties => properties.theme.textColor};
    line-height: 1.6rem;
    margin: 0;
    padding: 0;
    font-size: 1rem;

    &.black {
        color: ${properties => properties.theme.blackColor};
    }

    &.gray {
        color: ${properties => properties.theme.grayColor};
    }

    &.red {
        color: ${properties => properties.theme.redColor};
    }

    &.main {
        color: ${properties => properties.theme.mainColor};
    }

    &.text {
        color: ${properties => properties.theme.textColor};
    }

    &.heading {
        color: ${properties => properties.theme.headingColor};
    }

    &.white {
        color: ${properties => properties.theme.whiteColor};
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
