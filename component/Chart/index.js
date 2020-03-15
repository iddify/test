import { PieChart, Pie, Sector, Cell } from "recharts";

const COLORS = ["#003CBF", "#06CAFD", "#FF5C4D"];

const Chart = ({ status }) => {
  const { confirmed, recovered, deaths } = status;
  const data = [
    { name: "Confirmed", value: confirmed },
    { name: "Recovered", value: recovered },
    { name: "Deaths", value: deaths }
  ];
  return (
    <>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx={130}
          cy={130}
          innerRadius={60}
          outerRadius={90}
          fill='#003CBF'
          dataKey='value'
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </>
  );
};

export default Chart;
