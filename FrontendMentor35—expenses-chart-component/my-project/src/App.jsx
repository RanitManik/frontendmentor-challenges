import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import logo from "./images/logo.svg";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

function App() {
  const state = {
    labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    datasets: [
      {
        label: "",
        backgroundColor: function (context) {
          const data = context.dataset.data;
          const maxValue = Math.max(...data);
          const index = data.indexOf(maxValue);

          // Highlight the highest value bar with a contrasting color
          return context.dataIndex === index
            ? "hsl(186, 34%, 60%)"
            : "hsl(10, 79%, 65%)";
        },
        hoverBackgroundColor: "hsla(186, 34%, 60%, 60%)",
        borderRadius: 6,
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
      },
    ],
  };

  return (
    <>
      <main className="grid max-w-full gap-4 p-4 text-2xl md:min-w-[30rem] lg:min-w-[35rem]">
        <article className="flex justify-between gap-16 rounded-2xl bg-primary-red px-8 py-6">
          <h1 className="font-bold leading-10">
            <span className="block text-sm font-normal">My balance</span>
            $921.48
          </h1>
          <img src={logo} alt="" />
        </article>
        <article className="flex flex-col rounded-2xl bg-neutral-veryPaleOrange px-8 py-6 text-neutral-darkBrown">
          <h2 className="mb-8 text-2xl font-bold">Spending - Last 7 days</h2>
          <Bar className="w-full" data={state} />
          <hr className="my-6 border-neutral-mediumBrown/30" />
          <article className="mb-4 flex items-center justify-between">
            <h3 className="text-4xl font-bold">
              <span className="mb-1 block text-base font-normal opacity-60">
                Total this month
              </span>
              $478.33
            </h3>

            <h4 className="flex flex-col items-end justify-end self-end text-base font-bold">
              +2.4%
              <span className="block font-normal opacity-60">
                from last month
              </span>
            </h4>
          </article>
        </article>
      </main>
    </>
  );
}

export default App;
