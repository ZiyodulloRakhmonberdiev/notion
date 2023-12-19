"use client"
import React from 'react'
import { Logo } from './logo'
import { ModeToggle } from '@/components/shared/mode-toggle'
import { Button } from '@/components/ui/button'
import { useScrolled } from '@/hooks/use-scrolled'
import { cn } from '@/lib/utils'

export const Navbar = () => {
  const scrolled = useScrolled()
  return (
    <div className={cn("z-50 bg-background fixed top-0 flex items-center justify-between w-full p-6", 
      scrolled && "border-b shadow-sm"
    )}>
      <Logo />
      <div className='flex items-center gap-x-2'>
        <Button size={"sm"} variant={"ghost"}>Kirish</Button>
        <Button size={"sm"}>Notiondan bepul foydalaning </Button>
        <ModeToggle />
      </div>
    </div>
  )
}
