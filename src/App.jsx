import './App.css'
import Contador from './Contador'
import Alerta from './Alerta'
import Gallery from './Gallery'
import Gallery2 from './Gallery2'
import ReactPlayer from 'react-player/youtube'


function App() {


  return (
    <>
      <Alerta />
      <Gallery />
      <Contador /> 
      <Gallery2 />
      <ReactPlayer
          url="https://www.youtube.com/playlist?list=PLT4UOddYZmixW8W9R5ZTJgC3BJ9pQ_keF"
          height="0.1px"
          playing={true}
          controls={true}
          volume={0.2}
      />
    </>
  )
}

export default App
