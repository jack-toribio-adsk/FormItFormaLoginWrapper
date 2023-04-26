import ReactDOM from 'react-dom/client'
import { HashRouter } from "react-router-dom";
import Index from './index'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <div id="MainControls">
      <HashRouter>
        <Index />
      </HashRouter>
    </div>
  </>
);
