import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    // Making a GET request to the provided API
    axios.get('https://api.freeapi.app/api/v1/public/dogs')
      .then(response => {
        // Log the data from the API
        console.log(response.data);
        setData(response.data.data.data)
      })
      .catch(error => {
        // Handle any errors
        console.error('There was an error fetching the data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Fetching Random Products</h1>
      <div>
        <ul>
          {
            data.map((ele) => {
              return (
                <div key={ele.id}>
                  <li >{ele.id}</li>
                  <li >{ele.bred_for}</li>
                  <li >{ele.breed_group}</li>
                  <li >{ele.height.imperial}</li>
                  <li >{ele.height.metric}</li>
                  <li ><img src={ele.image.url} alt="img" /></li>
                </div>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
