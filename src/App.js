import "./styles.scss"

function App() {
  return (
    <div className="App">
      <div className="pizzaBackground">
        <div className="leftSide">
          <img src="/images/pizzaback.png" alt="backPizza"/>
          <img src="/images/pizzaback.png" alt="backPizza"/>
          <img src="/images/pizzaback.png" alt="backPizza"/>
          <img src="/images/pizzaback.png" alt="backPizza"/>
        </div>
        <div className="rightSide">
          <img src="/images/pizzaback.png" alt="backPizza"/>
          <img src="/images/pizzaback.png" alt="backPizza"/>
          <img src="/images/pizzaback.png" alt="backPizza"/>
          <img src="/images/pizzaback.png" alt="backPizza"/>
        </div>
      </div>
      <div className="wrapper">
        <form className="header">
          <div className="logo">
            <img src="/images/pizza.png" alt="logo"/>
            <h1>Pizza iz zada</h1>
          </div>
          <div className="search">
            <img src="/images/search.png" />
            <input type={"text"} placeholder="Search..." />
          </div>
          <div className="currentPayment">
            <button id="fst">7000$</button>
            <button id="sec">Basket</button>
          </div>
        </form>
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
        <div className="menu">
          <div className="card">

          </div>
          <div className="card">

          </div>
          <div className="card">

          </div>
          <div className="card">

          </div>
          <div className="card">

          </div>
          <div className="card">

          </div>
          <div className="card">

          </div>
          <div className="card">

          </div>
          <div className="card">

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
