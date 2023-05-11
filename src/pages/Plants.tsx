import {Layout} from '@/components/Layout'
import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
// import {Cross2Icon} from '@radix-ui/react-icons'
import * as Collapsible from '@radix-ui/react-collapsible'

export default function Plants() {

  return (
    <Layout>
      <div className={'flex flex-col py-3 w-full max-w-none'}>
        <div className={'flex justify-end gap-3'}>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button>Add plants</button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className={'bg-slate-50'}/>
              <Dialog.Content>
                <Dialog.Title/>
                <Dialog.Description/>
                <Dialog.Close/>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>

        <Collapsible.Root>
          <Collapsible.Trigger asChild>
            <div className={'flex border-gray-200 border-2'}>
              <div>
                <img className={'w-24'} src={'plantPlaceholder.jpeg'}/>
              </div>

              <div className={'flex justify-between w-full items-center'}>
                <div className={'flex flex-col ml-3'}>
                  <div>Plant name</div>
                  <div>Plant nickname</div>
                  <div>Room</div>
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
                <div>
                  plantname requires medium to medium-high light. Place it in a well lighted area
                  without direct sunlight.
                </div>
                <div>
                  plantname has medium-low water needs. Let the soil dry out completely between
                  watering.
                </div>
              </div>
              <div className={'flex gap-1'}>
                <img className={'w-16'} src={'plantPlaceholder.jpeg'}/>
                <img className={'w-16'} src={'plantPlaceholder.jpeg'}/>
                <img className={'w-16'} src={'plantPlaceholder.jpeg'}/>
                <img className={'w-16'} src={'plantPlaceholder.jpeg'}/>
              </div>
            </div>
          </Collapsible.Content>
        </Collapsible.Root>

        <Collapsible.Root>
          <Collapsible.Trigger asChild>
            <div className={'flex border-gray-200 border-2'}>
              <div>
                <img className={'w-24'} src={'plantPlaceholder.jpeg'}/>
              </div>

              <div className={'flex justify-between w-full items-center'}>
                <div className={'flex flex-col ml-3'}>
                  <div>Plant name</div>
                  <div>Plant nickname</div>
                  <div>Room</div>
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
                <div>
                  plantname requires medium to medium-high light. Place it in a well lighted area
                  without direct sunlight.
                </div>
                <div>
                  plantname has medium-low water needs. Let the soil dry out completely between
                  watering.
                </div>
              </div>
              <div className={'flex gap-1'}>
                <img className={'w-16'} src={'plantPlaceholder.jpeg'}/>
                <img className={'w-16'} src={'plantPlaceholder.jpeg'}/>
                <img className={'w-16'} src={'plantPlaceholder.jpeg'}/>
                <img className={'w-16'} src={'plantPlaceholder.jpeg'}/>
              </div>
            </div>
          </Collapsible.Content>
        </Collapsible.Root>

      </div>
    </Layout>
  )
}