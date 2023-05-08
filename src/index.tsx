import { useState } from "react"
import Login from './components/login.component';
import './index.css'

function Index() {
  function loginClick() {
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
        <h1 className="title">FormIt&lt;&gt;Forma</h1>
          <h3 className="title">Send data between FormIt and Forma</h3>
          <div id="AppControls">
            <div className="container mt-3">
              <div id="app">
                <div id="LoginControls" className="">
                  <h4>Select a region and start plugin to select a project</h4>
                  <select id="region-select" name="region">
                    <option value="eu">spacemaker.ai</option>
                    <option value="us">spacemakerai.com</option>
                  </select>
                  <button id="LoginButton" className="button is-link" onClick={loginClick}>
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
