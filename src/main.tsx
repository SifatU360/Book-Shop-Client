import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from "react-redux";
import { Store } from './Redux/store';
import App from './App';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={Store}>   
        <App/>  
    </Provider>
  </StrictMode>,
)
