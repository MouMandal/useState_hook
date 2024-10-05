
import { useState } from 'react'
import './App.css'

function App() {

  /*useState*/
  const [text, setText] = useState("Rimi Mandal");
  const changeButton = () => {
    if (text == "Rimi Mandal") {
      const texts = "My name is Mou Mandal";
      setText(texts);
      console.log(texts);
    }
    else {
      setText("Rimi Mandal");
    }

  }

  return (
    <>
      {/* useState */}
      <p>{text}</p>
      <button type="button" className="btn btn-outline-success" onClick={changeButton}>Success</button>
    </>
  )
}

export default App
