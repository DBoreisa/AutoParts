import { useCartContext } from "../contexts/CartContext";

const useCart = (item) => {
    const { cart, setCart } = useCartContext();

    const addToCart = () => {
        cart.findIndex( c => c.id === item.id) >= 0 
            ? setCart(cart.filter(c => c.id !== item.id)) // Jei item jau yra, tai istrina
            : setCart(c => [...c, item]); // Prideda, jei dar nepridetas
    };

    const addToCartText = cart.findIndex( c => c.id === item.id) >= 0 
        ? "Remove from cart" : "Add to cart";

    return { addToCart, addToCartText }
};

export default useCart;