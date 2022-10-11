import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <img src="/images/exponate.png" alt="pizza" />
            <div className="aboutPizza">
                <h1>{props.title}</h1>
                <div className={"buttons"}>
                    <form className="first">
                        <button>20 см</button>
                        <button>25 см</button>
                        <button>30 см</button>
                    </form>
                    <form className="second">
                        <button>Толстое тесто</button>
                        <button>Тонкое тесто</button>
                    </form>
                </div>
                <h2>{props.price} BYN</h2>
            </div>
        </div>
    );
};

export default Card;