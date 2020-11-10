import { Bar } from "react-chartjs-2";
import React, { useState, useEffect } from "react";

export function RainChart() {
  const [LondonData, setLondonData] = useState([]);
  const [LisbonData, setLisbonData] = useState([]);

  async function getRainForecast(lat, lon, setData) {
    fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        lat +
        "&lon=" +
        lon +
        "&exclude=hourly,minutely&appid=" +
        process.env.REACT_APP_WEATHER_API_KEY
    )
      .then((response) => response.json())
      .then((data) => {
        let newData = [];
        for (var day in data.daily) {
          // For Javascript dates, need time in miliseconds not seconds.
          newData.push({
            x: new Date(data.daily[day].dt * 1000),
            y: data.daily[day].rain,
          });
        }
        console.log("rain data is:", newData);
        setData(newData);
      });
  }

  useEffect(() => {
    getRainForecast(51.5074, -0.1278, setLondonData);
    getRainForecast(38.7223, -9.1393, setLisbonData);
  }, []);

  return (
    <div className="RainChart">
      <Bar
        data={{
          datasets: [
            {
              label: "London",
              backgroundColor: "rgb(55, 99, 132)",
              borderColor: "rgb(255, 99, 132)",
              data: LondonData,
            },
            {
              label: "Lisbon",
              backgroundColor: "rgb(55, 99, 222)",
              borderColor: "rgb(230, 0, 200)",
              data: LisbonData,
            },
          ],
        }}
        width={100}
        height={400}
        options={{
          title: {
            text: "Rain forecast (daily)",
            display: "Rain forecast (daily)",
          },
          maintainAspectRatio: false,

          scales: {
            xAxes: [
              {
                type: "time",
                time: {
                  unit: "day",
                  round: "day",
                  displayFormats: {
                    day: "MMM D",
                  },
                },
                offset: true,
              },
            ],
          },
        }}
      />
    </div>
  );
}
