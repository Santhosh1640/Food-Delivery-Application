import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets"
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            //if cart item is empty increase the counter to 1
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            //if cart item is not empty increment the counter
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems) {
            if(cartItems[item]>0) {
                let itemInfo = food_list.find((product)=>product._id===item);
                totalAmount += itemInfo.price*cartItems[item];
            }
        }
        return totalAmount;
    }




    const contextValue = {
        //Using this context we can access this food_list array anywhere
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;