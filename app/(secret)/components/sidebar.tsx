"use client"
import { cn } from '@/lib/utils'
import { ChevronsLeft, MenuIcon } from 'lucide-react'
import React, { ElementRef, useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { DocumentList } from '.'

export const Sidebar = () => {
    const sidebarRef = useRef<ElementRef<"div">>(null)
    const navbarRef = useRef<ElementRef<"div">>(null)
    const isResizing = useRef(false)
    const isMobile = useMediaQuery("(max-width: 770px)")
    const [isCollapsed, setIsCollapsed] = useState(isMobile)
    const [isResetting, setIsResetting] = useState(false)

    useEffect(() => {
        if(isMobile) collapse()
        else reset()
    }, [isMobile])
    const collapse = () => {
        if (sidebarRef.current && navbarRef.current) {
            setIsCollapsed(true);
            setIsResetting(true);
            sidebarRef.current.style.width = "0"
            navbarRef.current.style.width =  "100%"
            navbarRef.current.style.left =  "0"
            setTimeout(() => {
                setIsResetting(false)
            }, 300);
        }
    }
    const reset = () => {
        if(sidebarRef.current && navbarRef.current){
            setIsCollapsed(false)
            setIsResetting(true)
            sidebarRef.current.style.width = isMobile ? "100%" : "240px";
            navbarRef.current.style.width = isMobile ? "0" : "calc(100% - 240px)"
            navbarRef.current.style.left = isMobile ? "100%" : "240px"
        }
    }

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault()
        event.stopPropagation()
        isResizing.current = true
        document.addEventListener("mousemove", handleMouseMove)
        document.addEventListener("mouseup", handleMouseUp)
    }

    const handleMouseMove = (event: MouseEvent) => {
        if(!isResizing.current) return
        let sidebarWidth = event.clientX
        if(sidebarWidth < 240) sidebarWidth = 240
        if(sidebarWidth > 400) sidebarWidth = 400

        if(sidebarRef.current && navbarRef.current){
            sidebarRef.current.style.width = `${sidebarWidth}px`
            navbarRef.current.style.left = `${sidebarWidth}px`
            navbarRef.current.style.width = `calc(100% - ${sidebarWidth}px)`
        }
    }
    const handleMouseUp = () => {
        isResizing.current = false
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
    }

    return (
        <>
            <div className={cn(
                'h-screen bg-secondary overflow-y-auto relative flex w-60 flex-col z-50 group', isResetting && "transition-all ease-in duration-300", isMobile && "w-0",
            )} ref={sidebarRef} >
                <div className={cn('w-6 h-6 text-muted-foreground rounded-sm hover:bg-neutral-500 dark:hover:bg-neutral-600 absolute top-3 right-2 transition opacity-0 group-hover:opacity-100', isMobile && "opacity-100")} role='button' onClick={collapse}>
                    <ChevronsLeft className='h-6 w-6' />
                </div>
                <div>
                    User Profile
                </div>
                <div className="mt-4">
                    <DocumentList></DocumentList>
                </div>
                <div onMouseDown={handleMouseDown} className='absolute top-0 right-0 w-1 h-full cursor-ew-resize bg-primary/10 opacity-0 group-hover:opacity-100 transition'></div>
            </div>
            <div ref={navbarRef} className={cn('absolute top-0 z-50 left-60 w-[calc(100% - 240px )]', isResetting && "transition-all ease-in duration-300")}>
                <nav className='bg-transparent w-full px-3 py-2'>
                    {isCollapsed && (
                        <MenuIcon className='h-6 w-6 text-muted-foreground' role='button' onClick={reset} />
                    )}
                </nav>
            </div>
        </>
    )
}
