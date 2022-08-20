import classes from '../product/Product.module.scss'
import BtnAddProduct from '../products/btn/BtnAddProduct';
import BtnLike from '../products/btn/BtnLike';
import InputNumber from './btn/input/InputNumber';

function Product(props) {
    

    return ( 
    <div className="wrapper">
        <div className={classes.block}>
            <img src="" alt="" />
            <div className={classes.info}>
                {/* <h1></h1>
                <p></p> */}
                <div className={classes.blockBtn}>
                    <InputNumber/>
                    <BtnAddProduct  />
                    <BtnLike/>
                </div>
                <p></p>
            </div>
        </div>
    </div>
    );
}

export default Product;