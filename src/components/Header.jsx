import styles from "./Header.module.css"
import emoticon from "../images/—Pngtree—3d emoji social media icon_5868039.png"

const Header = () => {
    return(
        <header>
            <img src={emoticon} alt="emoticon" title="Ícone png de pngtree.com"/>
            
            <h1>MEME <br /> Maker</h1>
            
        </header>
    )
}

export default Header