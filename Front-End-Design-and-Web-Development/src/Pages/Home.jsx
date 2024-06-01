import Video from '../Componentes/Home/Video/Video'
import Importancia from '../Componentes/Home/Importancia/Importancia';
import Realidade from '../Componentes/Home/Realidade/Realidade';

export default function Home() {
    return (
      <main> 
        <Video/>
        <div className='container'>
          <Importancia/>
          <Realidade/>
        </div>
      </main>
    );
  }
  