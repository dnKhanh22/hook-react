import './App.css';
// import PostItem from './PostItem';
import { useState } from 'react';

const gifts =[
  'cpu i9',
  'ram 32gb rbg',
  'rgb keyboard',
]
function App() {

  const [gift, setGift] = useState();
  const randomGift = () =>{
    const index = Math.floor(Math.random()* gifts.length)

    setGift(gifts[index]);
  }

  return (
    <div style={{ padding: 30}} >
     <h1>{gift || 'Chưa có phần thưởng'}</h1>
     <button onClick={randomGift}>Lấy thưởng</button>
    </div>
  );
}

export default App;