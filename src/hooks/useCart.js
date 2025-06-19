import { useCartContext } from "../contexts/CartContext";

const useCart = (item) => {
    const { cart, setCart } = useCartContext();

    const isInCart = item && cart.findIndex(c => c.id === item.id) >= 0; //patikrina ir item jau idetas

    const addToCart = () => {
      if (!item) return; // jei item == undefined nevygdo funkcijos
        if (isInCart) {
            setCart(cart.filter(c => c.id !== item.id)); // pasalina jei jau buvo idetas
        } else {
            setCart(c => [...c, item]); // prideda jei nebuvo
        }
    };

    const addToCartText = isInCart ? "Remove from cart" : "Add to cart";

    return { addToCart, addToCartText }
};

export default useCart;