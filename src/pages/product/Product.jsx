import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Preloader from '../../components/Preloader';
import { getProductById } from '../../services/api.service';
import classes from '../product/Product.module.scss'
import BtnAddProduct from '../products/btn/BtnAddProduct';
import BtnLike from '../products/btn/BtnLike';
import InputNumber from './btn/input/InputNumber';
import Description from './description/Description';

function Product(props) {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        setProduct(getProductById(id));
    },[])
    
        if(product) {
            return (
            <div className="wrapper">
                <div className={classes.block}>
                    <img className={classes.img} src={product.img} alt="" />
                    <div className={classes.info}>
                        <h1 className={classes.title}>{product.title}</h1>
                        <p className={classes.cost}>{product.cost}</p>
                        <div className={classes.blockBtn}>
                            <InputNumber/>
                            <BtnAddProduct  />
                            <BtnLike/>
                        </div>
                    </div>
                </div>
                <Description/>
            </div>
            )
        } else {
            return <Preloader/>
        }
    
}

export default Product;