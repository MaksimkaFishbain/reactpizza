import "./styles.scss"
import Header from "./components/Header";
import Sortings from "./components/Sortings";
import Card from "./components/Card";
import PizzaBackground from "./components/PizzaBackground";

function App() {

  function recipe() {
    return `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `
  }
  return (
    <div className="App">
      <PizzaBackground />
      <div className="wrapper">
        <Header />
        <Sortings />
        <div className="menu">
          <Card title={"Пепперонни"} image={"/images/pizzaPeperoni.png"} price={120} modalContent={recipe}/>
          <Card title={"Салями"} image={"/images/pizzaSalami.png"} price={99} modalContent={recipe}/>
          <Card title={"Гавайская"}  image={"/images/pizzaGavaiskia.png"} price={81} modalContent={recipe}/>
          <Card title={"Грибная"}  image={"/images/pizzaGribnaia.png"} price={144} modalContent={recipe}/>
          <Card title={"4 сезона"} image={"/images/pizzaFourSesons.png"} price={120} modalContent={recipe}/>
        </div>
      </div>
    </div>
  );
}

export default App;
