import head from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={head.header}>
        <a href="/">
            <svg  className={head.logo} width="217" height="152" viewBox="0 0 217 152" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M210 6.40973L142.908 72.57L138.635 76.7838L142.938 80.9672L205.404 141.698L209.829 146H210V6.40973ZM201.221 146L195.05 140L134.452 81.0858L134.362 80.9976L114.13 100.948C111.01 104.025 105.996 104.019 102.883 100.935L82.2725 80.5164L82.2019 80.5854L21.3726 140L15.2297 146H23.8166H192.614H201.221ZM6.64286 146L11.0373 141.708L73.7166 80.4861L78.0095 76.2931L73.7465 72.0697L7.05634 6H6V146H6.64286ZM1 0H6H9.52521H207.955H210H216H216.5L216 0.493056V6V146V152H210H207.393H201.221H15.2297H9.08689H6H0.500002H0V146V6V0H1ZM15.5815 6L82.2322 72.0307L82.3023 72.1001L86.4952 76.254L86.5653 76.3234L107.105 96.6725C107.884 97.4435 109.137 97.445 109.917 96.6758L130.059 76.8142L130.149 76.7254L134.332 72.6004L134.422 72.5116L201.87 6H15.5815Z" fill="#ABCD9E" />
        </svg>
        </a>
        <div className={head.login}>
            {props.authData.isAuth ? <NavLink className={head.link} to={'/login'}>{props.authData.login}</NavLink> : <NavLink className={head.link} to={'/login'}>Login</NavLink>}

        </div>
    </header>
}

export default Header;