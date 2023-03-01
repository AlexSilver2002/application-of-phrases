import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import Card from './components/Card/Card'
import Title from './components/Title/Title'
import data from './assets/phrases.json'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function changePhrase() {
    const newIndex = Math.floor(Math.random() * data.length);
    setCurrentIndex(newIndex);
  }

  return (
    <div>
      <Title />
      <Card data={data[currentIndex]} />
      <p>-{data[currentIndex].author}</p>
      <Button onClick={changePhrase} />
      
    </div>
  );
}

export default App;