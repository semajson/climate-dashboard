import { TempChart } from "./TempChart/TempChart.js";
import { RainChart } from "./RainChart/RainChart.js";
import { PopChart } from "./PopChart/PopChart.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>James's climate dashboard!</h1>
      <div className=" main chart-wrapper">
        <TempChart />
      </div>
      <div className=" sub chart-wrapper">
        <RainChart />
      </div>
      <div className=" sub chart-wrapper">
        <PopChart />
      </div>
      <div className=" sub chart-wrapper">
        <h5>Current global temp map</h5>
        <img
          src={
            "https://tile.openweathermap.org/map/temp_new/0/0/0.png?appid=" +
            process.env.REACT_APP_WEATHER_API_KEY
          }
          alt="new"
        />
      </div>
    </div>
  );
}

export default App;
