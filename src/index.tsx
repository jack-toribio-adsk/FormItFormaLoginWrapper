import Login from './components/login.component';
import './index.css'

function Index() {
  return (
      <div id="PluginWrapper">
        <div id='PluginContainer'>
        <h1 className="title">FormIt-Forma</h1>
          <h3 className="title">Send data between FormIt and Forma</h3>
          <div id="AppControls">
            <div className="container mt-3">
              <div id="app">
                <div id="LoginControls" className="">
                  <h4>Start plugin to select a project</h4>
                  <button id="LoginButton" className="button is-link" onClick={Login.login}>
                    <span>Start plugin</span>
                    <i className="fab fa-github fa-lg"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
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

export default Index
