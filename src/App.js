import React from 'react'
import * as que from './Calc'

function App(){
  return(
    <>
      <ol>
        <li>the sum of 2 nmber is{que.add(2,3)}</li>
        <li>the mul of 2 nmber is{que.mul(2,3)}</li>
        <li>the sub of 2 nmber is{que.sub(2,3)}</li>
        <li>the div of 2 nmber is{que.div(2,3)}</li>
      </ol>
    </>
  );
}
export default App;