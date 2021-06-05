import styled from 'styled-components';

const Button = ({ children }) => {
    return (
        <ButtonItem>
            <ButtonText>{children}</ButtonText>
        </ButtonItem>
    );
};

const ButtonItem = styled.button`
    background-color: rgba(230, 241, 255, 0.6);
    padding: 1.5rem 1rem;
    border: none;
    cursor: pointer;
    min-width: 150px;
`;

const ButtonText = styled.span`
    width: 100%;
    font-weight: 500;
    font-size: 12px;
    text-transform: uppercase;
    text-align: center;
`;

export default Button;
