import {Layout} from '@/components/Layout'
import Link from 'next/link'
import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import {Cross2Icon} from '@radix-ui/react-icons'

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
        <div>
          <div>

          </div>
        </div>
      </div>
    </Layout>
  )
}