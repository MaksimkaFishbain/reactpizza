import "./styles.scss"
import Header from "./components/Header";
import Sortings from "./components/Sortings";
import Card from "./components/Card";

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
        <Header />
        <Sortings />
        <div className="menu">
          <Card title={"Пепперонни"} image={"/images/pizzaPeperoni.png"} price={120}/>
          <Card title={"Салями"} image={"/images/pizzaSalami.png"} price={99}/>
          <Card title={"Гавайская"}  image={"/images/pizzaGavaiskia.png"} price={81}/>
          <Card title={"Грибная"}  image={"/images/pizzaGribnaia.png"} price={144}/>
          <Card title={"4 сезона"} image={"/images/pizzaFourSesons.png"} price={120}/>
        </div>
      </div>
    </div>
  );
}

export default App;
