import React from 'react' 
import { Link, NavLink } from 'react-router-dom' 
import s from './Header.module.scss' 

const setActiveLink = ({isActive}: any)=> isActive ? `${s.navigation_link} ${s.active}` : s.navigation_link;

const Header: React.FC = () => {
    return <header className={s.header}>
        <nav className={s.navigation}>
            <NavLink to='/' className={setActiveLink} >Home</NavLink>
            <NavLink to='/deleted' className={setActiveLink}>Deleted Todos</NavLink>
        </nav>
    </header>
} 

export default Header 