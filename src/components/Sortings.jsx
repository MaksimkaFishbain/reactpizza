import React from 'react';

const Sortings = () => {
    return (
        <div className="sortings">
            <ol id="left">
                <li padding-right="200px">Все</li>
                <li padding-right="300px">Мясные</li>
                <li padding-right="400px">Вегетарианские</li>
                <li padding-right="400px">Особые</li>
            </ol>
            <ol id="center">
                <li>От <input/> руб.</li>
                <li>До <input /> руб.</li>
            </ol>
            <ol id="right">
                <p>Сортировать по:</p>
                <li><button>Популярности</button></li>
                <li><button>Цене</button></li>
                <li><button>Алфавиту</button></li>
            </ol>
        </div>
    );
};

export default Sortings;