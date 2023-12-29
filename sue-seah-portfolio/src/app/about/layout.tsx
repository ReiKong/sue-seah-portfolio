import SideNav from "../components/nav";
import AboutPage from "./page";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="grid grid-cols-5 px-[20px] bg-primary-100">
        <SideNav />
        <AboutPage />
      </main>
    )
  }
  