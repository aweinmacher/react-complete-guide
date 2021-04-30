import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  const pointsValues = dataPoints.map((point) => point.value);
  const max = Math.max(...pointsValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          max={max}
        />
      ))}
    </div>
  );
};

export default Chart;
