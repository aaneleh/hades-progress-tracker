import { useState } from 'react'
import { BsHeartFill, BsLinkedin, BsGithub, BsGoogle } from 'react-icons/bs'
import { RiTwitterXFill } from 'react-icons/ri'

function App() {

  const percentage = (10/20)*100

  const dialogIsOpen = false 

  return (
    <>
      <dialog open={dialogIsOpen} className='config'>
          <h3 className='config-text'>Marque para deixar visivel</h3>
          <p className='config-text'>Seu progresso continuará salvo e você pode voltar a exibi-los mais tarde.</p>
          <div className='config-wrapper'>

            <div className='config-card'>
              <div className="checkbox">
                <input type="checkbox" checked={true} onChange={(e) => console.log(e.target.checked)} name="progress-bars" id="progress-bars" />
              </div>                
              <label htmlFor="progress-bars">Barras de progresso</label>
            </div>

            <div className='config-card'>
              <div className="checkbox">
                <input type="checkbox" checked={true} onChange={(e) => console.log(e.target.checked)} name="personal-todo" id="personal-todo" />
              </div>                
              <label htmlFor="personal-todo">Lista pessoal</label>
            </div>

            <div className='config-card'>
              <div className="checkbox">
                <input type="checkbox" checked={true} onChange={(e) => console.log(e.target.checked)} name="relationships" id="relationships" />
              </div>                
              <label htmlFor="relationships">Relacionamentos</label>
            </div>

            <div className='config-card'>
              <div className="checkbox">
                <input type="checkbox" checked={true} onChange={(e) => console.log(e.target.checked)} name="weapons" id="weapons" />
              </div>                
              <label htmlFor="weapons">Armas</label>
            </div>
          </div>

          <div className="config-buttons">
            <p className='clear-button' >Cancelar</p>
            <button>
              <p>
                Salvar
              </p>
            </button>
          </div>
      </dialog>

      <main className={dialogIsOpen ? 'blured' : ''}>
        <header className='title-header'>
          <h1 className='title-font title-tracking'>HADES</h1>
          <h4 className='title-font'>MONITOR DE PROGRESSO</h4>
        </header>
      
        <p className='clear-button'>Esconder / exibir listas</p>

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
                <button className='square-button' disabled={true}> - </button>
                <h4>
                  <span> 0 </span> / <span> 5 </span>
                </h4>
                <button className='square-button' disabled={false}> + </button>
              </div>
            </div>
            <div className='personal-todo-card'>
              <h4>
                Coletar sangue
              </h4>
              <div className='personal-todo-buttons'>
                <button className='square-button' disabled={true}> - </button>
                <h4>
                  <span> 0 </span> / <span> 5 </span>
                </h4>
                <button className='square-button' disabled={false}> + </button>
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
          <div className="footer-social">
            <a href="https://mail.google.com/mail/u/0/?fs=1&to=helenakurzgon@gmail.com&tf=cm"> {/* @todo adicionar links */}
              <BsGoogle/>
            </a>
            <a href="https://github.com/aaneleh">
              <BsGithub/>
            </a>
            <a href="https://www.linkedin.com/in/helena-kurz-1738a2256/">
              <BsLinkedin/>
            </a>
            <a href="https://twitter.com/helena_kurzzz">
              <RiTwitterXFill/>
            </a>
          </div>
          <div className='footer-references'>
            <p>
              <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2238809372">Companheiro</a>
            </p>
            <p>
            <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2248251083">Aspectos de armas</a>
            </p>
            <p>
              <a href="https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Fjpqyiulxi8a61.jpg">Imagem de fundo</a>
            </p>
          </div>
        </footer>
    </main>
    </>
    
  )
}

export default App
