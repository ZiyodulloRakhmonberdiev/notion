"use client"
import { Loader } from '@/components/ui/loader';
import { ChildProps } from '@/types'
import { useUser } from '@clerk/clerk-react';
import { useConvexAuth } from 'convex/react';
import { redirect } from 'next/navigation';
import { Sidebar } from './components';

 const SecretLayout = ({children}: ChildProps) => {
    const {isAuthenticated, isLoading} = useConvexAuth();
    const {user} = useUser()
    if(isLoading){
        return (
            <div className='w-full h-full flex justify-center items-center items-center'>
                <Loader sizes={"lg"}></Loader>
            </div>
        )
    }
    if(!user){
        return redirect("/")
    }
    return (
    <div className='flex w-full'>
        <Sidebar />
        <main className='flex-1 h-full overflow-y-auto'>{children}</main>
    </div>
  )
}

export default SecretLayout