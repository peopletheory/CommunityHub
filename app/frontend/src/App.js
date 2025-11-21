import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import { useHttpClient } from './shared/hooks/http-hook';
import { useAuth } from './shared/hooks/auth-hook';

import { ClientContext } from './shared/context/client-context';
import { AuthContext } from './shared/context/auth-context';

import Login from './Authentication/Login';
import HomeOne from './Home/HomeOne.jsx';
import Home from "./Home/Home.jsx";
import Members from './Members/Members.jsx';

import Background from './shared/components/UIElements/Background.jsx';
import TopBar from './shared/components/TopBar/TopBar.jsx';
import NavigationBar from './shared/navigation/NavigationBar.jsx';

function App() {
  const [domain, setDomain] = useState("caa");
  const [clientId, setClientId] = useState(null);
  const [clientName, setClientName] = useState(null);

  const { isLoading, error, sendRequest, clearError} = useHttpClient();
  const { token, login, logout, userId} = useAuth();

  useEffect(() => {
    const fetchClient = async () => {
      try{
        const responseData = await sendRequest(`http://localhost:3051/api/admin/getClientID`, "POST", 
          JSON.stringify({
            domain: domain
          }), {
                 "Content-Type": "application/json"
          });
          setClientId(responseData.clientID);
          setClientName(responseData.clientName);
      }
      catch(err) {
        console.log(err);
      }
    }

    fetchClient();
  }, [domain, sendRequest]);

  let routes;

  if(token){
    routes = (
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/members" exact={true}>
          <Members />
        </Route>
        {/* <Route path="/homeone" exact={true}>
          <HomeOne />
        </Route> */}
      </Switch>
    )
  }
  else{
    routes = (
      <Switch>
        <Route path="/" exact={true}>
          <Login />
        </Route>
      </Switch>
    )
  }

  let start;

  if(token){
    start = (
      <>
        <Background />
        <TopBar />
        <NavigationBar />
        <div className="mainContent">
          <div className="workspace">
            {routes}
          </div>
        </div>
      </>
    )
  }
  else{
    start = (
      <>
        <Background />
        {routes}
      </>
    )
  }

  return (
    <ClientContext.Provider value={{subdomain: domain, clientID: clientId, clientName: clientName}}>
      <AuthContext.Provider value={{ isLoggedIn: !!token, token: token, login: login, logout: logout, userId: userId}}>
        <Router>
          <main>
            {start}
          </main>
        </Router>
      </AuthContext.Provider>
    </ClientContext.Provider>
  );
}

export default App;
