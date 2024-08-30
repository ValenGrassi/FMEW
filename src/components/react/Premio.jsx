import {useState} from "preact/hooks"

export const Premio = ({title, año, title2}) => {
    const [active, setActive] = useState(false)
    return (
        <>
            <div onClick={() => setActive(!active)} class="bg-white h-14 cursor-pointer text-black flex items-center px-5 rounded">
                <span className="md:w-96 font-normal"><b>{año}</b><i>{title}<br></br>{title2}</i></span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" stroke-width="0" fill="currentColor" /></svg>
            </div>
            {active && title == "Tomás Downey" && (
            <>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <img className="w-52" src="../Tomas.jpg?url" alt="tomas"/>
                    <div className="flex flex-col mt-4 gap-4">
                        <p className="text-3xl font-semibold">Literatura</p>
                        <p className="text-lg">Tomás Downey</p>
                        <p className="text-sm">Foto de Magdalena Siedlecki</p>
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <span className="text-xl font-semibold">Menciones</span>
                    <p>Cecilia Rodríguez</p>
                    <p>Sebastián Rodríguez Mora</p>
                    <p>Natalia Andrea Volosin</p>
                    <span className="text-xl font-semibold">Jurado</span>
                    <p>Eduardo Belgrano Rawson</p>
                    <p>Leopoldo Brizuela</p>
                    <p>Ana María Shua</p>
                </div>
            </>)}
            {active && title == "Mariano Vespa" && (
            <>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <img className="w-52" src="../Mariano.jpg?url" alt="mariano" />
                    <div className="flex flex-col mt-4 gap-4">
                        <p className="text-3xl font-semibold">Literatura</p>
                        <p className="text-lg">Mariano Vespa</p>
                        <p className="text-sm">Foto de Dominique Besanson</p>
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <span className="text-xl font-semibold">Menciones</span>
                    <p>Joaquín Chervero</p>
                    <p>Alejandro Noguera</p>
                    <p>Mauro Peverelli</p>
                    <span className="text-xl font-semibold">Jurado</span>
                    <p>Tomás Downey</p>
                    <p>María Moreno</p>
                    <p>Pablo De Santis</p>
                </div>
            </>)}
            {active && title == "María de la Paz Gutiérrez" && (
            <>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <img className="w-52" src="../Maria.jpg?url" alt="maria" />
                    <div className="flex flex-col mt-4 gap-4">
                        <p className="text-3xl font-semibold">Fotografía</p>
                        <p className="text-lg">María de la Paz Gutiérrez</p>
                        <p className="text-sm">Autorretrato</p>
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <span className="text-xl font-semibold">Menciones</span>
                    <p>Martín Bonetto</p>
                    <p>Mauricio Centurión</p>
                    <p>Mariano Manikis</p>
                    <span className="text-xl font-semibold">Jurado</span>
                    <p>Sara Facio</p>
                    <p>Graciela García Romero</p>
                    <p>Silvia Mangialardi</p>
                </div>
            </>)}
            {active && title == "Mauro Zoladz" && (
            <>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <img className="w-52" src="../Mauro.jpeg?url" alt="tomas"/>
                    <div className="flex flex-col mt-4 gap-4">
                        <p className="text-3xl font-semibold">Fotografía</p>
                        <p className="text-lg">Mauro Zoladz</p>
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <span className="text-xl font-semibold">Menciones</span>
                    <p>Juan Pablo Redfern</p>
                    <p>Lidia Barán</p>
                    <p>Tomás Francisco Cuesta </p>
                    <p>Emmanuel Fernandez </p>
                    <span className="text-xl font-semibold">Jurado</span>
                    <p>Sara Facio</p>
                    <p>Gonzalo Bonadeo</p>
                    <p>Graciela García Romero</p>
                    <p>Silvia Mangialardi</p>
                </div>
            </>)}
            {active && title == " - JIN B Escuela 15 D.E. 3" && (
            <>
                <div className="flex flex-col md:flex-row gap-6 ">
                    <div><img className="w-40" src="../pi2.jpeg?url" alt="Premio infantil 2"/></div>
                    <div className="flex flex-col mt-4 gap-4 justify-between">
                        <div><p className="text-xl font-semibold">Manuelita, 60 años</p>
                        <p className="text-lg"><b>Categoría 5 y 6 años</b></p>
                        <p className="text-md"><b>1º Premio: </b>JIN B Escuela 15 D.E. 3, CABA</p></div>
                        <p className="text-sm">“A través de tu mirada”</p>
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <span className="text-xl font-semibold">Menciones</span>
                    <p>CEEI Miguel Ángel Zavala Ortiz, Córdoba. “Manuelita viaja a París”</p>
                    <p>Jardín Nº 907 “María Elena Walsh”, San Vicente. “Manuelita en París”</p>
                </div>
                <div className="flex flex-col md:flex-row gap-6 justify-center mt-10">
                    <div><img className="h-52" src="../pi1.jpeg?url" alt="premio infantil 1"/></div>
                    <div className="flex flex-col mt-4 gap-4 justify-between">
                        <div><p className="text-xl font-semibold">Manuelita, 60 años</p>
                        <p className="text-lg"><b>Categoría 6 y 7 años</b></p>
                        <p className="text-md"><b>1º Premio: </b>Escuela Leandro N. Alem Nº 218, San Lorenzo, Santa Fe</p></div>
                        <p className="text-sm">“El viaje de Manuelita”</p>
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <span className="text-xl font-semibold ">Menciones</span>
                    <p>Escuela de La Aldea, CABA. “Un poquito caminando y otro poquitito a pie”</p>
                    <p>Centro de Acción Familiar Nº 11, Venado Tuerto, Provincia de Santa Fe. “De París a Pehuajó”</p>
                    <span className="text-xl font-semibold mt-10">Jurado</span>
                    <p>Ezequiel Díaz Ortiz</p>
                    <p>Mariana Grisolía Fernández</p>
                    <p>Nora León</p>
                </div>
            </>)}
            {active && title == " Categoría 6 y 7 años" && (
            <>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <img className="w-52" src="../pi1.jpeg?url" alt="premio infantil 1"/>
                    <div className="flex flex-col mt-4 gap-4">
                        <p className="text-2xl font-semibold">Manuelita, 60 años</p>
                        <p className="text-lg">Escuela Leandro N. Alem Nº 218, San Lorenzo, Santa Fe</p>
                        <p className="text-sm">“El viaje de Manuelita”</p>
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <span className="text-xl font-semibold">Menciones</span>
                    <p>Escuela de La Aldea, CABA. “Un poquito caminando y otro poquitito a pie”</p>
                    <p>Centro de Acción Familiar Nº 11, Venado Tuerto, Provincia de Santa Fe. “De París a Pehuajó”</p>
                    <span className="text-xl font-semibold">Jurado</span>
                    <p>Ezequiel Díaz Ortiz</p>
                    <p>Mariana Grisolía Fernández</p>
                    <p>Nora León</p>
                </div>
            </>)}
        </>
    )
}
