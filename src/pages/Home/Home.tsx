import Navbar from "../../components/Navbar/Navbar";
import Carousel from "../../components/Carousel/Carousel";
import styled from 'styled-components';

const Home = () => {
    const sliderOptions = {
        type: 'carousel',
        // autoplay: 5000,
        gap: 0,
        perView: 1
    };

    const slideBox = styled.div`
      width: 100vw;
      height: 100vh;
      background-size: cover;
      background-position: center;
    `;

    return (
        <>
            <Navbar/>
            <Carousel
                element="heroSlider"
                options={sliderOptions}
            >
                <div style={{
                    height: 'calc(100vh - 70px)',
                    width: '100vw',
                    backgroundImage: 'url(/images/img1.jpg)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}>
                    Test 1
                </div>
                <div style={{
                    height: 'calc(100vh - 70px)',
                    width: '100vw',
                    backgroundImage: 'url(/images/img2.jpg)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}>
                    Test 2
                </div>
            </Carousel>
            <div style={{height: `150vh`}}>
                Głównym celem stowarzyszenia jest propagowanie idei liberalizmu gospodarczego, decentralizacji władzy
                publicznej oraz wolności osobistej człowieka. Stowarzyszenie wspiera i promuje przedsiębiorczość, wolny
                handel oraz swobodny przepływ kapitału, towarów i ludzi oraz zajmuje się szerzeniem wiedzy na temat
                ekonomii, historii, nauk społecznych oraz innych dyscyplin naukowych wspierających rozwój społeczny i
                obywatelski. Kreując dyskusje na temat reformy systemu gospodarczego kraju, ma na celu likwidację
                zbędnych przepisów oraz regulacji uniemożliwiających rozwój społeczny i gospodarczy obywateli. Poprzez
                współtworzenie i wspieranie programów oraz inicjatyw, dąży do reformy instytucji publicznych i
                zapewniających budowę Państwa Prawa oraz sprawiedliwych, sprawnych i efektywnych rządów. Niskie Składki
                promują idee pluralizmu tolerancji ze względu na poglądy polityczne oraz prowadzą działalność na rzecz
                praw człowieka, swobód obywatelskich oraz wolności słowa i wyrażanych poglądów. Działa na rzecz
                aktywizacji społecznej obywateli w zakresie ich udziału w życiu społeczno - gospodarczym oraz
                samokształcenia, poprzez promowanie i kształcenie nowych liderów opinii publicznej, społeczników,
                samorządowców i działaczy politycznych. Stowarzyszenie wspiera również inicjatywy związane z promocją
                postaw ekologicznych i ochrony środowiska. Jednym z ważniejszych celów stowarzyszenia jest też pomoc
                osobom w trudnej sytuacji życiowej na zasadach dobrowolności i subsydiarności oraz promocja postaw
                dobroczynnych.
            </div>
        </>
    );
}

export default Home;