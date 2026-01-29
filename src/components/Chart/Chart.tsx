import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler, // Import the Filler plugin
} from "chart.js";

const Chart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler, // Register the Filler plugin
  );
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Iphone sales",
        data: [45, 65, 52, 75, 80, 90, 50],
        fill: true,
        backgroundColor: "#2e4355",
        pointBorderColor: "#8884d8",
        pointBorderWidth: 5,
        pointRadius: 0,
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: { legend: { display: false } },
    layout: { padding: { bottom: 20 } },
    scales: {
      y: {
        ticks: {
          color: "white",
          font: {
            size: 18,
          },
        },
        grid: {
          color: "#243240",
        },
      },
      x: {
        ticks: {
          color: "white",
          font: {
            size: 18,
          },
        },
        grid: {
          color: "#243240",
        },
      },
    },
  };
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;
