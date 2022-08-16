import { useEffect, useState } from 'react';
import classes from '../products/Products.module.scss'
import {getProductsByCategory} from '../../services/api.service'
import {NavLink} from "react-router-dom"
import ChangeColorIcon from './btn/ChangeColorIcon';

function Products() {
    const [products, setProducts]= useState([]);

    const sortValue = [{title: 'Цены: по возрастанию'},
    {title: 'Цены: убыванию'},
    {title: 'По популярности'},
    {title: 'Более новые букеты'},]

    useEffect(() => {
        setProducts(getProductsByCategory())
    }, [])
    return ( 
        <div className="wrapper">
            <div className={classes.wrap}>
                <h1>Сборные букеты</h1>
                <div className={classes.block}>
                    <select className={classes.select}>
                        {sortValue.map(value => (
                          <option key={value.title} value={value.title}>{value.title}</option>
                        ))}
                    </select>
                {products.map(product => {
                    return ( 
                        <NavLink  key={product.id} to='/' className={classes.product}>
                            <div className={classes.scale}>  
                                <img className={classes.img} src={product.img} alt="Фотография букета" />
                                <ChangeColorIcon/>
                            </div>
                            <p><strong>{product.title}</strong></p>
                            <p>{product.cost}</p>
                        </NavLink>
                    )
                })}
                </div>
            </div>
        </div>
     );
}

export default Products;