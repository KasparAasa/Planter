import {Layout} from '@/components/Layout'
import React, {ChangeEvent, useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const initialPlants = [
  {
    id: uuidv4(),
    plantName: 'Monstera variegata',
  },
  {
    id: uuidv4(),
    plantName: 'Alocacia',
  },
]
export default function AddPlant() {

  const [plants, setPlants] = useState(initialPlants)
  const [plantNameField, setPlantName] = useState('')

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setPlantName(event.target.value)
  }

  function handleAdd() {
    const newList = [
      ...plants,
      {
        plantName: plantNameField,
        id: uuidv4(),
      },
    ]

    setPlants(newList)

    setPlantName('')
  }

  const searchedPlants = (initialPlants
      .filter(plant => plant.plantName.toLowerCase().match(`${plantNameField.toLowerCase()}`))
  )

  return (
    <Layout>
      <div className={'flex flex-col py-3 w-full max-w-none bg-slate-700'}>
        <div className={'flex gap-3 m-3'}>
          <input className={''} type={'text'} value={plantNameField} onChange={handleChange}/>
          <button className={'linkText'} type={'button'} onClick={handleAdd}>Add plants</button>
        </div>
        <div>
          {searchedPlants.map(plant =>
            <div key={plant.id}>
              {plant.plantName}
            </div>,
          )}
        </div>
      </div>
    </Layout>
  )
}