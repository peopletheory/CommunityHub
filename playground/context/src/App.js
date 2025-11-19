import {useState} from "react";

import Dashboard from './Dashboard';
import { DashboardContext } from './context';

function App() {
  const [name, setName] = useState("jordan");
  return (
    <>
      <div>
        <DashboardContext.Provider value={name}>
          <Dashboard />
        </DashboardContext.Provider>
      </div>
    </>
  );
}

export default App;
