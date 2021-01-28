import {useEffect, useState} from 'react';
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components';
import {Container, Row, Col} from 'styled-bootstrap-grid';


const Header = styled.header`
  position: sticky;
  top: 0;
  padding: 1rem 0;
  transition: all ease-in-out 0.4s;
  z-index: 2;
  ${props => {
    if (!props.toggle) {
      return `
        background-color: white;
        box-shadow: 0 0 3px #b5b5b5;
      `;
    }
  }}
`;

const Logo = styled.div`
  height: 2rem;
`;

const Nav = styled.nav`
  //background-color: black;
`;

const List = styled.ul`
  height: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: nowrap;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 5px;
`;

const ListItem = styled.li`
  padding: 0 ${props => props.theme.space[0]};

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`;

const ListItemLink = styled.a`
  text-decoration: none;
  ${props => {
    if (props.toggle) {
      return `
        color: #cd0000;
        font-weight: bold;
      `;
    } else {
      return `
        color: #999;
      `;
    }
  }}
`;

const Navbar = () => {
    let listener = null
    const [scrollState, setScrollState] = useState(true);

    useEffect(() => {
        listener = document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop
            if (scrolled >= 70) {
                if (scrollState !== false) {
                    setScrollState(false);
                }
            } else {
                if (scrollState !== true) {
                    setScrollState(true);
                }
            }
        })
        return () => {
            document.removeEventListener("scroll", listener)
            console.log(scrollState)
        }
    }, [scrollState])

    return (
        <Header toggle={scrollState}>
            <Container>
                <Row>
                    <Col col xl="2" lg="2" md="2" sm="2">
                        <Logo>
                            <Link href="/">
                                <a>
                                    <Image
                                        src="/images/logo.png"
                                        alt="Niskie Składki Logo"
                                        layout='fill'
                                    />
                                    {/*Alt: Przejscie do strony glownej*/}
                                </a>
                            </Link>
                        </Logo>
                    </Col>
                    <Col col xl="10" lg="10" md="12" sm="10">
                        <Nav role="navigation" aria-label="Nawigacja">
                            <List>
                                <ListItem>
                                    <ListItemLink toggle={true} href="#">O Nas</ListItemLink>
                                </ListItem>
                                <ListItem>
                                    <ListItemLink href="#">Zbiórki</ListItemLink>
                                </ListItem>
                                <ListItem>
                                    <ListItemLink href="#">Działalność</ListItemLink>
                                </ListItem>
                                <ListItem>
                                    <ListItemLink href="#">Zespół</ListItemLink>
                                </ListItem>
                                <ListItem>
                                    <ListItemLink href="#">Partnerzy</ListItemLink>
                                </ListItem>
                                <ListItem>
                                    <ListItemLink href="#">Kontakt</ListItemLink>
                                </ListItem>
                                <ListItem>
                                    <ListItemLink href="#">Dołącz do nas</ListItemLink>
                                </ListItem>
                            </List>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </Header>
    );
}

export default Navbar;