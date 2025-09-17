import { useCartContext } from "../contexts/CartContext";

const useCart = () => {
    const { cart, setCart } = useCartContext();

    const isInCart = (item) => item && cart.some(c => c.id === item.id); //patikrina ir item jau idetas

    // Add item to cart (or increment quantity if exists)
    const addToCart = (item) => {
        if (!item?.id) return; // Must have DB id
        setCart(prevCart => {
            const exists = prevCart.find(c => c.id === item.id);
            if (exists) {
                return prevCart.map(c =>
                    c.id === item.id
                        ? { ...c, quantity: (c.quantity || 1) + 1 }
                        : c
                );
            } else {
                return [...prevCart, { ...item, quantity: item.quantity || 1 }];
            }
        });
    };
    
    const removeFromCart = (item) => {
        if (!item?.id) return;
        setCart(cart.filter(c => c.id !== item.id));
    };

    const updateQuantity = (itemId, quantity) => {
        setCart(prevCart =>
            prevCart.map(c =>
                c.id === itemId ? { ...c, quantity: quantity > 0 ? quantity : 1 } 
                : c
            )
        );
    };

    const addToCartText = (item) => isInCart(item) ? "Remove from cart" : "Add to cart";

    return { addToCart, removeFromCart, isInCart, addToCartText, updateQuantity };
};

export default useCart;