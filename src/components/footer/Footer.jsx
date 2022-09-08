import classes from '../footer/Footer.module.scss'
import logo from '../../assets/logo.png'

function Footer() {
    const sections = [
        'Главная',
        'Каталог',
        "Вопросы",
        "Оплата и доставка",
        "Отзывы",
        "Контакты"
    ]

    const userAccount = [
        "Вход | Регистрация",
        "Заказы",
        "Избранное",
        "Публичная оферта",
    ]
    return ( 
        <div className={classes.footer}>
            <div style={{display:'flex',justifyContent:'space-between'}} className="wrapper">
                <div className={classes.footer__description}>
                    <img className={classes.footer__logo} src={logo} alt="Логотип магазина" />
                    <p>Студия цветов и подарков
                    <br></br>Студия цветов и подарков
                    <br></br>Звонки с 9:00 до 21:00 - <a style={{color:'rgb(85, 120, 218)',cursor:'pointer'}}>8 (999) 999-99-99</a>
                    </p>
                    <p>Студия цветов и подарков Студия цветов и подарков</p>
                </div>
                <div className={classes.footer__sections}>
                    <p><strong>Разделы</strong></p>
                    {sections.map((item, index) => (
                        <a key={index}>{item}</a>
                    ))}
                </div>
                <div className={classes.footer__userAccount}>
                    <p><strong>Кабинет покупателя</strong></p>
                    {userAccount.map((item, index) => (
                        <a key={index}>{item}</a>
                    ))}
                </div>
        </div>
        </div>
     );
}

export default Footer;