import { FunctionComponent } from 'react';
import styled from 'styled-components';

import Heading, { HeadingsTypes } from '../Heading/Heading';

type Properties = {
    backgroundImage?: string;
    headingType?: HeadingsTypes;
    headingText?: string;
};

const Hero: FunctionComponent<Properties> = ({
    backgroundImage,
    headingType,
    headingText
}) => {
    return (
        <HeroSection
            style={{
                backgroundImage: `url(${backgroundImage})`
            }}
        >
            <HeroHeading>
                <Heading
                    color={'white'}
                    underline={false}
                    size={'large'}
                    type={headingType}
                >
                    {headingText}
                </Heading>
            </HeroHeading>
        </HeroSection>
    );
};

const HeroSection = styled.section`
    display: flex;
    width: 100%;
    height: 50vh;
    padding: 1rem 0;
    justify-content: center;
    align-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
    top: 0;
    left: 0;
    z-index: -1;

    &:before {
        content: '';
        display: flex;
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.5);
    }
`;

const HeroHeading = styled.div`
    z-index: 1;
`;

export default Hero;
