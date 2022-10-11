import React from 'react';

const Sortings = () => {
    return (
        <div className="sortings">
            <ol id="left">
                <li padding-right="200px">Все</li>
                <li padding-right="300px">Мясные</li>
                <li padding-right="400px">Вегетарианские</li>
            </ol>
            <ol id="center">
                <li>От <input/> руб.</li>
                <li>До <input /> руб.</li>
            </ol>
            <ol id="right">
                <li>Сортировать по...</li>
                <li>.выпадающий список тут типа"</li>
            </ol>
        </div>
    );
};

export default Sortings;