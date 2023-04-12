import React, { useState } from 'react';
import './index.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <h2 className='text-3xl font-bold text-red-600 underline'>
        landing page
      </h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}

export default App;
