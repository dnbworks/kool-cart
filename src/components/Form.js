import { useGlobalContext } from '../Context';
import styled from 'styled-components';
import { useState, useEffect } from "react";

const Button = styled.button`
  height:40px;
  text-align:center;
  line-height:39px;
  color:#333;
  text-transform:uppercase;
  padding:0 10px;
  font-weight:bold;
`;

const Form = ({ id }) => {
    const [ size, setSize ] = useState('small');
    const [ quantity, setQuantity] = useState(1);
    const { add_to_cart, openModal, cart } = useGlobalContext();

    const decrease = () => {
        setQuantity((currentValue) => {
          if(currentValue <= 1){
            return 1;
          }
          return currentValue - 1;
        });
    };
    
    const increase = () => {
        console.log('hi there');
        setQuantity(quantity + 1);
    }
    
    const changeSize = (itemSize) => {
        setSize(itemSize);
    }

    const inCart = id => {
        return cart.find(item => item.id === id);
    }

    useEffect(() => {
        if(inCart(parseInt(id))){
            const { size } = inCart(parseInt(id));
            setSize(size);
        }
    }, []);

    if(inCart(parseInt(id))){
        return (
            <form >
                { console.log(size) }
                <label htmlFor="small" className={`${size === 'small' ? 'color' : ''}`}>S</label>
                <input type="radio" name="size" id="small" hidden defaultChecked value="small" onChange={(e) => changeSize(e.target.value) } />
                <label htmlFor="medium" className={`${size === 'medium' ? 'color' : ''}`}>M</label>
                <input type="radio" name="size" id="medium" hidden  value="medium" onChange={(e) => changeSize(e.target.value) } />
                <label htmlFor="large" className={`${size === 'large' ? 'color' : ''}`}>L</label>
                <input type="radio" name="size" id="large" hidden  value="large" onChange={(e) => changeSize(e.target.value) } />
                <label htmlFor="xl" className={`${size === 'extra large' ? 'color' : ''}`}>XL</label>
                <input type="radio" name="size" id="xl" hidden  value="extra large" onChange={(e) => changeSize(e.target.value) } />
                <div className="quantity-container">
                    <div className="Quantity" >
                        <span onClick={ decrease } ><i className="fas fa-minus"></i></span>
                        <div id="numbers"  >{quantity}</div>
                        <span onClick={ increase }><i className="fas fa-plus" ></i></span>
                    </div>
                </div>
                <Button disabled={ inCart( id) ? true : false } className="add black" onClick={(e)=> {
                    add_to_cart(e, { id: id, size, quantity} );
                    openModal(id);
                    }}>
                  { inCart(id) ? 'In cart' : 'Add to cart' } 
                </Button>
                <a href="#" className="add black">Find my size</a>
            </form>
        );
    } else {
        return (
            <form >
                { console.log(size) }
                <label htmlFor="small" className={`${size === 'small' ? 'color' : ''}`}>S</label>
                <input type="radio" name="size" id="small" hidden defaultChecked  value="small" onChange={(e) => changeSize(e.target.value) } />
                <label htmlFor="medium" className={`${size === 'medium' ? 'color' : ''}`}>M</label>
                <input type="radio" name="size" id="medium" hidden  value="medium" onChange={(e) => changeSize(e.target.value)} />
                <label htmlFor="large" className={`${size === 'large' ? 'color' : ''}`}>L</label>
                <input type="radio" name="size" id="large" hidden  value="large" onChange={(e) => changeSize(e.target.value) } />
                <label htmlFor="xl" className={`${size === 'extra large' ? 'color' : ''}`}>XL</label>
                <input type="radio" name="size" id="xl" hidden  value="extra large" onChange={(e) => changeSize(e.target.value) } />
                <div className="quantity-container">
                    <div className="Quantity" >
                        <span onClick={ decrease } ><i className="fas fa-minus"></i></span>
                        <div id="numbers"  >{quantity}</div>
                        <span onClick={ increase }><i className="fas fa-plus" ></i></span>
                    </div>
                </div>
                <Button disabled={ inCart(id) ? true : false } className="add black" onClick={(e)=> {
                    add_to_cart(e, { id:id, size, quantity} );
                    openModal(id);
                    }}>
                  { inCart(id) ? 'In cart' : 'Add to cart' } 
                </Button>
                <a href="#" className="add black">Find my size</a>
            </form>
        );
    }

    
}

export default Form;