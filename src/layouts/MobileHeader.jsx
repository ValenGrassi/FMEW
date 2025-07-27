import {useState} from "preact/hooks"
import { Campana } from "../components/react/CampanaMobile";

export const MobileHeader = () => {
    const [open, setOpen] = useState(false)
    const [fundacion, setFundacion] = useState(false)
    const [mew, setMew] = useState(false)
    const [qs, setQs] = useState(false)
    return (
        <div className={`transition-all bg-[#231F20] h-fit font-body flex flex-col justify-between py-6 px-5 drop-shadow-md md:hidden w-screen z-0 ${open ? "sticky top-0" : ""}`}>
            <a href="/" className="text-xl h-fit mr-20">FUNDACION <span className="text-pink-200">WALSH FACIO</span></a>
            <ul className={` text-gray-600 ${open ? "flex flex-col pt-4 text-sm font-normal transition-all" : "h-0 invisible"}`}>
                <li class="px-4 py-5 text-white"><a href="/">Inicio</a></li>
                <li onClick={() => setFundacion(!fundacion)} class="px-4 py-5 text-white flex gap-2">La Fundación<svg className={`mt-1 transition-transform transform duration-200 rotate-180 ${fundacion && "rotate-[0]"} `} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" stroke-width="0" fill="currentColor" /></svg></li>
                <div>
                    <li class={`flex text-white transition-all ${fundacion && "px-4 py-2.5"}`}><a href="/premio-fmew" className="text-sm">{fundacion && "Premio FMEW"}</a></li>
                    <li class={`flex text-white transition-all ${fundacion && "px-4 py-2.5"}`}><a href="/premio-infantil-fmew" className="text-sm">{fundacion && "Premio Infantil FMEW"}</a></li>
                    <li class={`flex text-white transition-all ${fundacion && "px-4 py-2.5"}`}><a href="/maria-elena-y-la-comunidad" className="text-sm">{fundacion && "María Elena en la Comunidad"}</a></li>
                </div>
                <li class="px-4 py-5 text-white"><a href="/juego-fmew">Manuelita, ¿Dónde vas?</a></li>
                <li onClick={() => setMew(!mew)} class="px-4 py-5 text-white flex gap-2">María Elena Walsh <svg className={`mt-1 transition-transform transform duration-200 rotate-180 ${mew && "rotate-0"} `} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" stroke-width="0" fill="currentColor" /></svg></li>
                <div>
                    <li class={`flex text-white transition-all ${mew && "px-4 py-2.5"}`}><a href="/biografia" className="text-sm">{mew && "Biografía"}</a></li>
                    <li class={`flex text-white transition-all ${mew && "px-4 py-2.5"}`}><a href="/obras" className="text-sm">{mew && "Obra"}</a></li>
                    <li class={`flex text-white transition-all ${mew && "px-4 py-2.5"}`}><a href="/premios-y-homenajes" className="text-sm">{mew && "Premios y Homenajes"}</a></li>
                    <li class={`flex text-white transition-all ${mew && "px-4 py-2.5"}`}><a href="/maria-elena-viva" className="text-sm">{mew && "María Elena viva"}</a></li>
                </div>
                <li class="px-4 py-5 text-white"><a href="/noticias">Noticias</a></li>
                <li onClick={() => setQs(!qs)} class="px-4 py-5 text-white flex gap-2">Quiénes somos<svg className={`mt-1 transition-transform transform duration-200 rotate-180 ${qs && "rotate-0"} `} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" stroke-width="0" fill="currentColor" /></svg></li>
                <div>
                    <li class={`flex text-white transition-all ${qs && "px-4 py-2.5"}`}><a className="text-sm">{qs && "Próximamente"}</a></li>
                </div>
            </ul>
            <div>
                <Campana/>
                <img
                    src={open ? "../close.svg?url" : "../menu.svg"}
                    onClick={() => { setOpen(!open) }}
                    className="absolute right-0 top-0 mt-6 mr-5 h-7 md:hidden cursor-pointer invert"
                />
            </div>
    </div>

    )
}