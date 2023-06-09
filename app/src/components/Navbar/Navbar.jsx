import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from '../../context';
import MyButton from '../UI/button/MyButton';

function Navbar() {

    const { isAuth, setIsAuth } = useContext(AuthContext)
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className='navbar'>
            <MyButton onClick={() => setIsAuth(false)}>
                Выйти
            </MyButton>
            <div className='navbar__Links'>
                <Link to='/about'>О сайте</Link>
                <Link to='/posts'>Посты</Link>
            </div>

        </div>
    )
}

export default Navbar