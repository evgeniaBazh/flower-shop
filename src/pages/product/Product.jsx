import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Preloader from '../../components/Preloader';
import { getProductById } from '../../services/api.service';
import classes from '../product/Product.module.scss'
import BtnAddProduct from '../products/btn/BtnAddProduct';
import BtnLike from '../products/btn/BtnLike';
import InputNumber from './btn/input/InputNumber';

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
                    <img src={product.img} alt="" />
                    <div className={classes.info}>
                        <h1>{product.title}</h1>
                        {/* <p></p> */}
                        <div className={classes.blockBtn}>
                            <InputNumber/>
                            <BtnAddProduct  />
                            <BtnLike/>
                        </div>
                        <p>{product.cost}</p>
                    </div>
                </div>
            </div>
            )
        } else {
            return <Preloader/>
        }
    
}

export default Product;