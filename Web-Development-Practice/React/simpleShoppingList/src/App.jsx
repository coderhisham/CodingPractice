import './App.css'
import ShoppingList from './ShoppingList';
import Clicker from './clicker';
import Counter from '../counter';
import ToggleCounter from './toggleCounter';

function App() {

  const data = [
    {id:1, name:"Eggs", quantity:10, isCompleted:true},
    {id:2, name:"Tomato", quantity:6, isCompleted:false},
    {id:3, name:"Banana", quantity:8, isCompleted:true},
    {id:4, name:"Orange", quantity:10, isCompleted:false}
  ]
  return (
    <>
      <ShoppingList items={data}/>
      <Clicker message="Hello There" buttonText='Greet Me'/>
      <Counter />
      <ToggleCounter />
    </>
    
  );
}

export default App
