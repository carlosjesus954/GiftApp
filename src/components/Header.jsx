import {Linkedin, Github, Portfolio} from './icons'


export const Header = () => {
  return (
    <header className='header wrapper'>
        <h1 className='header__h1'>CarlosCompany</h1>
        <nav className="header__nav">
            <ul className="header__ul">
                <li className="header__li" >
                    <a target='_blank' rel='noopener' href="https://www.linkedin.com/in/carlos-jesús-morales-pica-a77427170/" className="header__enlace"><Linkedin className="icon__social" /></a>
                </li>
                <li className="header__li" >
                    <a target='_blank' rel='noopener' href="https://github.com/carlosjesus954" className="header__enlace"> <Github className="icon__social" /></a>
                </li>
                <li className="header__li" >
                    <a target='_blank' rel='noopener' href="https://carlosjesus954.github.io/portfolio.github.io/" className="header__enlace"> <Portfolio className="icon__social" /></a>
                </li>
            </ul>
        </nav>
    </header>
  )
}
