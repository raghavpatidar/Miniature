import { createContext, useContext, useReducer } from "react";
import faker from "faker";
import { cartReducer, productReducer } from "./Reducer";
import fooddata from '../data'
const Cart = createContext();
faker.seed(99);

const Context = ({ children }) => {
    // const products = [...Array(20)].map(() => ({
    //     id: faker.datatype.uuid(),
    //     name: faker.commerce.product(),
    //     items: [...Array(8)].map(() => ({
    //         itemid: faker.datatype.uuid(),
    //         price: faker.commerce.price(),
    //         itemName: faker.commerce.productName(),
    //         bestseller: faker.random.arrayElement([false]),
    //         veg: faker.random.arrayElement([true]),

    //     }))
    // }));
    const products = fooddata;
    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: [],
        pendingOrder: [],
    });
    const [productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
    });
    return (

        <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
            {children}
        </Cart.Provider>
    );
};
export const CartState = () => {
    return useContext(Cart);
};
export default Context;
