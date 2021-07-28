import React, {useState} from 'react';
import { square } from '@ivankoretskyy/matrix-utils'
import { useEffect } from 'react';


export const App: React.FC = () => {

  const [value, setValue] = useState(0);
  const [calculated, setCalculated] = useState(0)

  useEffect(() => {
    fetch(`http://localhost:3000/multiply?number=${value}`)
    .then(response => response.json())
    .then(json => {setCalculated(square(json.data))});
  }, [value]);

  return (
    <div>
      <div>
      <input type="number" onChange={e => {setValue(+e.target.value)}}/>
      </div>
      <div>
        {calculated}
      </div>
    </div>
  )
}