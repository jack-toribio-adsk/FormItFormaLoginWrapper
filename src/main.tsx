import ReactDOM from 'react-dom/client'
import { HashRouter } from "react-router-dom";
import App from './index'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <div id="MainControls">
      <HashRouter>
        <App />
      </HashRouter>
    </div>
  </>
);
