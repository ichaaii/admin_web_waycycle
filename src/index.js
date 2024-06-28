import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/css/index.css';
// import { ThemeProvider } from '@material-tailwind/react';
import RouterList from './routes/RouterList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ThemeProvider> */}
      <RouterList />
    {/* </ThemeProvider> */}
  </React.StrictMode>
);

