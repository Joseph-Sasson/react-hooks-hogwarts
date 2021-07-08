import {useState} from 'react'
import PigCard from "./Card"

function PigContainer({hogs}){
  const [filter, setFilter] = useState(false)
  const [weight, setWeight] = useState(false)
  const [name, setName] = useState(false)
  const [myHogs, setMyHogs] = useState(hogs)

  function handleFilter(e){
    const isChecked = e.target.checked
    setFilter(isChecked)
    setMyHogs(hogs.filter(hog=>{
      if (isChecked) {return hog.greased === true} else {return true}
    }))
}

  function sortWeight (){
    setWeight(!weight)
    myHogs.sort((hogA, hogB)=>{
      if (weight)
    {return hogA.weight - hogB.weight}
  })
  }

  function sortName (){
    setName(!name)
    myHogs.sort((hogA, hogB)=>{
      let nameA = hogA.name.toUpperCase()
      let nameB = hogB.name.toUpperCase()
      if (nameA < nameB) return -1
      if (nameA > nameB) return 1
  })
  return 0
}

  return(
    <div>
      <button onClick={sortWeight}>Sort by Weight</button>
      <button onClick={sortName}>Sort by Name</button>
      <div>Only Show Greased Pigs:
        <input onChange={handleFilter} type='checkbox'/>
      </div>
      {myHogs.map(hog=>
        (<PigCard name={hog.name} image={hog.image} specialty={hog.specialty} weight={hog.weight} greased={hog.greased} medal={hog["highest medal achieved"]} />)
      )}
    </div>
  )
}

export default PigContainer
