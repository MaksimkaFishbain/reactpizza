// import React, {useState} from 'react';
//
// const Sorting = ({setIsAbstractSorted, dataClone, setIsRender}) => {
//     // const [isFilled, setIsFilled] = useState(2)
//     // const [isAbstractSorted, setIsAbstractSorted] = useState('')
//     // const [inRange, setInRange] = useState(0)
//     function sortByFiller(filler = 2) {
//         if ((filler === 0) || (filler === 1)) {
//             return setIsRender(dataClone.filter(i => {
//                 return i.isMeat === filler
//             }))
//         } else if (filler === 2) {
//             return setIsRender(dataClone)
//         }
//     }
//
//     function sortByField(field = '') {
//         return field === 'popularity' ? setIsRender(dataClone.sort((a, b) => a[field] < b[field] ? 1 : -1)) :
//             setIsRender(dataClone.sort((a, b) => a[field] < b[field] ? -1 : 1))
//     }
//
//     // function sortInRange(fstValue) {
//     //
//     // }
//
//     return (
//         <div className="sorting">
//             <ol id="left">
//                 <li padding-right="300px" onClick={() => sortByFiller(1)}>Мясные</li>
//                 <li padding-right="400px" onClick={() => sortByFiller(0)}>Вегетарианские</li>
//                 <li padding-right="200px" onClick={() => sortByFiller(2)}>Все</li>
//             </ol>
//             <ol id="center">
//                 <li>От <input maxLength={11} name="number" onChange={(e) => console.log(e.target.value)} /> руб.</li>
//                 <li>До <input maxLength={11} name="number" onChange={(e) => console.log(e.target.value)} /> руб.</li>
//             </ol>
//             <ol id="right">
//                 <p>Сортировать по:</p>
//                 <li><button onClick={() => sortByField('popularity')}>Популярности</button></li>
//                 <li><button onClick={() => sortByField('price')}>Цене (по возрастанию)</button></li>
//                 <li><button onClick={() => sortByField('title')}>Алфавиту</button></li>
//             </ol>
//         </div>
//     );
// };
//
// export default Sorting;