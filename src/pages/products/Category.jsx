import { useEffect, useState } from 'react';
import classes from '../products/Category.module.scss'
import {getProductsByCategory} from '../../services/api.service'
import BtnLike from './btn/BtnLike';
import BtnAddProduct from './btn/BtnAddProduct';
import { useSearchParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import SortByProduct from './select/SortByProduct';

export const colors = {
    white: '#ffffff',
    black: '#000000',
    blue: 'rgb(85, 120, 218)',
    red: '#fa4141',
}

function Category(props) {
    const [products, setProducts]= useState([]);
    const [title, setTitle] = useState('')

    const sortValue = [
    {title: 'Цены: по возрастанию', key: 'increasing'},
    {title: 'Цены: по убыванию', key: 'decreasing'},]
    // {title: 'По популярности'},
    // {title: 'Более новые букеты'},]

    const navigate = useNavigate();
    
    const toProduct = (id) => {
        navigate(`/product/${id}`)
    }

    const [searchParams] = useSearchParams();
    useEffect(() => {
        const data = getProductsByCategory(searchParams.get('name'));
        setProducts(data.products);
        setSortedByPrice(data.products);
        setTitle(data.title);
    }, [])

    
    const [optionKey, setOptionKey] = useState('');
    const [sortedByPrice, setSortedByPrice] = useState([]);
    const sortByPrice = (sort) => {
        setOptionKey(sort);
        if (optionKey == 'increasing') {
            setSortedByPrice([...products].sort((a, b) => {return b.cost - a.cost}));
        } else if (optionKey == 'decreasing') {
            setSortedByPrice([...products].sort((a, b) => {return a.cost - b.cost}));
        } else {
            setSortedByPrice(products)
        }
    }

    return ( 
        <div className="wrapper">
            <div className={classes.wrap}>
                <h1>{title}</h1>
                <div className={classes.block}>
                    <SortByProduct onChange={sortByPrice} value={optionKey} sortValue={sortValue} defaultValue='Сортировка'/>
                    {sortedByPrice.map(product => (
                        <div onClick={() => {toProduct(product.id)}} key={product.id} className={classes.product}>
                            <div className={classes.scale}>  
                                <img className={classes.img} src={product.img} alt="Фотография букета" />
                                <BtnLike className={classes.btnLike} />
                                <BtnAddProduct className={classes.btnAdd}/>
                            </div>
                            <p><strong>{product.title}</strong></p>
                            <p>{product.cost}₽</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}

export default Category;