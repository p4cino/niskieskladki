import {ThemeProvider, createGlobalStyle} from 'styled-components';
import {GridThemeProvider, BaseCSS} from 'styled-bootstrap-grid';
import {Normalize} from 'styled-normalize'
import Head from 'next/head';

const gridTheme = {
    breakpoints: {
        xxl: 1440,
        xl: 1200,
        lg: 992,
        md: 768,
        sm: 576,
        xs: 575,
    },
};
const styledTheme = {
    mainColor: '#0b4987',
    redColor: '#cd0000',
    grayColor: '#999',
    whiteColor: '#fff',
    blackColor: '#000000',
    space: [
        '1rem',
        '2rem',
    ],
}

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }
`

export default function App({Component: Component, pageProps}) {
    return (
        <ThemeProvider
            theme={styledTheme}
        >
            <GridThemeProvider
                gridTheme={gridTheme}
            >
                <>
                    <Head>
                        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                        <link rel="preconnect" href="https://fonts.gstatic.com"/>
                        <link
                            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap"
                            rel="stylesheet"/>
                    </Head>
                    <Normalize/>
                    <BaseCSS/>
                    <GlobalStyle/>
                    <Component {...pageProps} />
                </>
            </GridThemeProvider>
        </ThemeProvider>
    )
}