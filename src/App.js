import { TempChart } from "./TempChart/TempChart.js";
import { RainChart } from "./RainChart/RainChart.js";
import { PopChart } from "./PopChart/PopChart.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TempChart />
      <RainChart />
      <PopChart />
      <img
        src={
          "https://tile.openweathermap.org/map/temp_new/0/0/0.png?appid=" +
          process.env.REACT_APP_WEATHER_API_KEY
        }
        alt="new"
      />
      <header className="App-header">
        <p>test tect</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
