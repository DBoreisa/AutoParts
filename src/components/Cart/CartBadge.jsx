import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon  from '@mui/icons-material/ShoppingCart';
import { useCartContext } from "../../contexts/CartContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    padding: '0 4px',
  },
}));

export default function CartBange() {
  const { cart, showCart, setShowCart } = useCartContext();

  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={cart.length} color="secondary">
        <ShoppingCartIcon sx={{ color: "white" }} />
      </StyledBadge>
    </IconButton>
  );
}
