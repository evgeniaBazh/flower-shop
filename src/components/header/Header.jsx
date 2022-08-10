import logo from '../../assets/logo.png'
import telephone from '../../assets/telephone.svg'
import heart from '../../assets/heart.svg'
import cart from '../../assets/cart.svg'
import search from '../../assets/search.svg'
import classes from '../header/Header.module.scss'

function Header() {
    const menu = [
        { id: 1, title: "Каталог" },
        { id: 2, title: "Подобрать" },
        { id: 3, title: "Доставка" },
        { id: 4, title: "Отзывы" },
        { id: 5, title: "Контакты" },
      ];
    
    return ( 
        <header className={classes.header}>
            <img className={classes.logo} src={logo} alt="Логотип" />
            <nav>
                {menu.map(({id, title}) => <a style={{marginRight:'16px'}} className={classes.action} href="#" key={id}>{title}</a>)}
            </nav>
            <div className={classes.connection}>
                <a href="#" className={classes.action}>
                    <img className={classes.imgCall} src={telephone} alt="Позвонить" />8 999 999 99 99
                </a>
            </div>
            <div className={classes.actions}>
                <button className={classes.action}>
                    <img className={classes.img} src={search} alt="Поиск по сайту" />
                </button>
                <a href="#">
                    <img className={classes.img} src={heart} alt="Понравившиеся товары" />
                </a>
                <a href="#">
                    <img className={classes.img} src={cart} alt="Корзина с товарами" />
                </a>
            </div>
        </header>
     );
}

export default Header;