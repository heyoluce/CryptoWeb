import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useCrypto } from '../../context/crypto-context';

ChartJS.register(ArcElement, Tooltip, Legend);





export default function PortfolioChart() {
    const {assets} = useCrypto()
    
    const data = {
        labels: assets.map((a) => a.name),
        datasets: [
            {
                label: '$',
                data: assets.map((c) => c.totalAmount),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',   // Красный
                    'rgba(54, 162, 235, 0.6)',   // Синий
                    'rgba(255, 206, 86, 0.6)',   // Желтый
                    'rgba(75, 192, 192, 0.6)',   // Зеленый
                    'rgba(153, 102, 255, 0.6)',  // Фиолетовый
                    'rgba(255, 159, 64, 0.6)',   // Оранжевый
                ],
                hoverBackgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                    'rgba(255, 159, 64, 0.8)',
                ],
                borderWidth: 1,
            },
        ],
    };
    
    return <div style={{ display: 'flex', marginBottom: '1rem', justifyContent: 'center', height: '400px'}}>
        <Pie data={data} />
        </div>
}

