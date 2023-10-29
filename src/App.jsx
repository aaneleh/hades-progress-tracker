import { useEffect, useState } from 'react'
import { BsHeartFill, BsLinkedin, BsGithub, BsGoogle } from 'react-icons/bs'
import { RiTwitterXFill } from 'react-icons/ri'

function App() {

  const [progress, setProgress ] = useState([
    {
      name: 'Lembrancinhas',
      currentNumber: 0,
      maxNumber: 25
    },
    {
      name: 'Companheiros',
      currentNumber: 0,
      maxNumber: 6
    },
    {
      name: 'Armas',
      currentNumber: 0,
      maxNumber: 20
    },
  ])
  const [todoList, setTodoList] = useState([
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
      howToUnlock: "Completar o jogo 10 vezes."
    },
    {
      name: "Nix",
      hearts: 0,
      hasCompanion: false,
      howToUnlock: "Conversar com Caos e Nyx, até que Nyx mencione reconectar com Caos. Então, na câmara administrativa, restaure o Eldest Sigil, por 3142 de Escuridão"
    },
    {
      name: "Caronte",
      hearts: 0,
      hasCompanion: false,
      howToUnlock: "Gaste ao menos 10.000 na sua loja"
    },
    {
      name: "Hipnos",
      hearts: 0,
      hasCompanion: false,
      howToUnlock: "Converse com Hipnos e Tânato (enquanto ambos estão na casa) o suficiente para progredir a história de melhorar a ética de trabalho do Hipnos."
    },
    {
      name: "Tânato",
      hearts: 0,
      hasCompanion: true,
      howToUnlock: "Depois de conseguir 6 corações, vença ou empate com Tânato em uma de seus competições"
    },
    {
      name: "Megaira",
      hearts: 0,
      hasCompanion: true,
      howToUnlock: "Depois de encontrar com Megaira vezes suficientes enquanto escapando, aguarde acontecer duas cutscene de Megaira e Zagreu conversando em seu quarto."
    },
    {
      name: "Caos",
      hearts: 0,
      hasCompanion: false,
      howToUnlock: "Conversar com Caos e Nix, até que Nix mencione reconectar com Caos. Então, na câmara administrativa, restaure o Eldest Sigil, por 3142 de Escuridão"
    },
    {
      name: "Zeus",
      hearts: 0,
      hasCompanion: false,
      howToUnlock: "Converse sobre Zeus com ao menos outros 5 deuses, normalmente quando obtendo benção dele e então de outro deus na mesma tentativa de fuga."
    },
    {
      name: "Poseidon",
      hearts: 0,
      hasCompanion: false,
      howToUnlock: "Adquira a vara de pesca (desbloqueada depois de chegar no ultimo chefão) e então pegue ao menos 18 peixes."
    },
    {
      name: "Atena",
      hearts: 0,
      hasCompanion: false,
      howToUnlock: "Ouvir 3 falas de parabéns de Atena, após completar uma fuga."
    },
    {
      name: "Afrodite",
      hearts: 0,
      hasCompanion: false,
      howToUnlock: "Complete a história de Tânatos, Megaira e Dusa."
    },
    {
      name: "Ártemis",
      hearts: 0,
      hasCompanion: false,
      howToUnlock: "Converse com Áretemis o suficiente para progredir seu dialogo sobre Callisto."
    },
    {
      name: "Ares",
      hearts: 0,
      hasCompanion: false,
      howToUnlock: "Complete a proferia War-God’s Bloodlust (debloqueia após matar 2000 inimigos e requer matar 10.000)."
    },
    {
      name: "Dionísio",
      hearts: 0,
      hasCompanion: false,
      howToUnlock: "Dê 10 Ambrosia para ao menos 6 diferentes personagens."
    },
    {
      name: "Hermes",
      hearts: 0,
      hasCompanion: false,
      howToUnlock: "Converse com Hermes com um Lambent Plume (sua lembrancinhas) totalmente melhorada (3 estrelas)."
    },
    {
      name: "Deméter",
      hearts: 0,
      hasCompanion: false,
      howToUnlock: "Completar o Epilogo e então conversar com Deméter."
    },
    {
      name: "[REDACTED]",
      hearts: 0,
      hasCompanion: false,
      howToUnlock: "Finalizar o jogo 10 vezes e continuar falando com Perséfone na casa de Hades."
    },
    {
      name: "Aquiles",
      hearts: 0,
      hasCompanion: true,
      howToUnlock:  "Fale com Aquiles e Pátroclo o suficiente para Pátroclo mencionar um código, então compre o contrato de Aquiles (também necessário falar com Nix). E converse com eles juntos no Elysium."
    },
    {
      name: "Orfeu",
      hearts: 0,
      hasCompanion: false,
      howToUnlock:  "Fale com Orfeu e Eurídice o suficiente para ouvir a saudade de ambos. Então compre o contrato de Orfeu e converse com eles juntos em Asphodel."
    },
    {
      name: "Sísifo",
      hearts: 0,
      hasCompanion: true,
      howToUnlock:  "Após Zagreu mencionar querer aliviar a punição de Sísifo, fale com Hades, Megaira e Bouldy (a pedra de Sisifo) até saber suas opniões sobre sua punição. Então converse novamente com Sísifo."
    },
    {
      name: "Eurídice",
      hearts: 0,
      hasCompanion: false,
      howToUnlock:  "Fale com Orfreu e Euridice o suficiente para ouvir a saudade de ambos. Então compre o contrato de Orfreu e converse com eles juntos em Asphodel."
    },
    {
      name: "Pátroclo",
      hearts: 0,
      hasCompanion: false,
      howToUnlock:  "Fale com Aquiles e Pátroclo o suficiente para Pátroclo mencionar um código, então compre o contrato de Aquiles (também necessário falar com Nix). E converse com eles juntos no Elysium."
    },
    {
      name: "Cérbero",
      hearts: 0,
      hasCompanion: false,
      howToUnlock:  "Acaricie Cérbero ao menos 20 vezes."
    },
    {
      name: "Dusa",
      hearts: 0,
      hasCompanion: true,
      howToUnlock:  "Complete a profecia A Place of Revelry (desbloqueada conversando com Dusa), que requer comprar 12 melhorias do lounge (incluindo ao menos um tapete) e limpar a sujeira de Cérbero."
    },
    {
      name: "Zé Caveira",
      hearts: 0,
      hasCompanion: true,
      howToUnlock:  "Completar a profecia Eternal Rest, que requer desbloquear 4 aspectos que não sejam de Zagreu e matar Zé Caveira com a Espada de Zagreu nível 5."
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
          unlocked: false
        },
        {
          aspectName: 'Aspecto de Poseidon',
          unlocked: false
        },
        {
          aspectName: 'Aspecto de Arthur',
          unlocked: false
        },
      ]
    },
    {
      name: 'Varatha: A lança eterna',
      aspects: [
        {
          aspectName: 'Aspecto de Zagreu',
          unlocked: false
        },
        {
          aspectName: 'Aspecto de Aquiles',
          unlocked: false
        },
        {
          aspectName: 'Aspecto de Hades',
          unlocked: false
        },
        {
          aspectName: 'Aspecto de Guan Yu',
          unlocked: false
        },
      ]
    },
    {
      name: 'Aegis: o escudo do caos',
      aspects: [
        {
          aspectName: 'Aspecto de Zagreu',
          unlocked: false
        },
        {
          aspectName: 'Aspecto de Chaos',
          unlocked: false
        },
        {
          aspectName: 'Aspecto de Zeus',
          unlocked: false
        },
        {
          aspectName: 'Aspecto de Beowulf',
          unlocked: false
        },
      ]
    },
    {
      name: 'Coronacht: A arco que busca o coração',
      aspects: [
        {
          aspectName: 'Aspecto de Zagreu',
          unlocked: false
        },
        {
          aspectName: 'Aspecto de Chiron',
          unlocked: false
        },
        {
          aspectName: 'Aspecto de Hera',
          unlocked: false
        },
        {
          aspectName: 'Aspecto de Rama',
          unlocked: false
        },
      ]
    },
    {
      name: 'Malphon: Os punhos gêmeos',
      aspects: [
        {
          aspectName: 'Aspecto de Zagreu',
          unlocked: false
        },
        {
          aspectName: 'Aspecto de Talos',
          unlocked: false
        },
        {
          aspectName: 'Aspecto de Demeter',
          unlocked: false
        },
        {
          aspectName: 'Aspecto de Gilgamesh',
          unlockeded: false
        },
      ]
    },
    {
      name: 'Exagryph: O trilho de diamante',
      aspects: [
        {
          aspectName: 'Aspecto de Zagreu',
          unlocked: false
        },
        {
          aspectName: 'Aspecto de Eris',
          unlocked: false
        },
        {
          aspectName: 'Aspecto de Hestia',
          unlocked: false
        },
        {
          aspectName: 'Aspecto de Lucifer',
          unlockeded: false
        },
      ]
    },
  ])
  const [configsDialogIsOpen, setConfigsDialogIsOpen] = useState(false) 
  const [todoListDialog, setTodoListDialog] = useState(false)

  const [reset, setReset] = useState(false)
  
  const [ newTask, setNewTask ] = useState({
    task: '',
    currentNumber: 0,
    maxNumber: 0
  })
  const updateNewTask = (e) => {
    setNewTask((original) => {
      return {
          ...original,
          [e.target.name]: e.target.value
      }
  })
  }

  const setHearts = (godName, hearts) => {
    const newRelationships = relationships.map(el => {
      if(el.name == godName){
        if(el.hearts == 0 && hearts > 0){
          updateProgress('Lembrancinhas', 1)
        } else if(el.hearts >= 1 && hearts == 0){
          updateProgress('Lembrancinhas', -1)
        }
        if(el.hasCompanion && el.hearts < 7 && hearts == 7){
          updateProgress('Companheiros', 1)
        } else if(el.hasCompanion && el.hearts == 7 && hearts < 7){
          updateProgress('Companheiros', -1)
        } 
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
            if(value) updateProgress('Armas', 1)
            else updateProgress('Armas', -1)
            return el
          }
        })
      }
      return el
    })
    setWeapons(newWeapons)
  }
  const updateProgress = (name, quant) => {
    const newProgress = progress.map(el => {
      if(el.name == name){
        if(el.currentNumber + quant >= el.maxNumber) {
          el.currentNumber = el.maxNumber
        }else if(el.currentNumber + quant <= 0) {
          el.currentNumber = 0
        } else el.currentNumber += quant
      }
      return el
    })
    setProgress(newProgress)
  }
  const updateConfig = (e) => {
    setConfigs((prev) => {
      return {
          ...prev,
          [e.target.name]: (e.target.checked)
      }
    })
  }
  const addTask = () => {
    setTodoList( (prev) => [...prev, newTask] )
    setNewTask({
      task: '',
      currentNumber: 0,
      maxNumber: 0
    })
    setTodoListDialog(false) 
  }
  const updateTask = (task, value) => {
    const updatedTodoList = todoList.map(el => {
      if(el.task == task){
        el.currentNumber += value
        console.log(task, el.currentNumber)
        if(el.currentNumber <= 0) {
          el.currentNumber = 0
        } else if(el.currentNumber >= parseInt(el.maxNumber)){
          el.currentNumber = parseInt(el.maxNumber)
        }
      }
      return el
    })
    setTodoList(updatedTodoList)
  }
  const deleteTask = (index) => {
    setTodoList([
      ...todoList.splice(0, index), 
      ...todoList.splice(index+1, todoList.length)
    ])
  }


  const checkProgress = () => {
    const newProgress = progress.map(el => {
      if(el.name == 'Lembrancinhas'){
        el.currentNumber = 0
        relationships.map((rel) => {
          if(rel.hearts > 0) el.currentNumber++
        })
      } else if(el.name == 'Companheiros'){
        el.currentNumber = 0
        relationships.map((rel) => {
          if(rel.hearts == 7 && rel.hasCompanion) el.currentNumber++
        })
      } else if(el.name == 'Armas'){
        el.currentNumber = 0
        weapons.map((wep) => {
          wep.aspects.map((asp) => {
            if(asp.unlocked) el.currentNumber ++
          })
        })
      }
      return el
    })
    setProgress(newProgress)
  }
  const updateStorage = (item, data) => {
    localStorage.setItem(item, JSON.stringify(data))
  }
  window.addEventListener("beforeunload", (ev) => {
    ev.preventDefault()
    /* alert('aaaa') */
    /* @todo reset */
    if(reset) {
      localStorage.setItem('progress', null)
      localStorage.setItem('configs', null)
      localStorage.setItem('relationships', null)
      localStorage.setItem('weapons', null)
      localStorage.setItem('todoList', null)
    } else {
      checkProgress()
      updateStorage('progress', progress)
      updateStorage('reset', reset)
      updateStorage('configs', configs)
      updateStorage('relationships', relationships)
      updateStorage('weapons', weapons)
      updateStorage('todoList', todoList)
    }
    alert(LocalProgress[0].name)
  })
  useEffect(() => {
    const LocalProgress = localStorage.getItem("progress")
    const LocalConfig = localStorage.getItem("configs")
    const LocalRelationships = localStorage.getItem("relationships")
    const LocalWeapons = localStorage.getItem("weapons")
    const LocalTodoList = localStorage.getItem("todoList")
    console.log(LocalProgress)

    if(LocalProgress != null) setProgress(JSON.parse(LocalProgress))
    if(LocalConfig != null) setConfigs(JSON.parse(LocalConfig))
    if(LocalRelationships != null) setRelationships(JSON.parse(LocalRelationships))
    if(LocalWeapons != null) setWeapons(JSON.parse(LocalWeapons))
    if(LocalTodoList != null) setTodoList(JSON.parse(LocalTodoList))
  }, [])

  return (
    <>
      <dialog open={configsDialogIsOpen} className='dialog'>
          <h3 className='dialog-text'>Marque para deixar visivel</h3>
          <p className='dialog-text'>Seu progresso continuará salvo e você pode voltar a exibi-los mais tarde.</p>
          <div className='dialog-wrapper'>

            <div className='dialog-card'>
              <div className="checkbox">
                <input type="checkbox" checked={configs.progress}  onChange={(e) => updateConfig((e))}  name="progress" />
              </div>                
              <label htmlFor="progress-bars">Barras de progresso</label>
            </div>

            <div className='dialog-card'>
              <div className="checkbox">
                <input type="checkbox" checked={configs.personalTodo} onChange={(e) => updateConfig((e))} name="personalTodo" />
              </div>                
              <label htmlFor="personal-todo">Lista pessoal</label>
            </div>

            <div className='dialog-card'>
              <div className="checkbox">
                <input type="checkbox" checked={configs.relationships} onChange={(e) => updateConfig((e))}  name="relationships" />
              </div>                
              <label htmlFor="relationships">Relacionamentos</label>
            </div>

            <div className='dialog-card'>
              <div className="checkbox">
                <input type="checkbox" checked={configs.weapons} onChange={(e) => updateConfig((e))}  name="weapons" />
              </div>                
              <label htmlFor="weapons">Armas</label>
            </div>
          </div>

          <div className="dialog-buttons">
            <button onClick={() => setConfigsDialogIsOpen(false)}>
              <p> Voltar </p>
            </button>
          </div>
      </dialog>
      <dialog  open={todoListDialog} className='dialog'>
          <h3 className='dialog-text'>Adicionando nova tarefa</h3>
          <form className='dialog-wrapper' onSubmit={(e) => e.preventDefault()}>
            <div className='dialog-todo-card'>
              <label htmlFor="progress-bars">Tarefa:</label>
              <input type="text"  onChange={(e) => updateNewTask((e))}  name="task" value={newTask.task}/>
            </div>
            <div className='dialog-todo-card'>
              <label htmlFor="progress-bars">Quantidade:</label>
              <input type="number" onChange={(e) => updateNewTask((e))}  name="maxNumber" value={newTask.maxNumber}/>
            </div>
            <div className='dialog-buttons'>
              <button className='red-button' onClick={() => addTask() }  >
                <h4>
                  Adicionar
                </h4>
              </button>
            </div>
          </form>
          <div className="dialog-buttons">
            <button onClick={() => setTodoListDialog(false)}>
              <p> Voltar </p>
            </button>
          </div>
      </dialog>

      <main className={(configsDialogIsOpen || todoListDialog) ? 'blured' : ''}>
        <header className='title-header'>
          <h1 className='title-font title-tracking'>HADES</h1>
          <h4 className='title-font'>MONITOR DE PROGRESSO</h4>
        </header>
      
        <div className='header-with-configs'>
          <p className='clear-button' onClick={() => setConfigsDialogIsOpen(true)}>Esconder / exibir listas</p>
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
            {
              todoList.length > 0 || todoList.includes(null) ? 
                todoList.map((value, index) => {
                  return <div className='personal-todo-card' key={index}>
                    <p className='personal-todo-x' onClick={() => deleteTask(index)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-slash-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M11.354 4.646a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 .708.708l6-6a.5.5 0 0 0 0-.708z"/>
                      </svg>
                    </p>
                    <h4 className={`personal-todo-text ${value.currentNumber == value.maxNumber ? "completed" : "" }`}>
                      {value.task}
                    </h4>
                    <div className='personal-todo-buttons'>
                      <button className='square-button' disabled={value.currentNumber == 0} onClick={() => updateTask(value.task, -1)}> - </button>
                      <h4>
                        <span> {value.currentNumber} </span> / <span> {value.maxNumber} </span>
                      </h4>
                      <button className='square-button' disabled={value.currentNumber >= value.maxNumber}  onClick={() => updateTask(value.task, 1) }> + </button>
                    </div>
                  </div>
                })
              :
                <></>
            }
            <div className='personal-todo-card-add' onClick={() => setTodoListDialog(true)}>
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
                      <label className={aspect.unlocked ? 'completed' : ''} htmlFor={aspect.aspectName}>  {aspect.unlocked || j < 3 ? aspect.aspectName : '????'}</label>
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
        <div className="reset">
          <p onClick={() => { setReset(true); location.reload()}}>Resetar dados</p>
        </div>
      </main>
    </>
  )
}

export default App