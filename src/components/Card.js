import {useState} from 'react'

function PigCard({name, image, medal, weight, greased, specialty}){
  const [data, setData] = useState(false)

    function handleOnClick(){
      setData(!data)
    }

    let myData = data ?
    <div>
      <p>Specialty: {specialty}</p>
      <p>Weight: {weight}</p>
      <p>Greased: {greased ? 'Yes' : 'No'}</p>
      <p>Highest Medal: {medal}</p>
    </div>
    : false

  return(
    <div className= 'pigTile' onClick={handleOnClick}>
      <p>{name}</p>
      <img width='300' height='250' src={image} />
      {myData}
    </div>
  )
}

export default PigCard
