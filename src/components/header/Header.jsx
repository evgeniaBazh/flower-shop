import logo from '../../assets/logo.png'
import telephone from '../../assets/telephone.svg'
import heart from '../../assets/heart.svg'
import cart from '../../assets/cart.svg'
import search from '../../assets/search.svg'
import classes from '../header/Header.module.scss'
import {NavLink} from "react-router-dom"
import { pathNames } from '../../App'
import { useState } from 'react'

function Header() {
    const menu = [
        { id: 1, title: "Каталог", path: pathNames.catalog },
        { id: 2, title: "Подобрать", path: pathNames.filter },
        { id: 3, title: "Доставка", path: pathNames.delivery },
        { id: 4, title: "Отзывы", path: pathNames.feedback },
      ];

    const [onSearchBtn, setOnSearchBtn] = useState(false);
    
    return ( 
        <header className={classes.header}>
            <NavLink to={pathNames.main}>
                <img className={classes.logo} src={logo} alt="Логотип" />
            </NavLink>
            <nav>
                {menu.map(({id, title, path}) => <NavLink to={path} style={{marginRight:'16px'}} className={classes.action} key={id}>{title}</NavLink>)}
            </nav>
            <div className={classes.connection}>
                <a href="#" className={classes.action}>
                    <img className={classes.imgCall} src={telephone} alt="Позвонить" />8 999 999 99 99
                </a>
            </div>
            <div className={classes.actions}>
                <NavLink to={pathNames.search}>
                <button onClick={() => setOnSearchBtn((item) => !item)} className={classes.action}>
                    <img className={classes.img} src={search} alt="Поиск по сайту" />
                </button>
                </NavLink>
                <input style={{ display: onSearchBtn ? "block" : "none" }} className={classes.inputSearch} placeholder='Поиск...' type="text" />
                <NavLink to={pathNames.favourites}>
                    <img className={classes.img} src={heart} alt="Понравившиеся товары" />
                </NavLink>
                <NavLink to={pathNames.cart}>
                    <img className={classes.img} src={cart} alt="Корзина с товарами" />
                </NavLink>
            </div>
        </header>
     );
}

export default Header;