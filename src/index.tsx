import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



let passengers = [
    {name: 'Илья Морозов',
        telephone: '+79432735838',
        startTime: '15:30',
        pointFrom: {longitude: 34.8573487, latitude: 67.24534},
        pointTo: {longitude: 34.8573487, latitude: 67.24534}
    },
    {name: 'Ева Савельева',
        telephone: '+78765423',
        startTime: '19:30',
        pointFrom: {longitude: 34.8573487, latitude: 67.24534},
        pointTo: {longitude: 34.8573487, latitude: 67.24534}
    },
    {name: 'Олег Васильев',
        telephone: '+78674537575',
        startTime: '12:00',
        pointFrom: {longitude: 34.8573487, latitude: 67.24534},
        pointTo: {longitude: 34.8573487, latitude: 67.24534}
    }
]

let drivers = [
    {name: 'Ольга Макарова',
        telephone: '+79432735838',
        startTime: '15:30',
        pointFrom: {longitude: 34.8573487, latitude: 67.24534},
        pointTo: {longitude: 34.8573487, latitude: 67.24534}
    },
    {name: 'Илья Воробьев',
        telephone: '+78765423',
        startTime: '19:30',
        pointFrom: {longitude: 34.8573487, latitude: 67.24534},
        pointTo: {longitude: 34.8573487, latitude: 67.24534}
    },
    {name: 'Анна Журавлева',
        telephone: '+78674537575',
        startTime: '12:00',
        pointFrom: {longitude: 34.8573487, latitude: 67.24534},
        pointTo: {longitude: 34.8573487, latitude: 67.24534}
    }
]
root.render(
  <React.StrictMode>
    <App passengers={passengers} drivers={drivers}/>
  </React.StrictMode>
);

reportWebVitals();
