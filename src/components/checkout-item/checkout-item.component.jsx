import { CategoryItemContainer, ImageContainer, Image, Name, Arrow, Value, Quantity, RemoveButton, Price } from './checkout-item.styles.jsx';

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);


    return (
        <CategoryItemContainer>
            <ImageContainer>
                <Image src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </Quantity>
            <Price>{price * quantity}</Price>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CategoryItemContainer>
    )
}

export default CheckoutItem;