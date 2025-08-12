import { useCartContext } from "../contexts/CartContext";

const useCart = () => {
    const { cart, setCart } = useCartContext();

    const isInCart = (item) => item && cart.some(c => c.id === item.id); //patikrina ir item jau idetas

    const addToCart = (item) => {
        if (!item) return; // jei item == undefined nevygdo funkcijos
        if (isInCart(item)) {
            setCart(cart.filter(c => c.id !== item.id)); // pasalina jei jau buvo idetas
        } else {
            setCart(c => [...c, item]); // prideda jei nebuvo
        }
    };
    
    const removeFromCart = (item) => {
        if (!item) return; // jei item == undefined nevygdo funkcijos
        setCart(cart.filter(c => c.id !== item.id));
    }

    const addToCartText = (item) => isInCart(item) ? "Remove from cart" : "Add to cart";

    return { addToCart, removeFromCart, isInCart, addToCartText };
};

export default useCart;