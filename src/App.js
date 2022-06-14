import "./App.css";
import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import UserDetails from "./components/UserDetails";
import axios from "axios";
import BasePlate from "./components/BasePlate";

function App() {
  const [currUserId, setCurrUserId] = useState(-1);
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const res = await (
        await axios.get(`https://reqres.in/api/users?page=1}`)
      ).data;
      setData(res.data);
    };
    getData();
  }, []);

  return (
    <div className="App">
      {currUserId === -1 ? (
        <BasePlate />
      ) : (
        <UserDetails currUserId={currUserId} />
      )}
      <Footer setCurrUserId={setCurrUserId} data={data} />
    </div>
  );
}

export default App;
