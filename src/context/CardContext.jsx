import { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";

export const CardContext = createContext();

const CART_STORAGE_KEY = 'cartItems';

export const CardProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        // Load cart from localStorage on initial render
        if (typeof window !== 'undefined') {
            try {
                const savedCart = localStorage.getItem(CART_STORAGE_KEY);
                return savedCart ? JSON.parse(savedCart) : [];
            } catch (error) {
                console.error('Error loading cart from localStorage:', error);
                return [];
            }
        }
        return [];
    })
    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                toast.success("Product quantity increased!", { toastId: `add-${product.id}` });
                return prevItems.map(item =>
                    item.id === product.id 
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            toast.success("Product added to cart!", { toastId: `add-${product.id}` });
            return [...prevItems, { ...product, quantity: 1 }];
        });
    }
    const updateQuantity = (productId, action) => {
        setCartItems(prevItems => prevItems.map(item =>{
            if(item.id === productId){
                let newUnit = item.quantity;
                if(action === 'increment'){
                    newUnit += 1;
                    toast.success("Product quantity increased!", { toastId: `inc-${productId}` });
                } else if(action === 'decrement' && item.quantity > 1){
                    newUnit -= 1;
                    toast.success("Product quantity decreased!", { toastId: `dec-${productId}` });
                }
                return {...item, quantity: newUnit};
            }
            return item;
        }).filter(item => item !== undefined));//remove undefined items
    }
    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
        toast.success("Product removed from cart!", { toastId: `remove-${productId}` });
    }
    // Save cart to localStorage whenever it changes
    useEffect(() => {
        if (typeof window !== 'undefined') {
            try {
                localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
            } catch (error) {
                console.error('Error saving cart to localStorage:', error);
            }
        }
    }, [cartItems]);

    return (
        <CardContext.Provider value={{ cartItems, setCartItems, addToCart, updateQuantity, removeFromCart }}>
            {children}
        </CardContext.Provider>
    )
}

export const useCart = () => useContext(CardContext);