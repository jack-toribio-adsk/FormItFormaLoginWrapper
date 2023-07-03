import Login from './components/login.component';
import './index.css'
import { WeaveSelect, WeaveSelectOption } from "./components/domain-selector/FormaComponents";

function Index() {
  function loginClick() {
    debugger

    let regionSelect = (document.getElementById("region-select")) as HTMLSelectElement;
    let region = 'us';
    if(regionSelect !== null)
    {
      region = regionSelect.value;
    }
  
    Login.login(region);
  }
  

  return (
      <div id="PluginWrapper">
        <div id='PluginContainer'>
          <h3 className="title">Send data between FormIt and Forma</h3>
          <div id="AppControls">
            <div className="container mt-3">
              <div id="app">
                <div id="LoginControls" className="">
                  <div id="login-lbl">Select a region and start plugin to select a project</div>
                  <div id="domainSelectorContainer" className="col-md-12">
                    <WeaveSelect 
                      id="region-select"
                      value={"eu"}
                      class="fetchSelect"
                    >
                      <WeaveSelectOption 
                        value="eu" 
                        key="eu" 
                        class="fetchSelectOption">
                        app.autodeskforma.eu
                      </WeaveSelectOption>
                      <WeaveSelectOption 
                        value="us" 
                        key="us" 
                        class="fetchSelectOption">
                        app.autodeskforma.com
                      </WeaveSelectOption>
                    </WeaveSelect>
                  </div>
                  <button id="LoginButton" className="button is-link" onClick={loginClick}>
                    <span>Login to Forma</span>
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
