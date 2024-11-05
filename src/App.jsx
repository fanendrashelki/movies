import "./App.css";
import Card from "./Components/card";
import { data } from "./Components/data";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "rgb(179 25 25)" }}>
        Movies Card
      </h1>
      <div className="card-box">
        {data.map((currentItem) => {
          return <Card currentItem={currentItem} />;
        })}
      </div>
    </>
  );
}

export default App;
