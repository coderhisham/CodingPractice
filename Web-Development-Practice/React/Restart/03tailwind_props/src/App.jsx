import "./App.css";
import Card from "./components/Card/Card";

function App() {
  return (
    <>
      <h1 className="text-3xl bg-green-500 rounded-md p-5">
        Vite with Tailwind
      </h1>
      <Card
        userName="Hisham"
        Designation="CEO"
        imageUrl="https://avatars.githubusercontent.com/u/84192623?v=4"
      />
      <Card
        userName="Anonymous"
        Designation="unknown"
        imageUrl="https://play-lh.googleusercontent.com/ai7FC9zp1bG8zLcl97w9rNde_oZ5s086XP1ZkBFdwf72d_owIiUVJu1-XNp6eOO-AGg"
      />
    </>
  );
}

export default App;
