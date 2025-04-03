import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './main.scss'
import Header from "./components/Header.jsx";
import MainApp from "./components/MainApp.jsx";


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Header/>
        <MainApp/>
    </StrictMode>,
)
