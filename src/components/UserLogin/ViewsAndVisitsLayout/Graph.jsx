import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Views',
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#fcb812',
            borderColor: '#fcb812',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'black',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 7,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'white',
            pointHoverBorderColor: '#fcb812',
            pointHoverBorderWidth: 3,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: 'Unique Views',
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#fcb812',
            borderColor: '#fcb812',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'black',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 7,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'white',
            pointHoverBorderColor: '#fcb812',
            pointHoverBorderWidth: 3,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [15, 69, 40, 41, 26, 65, 20]
        }
    ]
};

const Graph = () => {
    return (
        <>
            <div style={{ height: '100%' }}>
                <Line data={data} redraw={true} options={{
                    maintainAspectRatio: false
                }} />
            </div>
        </>
    );
}

export default React.memo(Graph);