import {Layout} from '@/components/Layout'
import React, {ChangeEvent, useState} from 'react'

export default function PlantDescription() {

  return (
    <Layout>
      <div className={'flex w-full max-w-none border border-slate-400'}>
        <div>
          Pic
        </div>
        <div>
          Plant Story
        </div>
      </div>
    </Layout>
  )
}