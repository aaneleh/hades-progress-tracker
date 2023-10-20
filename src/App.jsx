import { useState } from 'react'
import { BsHeartFill } from 'react-icons/bs'

function App() {

  const percentage = (10/20)*100;

  return (
    <main>
      <header className='title-header'>
        <h1 className='title-font title-tracking'>HADES</h1>
        <h4 className='title-font'>MONITOR DE PROGRESSO</h4>
      </header>
      
      <p className='underline'>Esconder / exibir listas</p>
        
        <section className='progress-wrapper'>
          <div className='progress-card'>
            <h3>
              Lembrancinhas <span> 15/20 </span>
            </h3>
            <div className='progress-bar'>
                <div style={{ transform: `translateX(${ percentage*1.05 }%)`}} > 
                  <div className='progress-bar-filled'></div>
              </div>
            </div>
          </div>
          <div className='progress-card'>
            <h3>
              [REDACTED] <span> 0/6 </span>
            </h3>
            <div className='progress-bar'>
              <div style={{ transform: `translateX(${ percentage*1.05 }%)`}} > 
                <div className='progress-bar-filled'></div>
              </div>
            </div>
          </div>
          <div className='progress-card'>
            <h3>
              Armas <span> 20/26 </span>
            </h3>
            <div className='progress-bar'>
              <div style={{ transform: `translateX(${ percentage*1.05 }%)`}} > 
                <div className='progress-bar-filled'></div>
              </div>
            </div>
          </div>
        </section>

        <section className='personal-todo'>
          <header>
            <h2>Lista Pessoal</h2>
          </header>
          <div className='personal-todo-wrapper'>
            <div className='personal-todo-card'>
              <h4>
                Coletar nectar
              </h4>
              <div className='personal-todo-buttons'>
                <button disabled={true}> - </button>
                <h4>
                  <span> 0 </span> / <span> 5 </span>
                </h4>
                <button> + </button>
              </div>
            </div>
            <div className='personal-todo-card'>
              <h4>
                Coletar sangue
              </h4>
              <div className='personal-todo-buttons'>
                <button disabled={true}> - </button>
                <h4>
                  <span> 0 </span> / <span> 5 </span>
                </h4>
                <button> + </button>
              </div>
            </div>
            <div className='personal-todo-card-add'>
                <h4> + </h4>
            </div>
          </div>
        </section>

        <section className='relationships'>
          <h2>Relacionamentos</h2>
          <div className='relationships-wrapper'>
            <div className='relationships-card'>
              <h3>Atena</h3>
              <div className='relationships-hearts'>
                <BsHeartFill className='heart-filled'/>
                <BsHeartFill className='heart-filled'/>
                <BsHeartFill className='heart-filled'/>
                <BsHeartFill className='heart-filled'/>
                <BsHeartFill/>
                <BsHeartFill/>
                <BsHeartFill/>
                <BsHeartFill/>
              </div>
              <details>
                <summary>Como desbloquear</summary>
                * Instrucoes de como desbloquear 
              </details>
            </div>
            <div className='relationships-card'>
              <h3>Dionísio</h3>
              <div className='relationships-hearts'>
                <BsHeartFill className='heart-filled'/>
                <BsHeartFill className='heart-filled'/>
                <BsHeartFill className='heart-filled'/>
                <BsHeartFill className='heart-filled'/>
                <BsHeartFill className='heart-filled'/>
                <BsHeartFill className='heart-filled'/>
                <BsHeartFill className='heart-filled'/>
                <BsHeartFill/>
              </div>
              <details>
                <summary>Como desbloquear</summary>
                * Instrucoes de como desbloquear *
              </details>
            </div>
          </div>
        </section>

        <section className='weapons'>
          <h2>Armas</h2>
          <div className="weapons-wrapper">

            <div className="weapon-card">
              <h3>Stygius: A lâmina do submundo</h3>
              <div className='weapon-aspect'>
                <div className="checkbox">
                  <input type="checkbox" onChange={(e) => console.log(e.target.checked)} name="stygius_zagreus" id="stygius_zagreus" />
                </div>                
                <label htmlFor="stygius_zagreus">Aspecto de Zagreus</label>
              </div>
              <div className='weapon-aspect'>
                <div className="checkbox">
                  <input type="checkbox" onChange={(e) => console.log(e.target.checked)} name="nemesis" id="nemesis" />
                </div>                
                <label htmlFor="nemesis">Aspecto de Nemesis</label>
              </div>
              <div className='weapon-aspect'>
                <div className="checkbox">
                  <input type="checkbox" onChange={(e) => console.log(e.target.checked)} name="poseidon" id="poseidon" />
                </div>                
                <label htmlFor="poseidon">Aspecto de Poseidon</label>
              </div>
              <div className='weapon-aspect'>
                <div className="checkbox">
                  <input type="checkbox" onChange={(e) => console.log(e.target.checked)} name="arthur" id="arthur" />
                </div>                
                <label htmlFor="arthur">[REDACTED]</label>
              </div>
            </div>

            <div className="weapon-card">
              <h3>Aegis: o escudo do caos</h3>
              <div className='weapon-aspect'>
                <div className="checkbox">
                  <input type="checkbox" onChange={(e) => console.log(e.target.checked)} name="aegis_zagreu" id="aegis_zagreu" />
                </div>                
                <label htmlFor="aegis_zagreu">Zagreu</label>
              </div>
              <div className='weapon-aspect'>
                <div className="checkbox">
                  <input type="checkbox" onChange={(e) => console.log(e.target.checked)} name="chaos" id="chaos" />
                </div>                
                <label htmlFor="chaos">Chaos</label>
              </div>
              <div className='weapon-aspect'>
                <div className="checkbox">
                  <input type="checkbox" onChange={(e) => console.log(e.target.checked)} name="zeus" id="zeus" />
                </div>                
                <label htmlFor="zeus">Zeus</label>
              </div>
              <div className='weapon-aspect'>
                <div className="checkbox">
                  <input type="checkbox" onChange={(e) => console.log(e.target.checked)} name="beowulf" id="beowulf" />
                </div>                
                <label htmlFor="beowulf">[REDACTED]</label>
              </div>
            </div>
            
          </div>
        </section>

        <footer className='footer'>
          {/* @todo creditos a mim, ao jogo, aos meus guias, e ao background */}
        </footer>

    </main>
  )
}

export default App
