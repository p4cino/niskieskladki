import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { GoThreeBars, GoX } from 'react-icons/go';
import { media } from 'styled-bootstrap-grid';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import styled from 'styled-components';

const Navbar = () => {
    let listener = null;
    const [scrollState, setScrollState] = useState(false);
    const [showMenu, setMenu] = useState(false);

    useEffect(() => {
        listener = document.addEventListener('scroll', listener => {
            const scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 70) {
                setScrollState(true);
            } else {
                setScrollState(false);
            }
        });
        document.body.style.overflow = showMenu ? 'hidden' : 'unset';
        return () => {
            document.removeEventListener('scroll', listener);
        };
    }, [scrollState, showMenu]);

    return (
        <Header className={classNames({ scrolled: scrollState })}>
            <Container>
                <Row>
                    <Col col xl="2" lg="2" md="2" sm="2" xs="6">
                        <Logo>
                            <Link href="/">
                                <a>
                                    {scrollState && (
                                        <Image
                                            src="/images/logo.svg"
                                            alt="Niskie Składki Logo"
                                            layout="fill"
                                        />
                                    )}
                                    {!scrollState && (
                                        <Image
                                            src="/images/logo-light.svg"
                                            alt="Niskie Składki Logo"
                                            layout="fill"
                                        />
                                    )}
                                </a>
                            </Link>
                        </Logo>
                    </Col>
                    <Col col xl="10" lg="10" md="12" sm="10" xs="12">
                        <Nav
                            role="navigation"
                            aria-label="Nawigacja"
                            className={classNames({
                                activeMenu: false,
                                show: showMenu
                            })}
                        >
                            <List>
                                {/*<ListItem>*/}
                                {/*    <Link href="/">*/}
                                {/*        <ListItemLink*/}
                                {/*            className={classNames({*/}
                                {/*                active: true*/}
                                {/*            })}*/}
                                {/*        >*/}
                                {/*            Home*/}
                                {/*        </ListItemLink>*/}
                                {/*    </Link>*/}
                                {/*</ListItem>*/}
                                <ListItem>
                                    <Link href="/rekrutacja">
                                        <ListItemLink className="blue">
                                            Dołącz do nas
                                        </ListItemLink>
                                    </Link>
                                </ListItem>
                            </List>
                        </Nav>
                    </Col>
                </Row>
            </Container>
            <Hamburger onClick={() => setMenu(!showMenu)}>
                {showMenu ? (
                    <GoX title="Zamknij Menu" size="1.5rem" />
                ) : (
                    <GoThreeBars title="Otwórz menu" size="1.5rem" />
                )}
            </Hamburger>
        </Header>
    );
};

const Header = styled.header`
    position: fixed;
    width: 100%;
    top: 0;
    padding: 1rem 0;
    transition: all ease-in-out 0.4s;
    z-index: 2;
    color: #fff;

    &.scrolled {
        background-color: white;
        box-shadow: 0 0 3px #b5b5b5;
    }
`;

const Logo = styled.div`
    height: 2rem;
`;

const Hamburger = styled.button`
    ${media.lg`
    display: none;
  `}
    display: flex;
    position: absolute;
    top: 2rem;
    right: 1rem;
    transform: translateY(-50%);
    border: none;
    background: transparent;
    color: ${properties => properties.theme.whiteColor};

    .scrolled & {
        color: ${properties => properties.theme.mainColor};
    }
`;

const Nav = styled.nav`
    ${media.xs`
    display: none;
  `}
    &.activeMenu {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        background-color: black;
    }

    &.show {
        ${media.md`
    left: -1.5rem;
  `}

        position: absolute;
        display: flex;
        align-items: center;
        top: -3rem;
        left: 0;
        background-color: ${properties => properties.theme.blackColor};
        height: 100vh;
        width: 100vw;
        justify-content: center;
    }
`;

const List = styled.ul`
    ${media.xs`
    height: auto;
    flex-wrap: wrap;
  `}
    ${media.md`
    width: 100%;
    height: auto;
    flex-wrap: wrap;
    font-size: 1.5rem;
  `}
    ${media.lg`
  `}

    height: 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: nowrap;
    list-style: none;
    padding: 0;
    margin: 8px 0 0 0;
`;

const ListItem = styled.li`
    ${media.xs`
    width: 100%;
    padding: 0;
    text-align: center;
    & + & {
    margin-top: 1rem;
    }
  `}
    ${media.md`
    width: 100%;
    padding: 0;
    text-align: center;
    & + & {
    margin-top: 1rem;
    }
  `}
    ${media.lg`
     width: auto;
     font-size: 1.1rem;
     & + & {
        margin: 0 1rem 0 1rem;
    }
  `}

  padding: 0 ${properties => properties.theme.space[0]};
    letter-spacing: 0.5px;

    &:first-child {
        padding-left: 0;
    }

    &:last-child {
        padding-right: 0;
    }
`;

const ListItemLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    //color: ${properties => properties.theme.whiteColor};

    // .scrolled & {
    //     color: ${properties => properties.theme.grayColor};
    //
    //     &.active {
    //         color: red;
    //         font-weight: bold;
    //     }
    // }

    &.active {
        font-weight: bold;
        color: red;
    }

    &.blue {
        color: ${properties => properties.theme.mainColor};
        font-weight: bold;
    }
`;

export default Navbar;
