import { Doughnut, Bar, Line } from "react-chartjs-2";
import React, { useState, useEffect } from "react";

export function TempChart() {
  const [LondonData, setLondonData] = useState([]);
  const [LisbonData, setLisbonData] = useState([]);
  console.log("hello james");

  async function getTempForecast(lat, lon, setData) {
    fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        lat +
        "&lon=" +
        lon +
        "&exclude=daily,minutely&appid=" +
        process.env.REACT_APP_WEATHER_API_KEY
    )
      .then((response) => response.json())
      .then((data) => {
        let newData = [];
        for (var hour in data.hourly) {
          // For Javascript dates, need time in miliseconds not seconds.
          // Also, convert temp to kelvin.
          newData.push({
            x: new Date(data.hourly[hour].dt * 1000),
            y: (data.hourly[hour].temp - 273.15).toFixed(2),
          });
        }
        console.log("new data is:", newData);
        setData(newData);
      });
  }

  useEffect(() => {
    getTempForecast(51.5074, -0.1278, setLondonData);
    getTempForecast(38.7223, -9.1393, setLisbonData);
  }, []);

  return (
    <div className="TempChart">
      <Line
        data={{
          datasets: [
            {
              label: "London",
              //backgroundColor: "rgb(55, 99, 132)",
              borderColor: "rgb(255, 99, 132)",
              data: LondonData,
            },
            {
              label: "Lisbon",
              //backgroundColor: "rgb(55, 99, 132)",
              borderColor: "rgb(230, 0, 200)",
              data: LisbonData,
            },
          ],
        }}
        width={100}
        height={25}
        options={{
          title: {
            text: "Temperature forecast (hourly)",
            display: "Temperature forecast (hourly)",
          },

          scales: {
            xAxes: [
              {
                type: "time",
                time: {
                  units: "seconds",
                },
                //position: "bottom",
              },
            ],
          },
        }}
      />
    </div>
  );
}
