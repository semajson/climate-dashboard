import { Doughnut, Bar, Line } from "react-chartjs-2";
import React, { useState, useEffect } from "react";

export function TempChart() {
  const [tempData, setTempData] = useState([]);
  console.log("hello james");

  useEffect(() => {
    async function fetchTempData() {
      fetch(
        "https://api.openweathermap.org/data/2.5/onecall?lat=51.5074&lon=-0.1278&exclude=daily,minutely&appid=" +
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
          setTempData(newData);
        });
    }
    fetchTempData();
  }, []);

  return (
    <div className="TempChart">
      <Line
        data={{
          datasets: [
            /*
            {
              label: "My First dataset",
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "rgb(255, 99, 132)",
              data: tempData,
            },
            */
            {
              label: "London",
              //backgroundColor: "rgb(55, 99, 132)",
              borderColor: "rgb(255, 99, 132)",
              data: tempData,
            },
          ],
        }}
        width={100}
        height={25}
        options={{
          title: {
            text: "Hourly temperature forecast",
            display: "Hourly temperature forecast",
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
