import React from 'react';

const Header = ({setValue, setIsRender, filterByTitle}) => {

    return (
        <div>
            <form className="header">
                <div className="logo">
                    <img src="/images/pizza.png" alt="logo"/>
                    <h1>Pizza iz zada</h1>
                </div>
                <div className="search">
                    <img src="/images/search.png" />
                    <input type={"text"} placeholder="Поиск..." onChange={(e) => {
                        setValue(e.target.value)
                        setIsRender(filterByTitle)
                    }}/>
                </div>
                <div className="currentPayment">
                    <button id="fst">7000 BYN</button>
                    <button id="sec">Корзина</button>
                </div>
            </form>
        </div>
    );
};

export default Header;