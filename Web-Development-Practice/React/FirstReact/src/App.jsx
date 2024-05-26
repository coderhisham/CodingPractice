import './App.css';
import Para from'./test.jsx';


function MyButton(){
  return (
    <button>This is a Button</button>
  );
}
export default function MyApp(){
  return(
    <div>
      <h1>This is a H1</h1>
      <MyButton />
      <Para />
    </div>
  );
}
