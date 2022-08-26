import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { searchProducts } from '../../services/api.service';
import { toProduct } from '../products/Category';
import classes from '../search/SearchResults.module.scss'


function SearchResults() {
    const [searchParams] = useSearchParams();
    const searchTerm = searchParams.get('value');
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(searchProducts(searchTerm))
    }, [searchTerm]);

    const productsList = products.map((product) => {
        return (
            <div
                onClick={() => {
                    toProduct(product.id, navigate);
                }}
                key={product.id}
                className={classes.productList__text}
            >
                {product.title}
            </div>
        )
    })
    return ( 
        <div className="wrapper">
            <div className={classes.container}>
                <h1 className={classes.title}>Результаты поиска для: {searchTerm}</h1>
                <div className={classes.productsList}>
                    <div className={classes.productsList__product}>
                        { products.length ? productsList : <b>Ничего не найдено</b>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchResults;