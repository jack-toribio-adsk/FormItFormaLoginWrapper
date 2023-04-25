import { useEffect } from "react";
import './App.css'

function App() {
  debugger

  useEffect(() => { 
    debugger

    const userapi = "https://app.spacemaker.ai/api/auth/userinfo";

    fetch(`${userapi}`)
      .then(res => {
        if (!res.ok) {
          // redirect to plugin login page
          const loginpage = "https://app.spacemaker.ai/web-components/FormIt-Forma/login.html";
          window.location.href = loginpage;
        }
        else {
          // redirect to plugin index page
          const indexpage = "https://app.spacemaker.ai/web-components/FormIt-Forma/index.html";
          window.location.href = indexpage;
        }
      });
  }, [])

  return (
      <div id="PluginFacadeWrapper">
        <div id='PluginFacadeContainer'>
          <h1 className="title">FormIt-Plugin-Facade</h1>
          <div id="NoAccess" hidden>
            <div>
                <div className="alertIcon"></div>
            </div>
            <div>
                It looks like your web browser is in private or incognito mode. 
                FormIt-Forma plugin needs to save data to the local storage, so it can only be used in standard browsing mode.
                <br/>
                <br/>
                To use FormIt Plugin Facade, please switch to standard browsing mode.
            </div>
          </div>
        </div>
      </div>
  )
}

export default App
