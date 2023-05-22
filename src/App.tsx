import * as C from './App.styles'
import { useState } from 'react'
import { Item } from './types/item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Julio', done: true },
    { id: 2, name: 'aparecida', done: false },
    { id: 3, name: 'maria', done: false },
  ]);

  const handleAddTask = (taskName:string) => {
    let newList = [...list]
    newList.push ({
      id:list.length+1,
      name:taskName,
      done:false
    });
    setList(newList)
  }

  return (
    <>
      <C.Container>
        <C.Area >
          <C.Header> Adicionar Lista De Tarefas  </C.Header>

        {/* Adicionar Novas Tarefas  */}
        <AddArea onEnter={handleAddTask}/>

        { list.map((item,index) => ( 
          <ListItem key={index} item={item}/>
        ))}  

        </C.Area>
      </C.Container>
    </>
  )
}

export default App
