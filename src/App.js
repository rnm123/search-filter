
import { useState } from 'react';
import './App.css';


function App() {
  const jsondata = [
    {
      "id": 1,
      "first_name": "Lauren"
    },
    {
      "id": 2,
      "first_name": "Arvin"

    },
    {
      "id": 3,
      "first_name": "Pammie"
    },
    {
      "id": 4,
      "first_name": "Dal"

    },
    {
      "id": 5,
      "first_name": "Chadwick"
    },
    {
      "id": 6,
      "first_name": "Florencia"
    },
    {
      "id": 7,
      "first_name": "Maxy"
    },
    {
      "id": 8,
      "first_name": "Wes"
    },
    {
      "id": 9,
      "first_name": "Arin"
    },
    {
      "id": 10,
      "first_name": "Bibbie"
    }
  ]
  let [data1, updatedata] = useState("")

  return (
    <div className="App">
      <input type="text" placeholder='search...' onChange={obj => updatedata(obj.target.value)} />
      {
        jsondata.filter((item) => {
          return Object.values(item).join('').toLowerCase().includes(data1.toLowerCase())
        }).map((val, index) => {
          return <p>{val.first_name}</p>
        })
      }
    </div>
  );
}

export default App;
