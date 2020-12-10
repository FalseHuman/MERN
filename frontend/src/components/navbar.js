import React, { useContext } from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    

    const logoutHandler = event =>{
        event.preventDefault()
        auth.logout()
        history.push("/")
    }


    return(
        <div className="navbar-fixed">
    <nav>
        <div className="nav-wrapper black lighten-1" style={{ padding: '0 2rem'}}>
          <span className="brand-logo">ShortUrl</span>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/create">Создать</NavLink></li>
            <li><NavLink to="/links">Список ссылок</NavLink></li>
            <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
          </ul>
        </div>
    </nav>
    </div>
    )
}