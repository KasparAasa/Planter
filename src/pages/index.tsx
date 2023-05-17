import {Layout} from '@/components/Layout'
import React, {useState} from 'react'


export default function Dashboard() {

  return (
    <Layout>
      <div className={'flex border-gray-200 border-2'}>
        <div>
          <img className={'h-20 w-20'} src={'plantPlaceholder.jpeg'}/>
        </div>
        <div className={'flex justify-between w-full items-center'}>
          <div className={'flex flex-col ml-2'}>
            <div>Plant name</div>
            <div>Plant nickname</div>
            <div>Room</div>
          </div>
          <div className={'flex justify-evenly flex-wrap text-2xl'}>
            <div className={'flex m-3'}>LW</div>
            <div className={'flex m-3'}>LF</div>
            <div className={'flex m-3'}>L-RP</div>
          </div>
          <div className={'flex flex-col pr-3 items-end'}>
            <div className={''}>
              Edit plant
            </div>
            <div className={''}>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}