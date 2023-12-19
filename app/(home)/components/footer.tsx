import React from 'react'
import { Logo } from './logo'
import { Button } from '@/components/ui/button'

export const Footer = () => {
  return (
    <div className='flex items-center justify-between w-full p-6 bg-background z-50'>
        <Logo />
        <div className='flex ml-auto w-full justify-end items-center gap-x-1'>
            <Button variant="ghost" size="sm">Privacy Policy</Button>
            <Button variant="ghost" size="sm">Terms & Conditions</Button>
        </div>
    </div>
  )
}
