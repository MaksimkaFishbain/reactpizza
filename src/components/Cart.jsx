import React, {useState} from 'react';

const Cart = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <div className="cart-block">
                <h1>Корзина</h1>
            </div>
        </div>
    );
};

export default Cart;