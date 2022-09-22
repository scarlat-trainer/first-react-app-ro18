import IconButton from '../iconButton/iconButton';
import './header.css';

const Header = () => {
    return (
        <div className="header-container">
            <div>
                <div className="header-brand">JS-RO18</div>
                <IconButton />
            </div>
            <div className="header-links">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;