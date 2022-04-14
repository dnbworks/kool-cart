import React, { useContext, useReducer, useEffect } from 'react'

import reducer from './reducer';

const url = 'http://localhost:3001/storeProducts';
const AppContext = React.createContext();

const getLocalStorage = () => {
  let list = localStorage.getItem('cart');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('cart')));
  } else {
    return [];
  }
};

const initialState = {
    loading: false,
    cart: getLocalStorage(),
    amount: 0,
    storeProducts: [],
    isModalOpen: false,
    modalProduct: null,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getItem = id => {
      const product = state.storeProducts.find(item => item.id === id );
      return product;
    }


    const openModal = id => {
      dispatch({ type: 'OPEN_MODAL', payload: getItem(id) })
    };
    const closeModal = () => {
      dispatch({ type: 'CLOSE_MODAL' })
    };

    const clearCart = () => {
      dispatch({ type: 'CLEAR_CART' })
    }

    const remove = (id) => {
      dispatch({ type: 'REMOVE', payload: id })
    }

    const increase = (id) => {
      dispatch({ type: 'INCREASE', payload: id })
    }

    const decrease = (id) => {
      dispatch({ type: 'DECREASE', payload: id })
    }

    const fetchData = async () => {
      dispatch({ type: 'LOADING' })
      try{
        const response = await fetch(url)
        const cart = await response.json()
        dispatch({ type: 'DISPLAY_ITEMS', payload: cart });
      } catch(err){
        throw new Error(err);
      }
    }

    const toggleAmount = (id, type) => {
      dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
    }

    const add_to_cart = (event, product) => {
      event.preventDefault();
      const item = getItem(product.id);
      dispatch({ type: 'ADD_TO_CART', payload: { ...product, item } });
    }
    
    useEffect(() => {
      fetchData()
    }, [])
  
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(state.cart));
      dispatch({ type: 'GET_TOTALS' });
      console.log('amount changed');
    }, [state.cart])
    return (
      <AppContext.Provider
        value={{
          ...state,
          clearCart,
          remove,
          increase,
          decrease,
          toggleAmount,
          add_to_cart,
          openModal,
          closeModal
        }}
      >
        {children}
      </AppContext.Provider>
    )
  }
  // make sure use
  export const useGlobalContext = () => {
    return useContext(AppContext)
  }
  
  export { AppContext, AppProvider }