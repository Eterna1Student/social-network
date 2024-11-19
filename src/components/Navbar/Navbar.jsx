import nav from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const setActive = ({isActive}) => (isActive ? nav.activeLink : nav.link);

const Navbar = () => {
    return (
        <nav className={nav.nav}>
            <div className={nav.item}>
                <NavLink to='/profile' className={setActive}>Profile</NavLink>
            </div>
            <div className={nav.item}>
                <NavLink to='/messages' className={setActive}>Messages</NavLink>
            </div>
            <div className={nav.item}>
                <NavLink to='/users' className={setActive}>Users</NavLink>
            </div>
            <div className={nav.item}>
                <NavLink to='/music' className={setActive}>Music</NavLink>
            </div>
            <div className={nav.item}>
                <NavLink to='/settings' className={setActive}>Settings</NavLink>
            </div>
            <div className={nav.item}></div>
        </nav>
    )
}

export default Navbar;