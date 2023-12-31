import React from 'react';
import App from './App';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import ReactDOM from 'react-dom/client';

const options = {
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: '30px',
    transition: transitions.SCALE
}
  
const Root = () => (
    <AlertProvider template={AlertTemplate} {...options}>
        <App />
    </AlertProvider>
)
  
ReactDOM.createRoot(document.getElementById('root')).render(<Root />);

