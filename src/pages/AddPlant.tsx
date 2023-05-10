import {Layout} from '@/components/Layout'
import React, {useState} from 'react'

export default function Store() {

  return (
    <Layout>
      <div className={'flex justify-evenly'}>
        <div>Image</div>
        <div>Name box and so on</div>
        <div>Advanced users guide</div>
      </div>
    </Layout>
  )
}