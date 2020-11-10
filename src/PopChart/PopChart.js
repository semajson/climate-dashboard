import { Doughnut } from "react-chartjs-2";
import React from "react";

export function PopChart() {
  return (
    <div className="PopChart">
      <Doughnut
        data={{
          labels: ["London", "Lisbon"],
          colors: [
            "#a8e0ff",
            "#8ee3f5",
            "#70cad1",
            "#3e517a",
            "#b08ea2",
            "#BBB6DF",
          ],
          datasets: [
            {
              backgroundColor: ["#0074D9", "#FF4136"],
              // Hardcode the population data for now
              data: [8.96, 2.8],
            },
          ],
        }}
        width={100}
        height={400}
        options={{
          title: {
            text: "Population (millions)",
            display: "Population (millions)",
          },
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}
