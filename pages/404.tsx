import Navbar from "../src/components/Navbar/Navbar";

export default function Custom404() {
    return <>
        <Navbar/>
        <div style={{width: '100%', height: '50vh', display: 'flex', justifyContent: 'center', paddingTop: '2rem', backgroundColor: 'black', color: 'white'}}>
            <h1>404 - Nie znaleziono strony</h1>
        </div>
    </>;
}