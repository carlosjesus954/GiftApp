import {Linkedin, Github, Portfolio} from './icons'


export const Header = () => {
  return (
    <header className='header'>
        <h1 className='header__h1'>CarlosCompany</h1>
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
