import { FunctionComponent } from 'react';
import styled from 'styled-components';

type Properties = { tag?: 'p' | 'span' };

const A11yText: FunctionComponent<Properties> = ({
    tag = 'span',
    children,
    ...properties
}) => {
    return (
        <A11Style as={tag} {...properties}>
            {children}
        </A11Style>
    );
};

const A11Style = styled.span`
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
`;

export default A11yText;
