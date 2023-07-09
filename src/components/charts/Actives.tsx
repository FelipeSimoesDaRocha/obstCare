// Next
import Image from 'next/image';

// React
import { SetStateAction, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js';

// Images
import DotsVertical from '../../assets/icons/dots-vertical.svg';

// Styles
import * as S from './Charts.styles';

// Models
import { LineChartProps } from './models';

// Moment
import moment from 'moment';

// Components
import { Broadcast } from 'components/broadcast';

import { Chart, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';
Chart.register(CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement, LineElement);

const ActivesChart = ({ data, labels }: LineChartProps) => {
    const menu = [{ name: 'Obstetras' }, { name: 'Gestantes' }];

    const [selectedItem, setSelectedItem] = useState<number | null>(0);
    const [selectedDate, setSelectedDate] = useState(moment());
    const [selectedPeriod, setSelectedPeriod] = useState('daily');

    const handleItemClick = (index: number) => {
        setSelectedItem(index);
    };

    const handleDateChange = (e: { target: { value: moment.MomentInput } }) => {
        const date = moment(e.target.value);
        setSelectedDate(date);
    };

    const handlePeriodChange = (e: { target: { value: SetStateAction<string> } }) => {
        setSelectedPeriod(e.target.value);
    };

    const chartData = {
        labels,
        datasets: [
            {
                label: 'Obstetras',
                data,
                fill: false,
                borderColor: '#0F60FF',
                borderWidth: 4,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 10,
                },
            },
        },
    };

    return (
        <S.Component>
            <div className="header_chart">
                <Broadcast name={'Ativos'} />
                <Image src={DotsVertical} alt="icon" />
            </div>

            <div className="filterDate">
                <input type="date" value={selectedDate.format('YYYY-MM-DD')} onChange={handleDateChange} />
                -
                <input type="date" value={selectedDate.format('YYYY-MM-DD')} onChange={handleDateChange} />
                <select value={selectedPeriod} onChange={handlePeriodChange}>
                    <option value="daily">Diário</option>
                    <option value="monthly">Mensal</option>
                    <option value="yearly">Anual</option>
                </select>
            </div>

            <S.ChartStyle>
                <ul>
                    {menu.length > 0 &&
                        menu.map((props, index) => (
                            <li
                                key={index}
                                onClick={() => handleItemClick(index)}
                                style={{
                                    borderBottom: selectedItem === index ? '3px solid #2613f5 ' : ' 3px solid #e9e7fd',
                                    cursor: 'pointer',
                                }}
                            >
                                <p>{props.name}</p>
                            </li>
                        ))}
                </ul>
                <Line data={chartData} options={options} />
            </S.ChartStyle>
        </S.Component>
    );
};

export default ActivesChart;
