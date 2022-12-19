import { ArcElement, Chart, PieController } from 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

function PieChart({ chartData }) {
	return <Pie data={chartData} />;
}

export default PieChart;
