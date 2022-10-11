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
          <Card title={"Салями"} price={99} image={"/images/pizzaSalami.png"}/>
          <Card title={"Гавайская"} price={81} image={"/images/pizzaGavaiskia.png"}/>
          <Card title={"Грибная"} price={144} image={"/images/pizzaGribnaia.png"}/>
          <Card title={"4 сезона"} image={"/images/pizzaFourSesons.png"} price={120}/>
        </div>
      </div>
    </div>
  );
}

export default App;
