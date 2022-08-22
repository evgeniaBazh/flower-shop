import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ExpansionItem from '../../components/expansion-item/ExpansionItem';
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
    const accordionData = [
        {
          title: "Section 1",
          content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`,
        },
        {
          title: "Section 2",
          content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
          reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
          quaerat iure quos dolorum accusantium ducimus in illum vero commodi
          pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
          quidem maiores doloremque est numquam praesentium eos voluptatem amet!
          Repudiandae, mollitia id reprehenderit a ab odit!`,
        },
        {
          title: "Section 3",
          content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`,
        },
      ];
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
                {accordionData.map(({ title, content }) => (
                    <ExpansionItem title={title} key={title} content={content} />
                ))}
            </div>
            )
        } else {
            return <Preloader/>
        }
    
}

export default Product;