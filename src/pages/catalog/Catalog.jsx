import classes from "../catalog/Catalog.module.scss"
import monobukety from '../../assets/monobukety.jpg'
import sbornyeBukety from '../../assets/sbornye-bukety.jpg'
import kompoziciiSKlubnikoi from '../../assets/kompozicii-s-klubnikoi.jpg'
import { pathNames } from "../../App";
import {NavLink} from "react-router-dom"
import { categories } from "../../services/api.service";


function Catalog(props) {
    return ( 
    <div className="wrapper">
        <div className={classes.wrap}>
            <h1>Каталог</h1>
            <div className={classes.block}>
                <NavLink  to={`${pathNames.category}/?name=${categories.mb}`}>
                    <img className={classes.decor} src={monobukety} alt="Монобукеты" />
                </NavLink>
                <NavLink  to={`${pathNames.category}/?name=${categories.sb}`}>
                    <img className={classes.decor} src={sbornyeBukety} alt="Сборные букеты" />
                </NavLink>
                <NavLink  to={`${pathNames.category}/?name=${categories.kk}`}>
                    <img className={classes.decor} src={kompoziciiSKlubnikoi} alt="Композиции с клубникой" />
                </NavLink>
            </div>
        </div>
    </div>
        );
}

export default Catalog;