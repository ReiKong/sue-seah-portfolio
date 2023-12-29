import Image from 'next/image'
import SideNav from './components/nav' 
import Content from "./content"

export default function Home() {
  return (
    <main className="grid grid-cols-4 px-[20px] bg-[#F8F8F8]">
      <SideNav />
      <Content />
    </main>
  )
}
