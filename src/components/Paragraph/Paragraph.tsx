import styled from 'styled-components';

const ParagraphStyle = styled.p`
  color: ${props => props.theme.textColor};
  line-height: 1.6rem;
  margin: 0;
  padding: 0;
`;


const Paragraph = ({children, ...props}) => {
    return (
        <ParagraphStyle {...props}>
            {children}
        </ParagraphStyle>
    )
}

export default Paragraph;