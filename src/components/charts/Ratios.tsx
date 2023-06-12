// Next
import Image from 'next/image';

// React
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js';

// Images
import DotsVertical from '../../assets/icons/dots-vertical.svg';

// Styles
import * as S from './Charts.styles';

// Models
import { LineChartProps } from 'models';

// Components
import { Broadcast } from 'components/broadcast';

import { Chart, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';
Chart.register(CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement, LineElement);

const RatiosChart = ({ data, labels }: LineChartProps) => {
    const menu = [{ name: 'Gest/Obst' }, { name: 'Monit/Gest' }, { name: 'Lemb/Gest' }, { name: 'Alto risco/total' }];

    const [selectedItem, setSelectedItem] = useState<number | null>(0);

    const handleItemClick = (index: number) => {
        setSelectedItem(index);
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
                <Broadcast name={'Ratios'} />
                <Image src={DotsVertical} alt="icon" />
            </div>

            <S.ChartStyle>
                <ul>
                    {menu.map((props, index) => (
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

export default RatiosChart;
