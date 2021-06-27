import Image from 'next/image';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import styled from 'styled-components';

import Button from '../../../components/Button/Button';
import Carousel from '../../../components/Carousel/Carousel';
import Hero from '../../../components/Hero';

const RecruitmentHeroSlider = () => {
    const sliderOptions = {
        type: 'carousel',
        // autoplay: 5000,
        gap: 0,
        perView: 1
    };

    return <></>;
};

const SliderHeading = styled.h2`
    padding: 0;
    color: ${properties => properties.theme.whiteColor};
    font-size: 5vw;
    font-weight: normal;
    text-align: left;
    letter-spacing: 1px;
    margin-bottom: ${properties => properties.theme.space[1]};
`;

const SliderDescription = styled.p`
    color: ${properties => properties.theme.whiteColor};
    font-size: 12px;
    font-weight: normal;
    text-align: left;
    letter-spacing: 3px;
    margin: 0 0 ${properties => properties.theme.space[2]};
`;

const SliderButtonWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
`;

const SliderButtonItem = styled.div`
    margin: 0 1rem;
    padding: 1rem;

    &:first-child {
        margin-left: 0;
    }
`;

export default RecruitmentHeroSlider;
