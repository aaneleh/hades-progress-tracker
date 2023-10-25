import { useEffect, useState } from 'react'
import { BsHeartFill, BsLinkedin, BsGithub, BsGoogle } from 'react-icons/bs'
import { RiTwitterXFill } from 'react-icons/ri'

function App() {

  const [progress, setProgress ] = useState([
    {
      name: 'Lembrancinhas',
      currentNumber: 23,
      maxNumber: 25
    },
    {
      name: 'Companheiros',
      currentNumber: 1,
      maxNumber: 6
    },
    {
      name: 'Armas',
      currentNumber: 15,
      maxNumber: 20
    },
  ])
  const [todoList, setTodoList] = useState([
    /* @todo ainda ñ feito */
  ]) 
  const [configs, setConfigs] = useState({
    progress: true,
    personalTodo: true,
    relationships: true,
    weapons: true,
  })
  const [relationships, setRelationships] = useState([
    {
      name: "Hades",
      hearts: 0,
      hasCompanion: false,
      howToUnlock: "Complete the base game (post-credits)."
    },
    {
      name: "Nyx",
      hearts: 0,
      hasCompanion: false,
      howToUnlock: "Talking to Chaos and Nyx enough times so that Nyx mentions attempting to reconnect with Chaos. You must have Administrative Chamber access. talking to Chaos and Nyx enough times so that Nyx mentions attempting to reconnect with Chaos. Then purchase the Work Order to restore the Eldest Sigil, for 3142 Darkness"
    },
    {
      name: "Charon",
      hearts: 0,
      hasCompanion: false,
      howToUnlock: "Spend at least 10,000 gold in his shops"
    },
    {
      name: "Hypnos",
      hearts: 0,
      hasCompanion: false,
      howToUnlock: "Talk to both Hypnos and Thanatos (while both are in the House of Hades) enough times to progress the storyline of improving Hypnos’ work ethic/ability."
    },
    {
      name: "Thanatos",
      hearts: 0,
      hasCompanion: true,
      howToUnlock: "After getting to the locked heart, beat (or tie) Thanatos during one of his “Death Approaches” unique encounter in a run."
    },
    {
      name: "Megaera",
      hearts: 0,
      hasCompanion: true,
      howToUnlock: "Once you encounter Megaera enough times while escaping Tartarus, a cutscene will appear where Megaera will talk to Zagreus in his room. After the second of such cutscenes, the heart should unlock."
    },
    {
      name: "Chaos",
      hearts: 0,
      hasCompanion: false,
      howToUnlock: "Talking to Chaos and Nyx enough times so that Nyx mentions attempting to reconnect with Chaos. You must have Administrative Chamber access. talking to Chaos and Nyx enough times so that Nyx mentions attempting to reconnect with Chaos. Then purchase the Work Order to restore the Eldest Sigil, for 3142 Darkness"
    },
    {
      name: "Zeus",
      hearts: 0,
      hasCompanion: false,
      howToUnlock: "Requires you to hear at least 5 other gods’ opinions about him. Likely to happen when getting boons from Zeus and others gods in the same run."
    },
    {
      name: "Poseidon",
      hearts: 0,
      hasCompanion: false,
      howToUnlock: "Acquire the Rod of Fishing (unlocked reaching the final boss), then catch at least 18 fish in total."
    },
    {
      name: "Athena",
      hearts: 0,
      hasCompanion: false,
      howToUnlock: "Requires you to hear 3 unique congratulatory lines from Athena, upon completing a successful run."
    },
    {
      name: "Aphrodite",
      hearts: 0,
      hasCompanion: false,
      howToUnlock: "Complete all three romanceable characters’ storylines: Thanatos, Megaera, Dusa."
    },
    {
      name: "Artemis",
      hearts: 0,
      hasCompanion: false,
      howToUnlock: "Talk to Artemis enough times to progress through her dialogue regarding her hunting-partner, Callisto."
    },
    {
      name: "Ares",
      hearts: 0,
      hasCompanion: false,
      howToUnlock: "Complete the “War-God’s Bloodlust” prophecy (slay at least 10,000 enemies total across your runs), unlocked after slaing atleast 2000 enemies."
    },
    {
      name: "Dionísio",
      hearts: 0,
      hasCompanion: false,
      howToUnlock: "Gift Ambrosia to at least 6 different characters, with a total of at least 10 Ambrosia gifted total."
    },
    {
      name: "Hermes",
      hearts: 0,
      hasCompanion: false,
      howToUnlock: "Talk to Hermes with a fully upgraded (three-star) Lambent Plume, which is his keepsake."
    },
    {
      name: "Demeter",
      hearts: 0,
      hasCompanion: false,
      howToUnlock: "Demeter's heart is unlocked after completing the Epilogue and upon talking to her in subsequent runs."
    },
    {
      name: "Persefone",
      hearts: 0,
      hasCompanion: false,
      howToUnlock: "After beating the game (post-credits), continue to talk to Persephone after each run when she is back at the House of Hades."
    },
    {
      name: "Achilles",
      hearts: 0,
      hasCompanion: true,
      howToUnlock:  "Talk to Achilles and Patroclus enough times for Patroclus to mention a code phrase, afterwards, purchase the contract binding Achilles to the House of Hades, also make sure to talk to Nyx enough times. Upon seeing them together in Elysium, the heart for Achilles is unlocked."
    },
    {
      name: "Orpheus",
      hearts: 0,
      hasCompanion: false,
      howToUnlock:  "After talking to Orpheus and Eurydice (separately) enough times and hearing their implied longing to see one another, Zagreus can purchase the contract binding Orpheus to the House of Hades. Upon seeing them together in Asphodel, the heart for Orpheus is unlocked."
    },
    {
      name: "Sisyphus",
      hearts: 0,
      hasCompanion: true,
      howToUnlock:  "After encountering Sisyphus enough times in Tartarus, Zagreus will mention attempting to lighten Sisyphus’ punishment. Then talk to Hades and Megaera enough times to get their opinions on Sisyphus' punishment and make sure to talk to Bouldy (the big rock/boulder next to Sisyphus). The next time you meet Sisyphus in Tartarus, the heart for Sisyphus is unlocked."
    },
    {
      name: "Euridice",
      hearts: 0,
      hasCompanion: false,
      howToUnlock:  "After talking to Orpheus and Eurydice (separately) enough times and hearing their implied longing to see one another, Zagreus can purchase the contract binding Orpheus to the House of Hades. Upon seeing them together in Asphodel, the heart for Orpheus is unlocked."
    },
    {
      name: "Patroclus",
      hearts: 0,
      hasCompanion: false,
      howToUnlock:  "Talk to Achilles and Patroclus enough times for Patroclus to mention a code phrase, afterwards, purchase the contract binding Achilles to the House of Hades, also make sure to talk to Nyx enough times. Upon seeing them together in Elysium, the heart for Achilles is unlocked."
    },
    {
      name: "Cerberus",
      hearts: 0,
      hasCompanion: false,
      howToUnlock:  "Pet Cerberus at least 20 times."
    },
    {
      name: "Dusa",
      hearts: 0,
      hasCompanion: true,
      howToUnlock:  "Complete the “A Place of Revelry” prophecy, unlocked by talking to Dusa enought times. To complete the prophecy, purchase a minimum of 12 Lounge Upgrades (including at least one rug for the Lounge), in addition to the work order which cleans up the mess made by Cerberus."
    },
    {
      name: "Skelly",
      hearts: 0,
      hasCompanion: true,
      howToUnlock:  "Complete the “Eternal Rest” prophecy, unlocked by unlock 4 aspects which are NOT the 'Aspect of Zagreus' of any weapons, then 'kill' Skelly with a Level 5 Aspect of Zagreus Stygian Blade (sword)."
    },
  ])
  const [weapons, setWeapons] = useState([
    {
      name: 'Stygius: A lâmina do submundo',
      aspects: [
        {
          aspectName: 'Aspecto de Zagreu',
          unlocked: true
        },
        {
          aspectName: 'Aspecto de Nemesis',
          unlocked: true
        },
        {
          aspectName: 'Aspecto de Poseidon',
          unlocked: false
        },
        {
          aspectName: 'Aspecto de ????',
          unlocked: false
        },
      ]
    },
    {
      name: 'Varatha: A lança eterna',
      aspects: [
        {
          aspectName: 'Aspecto de Zagreu',
          unlocked: true
        },
        {
          aspectName: 'Aspecto de Aquiles',
          unlocked: true
        },
        {
          aspectName: 'Aspecto de Hades',
          unlocked: false
        },
        {
          aspectName: 'Aspecto de ????',
          unlocked: false
        },
      ]
    },
    {
      name: 'Aegis: o escudo do caos',
      aspects: [
        {
          aspectName: 'Aspecto de Zagreu',
          unlocked: true
        },
        {
          aspectName: 'Aspecto de Chaos',
          unlocked: true
        },
        {
          aspectName: 'Aspecto de Zeus',
          unlocked: false
        },
        {
          aspectName: 'Aspecto de ????',
          unlocked: false
        },
      ]
    },
    {
      name: 'Coronacht: A arco que busca o coração',
      aspects: [
        {
          aspectName: 'Aspecto de Zagreu',
          unlocked: true
        },
        {
          aspectName: 'Aspecto de Chiron',
          unlocked: true
        },
        {
          aspectName: 'Aspecto de Hera',
          unlocked: false
        },
        {
          aspectName: 'Aspecto de ????',
          unlocked: false
        },
      ]
    },
    {
      name: 'Malphon: Os punhos gêmeos',
      aspects: [
        {
          aspectName: 'Aspecto de Zagreu',
          unlocked: true
        },
        {
          aspectName: 'Aspecto de Talos',
          unlocked: true
        },
        {
          aspectName: 'Aspecto de Demeter',
          unlocked: false
        },
        {
          aspectName: 'Aspecto de ????',
          unlockeded: false
        },
      ]
    },
  ])
  const [dialogIsOpen, setDialog] = useState(false) 

  //Atualiza states
  const setHearts = (godName, hearts) => {
    if(hearts == 1) {
      //atualiza lembrancinhas
    } else if(hearts == 7){
      //atualiza companheiros
    }
    const newRelationships = relationships.map(el => {
      if(el.name == godName){
        el.hearts = hearts
      }
      return el
    })
    setRelationships(newRelationships)
  }
  const setWeaponUnlocked = (weapon, aspect, value) => {
    const newWeapons = weapons.map(el => {
      if(el.name == weapon){
        el.aspects.map(asp => {
          if(asp.aspectName == aspect) {
            asp.unlocked = value
            return el
          }
        })
      }
      return el
    })
    setWeapons(newWeapons)
  }
  const updateConfig = (e) => {
    setConfigs((prev) => {
      return {
          ...prev,
          [e.target.name]: (e.target.checked)
      }
    })
  }

  //Salvando e buscando dados no localStorage
  const updateStorage = (item, data) => {
    localStorage.setItem(item, JSON.stringify(data))
  }
  window.addEventListener("beforeunload", (ev) => {
      ev.preventDefault()
/*       alert('aaaa') */
      updateStorage('configs', configs)
      updateStorage('relationships', relationships)
      updateStorage('weapons', weapons)
  })
  useEffect(() => {
    const LocalConfig = localStorage.getItem("configs")
    const LocalRelationships = localStorage.getItem("relationships")
    const LocalWeapons = localStorage.getItem("weapons")

    if(LocalConfig != null) setConfigs(JSON.parse(LocalConfig))
    if(LocalRelationships != null) setRelationships(JSON.parse(LocalRelationships))
    if(LocalWeapons != null) setWeapons(JSON.parse(LocalWeapons))
  }, [])

  return (
    <>
      <dialog open={dialogIsOpen} className='config'>
          <h3 className='config-text'>Marque para deixar visivel</h3>
          <p className='config-text'>Seu progresso continuará salvo e você pode voltar a exibi-los mais tarde.</p>
          <div className='config-wrapper'>

            <div className='config-card'>
              <div className="checkbox">
                <input type="checkbox" checked={configs.progress}  onChange={(e) => updateConfig((e))}  name="progress" />
              </div>                
              <label htmlFor="progress-bars">Barras de progresso</label>
            </div>

            <div className='config-card'>
              <div className="checkbox">
                <input type="checkbox" checked={configs.personalTodo} onChange={(e) => updateConfig((e))} name="personalTodo" />
              </div>                
              <label htmlFor="personal-todo">Lista pessoal</label>
            </div>

            <div className='config-card'>
              <div className="checkbox">
                <input type="checkbox" checked={configs.relationships} onChange={(e) => updateConfig((e))}  name="relationships" />
              </div>                
              <label htmlFor="relationships">Relacionamentos</label>
            </div>

            <div className='config-card'>
              <div className="checkbox">
                <input type="checkbox" checked={configs.weapons} onChange={(e) => updateConfig((e))}  name="weapons" />
              </div>                
              <label htmlFor="weapons">Armas</label>
            </div>
          </div>

          <div className="config-buttons">
            <button onClick={() => setDialog(false)}>
              <p> Voltar </p>
            </button>
          </div>
      </dialog>

      <main className={dialogIsOpen ? 'blured' : ''}>
        <header className='title-header'>
          <h1 className='title-font title-tracking'>HADES</h1>
          <h4 className='title-font'>MONITOR DE PROGRESSO</h4>
        </header>
      
        <div className='header-with-configs'>
          <div>
            <p className='clear-button' onClick={() => setDialog(true)}>Esconder / exibir listas</p>
          </div>
          <div>
            <label htmlFor="progress-bars">Já escapou?</label>
            <div className="checkbox">
                <input type="checkbox" checked={true} onChange={(e) => console.log(e.target.checked)} name="progress-bars" id="progress-bars" />
            </div>                
          </div>
        </div>

        <section className='progress-wrapper' style={{ visibility: `${configs.progress ? "visible" : "hidden"} `, position: `${configs.progress ? "relative" : "absolute"} `}}>
          {
            progress.map((value, index) => {
              return <div className='progress-card' key={index}>
                  <h3>
                    {value.name} <span> {value.currentNumber} / {value.maxNumber} </span>
                  </h3>
                  <div className='progress-bar'>
                      <div style={{ transform: `translateX(${ (value.currentNumber/value.maxNumber) *103 }%)`}} > 
                        <div className='progress-bar-filled'></div>
                    </div>
                  </div>
                </div>
            })
          }
        </section>

        <section className='personal-todo' style={{ visibility: `${configs.personalTodo ? "visible" : "hidden"} `, position: `${configs.personalTodo ? "relative" : "absolute"} `}}>
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

        <section className='relationships' style={{ visibility: `${configs.relationships ? "visible" : "hidden"} `, position: `${configs.relationships ? "relative" : "absolute"} `}}>
          <h2>Relacionamentos</h2>
          <div className='relationships-wrapper'>
          {
            relationships.map((el, index) => {
              return <div className='relationships-card' key={index}>
                  <h3>{el.name}</h3>
                  <div className='relationships-hearts'>
                    <BsHeartFill className={el.hearts >= 1 ? "heart-filled" : ""} onClick={() => setHearts(el.name, el.hearts == 1 ? 0 : 1)}/>
                    <BsHeartFill className={el.hearts >= 2 ? "heart-filled" : ""} onClick={() => setHearts(el.name, el.hearts == 2 ? 1 : 2)}/>
                    <BsHeartFill className={el.hearts >= 3 ? "heart-filled" : ""} onClick={() => setHearts(el.name, el.hearts == 3 ? 2 : 3)}/>
                    <BsHeartFill className={el.hearts >= 4 ? "heart-filled" : ""} onClick={() => setHearts(el.name, el.hearts == 4 ? 3 : 4)}/>
                    <BsHeartFill className={el.hearts >= 5 ? "heart-filled" : ""} onClick={() => setHearts(el.name, el.hearts == 5 ? 4 : 5)}/>
                    <BsHeartFill className={el.hearts >= 6 ? "heart-filled" : ""} onClick={() => setHearts(el.name, el.hearts == 6 ? 5 : 6)}/>
                    <BsHeartFill className={el.hearts >= 7 ? "heart-filled" : ""} onClick={() => setHearts(el.name, el.hearts == 7 ? 6 : 7)}/>
                  </div>
                  <details>
                    <summary>Como desbloquear</summary>
                      {el.howToUnlock}
                  </details>
                </div>
              
            })
          }
          </div>
        </section>

        <section className='weapons' style={{ visibility: `${configs.weapons ? "visible" : "hidden"} `, position: `${configs.weapons ? "relative" : "absolute"} `}}>
          <h2>Armas</h2>
          <div className="weapons-wrapper">
            {
              weapons.map((value, i) => {
                return <div className="weapon-card" key={i}>
                  <h3>{value.name}</h3>
                  
                  { value.aspects.map((aspect, j) => {
                    return <div className='weapon-aspect' key={i+j}>
                      <div className="checkbox">
                        <input type="checkbox" checked={aspect.unlocked} onChange={(e) => setWeaponUnlocked(value.name, aspect.aspectName, e.target.checked)} name="stygius_zagreus" id="stygius_zagreus" />
                      </div>                
                      <label htmlFor={aspect.aspectName.toLowerCase().replaceAll(' ', '_').replaceAll('????', 'redacted') + "_" + i}>{aspect.aspectName}</label>
                    </div>
                  })}
                  
                </div>
              })
            }
          </div>
        </section>

        <footer className='footer'>
          <div className="footer-social">
            <a href="https://mail.google.com/mail/u/0/?fs=1&to=helenakurzgon@gmail.com&tf=cm">
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
              <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2238809372">Companheiros</a>
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