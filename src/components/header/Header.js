import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import './Header.css';

function Header() {
    return (
        <header className='app_header'>
            <div className='logo'>
                <img src='/logo192.png' alt='WideCinema Logo' height={34}/>
                <div className='app_name'>WideCinema</div>
            </div>
            <div className='header_icons'>
                <a href='https://github.com/aqsasayyed/WideCinema' target='_blank' rel='noreferrer'><FaGithub size='32px'/></a>
                <a href='https://in.linkedin.com/in/dev-aqsa' target='_blank' rel='noreferrer'><FaLinkedinIn size='32px'/></a>
            </div>
        </header>
    )
}

export default Header;