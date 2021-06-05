import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { BaseCSS, GridThemeProvider } from 'styled-bootstrap-grid';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import SEO from '../next-seo.config';
import Footer from '../src/components/Footer/Footer';

const gridTheme = {
    breakpoints: {
        xxl: 1440,
        xl: 1200,
        lg: 992,
        md: 768,
        sm: 576,
        xs: 575
    }
};
const styledTheme = {
    mainColor: '#0b4987',
    redColor: '#cd0000',
    grayColor: '#999',
    whiteColor: '#fff',
    blackColor: '#000000',
    textColor: '#081f69',
    headingColor: '#2f2f2f',
    space: ['1rem', '2rem', '3rem', '4rem']
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }
`;

export default function App({ Component: Component, pageProps }) {
    return (
        <ThemeProvider theme={styledTheme}>
            <GridThemeProvider gridTheme={gridTheme}>
                <>
                    <DefaultSeo {...SEO} />
                    <Head>
                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1, shrink-to-fit=no"
                        />
                        <link
                            rel="preconnect"
                            href="https://fonts.gstatic.com"
                        />
                        <link
                            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap"
                            rel="stylesheet"
                        />
                    </Head>
                    <Normalize />
                    <BaseCSS />
                    <GlobalStyle />
                    <Component {...pageProps} />
                    <Footer />
                </>
            </GridThemeProvider>
        </ThemeProvider>
    );
}
