import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ({ dataSetsData }: { dataSetsData: number[][] }) {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        // display: false,
        position: "top" as const,
        align: "end" as const,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 250,
        max: 750,
        ticks: {
          stepSize: 250,
        },
      },
    },
  };

  const data = {
    labels,

    datasets: [
      {
        label: "Qualified",
        data: dataSetsData[0],
        borderColor: "rgba(251, 227, 142, 0.7)",
        backgroundColor: "rgba(251, 227, 142, 0.7)",
        pointRadius: 10,
      },
      {
        label: "Disqualified",
        data: dataSetsData[1],
        borderColor: "rgba(154, 137, 255, 0.7)",
        backgroundColor: "rgba(154, 137, 255, 0.7)",
        pointRadius: 10,
      },
    ],
  };
  return (
    <>
      <Line options={options} data={data} />
    </>
  );
}
