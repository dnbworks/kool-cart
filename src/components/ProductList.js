import Product from './Product';
import { useGlobalContext } from '../Context';

const ProductList = () => {
  const { storeProducts } = useGlobalContext();
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-10 row">
        {storeProducts.map( product => {
          return <Product key={product.id} {...product}/>
        })} 
        </div>
      </div>
    </div>
  );
};

export default ProductList;
