import { useState } from 'react';
import Clicks from './components/Clicks';
import ClickerButton from './components/ClickerButton'

function App() {

  const [clicks, setClicks] = useState(0)

  const handleOnClick = () => {
    console.log("here")
    setClicks(clicks=>clicks = clicks + 1)
  }

  return (
    <div>
      <Clicks clicks={clicks} />
      <ClickerButton onClick={handleOnClick}/>
    </div>
  );
}

export default App;
