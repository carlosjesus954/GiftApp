import {Linkedin, Github, Portfolio, Burguer} from './icons'


export const Header = () => {
  return (
    <header className='header'>
        <img src="" alt="Logo" className='header__logo'/>
        <nav className="header__nav">
            <ul className="header__ul">
                <li className="header__li" >
                    <a href="#" className="header__enlace"><Linkedin className="icon__social" /></a>
                </li>
                <li className="header__li" >
                    <a href="#" className="header__enlace"> <Github className="icon__social" /></a>
                </li>
                <li className="header__li" >
                    <a href="#" className="header__enlace"> <Portfolio className="icon__social" /></a>
                </li>
            </ul>
        </nav>
    </header>
  )
}
