import {useState} from "preact/hooks"

export const Autoridades = () => {
    const [open, setOpen] = useState(false)
    return(
        <div className="max-w-6xl m-auto px-10 xl:p-0">
            <div class="flex gap-2">
                <p onClick={() => setOpen(!open)} className="cursor-pointer font-bold" ><b>Autoridades fundacionales 2017/2020</b></p>
                <svg onClick={() => setOpen(!open)} className={`mt-1 transition-transform transform duration-200 rotate-0 cursor-pointer`} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" stroke-width="0" fill="currentColor" />
                </svg>
            </div>
            <div class={`transition-all duration-500 h-0 mb-20 ${open && "h-[110rem] sm:h-[75rem] transition-all "} `}>
                <div class={`transition duration-400 font-normal cursor-context-menu ${open ? "opacity-100" : "opacity-0"} `} >
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Consejo de Administración</p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Sara Facio – Presidente<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Fotógrafa, editora y curadora fotográfica, periodista, gestora cultural.<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Guillermo Gasió – Vicepresidente<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Abogado, diplomático, investigador y docente.<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Graciela García Romero – Secretaria<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Investigadora historiográfica, editora fotográfica, documentalista.<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Magdalena Ruiz Guiñazú – Prosecretaria<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Periodista de radio, gráfica y televisión. Escritora.<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Mariana Facio – Tesorera<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Fotógrafa independiente. Camarógrafa, editora y directora de cámaras.<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Silvia Mangialardi – Protesorera<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Ingeniera, editora, periodista, escritora, curadora, jurado internacional de fotografía.<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Consejo Asesor<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Diego Bashkansky<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Médico (Universidad de Buenos Aires – UBA), especialista en medicina interna, tratamiento del dolor, cuidados paliativos.<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Mario Burgos<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Experto en diseño y gestión de proyectos sociales y educativos. Docencia en distintos niveles.<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Leopoldo Brizuela<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Escritor, traductor y periodista.<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>José Enrique Echeverría<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Abogado, docente.<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Pedro Pablo García Caffi<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Director de escena, músico, productor y administrador cultural.<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Esther González Varona<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Psicoanalista.<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Leila Guerriero<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Periodista, escritora, editora, productora y docente.<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Rodrigo Ures<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Autor y director de teatro y televisión. Docente, escritor.</p>
                </div>
            </div>
        </div>
    )
}

export const Autoridades2 = () => {
    const [open, setOpen] = useState(false)
    return(
        <div className="max-w-6xl m-auto px-10 xl:p-0">
            <div class="flex gap-2">
                <p onClick={() => setOpen(!open)} className="cursor-pointer font-bold" ><b>Autoridades fundacionales 2021/2023</b></p>
                <svg onClick={() => setOpen(!open)} className={`mt-1 transition-transform transform duration-200 rotate-0 cursor-pointer`} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" stroke-width="0" fill="currentColor" />
                </svg>
            </div>
            <div class={`transition-all duration-500 h-0 mb-20 ${open && "h-[45rem] sm:h-[30rem] transition-all "} `}>
                <div class={`transition duration-400 font-normal cursor-context-menu ${open ? "opacity-100" : "opacity-0"} `} >
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Sara Facio – Presidente<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}><b>Consejo de Administración.</b><br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Sara Facio<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Graciela García Romero.<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Silvia Mangialardi.<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>María Isabel Murgier.<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Felicitas Luna.<br></br></p>

                    <p class={`py-2 ${open ? "flex" : "hidden"} `}><b>Consejo Asesor.</b><br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Diego Bashkansky.<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Ezequiel Díaz Ortiz.<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Guillermo Gasió.<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Leila Guerriero.<br></br></p>
                    <p class={`py-2 ${open ? "flex" : "hidden"} `}>Mariano Rodríguez.<br></br></p>
                </div>
            </div>
        </div>
    )
}