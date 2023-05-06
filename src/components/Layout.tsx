import {FC, PropsWithChildren} from 'react'
import Link from 'next/link'

export const Layout: FC<PropsWithChildren> = ({children}) => {
  return (
    <div>
      <header className={'h-14 flex justify-center items-center px-6 bg-gray-100 shadow-lg'}>
        <div className={'max-w-screen-xl w-full flex gap-6 font-medium text-slate-700'}>
          <Link href={'/'}>Main Page</Link>
          <Link href={'SecondPage'}>Second Page</Link>
        </div>
      </header>
      <div className={'flex justify-center p-6'}>
        <div className={'max-w-screen-xl w-full'}>
          {children}
        </div>
      </div>
    </div>
  )
}