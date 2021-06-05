import { useState, useEffect, cloneElement } from 'react';
import Glide from '@glidejs/glide';
import styled from 'styled-components';
import classNames from 'classnames';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import A11yText from '../A11yText/A11yText';

const ArticleCarousel = ({ element = 'glide', options, children }) => {
    const [slider] = useState(new Glide(`.${element}`, options));
    useEffect(() => {
        slider.mount();
        slider.on('run.before', event => {
            const scrollSteps = options.perView;
            event.steps = event.direction === '>' ? -scrollSteps : scrollSteps;
        });
        return () => slider.destroy();
    }, []);

    return (
        <GlideBox className={classNames(element)}>
            <div className="glide__track" data-glide-el="track">
                <ul
                    className="glide__slides"
                    style={{
                        display: 'flex',
                        margin: '0 auto',
                        padding: '0',
                        cursor: 'pointer'
                    }}
                >
                    {children.map((slide, index) => {
                        return cloneElement(slide, {
                            key: index,
                            className: `${slide.props.className} glide__slide`
                        });
                    })}
                </ul>
            </div>
            <Arrows className="glide__arrows" data-glide-el="controls">
                <Arrow
                    className="glide__arrow glide__arrow--left"
                    data-glide-dir="<"
                >
                    <FiChevronLeft />
                    <A11yText>{`Poprzedni slajd`}</A11yText>
                </Arrow>
                <Arrow
                    className="glide__arrow glide__arrow--right"
                    data-glide-dir=">"
                >
                    <FiChevronRight />
                    <A11yText>{`Poprzedni slajd`}</A11yText>
                </Arrow>
            </Arrows>
        </GlideBox>
    );
};

const GlideBox = styled.section`
    position: relative;
    overflow-x: hidden;
    user-select: none;
    max-width: 100vw;
`;

const Arrows = styled.div`
    position: absolute;
    width: 100%;
    top: 0;
    transform: translateY(-50%);
`;

const Arrow = styled.button`
    position: absolute;
    border: none;
    cursor: pointer;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.blackColor};
    color: ${props => props.theme.whiteColor};
    width: 2rem;
    height: 2rem;

    &.glide__arrow--left {
        left: calc(50% + 1rem);
    }

    &.glide__arrow--right {
        left: calc(50% + 4rem);
    }
`;

export default ArticleCarousel;
