import {Layout} from '@/components/Layout'
import React, {useState} from 'react'
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

  const [plants, setPlants] = useState<Plant[]>([]) //siia panna empty list ja siis saab lisama hakata
  const [plantNameField, setPlantNameField] = useState('')


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

  // function addPresetPlant(plantName: string, latinName: string, img: string, light: string, water: string, soil: string, humidity: string, toxicity: string, room: string) {
  //   const newList = [
  //     ...plants,
  //     {
  //       plantName: plantName,
  //       latinName: latinName,
  //       img: img,
  //       light: light,
  //       water: water,
  //       soil: soil,
  //       humidity: humidity,
  //       toxicity: toxicity,
  //       room: room,
  //       id: uuidv4(),
  //     },
  //   ]
  //   setPlants(newList)
  // }

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
                      <div className={'flex'}>LW</div>
                      <div className={'flex'}>LF</div>
                      <div className={'flex'}>LRP</div>
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
                  <div className={'flex gap-1'}>
                    <img className={'w-16'} src={'plantPlaceholder.jpeg'}/>
                    <img className={'w-16'} src={'plantPlaceholder.jpeg'}/>
                    <img className={'w-16'} src={'plantPlaceholder.jpeg'}/>
                    <img className={'w-16'} src={'plantPlaceholder.jpeg'}/>
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
