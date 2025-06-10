import {Ejercicio01} from './components/Ejercicio01'
import {BotonGeneral} from './components/utils/BotonGeneral';
import {ContenedorBotones} from './components/utils/ContenedorBotones'
function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-2 text-center alert alert-success">
              Hola UTSH 
            </h1>
          </div>
        </div>

      {/** Mando llamar componente externo */}
      <Ejercicio01/>
      <BotonGeneral/>

      <ContenedorBotones/>
      </div>
    </>
  )
}

export default App
