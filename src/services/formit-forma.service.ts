
class FormaSaveService {
  getCookie(cookieName)
  {
    const nameLenPlus = (cookieName.length + 1);
    return document.cookie
      .split(';')
      .map(c => c.trim())
      .filter(cookie => {
        return cookie.substring(0, nameLenPlus) === `${cookieName}=`;
      })
      .map(cookie => {
        return decodeURIComponent(cookie.substring(nameLenPlus));
      })[0] || null;
  }
  
  accessSpacemaker(fromWeb, region)
  {
    let loginDialog = null;
    if(fromWeb)
    {
      loginDialog = window.open("https://app.spacemaker.ai/auth/login?rd=https%3A%2F%2Fapp.spacemaker.ai%2Fprojects", "_blank", "width= 500px, height=500px");
      let id = setInterval(() => {
        // try to retrieve cookie each 1s, and close popup in case of success
        let cookie = this.getCookie('ajs_user_id');
        if(cookie !== null)
        {
          clearInterval(id);
          if(loginDialog !== null)
          {
            loginDialog.close();
          } 
        }
      }, 1000);
    }
    else
    {
      //TODO for local debug, replace the first line with the following
      //const baseUrl = "https://local.spacemaker.ai:3001";
      let smRegionUrl = 'app.spacemaker.ai';
      if(region === 'eu')
      {
        smRegionUrl = 'app.spacemakerai.com';
      }
      const baseUrl = `https://${smRegionUrl}/web-components/FormIt-Forma/index.html`;
      const returnUrl = `${baseUrl}?region=${region}`;
      window.location.replace(`https://app.spacemaker.ai/auth/login?rd=${returnUrl}`);
    }
  }
}

export default new FormaSaveService();