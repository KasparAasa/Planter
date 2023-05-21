import {Layout} from '@/components/Layout'
import React, {useEffect, useState} from 'react'
import * as Collapsible from '@radix-ui/react-collapsible'
import * as Dialog from '@radix-ui/react-dialog'
import {Cross2Icon} from '@radix-ui/react-icons'
import {v4 as uuidv4} from 'uuid'
import {plantTypes} from '@/constants/plantTypes'
import {
  Humidity,
  LightLevel,
  LightLevelDescription,
  WaterLevelDescription,
  SoilType,
  Toxicity,
  WaterLevel,
} from '@/constants/plantAttributes'
import {FormEventHandler, useRef} from 'react'

interface Plant {
  plantName: string
  latinName?: string
  img?: string
  light?: LightLevel
  water?: WaterLevel
  soil?: SoilType
  humidity?: Humidity
  toxicity?: Toxicity
  room?: string
  id: string
}


export default function Plants() {

  const [plants, setPlants] = useState<Plant[]>([])
  const [plantNameField, setPlantNameField] = useState('')
  const fileInput = useRef<HTMLInputElement>(null)


  useEffect(() => {
    if (plants.length === 0) {
      return
    }
    localStorage.setItem('plants', JSON.stringify(plants))
  }, [plants])

  useEffect(() => {
    const plantString = localStorage.getItem('plants')
    if (plantString) {
      const plants = JSON.parse(plantString)
      if (plants) {
        setPlants(plants)
      }
    }
  }, [])

  const uploadFile: FormEventHandler<HTMLInputElement> = (event) => {
    if (!event.currentTarget.files?.length) {
      return
    }

    for (let i = 0; i < event.currentTarget.files.length; i++) {
      const file = event.currentTarget.files.item(i)


      // Do something with file
    }
  }

  function addPlant() {
    const newList = [
      ...plants,
      {
        plantName: plantNameField,
        id: uuidv4(),
      },
    ]

    setPlants(newList)

    setPlantNameField('')
  }

  function addPresetPlant(plant: Omit<Plant, 'id'>) {
    const newList = [
      ...plants,
      {
        ...plant,
        id: uuidv4(),
      },
    ]
    setPlants(newList)
  }

  function deletePlant(id: string) {
    const newList = plants.filter(plant => plant.id !== id)
    setPlants(newList)

    if (newList.length === 0) {
      localStorage.removeItem('plants')
    }
  }


  const searchedPlants = (plantTypes
      .filter(plant => plant.plantName.toLowerCase().match(`${plantNameField.toLowerCase()}`))
  )

  return (
    <Layout>
      <div className={'flex flex-col py-3 w-full max-w-none'}>
        <div className={'flex justify-end gap-3'}>
          <Dialog.Root>

            <Dialog.Trigger asChild>
              <button>Add plant</button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className={'DialogOverlay'}/>
              <Dialog.Content className={'DialogContent'}>
                <div className={'flex flex-col h-full'}>
                  <Dialog.Title className={'DialogTitle'}>Add plants</Dialog.Title>
                  <Dialog.Description className={'DialogDescription'}>
                    Enter a plant name or pick one from the list
                  </Dialog.Description>
                  <div className={'flex gap-2 flex-wrap'}>
                    <input className={'border border-slate-400 flex-1 rounded py-1 px-2'} value={plantNameField}
                           onChange={e => setPlantNameField(e.target.value)}/>
                    <Dialog.Close asChild>
                      <button
                        className={'bg-gray-300 hover:text-gray-50 text-sm block text-gray-900 hover:bg-gray-700 rounded px-2 py-2 sm:mt-0 sm:ml-2'}
                        type={'button'} onClick={addPlant}>Add plants
                      </button>
                    </Dialog.Close>
                  </div>
                  <div className={'flex flex-col w-full mt-4 gap-1 overflow-auto'}>
                    {searchedPlants.map((plant, index) =>
                      <div key={index}>
                        <button
                          className={'flex border border-gray-300 rounded w-full hover:bg-slate-100'}
                          onClick={() => addPresetPlant(plant)}>
                          <div className={'flex'}>
                            <div className={'rounded w-12 h-14 flex'}>
                              <img className={'w-full object-cover rounded'}
                                   src={`/plantTypePictures/${plant.img}`}/>
                            </div>
                            <div className={'flex items-center ml-2'}>
                              {plant.plantName}
                            </div>
                          </div>
                        </button>
                      </div>,
                    )}
                  </div>
                </div>

                <Dialog.Close asChild>
                  <button className={'IconButton'} aria-label={'Close'}>
                    <Cross2Icon/>
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>

        <div>
          {plants.map(plant =>
            <Collapsible.Root>
              <Collapsible.Trigger asChild>
                <div className={'flex border-gray-200 border-2 hover:bg-slate-100'}>
                  <div>
                    <img className={'w-24 h-28 object-cover'} src={`/plantTypePictures/${plant.img}`}/>
                  </div>

                  <div className={'flex justify-between w-full items-center'}>
                    <div className={'flex flex-col ml-3'}>
                      <div>{plant.plantName}</div>
                      <div className={'italic'}>{plant.latinName}</div>
                      <div>{plant.room}</div>
                    </div>
                    <div className={'flex justify-evenly flex-wrap mr-5 gap-6'}>
                      <div className={''}><i className="fa-light fa-droplet fa-xl"></i></div>
                      <div className={''}><i className="fa-light fa-bag-seedling fa-xl"></i></div>
                      <div className={''}><i className="fa-light fa-hand-holding-seedling fa-xl"></i></div>
                    </div>
                  </div>
                </div>
              </Collapsible.Trigger>
              <Collapsible.Content>
                <div className={'flex border-gray-200 border-2 border-t-0 flex-col'}>
                  <div className={'flex m-2 gap-2'}>
                    {plant.light && (
                      <div>
                        {plant.plantName} requires {plant.light} light levels. {LightLevelDescription[plant.light]}
                      </div>
                    )}

                    {plant.water && (
                      <div>
                        {plant.plantName} has {plant.water} water needs. {WaterLevelDescription[plant.water]}
                      </div>
                    )}
                  </div>
                  <div className={'flex justify-between mb-1'}>
                    <div className={'flex gap-1 items-center'}>
                      <img className={'w-20'} src={'plantPlaceholder.jpeg'}/>
                      <img className={'w-20'} src={'plantPlaceholder.jpeg'}/>
                      <img className={'w-20'} src={'plantPlaceholder.jpeg'}/>
                      <form>
                        <input type={'file'} className={'hidden'} ref={fileInput} onInput={uploadFile}/>
                        <button
                          onClick={e => {
                            e.preventDefault()
                            fileInput.current?.click()
                          }}
                        >
                          <i className={'text-gray-300 hover:text-gray-500 ml-2 fa-light fa-circle-plus fa-2xl'}></i>
                        </button>
                      </form>
                    </div>
                    <div className={'flex flex-col items-end justify-center gap-2 mr-5 w-28'}>
                      <button
                        className={' w-full bg-gray-300 hover:text-gray-50 text-sm block text-gray-900 hover:bg-gray-700 rounded px-2 py-2 sm:mt-0 sm:ml-2'}>
                        Edit plant
                      </button>
                      <button
                        className={'w-full bg-gray-300 hover:text-gray-950 text-sm block text-gray-900 hover:bg-red-400 rounded px-2 py-2 sm:mt-0 sm:ml-2'}
                        onClick={() => deletePlant(plant.id)}>
                        Delete plant
                      </button>
                    </div>
                  </div>
                </div>
              </Collapsible.Content>
            </Collapsible.Root>,
          )}
        </div>
      </div>
    </Layout>
  )
}
