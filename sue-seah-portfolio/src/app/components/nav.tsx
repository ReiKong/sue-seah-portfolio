import Link from 'next/link';

export default function SideNav() {
    return (
        <section className="flex flex-col col-span-1 h-[100vh] py-[20px] gap-[40px]">
            <div>
                <Link href="/">
                <h3 className="font-sans font-extrabold text-[20px]">Sue Seah</h3>
                </Link>
                
                <p className="font-sans font-semibold text-[16px]">Architect</p>
            </div>
            <div className="flex flex-col">
                <Link href="/about" className="hover:font-extrabold">
                    About
                </Link>
                <Link href="/projects" className="hover:font-extrabold">
                    Projects
                </Link>
            </div>
        </section>
    )
}