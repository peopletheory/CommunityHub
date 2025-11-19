import React, {useEffect, useState} from "react";
import axios from "axios";

const App = () => {
  const [msg, setMsg] = useState(null);
  const [cats, setCats] = useState([]);

  useEffect(() => {
    axios.get("http://api.localhost/api/ping", {withCredentials: true}).then(r => setMsg(r.data));
    axios.get("http://api.localhost/api/cats").then(r => setCats(r.data));
  }, []);

  return (
    <div style={{padding: 20}}>
      <h1>App on app.localhost</h1>
      <pre>{JSON.stringify(msg, null , 2)}</pre>
      <h2>Cats</h2>
      <pre>{JSON.stringify(cats, null, 2)}</pre>
    </div>
  )
}
export default App;