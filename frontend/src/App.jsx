import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/test');
            const data = await response.json();
            setData(data.message);
        }
        fetchData();
    }, []);

  return (
    <div>
      {data}
    </div>
  );
}

export default App;