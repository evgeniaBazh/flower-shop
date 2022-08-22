import { useEffect, useState } from 'react';
import classes from '../products/Category.module.scss'
import {getProductsByCategory} from '../../services/api.service'
import BtnLike from './btn/BtnLike';
import BtnAddProduct from './btn/BtnAddProduct';
import { NavLink, useSearchParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { pathNames } from '../../App';

export const colors = {
    white: '#ffffff',
    black: '#000000',
    blue: 'rgb(85, 120, 218)',
    red: '#fa4141',
}

function Category(props) {
    const [products, setProducts]= useState([]);
    const [title, setTitle] = useState('')
    // const [productId, setProductId] = useState([])

    const sortValue = [{title: 'Цены: по возрастанию'},
    {title: 'Цены: убыванию'},
    {title: 'По популярности'},
    {title: 'Более новые букеты'},]

    const navigate = useNavigate();
    
    const toProduct = (id) => {
        navigate(`/product/${id}`)
    }

    const [searchParams] = useSearchParams();
    useEffect(() => {
        const data = getProductsByCategory(searchParams.get('name'));
        setProducts(data.products);
        setTitle(data.title);
    }, [])


    return ( 
        <div className="wrapper">
            <div className={classes.wrap}>
                <h1>{title}</h1>
                <div className={classes.block}>
                    <select className={classes.select}>
                        {sortValue.map(value => (
                            <option key={value.title} value={value.title}>{value.title}</option>
                            ))}
                    </select>
                    {products.map(product => (
                           
                        <div onClick={() => {toProduct(product.id)}} key={product.id} className={classes.product}>
                            <div className={classes.scale}>  
                                <img className={classes.img} src={product.img} alt="Фотография букета" />
                                <BtnLike className={classes.btnLike} />
                                <BtnAddProduct className={classes.btnAdd}/>
                            </div>
                            <p><strong>{product.title}</strong></p>
                            <p>{product.cost}</p>
                        </div>
                        
                    ))}
                </div>
            </div>
        </div>
     );
}

export default Category;