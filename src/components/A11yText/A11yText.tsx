import { FunctionComponent } from 'react';
import styled from 'styled-components';

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

type Props = {
    tag?: 'p' | 'span';
}

const A11yText: FunctionComponent<Props> = ({ tag = 'span', children, ...props }) => {

    return (
        <A11Style as={tag} {...props}>
            {children}
        </A11Style>
    );
};

export default A11yText;