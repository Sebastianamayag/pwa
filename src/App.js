import React, { useEffect, useState } from 'react';
import logo from './logo.svg';

function App() {

  const [data, setData] = useState([]);
  const [cargando, setCargando] = useState(false);
  useEffect(() => {
    traerData();
  }, [])

  const traerData=async()=>{
    const resp=await fetch('https://jsonplaceholder.typicode.com/users');
    const body=await resp.json();
    setData(body);
    setCargando(true);
  }

  return (
    <div style={{display:'flex',flex:1,height:'100%',alignItems:'center'}}>
      {
        !cargando?
        (
          <div>
            <p>Cargando.....</p>
          </div>
        ):
        (
          <div>
            <table>
              <thead>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
              </thead>
                {
                  data.map((dats,key)=>
                  (
                    <tbody>
                      <td>{dats.name}</td>
                      <td>{dats.username}</td>
                      <td>{dats.email}</td>
                      <td>{dats.phone}</td>
                    </tbody>
                  )
                  )
                }
            </table>
          </div>
        )
      }
    </div>
  );
}

export default App;
