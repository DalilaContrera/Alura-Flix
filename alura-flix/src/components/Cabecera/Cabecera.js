import { Link } from "react-router-dom";
import styles from './Cabecera.modules.css';
import logo from "./logo.png";

function Cabecera(){
    return(
         <header className={styles.cabecera}>
            <Link to="/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo Alura"/> <span>Musica</span>
                </section>
            </Link>
         </header>
    )
}

export default Cabecera;