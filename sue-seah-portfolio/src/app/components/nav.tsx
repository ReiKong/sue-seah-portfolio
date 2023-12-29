export default function SideNav() {
    return (
        <section className="flex flex-col col-span-1 h-[100vh] py-[20px] gap-[40px]">
            <div>
                <h3 className="font-sans font-extrabold text-[20px]">Sue Seah</h3>
                <p className="font-sans font-semibold text-[16px]">Architect</p>
            </div>
            <div className="flex flex-col">
                <a>About</a>
                <a>Projects</a>
            </div>
        </section>
    )
}