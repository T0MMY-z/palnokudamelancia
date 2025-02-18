import {  useState } from 'react'
import './App.css'

function App() {
  const [emojis, setEmojis] = useState(['👌','🤷‍♀️','🤞','🎶','😶‍🌫️','🤢','🥶','😵‍💫','😈','👻','🙊','🦒','😁','😂','🥺','🤩','😎','😭','🥳','🤗','🧡','💀','👑','🔥','🌈','🌟','💪','🍀', '🌸','🍓','🍕','🍦','🥑','🥨','🍿','🍷','☕','🍻','🦋','🐒','🦄','🐼','🐯', '🐷','🐮','🐯','🦁','🐨','🦉','🐍','🦖','🐍','🐦','🦅','🦇','🦓','🐆','🐴', '🐗','🐺','🦝','🦣','🐶','🐾','🎨','🧩','🖤','🌍','✨','🌻','🌹','🍀','🦄'])
  const [emoji, setEmoji] = useState('❤️')

  function sortearEmoji(){
    if(emojis.length > 0){
    let i = Math.floor(Math.random() * emojis.length)
    setEmoji(emojis[i])
    setEmojis([...emojis.filter((e) => e != emojis[i])]) 
    }else{
      alert("Acafou")
    }
    
  }

  return (
    <div className='container-app'>
        <p className='emoji' onClick={sortearEmoji}>{emoji}</p>
        {/* {emojis}    */}
    </div>
  )
}

export default App
