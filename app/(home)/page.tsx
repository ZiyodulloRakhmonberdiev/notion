import Image from 'next/image'
import { Clients, Footer, Heroes, Pricing } from './components'

export default function Home() {
  return (
    <main className="flex min-h-full flex-col items-center justify-between p-24">
      <div className='flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10'>
        <Heroes />
        <Clients />
      </div>
      <Pricing />
      <Footer />
    </main>
  )
}
