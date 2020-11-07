import { Doughnut, Bar } from "react-chartjs-2";

export function RainChart() {
  return (
    <div className="rainChart">
      <Bar
        data={{
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          datasets: [
            {
              label: "My First dataset",
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "rgb(255, 99, 132)",
              data: [0, 10, 5, 2, 20, 30, 45],
            },
            {
              label: "Test 2",
              backgroundColor: "rgb(55, 99, 132)",
              borderColor: "rgb(55, 99, 132)",
              data: [45, 0, 9, 12, 2, 30, 5],
            },
          ],
        }}
        width={100}
        height={25}
        options={{ title: { text: "Test title", display: "Test title" } }}
      />
    </div>
  );
}
