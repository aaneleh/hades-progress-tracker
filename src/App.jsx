import { useState } from 'react'

function App() {

  const percentage = (10/20)*100;

  return (
    <main>
      <header className='title-header'>
        <h1 className='title-font title-tracking'>HADES</h1>
        <h4 className='title-font'>MONITOR DE PROGRESSO</h4>
      </header>
      
      <p>Esconder / exibir listas</p>
        
        <section className='progress-container'>

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
          <h2>Lista Pessoal</h2>
          
        </section>

        <section>
          <h2>Relacionamentos</h2>

          <div>
            <h3>Atena</h3>
            <p>♥ ♥ ♥ ♥ ♥ ♥ ♥</p>
            <details>
              <summary>Como desbloquear</summary>
              * Instrucoes de como desbloquear 
            </details>
          </div>

        </section>

        <section>
          <h2>Armas</h2>

        </section>

    </main>
  )
}

export default App
