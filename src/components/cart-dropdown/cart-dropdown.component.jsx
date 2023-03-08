import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import {
    CartDropdownContainer,
    EmptyMessage,
    CartItems,
    CartDropdownButton
} from './cart-dropdown.styles.jsx';
import './cart-dropdown.styles.scss';

import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ?
                    (cartItems.map((item) => <CartItem key={item.id} cartItem={item} />))
                    :
                    (<EmptyMessage>Your cart is empty</EmptyMessage>)
                }
                <CartDropdownButton onClick={goToCheckoutHandler}>GO TO CHECKOUT</CartDropdownButton>
            </CartItems>
        </CartDropdownContainer>
    )
}

export default CartDropdown;