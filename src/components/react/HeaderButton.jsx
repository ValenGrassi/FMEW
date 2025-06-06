import {useState} from "preact/hooks"

export const HeaderButton = ({href, children, name, pathname}) => {
    const [mouseOver, setMouseOver] = useState(false)
    return (
        <div>
        <li className="flex flex-col px-4 py-2 font-normal text-sm" onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)} >
            <div className="flex gap-2">
                <a href={name == "qs" ? "javascript:void" : href}>{children}</a>
                <svg className={`mt-1 transition-transform transform duration-200 rotate-180 ${
            mouseOver && "rotate-[0]"
          }`} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" stroke-width="0" fill="currentColor" />
                </svg>
            </div>
        </li>
            <div onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)} className={`bg-white fixed text-black text-[13px] flex flex-col transition-all font-medium ease-in-out delay-75 duration-200 items-center ${mouseOver ? "opacity-100" : "opacity-0 invisible"}`} style={{visibility: mouseOver ? "visible" : "hidden"}}>
                {name == "fundacion" && <a href={"/premio-fmew"} className={`py-4 px-6 transition-all duration-200 hover:bg-gray-600 hover:text-white w-full flex ${pathname == "/premio-fmew" ? "bg-gray-600 text-white" : "hover:bg-gray-600 hover:text-white"}`}>Premio FMEW</a>}
                {name == "fundacion" && <a href={"/maria-elena-y-la-comunidad"} className={`py-4 px-6 transition-all duration-200 hover:bg-gray-600 hover:text-white w-full flex ${pathname == "/maria-elena-y-la-comunidad" ? "bg-gray-600 text-white" : "hover:bg-gray-600 hover:text-white"} `}>María Elena en la Comunidad</a>}
                {name == "mew" && <a href={"/biografia"} className={`py-4 px-6 transition-all duration-200 hover:bg-gray-600 hover:text-white w-full flex ${pathname == "/biografia" ? "bg-gray-600 text-white" : "hover:bg-gray-600 hover:text-white"}`}>Biografía</a>}
                {name == "mew" && <a href={"/obras"} className={`py-4 px-6 transition-all duration-200 hover:bg-gray-600 hover:text-white w-full flex ${pathname == "/obras" ? "bg-gray-600 text-white" : "hover:bg-gray-600 hover:text-white"}`}>Obra</a>}
                {name == "mew" && <a href={"/premios-y-homenajes"} className={`py-4 px-6 transition-all duration-200 w-full flex ${pathname == "/premios-y-homenajes" ? "bg-gray-600 text-white" : "hover:bg-gray-600 hover:text-white"}`}>Premios y Homenajes</a>}
                {name == "mew" && <a href={"/maria-elena-viva"} className={`py-4 px-6 transition-all duration-200 w-full flex ${pathname == "/maria-elena-viva" ? "bg-gray-600 text-white" : "hover:bg-gray-600 hover:text-white"}`}>María Elena viva</a>}
                {name == "qs" && <a className={`cursor-pointer py-4 px-12 transition-all duration-200 hover:bg-gray-600 hover:text-white w-full flex ${pathname == "/quienes-somos" || pathname == "/quienes-somos/" ? "bg-gray-600 text-white" : "hover:bg-gray-600 hover:text-white"}`}>Próximamente</a>}
                {name == "infancia" && <a href={"/premio-infantil-fmew"} className={`py-4 px-6 transition-all duration-200 hover:bg-gray-600 hover:text-white w-full flex ${pathname == "/premio-infantil-fmew" ? "bg-gray-600 text-white" : "hover:bg-gray-600 hover:text-white"}`}>Premio Infantil FMEW</a>}
                {name == "infancia" && <a href={"/juego-fmew"} className={`cursor-pointer py-4 px-6 transition-all duration-200 hover:bg-gray-600 hover:text-white w-full flex ${pathname == "/juego-fmew" || pathname == "/juego-fmew/" ? "bg-gray-600 text-white" : "hover:bg-gray-600 hover:text-white"}`}>Juego</a>}
            </div>
        </div>
    )
}