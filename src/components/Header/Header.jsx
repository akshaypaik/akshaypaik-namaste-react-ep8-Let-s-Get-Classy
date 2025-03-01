import './Header.css'
import Logo from './Logo/Logo'
import NavItems from './NavItems/NavItems'

// Another way to write component using arrow function
const Header = () => {

    return (
        <div className="header">
            <Logo />
            <NavItems />
        </div>
    )
}
export default Header;