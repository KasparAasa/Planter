import {FC, PropsWithChildren} from 'react'
import Link from 'next/link'
import * as Collapsible from '@radix-ui/react-collapsible'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

const mainMenu = [
  <Link key={'/'} href={'/'}
        className={'linkText'}>Dashboard</Link>,
  <Link key={'Plants'} href={'plants'}
        className={'linkText'}>Plants</Link>,
  <Link key={'Store'} href={'store'}
        className={'linkText'}>Store</Link>,
  <Link key={'Tips'} href={'tips'}
        className={'linkText'}>Tips</Link>,
]
const microMenu = [
  <Link key={'Settings'} href={'#'}
        className={'linkTextSm'}>Account settings</Link>,
  <Link key={'Support'} href={'#'}
        className={'linkTextSm'}>Support</Link>,
  <Link key={'SignOut'} href={'#'}
        className={'linkTextSm'}>Sign out</Link>,
]

export const Layout: FC<PropsWithChildren> = ({children}) => {
  return (
    <div>

      <header className={'bg-gray-800 sm:flex sm:justify-between sm:px-4 sm:py-2'}>
        <Collapsible.Root className={''}>
          <div className={'flex items-center justify-between px-4 py-2 sm:p-0'}>
            <div>
              <Link href={'/'}>
                <img className={'h-14'} src={'/planty-logo.svg'} alt={'planty logo'}/>
              </Link>
            </div>
            <div className={'p-2 items-center flex max-sm:hidden'}>
              {...mainMenu}
            </div>
            <Collapsible.Trigger asChild>
              <div className={'flex sm:hidden'}>
                <i className="fa-regular fa-bars fa-lg text-gray-500 hover:text-gray-200"></i>
              </div>
            </Collapsible.Trigger>
          </div>
          <Collapsible.Content>
            <div className={'p-2 sm:hidden items-center'}>
              {...mainMenu}
              <button
                className={'mt-3 mb-1 ml-2 block h-10 w-10 rounded-full overflow-hidden border-2 border-gray-500 focus:border-gray-200 hover:border-gray-200'}>
                <img className={'h-full w-full object-cover'} src={'profilePlaceholder.jpg'}/>
              </button>
              {...microMenu}
            </div>
          </Collapsible.Content>
        </Collapsible.Root>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild className={'max-sm:hidden'}>
            <button
              className={'block mt-2 h-11 w-11 rounded-full overflow-hidden border-2 border-gray-500 focus:border-gray-200 hover:border-gray-200'}>
              <img className={'h-full w-full object-cover'} src={'profilePlaceholder.jpg'}/>
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content className={'p-2 items-center bg-gray-800 mt-2'} sideOffset={5}>
              <div className={'text-gray-200'}>
                {...microMenu}
              </div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </header>
      <div className={'flex justify-center p-6'}>
        <div className={'max-w-screen-xl w-full'}>
          {children}
        </div>
      </div>
    </div>
  )
}
