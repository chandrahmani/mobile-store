import { InstagramLogo, Phone, WhatsappLogo } from 'phosphor-react'
import Iphone from '../apple/Iphone'
import './home.css'
import logo from "./Screen.png";
import nm from './Scree.png'
const Home = () => {
    return (
        <>
            <section>
                <div className="title">
                    <h1>Welcome To My Shop </h1>

                    <img src={nm} className="imgs" />
                </div>
                <div className='logo'>
                    <img src={logo} />
                </div>

                <Iphone />
            </section>

            <footer>
                <div className='address-wrp'>
                    <h2>MD Noman Siddique</h2>
                    <h2>Mob 9656609606</h2>
                    <p>Address - Narpatganj durga mandir </p>
                </div>

                <div className='icon'>
                    <a href='#' ><WhatsappLogo size={32} /></a>

                    <a href='#' > <InstagramLogo size={32} /></a>

                    <a href='#' >  <Phone size={32} /></a>
                </div>
            </footer>
        </>
    )
}

export default Home