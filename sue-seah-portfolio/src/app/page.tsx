import Image from 'next/image'
import SideNav from './components/nav' 
import HomePage from "./home"

export default function Home() {
  return (
    <main className="grid grid-cols-5 px-[20px] gap-[40px] bg-primary-100">
      <SideNav />
      <HomePage />
    </main>
  )
}
