import { useState } from "preact/hooks"
import { ReactCard } from "./ReactCard"

export const Obras = () => {
    const [active, setActive] = useState("literaria")
    return(
        <>
            <div className="flex flex-col text-center gap-6 md:gap-0 md:flex-row w-full md:max-w-6xl justify-around text-3xl font-medium m-auto">
                <span onClick={() => setActive("literaria")} className={active == "literaria" ? "underline underline-offset-8 cursor-context-menu" : "cursor-pointer"}>Literaria</span>
                <span onClick={() => setActive("musical")} className={active == "musical" ? "underline underline-offset-8 cursor-context-menu" : "cursor-pointer"}>Musical</span>
                <span onClick={() => setActive("periodistica")} className={active == "periodistica" ? "underline underline-offset-8 cursor-context-menu" : "cursor-pointer"}>Periodística</span>
            </div>
            
            
            
            {active == "literaria" && 
            <div className="flex flex-col m-auto">
                <div class="flex flex-col md:flex-row items-center max-w-6xl m-auto gap-5 mt-8">
                        <ReactCard href="#poesia" title="Poesía" src="../otoño.jpg?url" />
                        <ReactCard href="#cancionero" title="Cancionero" src="../cancionero.jpg?url" />
                        <ReactCard href="#novelas" title="Novelas" src="../fantasmas.jpg?url" />
                        <ReactCard href="#periodismo" title="Periodismo" src="../desventuras.jpg?url" />
                </div>
                <div class="flex flex-col md:flex-row items-center max-w-6xl m-auto gap-5 mt-8">
                        <ReactCard href="#teatro" title="Teatro" src="../doña.jpeg?url" />
                        <ReactCard href="#recopilacion" title="Recopilación" src="../madre.jpeg?url" />
                        <ReactCard href="#cartas" title="Cartas" src="../casa.jpeg?url" />
                        <ReactCard href="#libros" title="Libros para niños" src="../tutu.jpeg?url" />
                </div>
                <div class="flex flex-col md:flex-row items-center max-w-6xl m-auto gap-5 mt-8">
                        <ReactCard href="#guiones" title="Guiones o personajes para cine" src="../guiones.jpg?url" />
                        <ReactCard href="#trad1" title="Traducciones de sus obras" src="../aleman.jpg?url" />
                        <ReactCard href="#trad2" title="Traducciones de otros autores" src="../ceci.jpg?url" />
                        <ReactCard href="#guionestel" title="Guiones para televisión" src="../guionestele.jpeg?url" />
                </div>
                <div className="flex flex-col md:max-w-6xl">
                    <p className="text-2xl font-medium mt-10" id="poesia">Poesía</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1947 – Otoño imperdonable (Edición de la Autora)</li>
                        <li className="text-base">1948 – Apenas viaje (El Barco de Madera)</li>
                        <li className="text-base">1951 – Baladas con Ángel (Losada)</li>
                        <li className="text-base">1956 – Casi milagro (Herrera y Ressig – Uruguay)</li>
                        <li className="text-base">1965 – Hecho a mano (Fariña Editores)</li>
                        <li className="text-base">1984 – Los poemas (Sudamericana)</li>
                    </ul>
                    <p className="text-2xl font-medium mt-10" id="cancionero">Cancionero</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1969 – Juguemos en el mundo (Sudamericana)</li>
                        <li className="text-base">1976 – Cancionero contra el Mal de Ojo (Sudamericana)</li>
                        <li className="text-base">1994 – Las canciones (Seix Barral)</li>
                        <li className="text-base">2004 – Poemas y canciones (Alfaguara)</li>
                    </ul>
                    <p id="novelas" className="text-2xl font-medium mt-10">Novelas</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1990 – Novios de antaño (Sudamericana)</li>
                        <li className="text-base">2008 – Fantasmas en el parque (Alfaguara)</li>
                    </ul>
                    <p id="periodismo" className="text-2xl font-medium mt-10">Periodismo</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1979 – Desventuras en el País-Jardín-de-Infantes (Sudamericana)</li>
                        <li className="text-base">1999 – Diario brujo (Espasa)</li>
                        <li className="text-base">2004 – Viajes y homenajes (Punto de lectura)</li>
                    </ul>
                    <p id="teatro" className="text-2xl font-medium mt-10">Teatro</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">2008 – Doña Disparate y Bambuco (Alfaguara)</li>
                        <li className="text-base">2008 – Canciones para mirar (Alfaguara)</li>
                    </ul>
                    <p id="recopilacion" className="text-2xl font-medium mt-10">Recopilación</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1981 – A la Madre (Sudamericana)</li>
                    </ul>
                    <p id="cartas" className="text-2xl font-medium mt-10">Cartas (María Elena Walsh/Victoria Ocampo)</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">2012 – María Elena Walsh en casa de Doña Disparate(Alfaguara)</li>
                    </ul>
                    <p id="libros" className="text-2xl font-medium mt-10">Libros para Niños</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1960 – Tutú Marambá (Edición de la Autora)</li>
                        <li className="text-base">1960 – La mona Jacinta (Editorial Abril)</li>
                        <li className="text-base">1960 – Juancito volador (Editorial Abril)</li>
                        <li className="text-base">1960 – La familia Polillal (Editorial Abril)</li>
                        <li className="text-base">1961 – Circo de bichos (Editorial Abril)</li>
                        <li className="text-base">1961 – La rana perdida (Editorial Abril)</li>
                        <li className="text-base">1965 – El Reino del Revés (Fariña Editores)</li>
                        <li className="text-base">1965 – Zoo loco (Fariña Editores)</li>
                        <li className="text-base">1966 – Dailan Kifki (Fariña Editores)</li>
                        <li className="text-base">1966 – Cuentopos de Gulubú (Fariña Editores)</li>
                        <li className="text-base">1966 – Versos para cebollitas (Fariña Editores)</li>
                        <li className="text-base">1967 – Versos folclóricos para cebollitas (Fariña Editores)</li>
                        <li className="text-base">1967 – Versos tradicionales para cebollitas (Sudamericana)</li>
                        <li className="text-base">1967 – Aire libre – Libro de lectura para 2º grado (Editorial Estrada)</li>
                        <li className="text-base">1974 – El diablo inglés – (Editorial Estrada)</li>
                        <li className="text-base">1974 – La sirenita y el capitán (Editorial Estrada)</li>
                        <li className="text-base">1974 – Angelito (Editorial Estrada)</li>
                        <li className="text-base">1974 – El país de la geometría (Editorial Estrada)</li>
                        <li className="text-base">1977 – Chaucha y Palito (Sudamericana)</li>
                        <li className="text-base">1985 – Bisa Vuela (Hyspamérica)</li>
                        <li className="text-base">1989 – La nube traicionera (Sudamericana)</li>
                        <li className="text-base">1996 – Pocopán (Espasa Calpe)</li>
                        <li className="text-base">1997 – Manuelita, ¿dónde vas? (Espasa Calpe)</li>
                        <li className="text-base">2000 – Hotel Pioho’s Palace (Alfaguara)</li>
                        <li className="text-base">2004 – ¡Cuánto cuento! (Alfaguara)</li>
                    </ul>
                    <p id="guionestel" className="text-2xl font-medium mt-10">Guiones para televisión</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1958 – Buenos días, Pinky – Canal 7 – Dirección: María H. Avellaneda – Actores: Osvaldo Pacheco, Luis Brandoni</li>
                        <li className="text-base">1959 – Doña Disparate y Bambuco – Canal 7 – Dirección: María H. Avellaneda</li>
                        <li className="text-base">1965 – Paloma a domicilio – Canal 13 – Dirección: María H. Avellaneda – Actriz: Teresa Blasco</li>
                        <li className="text-base">1965 – Carola en el balcón – Canal 13 – Dirección: María H. Avellaneda – Actriz: Beatriz Bonet</li>
                        <li className="text-base">1967 – De todo corazón – Canal 13 – Dirección: María H. Avellaneda – Actor: Fernando Siro</li>
                        <li className="text-base">1984 – La cigarra – Canal 11 – María H. Avellaneda – Susana Rinaldi – María Elena Walsh</li>
                        <li className="text-base">Las vueltas de la vida – Canal ATC – Actriz 1ª versión: Susana Rinaldi – Actriz 2ª versión: Selva Alemán</li>
                        <li className="text-base">1988 – Los requetepillos – Canal ATC – Dirección: María H. Avellaneda. – Actores: Carola Reina / Claudio Gallardou</li>
                    </ul>
                    <p id="guiones" className="text-2xl font-medium mt-10">Guiones o personajes para cine</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1971 – Juguemos en el mundo – Dirección: María Herminia Avellaneda</li>
                        <li className="text-base">1984 – La República perdida – Dirección: Miguel Pérez</li>
                        <li className="text-base">1988 – Don Enrique del Meñique – Dirección: Gabriela Nirino</li>
                        <li className="text-base">1988 – La familia Polillal – Dirección: Isabel Benetti</li>
                        <li className="text-base">1996 – S.O.S Gulubú – Dirección: Susana Tosso</li>
                        <li className="text-base">1999 – Manuelita – Dirección: García Ferré</li>
                    </ul>
                    <p id="trad1" className="text-2xl font-medium mt-10">Traducciones de sus obras</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">Francés: Dailan Kifki</li>
                        <li className="text-base">Inglés: Canciones – Cuentos – Dailan Kifki</li>
                        <li className="text-base">Finés: Dailan Kifki</li>
                        <li className="text-base">Danés: Dailan Kifki</li>
                        <li className="text-base">Guaraní: Canciones</li>
                        <li className="text-base">Vietnamita: Manuelita, ¿dónde vas?</li>
                        <li className="text-base">Italiano: Dailan Kifki</li>
                        <li className="text-base">Israelí: Manuelita, ¿dónde vas? – Canciones</li>
                        <li className="text-base">Chino: Dailan Kifki</li>
                        <li className="text-base">Turco: Dailan Kifki</li>
                        <li className="text-base">Ruso: Dailan Kifki</li>
                    </ul>
                    <p id="trad2" className="text-2xl font-medium mt-10">Traducciones de otros autores del francés e inglés al castellano realizadas por María Elena Walsh</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1960 – Napoleón – Jean Savanie – Fabril Editora</li>
                        <li className="text-base">1985-1986 – La Editorial Hyspamérica publicó decenas de sus traducciones de libros de literatura infantil de autores de renombres internacional, como: David McKee, Allan Ahlberg, Jo Hoestlandt, Jules Renard, Yvan Pommaux, Robert Desnos, René Escudié.</li>
                    </ul>
                </div>
            </div>}





            {active == "musical" && 
            <div className="flex flex-col m-auto">
                <div class="flex flex-col md:flex-row items-center max-w-6xl m-auto gap-5 mt-8">
                        <ReactCard href="#canciones" title="Canciones publicadas" src="../cancionero.jpg?url" />
                        <ReactCard href="#teatro" title="Teatro" src="../teatro.jpeg?url" />
                        <ReactCard href="#poemas" title="Poemas musicalizados" src="../poemasmus.jpeg?url" />
                        <ReactCard href="#filmes" title="Filmes con su música, guión o personajes" src="../historia.jpeg?url" />
                </div>
                <div class="flex flex-col md:flex-row items-center max-w-6xl m-auto gap-5 mt-8">
                        <ReactCard href="#interprete" title="Intérprete" src="../interprete.jpg?url" />
                        <ReactCard href="#leda" title="Leda y María - Grabaciones" src="../leda.jpg?url" />
                        <ReactCard href="#infantiles" title="María Elena - Infantiles - Grabaciones" src="../mirar.jpg?url" />
                        <ReactCard href="#adultos" title="María Elena - Adultos - Grabaciones" src="../juguemos.png?url" />
                </div>
                <div className="flex flex-col md:max-w-6xl">
                    <p id="canciones" className="text-2xl font-medium mt-10">Canciones publicadas</p>
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <ul className="list-disc list-inside ml-5 text-2xl font-medium mt-2">
                            <li className="text-base">El adivinador</li>
                            <li className="text-base">Las aguasvivas</li>
                            <li className="text-base">Balada de Juan Poquito</li>
                            <li className="text-base">Balada de Cómodus Viscach</li>
                            <li className="text-base">Balada de la mariposa</li>
                            <li className="text-base">Barco quieto</li>
                            <li className="text-base">La calle del gato que pesca</li>
                            <li className="text-base">Calles de París</li>
                            <li className="text-base">Campana de palo</li>
                            <li className="text-base">Canción de bañar la luna</li>
                            <li className="text-base">Canción de caminantes</li>
                            <li className="text-base">Canción de cuna para un gobernante</li>
                            <li className="text-base">Canción del jardinero</li>
                            <li className="text-base">Canción de la vacuna</li>
                            <li className="text-base">Canción de lavanderas</li>
                            <li className="text-base">Canción de pescador</li>
                            <li className="text-base">Canción de títeres</li>
                            <li className="text-base">Canción de Titina</li>
                            <li className="text-base">Canción de tomar el té</li>
                            <li className="text-base">Canción del correo</li>
                            <li className="text-base">Canción del estornudo</li>
                            <li className="text-base">Canción del jacarandá</li>
                            <li className="text-base">Canción del último tranvía</li>
                            <li className="text-base">Canción de la sirena</li>
                            <li className="text-base">Canción para vestirse</li>
                            <li className="text-base">Cantarcanciones</li>
                            <li className="text-base">Los castillos</li>
                            <li className="text-base">Chacarera de los gatos</li>
                            <li className="text-base">Chamarrita de Colonia</li>
                        </ul>
                        <ul className="list-disc list-inside ml-5 mt-2">
                            <li className="text-base">Chamarrita de Colonia</li>
                            <li className="text-base">El cisne que ladra</li>
                            <li className="text-base">La clara fuente</li>
                            <li className="text-base">Como la cigarra</li>
                            <li className="text-base">Coplas de Navidad</li>
                            <li className="text-base">El cuarenta y cinco</li>
                            <li className="text-base">Diablo, ¿estás?</li>
                            <li className="text-base">Don Dolón Dolón</li>
                            <li className="text-base">Don Enrique del Meñique</li>
                            <li className="text-base">¿Dónde estan los poetas?</li>
                            <li className="text-base">Endecha española</li>
                            <li className="text-base">Los ejecutivos</li>
                            <li className="text-base">En el país de Nomeacuerdo</li>
                            <li className="text-base">La familia Polillal</li>
                            <li className="text-base">El gato Confite</li>
                            <li className="text-base">Gilito del Barrio Norte</li>
                            <li className="text-base">La Juana</li>
                            <li className="text-base">El juglar</li>
                            <li className="text-base">Lengua filosa</li>
                            <li className="text-base">Magoya</li>
                            <li className="text-base">Manuelita la tortuga</li>
                            <li className="text-base">Marcha de Osías</li>
                            <li className="text-base">Marineros de España</li>
                            <li className="text-base">Milonga del hornero</li>
                            <li className="text-base">Milona de las invasiones Miranda y Mirón</li>
                            <li className="text-base">Mis ganas</li>
                            <li className="text-base">La mona Jacinta</li>
                            <li className="text-base">El mono Moto Loco</li>
                            <li className="text-base">Oración a la justicia</li>
                        </ul>
                        <ul className="list-disc list-inside ml-5 mt-2">
                            <li className="text-base">Orquesta de señoritas</li>
                            <li className="text-base">La paciencia pobrecita</li>
                            <li className="text-base">La pájara Pinta</li>
                            <li className="text-base">Palomas de la ciudad</li>
                            <li className="text-base">Para los demás</li>
                            <li className="text-base">El pez tejedor</li>
                            <li className="text-base">Postal de guerra</li>
                            <li className="text-base">La Reina Batata</li>
                            <li className="text-base">El Reino del Revés</li>
                            <li className="text-base">Réquiem de madre</li>
                            <li className="text-base">Sábana y mantel</li>
                            <li className="text-base">Sapo Fierro</li>
                            <li className="text-base">Serenata para la tierra de uno</li>
                            <li className="text-base">El señor Juan Sebastián</li>
                            <li className="text-base">El show del perro salchicha</li>
                            <li className="text-base">Si se muere la zamba</li>
                            <li className="text-base">Sin señal de adiós</li>
                            <li className="text-base">Tema del angelito</li>
                            <li className="text-base">Tralalá de Nochebuena</li>
                            <li className="text-base">Twist del Mono Liso</li>
                            <li className="text-base">La vaca estudiosa</li>
                            <li className="text-base">El valle y el volcán</li>
                            <li className="text-base">Vals del diccionario</li>
                            <li className="text-base">Vals municipal</li>
                            <li className="text-base">Venceremos</li>
                            <li className="text-base">El viejo varieté</li>
                            <li className="text-base">Vidalita porteña</li>
                            <li className="text-base">Viento Sur</li>
                            <li className="text-base">Zamba de los días</li>
                            <li className="text-base">Zamba para Pepe</li>
                        </ul>
                    </div>
                    <p id="teatro" className="text-2xl font-medium mt-10">Teatro</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1959 – Los sueños del Rey Bombo – Teatro Presidente Alvear</li>
                        <li className="text-base">1962 – Canciones para mirar – Teatro Municipal General San Martín</li>
                        <li className="text-base">1963 – Doña Disparate y Bambuco – Teatro Municipal General San Martín</li>
                        <li className="text-base">2000 – La farolera – Teatro Ateneo</li>
                        <li className="text-base">1980-2017 – Destacados actores y actrices presentaron espectáculos en todo el país con sus Poemas y canciones; entre otros, Virginia Lago, Miriam Martino, Leonor Benedetto, Sandra Mihanovich, Elena Tasisto, Georgina Barbarossa</li>
                    </ul>
                    <p id="poemas" className="text-2xl font-medium mt-10">Poemas Musicalizados</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1990 – “Viento sur” (Lito Vitale / Walsh) – Estreno en el Teatro Ópera – 1993</li>
                        <li className="text-base">1996 – Fábulas urbanas Op. 99 – de Pompeyo Camps, sobre el poema de MEW – Estreno mundial: Teatro Colón, 6 de noviembre de 1996 – Orquesta Filarmónica de Buenos Aires, con la soprano Samara Pascual Migale y el barítono Luciano Garay</li>
                    </ul>
                    <p id="filmes" className="text-2xl font-medium mt-10">Filmes con su música, guión o personajes</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1990 – “Viento sur” (Lito Vitale / Walsh) – Estreno en el Teatro Ópera – 1993</li>
                        <li className="text-base">1971 – Juguemos en el mundo – Dirección: María Herminia Avellaneda</li>
                        <li className="text-base">1982 – Señora de nadie – Dirección: María Luisa Bemberg</li>
                        <li className="text-base">1984 – La República perdida – Dirección: Miguel Pérez</li>
                        <li className="text-base">1985 – La historia oficial – Dirección: Luis Puenzo</li>
                        <li className="text-base">1988 – Don Enrique del Meñique – Dirección: Gabriela Nirino</li>
                        <li className="text-base">1988 – La familia Polillal – Dirección: Isabel Benetti</li>
                        <li className="text-base">1996 – S.O.S Gulugú – Dirección: Susana Tosso</li>
                        <li className="text-base">1999 – Manuelita – Dirección: García Ferre</li>
                    </ul>
                    <p id="interprete" className="text-2xl font-medium mt-10">Intérprete</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1961 – Canciones para mirar – Teatro Municipal General San Martín</li>
                        <li className="text-base">1962 – Doña Disparate y Bambuco – Teatro Municipal General San Martín</li>
                        <li className="text-base">1965 – La danza Panza – Teatro Regina</li>
                        <li className="text-base">1968-1978 – Juguemos en el mundo. Recital para ejecutivos- Teatro Regina (Además se realizaron giras en la Argentina, América y España)</li>
                        <li className="text-base">1971 – Juguemos en el mundo – filme</li>
                        <li className="text-base">1973 – El Maipo Superstar – Teatro Maipo</li>
                        <li className="text-base">1976 – Canciones para mirar – Teatro Embassy</li>
                        <li className="text-base">1978 – Doña Disparate y Bambuco – Teatro Municipal General San Martín</li>
                    </ul>
                    <p id="leda" className="text-2xl font-medium mt-10">Leda y María - Grabaciones</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">Entre valles y quebradas I</li>
                        <li className="text-base">Entre valles y quebradas II</li>
                        <li className="text-base">Canciones del tiempo de Maricastaña</li>
                        <li className="text-base">Argentine folk songs</li>
                        <li className="text-base">Sous le ciel de l’Argentine</li>
                        <li className="text-base">Folklore d’Argentine</li>
                        <li className="text-base">Cantanvillancicos</li>
                    </ul>
                    <p id="infantiles" className="text-2xl font-medium mt-10">María Elena - Infantiles - Grabaciones</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">Canciones para mirar</li>
                        <li className="text-base">Canciones para mí</li>
                        <li className="text-base">El país de Nomeacuerdo</li>
                        <li className="text-base">Cuentopos</li>
                        <li className="text-base">Cuentopos para el recreo</li>
                        <li className="text-base">Los más grandes éxitos para niños I</li>
                        <li className="text-base">Los más grandes éxitos para niños II</li>
                        <li className="text-base">20 grandes éxitos</li>
                    </ul>
                    <p id="adultos" className="text-2xl font-medium mt-10">María Elena - Adultos - Grabaciones</p>
                    <div className="flex flex-col md:flex-row md:gap-5">
                        <ul className="list-disc list-inside ml-5 text-2xl font-medium mt-2">
                            <li className="text-base">Juguemos en el mundo I</li>
                            <li className="text-base">Juguemos en el mundo II</li>
                            <li className="text-base">El sol no tiene bolsillos</li>
                            <li className="text-base">El buen Modo</li>
                            <li className="text-base">Como la cigarra</li>
                            <li className="text-base">De puño y letra</li>
                            <li className="text-base">Aquí me puse a vivir</li>
                            <li className="text-base">Recuerdo de María Elena Walsh en Costa Rica</li>
                            <li className="text-base">Canciones de María Elena Walsh – España</li>
                            <li className="text-base">María Elena Walsh x María Elena Walsh</li>
                            <li className="text-base">Los más grandes éxitos de María Elena Walsh</li>
                            <li className="text-base">María Elena Walsh</li>
                        </ul>
                        <ul className="list-disc list-inside ml-5 mt-2">
                            <li className="text-base">20 grandes éxitos para mayores</li>
                            <li className="text-base">Sábana y mantel</li>
                            <li className="text-base">Aria del Salón Blanco (Posteriormente se editaron decenas de versiones y recopilaciones con diferentes títulos.)</li>
                            <li className="text-base">María Elena Walsh para grandes y chicos – 3 CD – Diario PÁGINA 12</li>
                            <li className="text-base">El mundo de María Elena Walsh – Alfaguara/Sony Music</li>
                            <li className="text-base">Canciones para chicos – 4 CD</li>
                            <li className="text-base">Canciones para grandes</li>
                            <li className="text-base">Cuentopos I</li>
                            <li className="text-base">Cuentopos II</li>
                            <li className="text-base">María Elena Walsh: La mejor música para chicos – Diario</li>
                            <li className="text-base">María Elena Walsh – Cuentopos I y II – Diario PÁGINA 12</li>
                        </ul>
                    </div>
                </div>
            </div>}







            {active == "periodistica" && 
            <div className="flex flex-col m-auto">
                <div class="flex flex-col xl:flex-row items-center max-w-6xl m-auto gap-5 mt-8">
                        <img src="../diario1.jpg?url" className="w-72" />
                        <img src="../diario2.jpg?url" className="w-72" />
                        <img src="../diario3.jpg?url" className="w-72" />
                        <img src="../diario4.jpg?url" className="w-72" />

                </div>
                <div class="flex flex-col m-auto xl:m-0 md:flex-row items-center max-w-6xl gap-5 mt-8">
                        <img src="../diario5.jpg?url" className="w-72" />
                </div>
                <div className="flex flex-col md:max-w-6xl">
                    <p className="text-2xl font-medium mt-10">Congreso de OMEP</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1965 – La poesía en la Primera Infancia</li>
                    </ul>
                    <p className="text-2xl font-medium mt-10">Diario CLARÍN</p>
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <ul className="list-disc list-inside ml-5 text-2xl font-medium mt-2">
                            <li className="text-base">1998 – Coplas a José Luis</li>
                            <li className="text-base">1998 – Cuando se empieza a perder el miedo</li>
                            <li className="text-base">1998 – Salven al cisne</li>
                            <li className="text-base">1998 – Los medios nos quitan el alma</li>
                            <li className="text-base">1997 – Una noche en Casa Blanca Qué hacer con los duelos</li>
                            <li className="text-base">1996 – Como los ángeles</li>
                            <li className="text-base">1994 – Tilinguería y almas en pena</li>
                            <li className="text-base">1994 – Felices Christmas</li>
                            <li className="text-base">1994 – El fuego descubierto</li>
                            <li className="text-base">1993 – Virginia Woolf – Los secretos de la tribu femenina</li>
                        </ul>
                        <ul className="list-disc list-inside ml-5 mt-2">
                            <li className="text-base">1993 – Peregrinaciones alemanas</li>
                            <li className="text-base">1993 – El gaucho verde (En especiales)</li>
                            <li className="text-base">1992 – La morsa y el Carpintero – Versión de Lewis Carroll</li>
                            <li className="text-base">1992 – Concierto de fotos en Houston</li>
                            <li className="text-base">1991 – Oda a los baños públicos</li>
                            <li className="text-base">1991 – La pena de muerte</li>
                            <li className="text-base">1991 – Carta a Mozart</li>
                            <li className="text-base">1984 – La lucidez y los fantasmas</li>
                            <li className="text-base">1984 – Eva</li>
                            <li className="text-base">1983 – Vidalita</li>
                        </ul>
                        <ul className="list-disc list-inside ml-5 mt-2">
                            <li className="text-base">1981 – Doris Lessing esa bruja</li>
                            <li className="text-base">1981 – Poesía: salvar a las madres</li>
                            <li className="text-base">1981 – Con un muerto a babuchas y un…</li>
                            <li className="text-base">1981 – La cultura en los tiempos de crisis</li>
                            <li className="text-base">1980 – Contratango</li>
                            <li className="text-base">1980 – Infancia y bibliofobia</li>
                            <li className="text-base">1980 – Argentinos sin alma</li>
                            <li className="text-base">1979 – Feminismo y no-violencia</li>
                            <li className="text-base">1979 – El paraíso escandinavo</li>
                            <li className="text-base">1979 – A Master con cariño</li>
                            <li className="text-base">1979 – Desventuras en el país Jardín de Infantes</li>
                            <li className="text-base">1979 – Corrupción de menores?</li>
                            <li className="text-base">1979 – En Bolivia cherche la femme</li>
                            <li className="text-base">1978 – De la libélula al cacto</li>
                        </ul>
                    </div>
                    <p className="text-2xl font-medium mt-10">Diario CRÍTICA</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1947 – Mínima</li>
                        <li className="text-base">1947 – Vana historia</li>
                    </ul>
                    <p className="text-2xl font-medium mt-10">Diario EL ARGENTINO - La Plata</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1948 – Vana historia</li>
                    </ul>
                    <p className="text-2xl font-medium mt-10">Diario EL DÍA - La Plata</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1948 – Arbol</li>
                        <li className="text-base">1948 – Invocación a la profunda adolescencia</li>
                    </ul>
                    <p className="text-2xl font-medium mt-10">Diario EL PAÍS - Montevideo</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1958 – La copla en el Norte argentino</li>
                    </ul>
                    <p className="text-2xl font-medium mt-10">Diario ÉTICA</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1948 – Presencia de José Bergamín</li>
                    </ul>
                    <p className="text-2xl font-medium mt-10">Diario LA GACETA de Tucumán</p>
                    <div className="flex flex-col md:flex-row md:gap-5">
                        <ul className="list-disc list-inside ml-5 text-2xl font-medium mt-2">
                            <li className="text-base">1988 – Nuestro Idioma Castellano</li>
                            <li className="text-base">1980 – Retrato de señora que hace dulces</li>
                            <li className="text-base">1967 – El dinero y la cultura</li>
                            <li className="text-base">1965 – La seriedad de los niños</li>
                            <li className="text-base">1959 – Jaime Dávalos: Coplas y canciones</li>
                            <li className="text-base">1959 – Versos para el angelito: León Benarós</li>
                            <li className="text-base">1958 – El dinero y la cultura</li>
                            <li className="text-base">1957 – Manifiesto de la señora bien</li>
                            <li className="text-base">1957 – Oda a la burocracia</li>
                            <li className="text-base">1957 – Asunción de la poesía</li>
                        </ul>
                        <ul className="list-disc list-inside ml-5 mt-2">
                            <li className="text-base">1957 – El dinero y la cultura</li>
                            <li className="text-base">1957 – Edith Piaf</li>
                            <li className="text-base">1957 – Canción con sillas y mesas</li>
                            <li className="text-base">1956 – La seriedad de los niños</li>
                            <li className="text-base">1956 – Canción con sillas y mesas</li>
                        </ul>
                    </div>
                    <p className="text-2xl font-medium mt-10">Diario LA HORA- Santiago de Chile</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1950 – Verídica balada de la flor de madera</li>
                    </ul>
                    <p className="text-2xl font-medium mt-10">Diario LA NACIÓN</p>
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <ul className="list-disc list-inside ml-5 text-2xl font-medium mt-2">
                            <li className="text-base">2003 – No hay plan cultural si no se cancelan las deudas</li>
                            <li className="text-base">2001 – Pasiones Públicas</li>
                            <li className="text-base">2001 – Déjenme vivir mi duelo en paz</li>
                            <li className="text-base">2001 – La canción del juglar</li>
                            <li className="text-base">2001 – Cara de yeso (Carta de lectores)</li>
                            <li className="text-base">2000 – La clase media quiere viajar a Orlando, no que los chicos lean</li>
                            <li className="text-base">1998 – Paredes y Después?</li>
                            <li className="text-base">1998 – La cámara discreta</li>
                            <li className="text-base">1998 – Che, hay alguien en el control?</li>
                            <li className="text-base">1998 – Escenas de la vida literaria</li>
                        </ul>
                        <ul className="list-disc list-inside ml-5 mt-2">
                            <li className="text-base">1997 – La guardiana de Proust</li>
                            <li className="text-base">1997 – El reino de los enfermos</li>
                            <li className="text-base">1997 – Rubén y Evita</li>
                            <li className="text-base">1997 – Boquitas pintadas</li>
                            <li className="text-base">1997 – Siempre de pie</li>
                            <li className="text-base">1997 – La carpa también debe tomarse vacaciones</li>
                            <li className="text-base">1996 – Buscan desesperadamente a Evita</li>
                            <li className="text-base">1996 – Bastones y escalones</li>
                            <li className="text-base">1996 – La eñe también es gente</li>
                            <li className="text-base">1990 – Medida incoherente (Carta de lectores)</li>
                            <li className="text-base">1988 – Señala omisiones (Carta de lectores)</li>
                        </ul>
                        <ul className="list-disc list-inside ml-5 mt-2">
                            <li className="text-base">1979 – Complicidad de la víctima</li>
                            <li className="text-base">1964 – Telegrama</li>
                            <li className="text-base">1957 – Oda domestica</li>
                            <li className="text-base">1957 – Canciones infantiles</li>
                            <li className="text-base">1952 – La comunión de los vivos</li>
                            <li className="text-base">1951 – Las luces</li>
                            <li className="text-base">1950 – Figuras de la nostalgia</li>
                            <li className="text-base">1950 – El bosque de agonías</li>
                            <li className="text-base">1949 – Ezra Pound el mejor artífice</li>
                            <li className="text-base">1949 – Emily Dickinson y Amy Lowell</li>
                            <li className="text-base">1948 – Canción</li>
                            <li className="text-base">1948 – Temerosas palabras a un ser puro</li>
                            <li className="text-base">1947 – Criatura anterior</li>
                            <li className="text-base">1947 – Dos canciones con el delirio</li>
                        </ul>
                    </div>
                    <p className="text-2xl font-medium mt-10">Diario LA RAZÓN</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1985 – Lo mejor que nos está pasando</li>
                    </ul>
                    <p className="text-2xl font-medium mt-10">Diario MAYORÍA</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1973 – Eva</li>
                        <li className="text-base">1973 – La gran poesía para la gran mayoría</li>
                        <li className="text-base">1973 – Romeo y Julieta</li>
                    </ul>
                    <p className="text-2xl font-medium mt-10">Diario PÁGINA 12</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">2008 – Erza Pound</li>
                        <li className="text-base">2007 – El memorable diálogo de María Elena Walsh y Doris Lessing</li>
                        <li className="text-base">1993 – Aventuras en la cocina de un libro</li>
                    </ul>
                    <p className="text-2xl font-medium mt-10">Diario PRENSA AUSTRAL - Chile</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1947 – La cabalgata</li>
                    </ul>
                    <p className="text-2xl font-medium mt-10">LA NACIÓN - Revista</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1996 – La patria muchachista</li>
                    </ul>
                    <p className="text-2xl font-medium mt-10">Revista AMADEUS</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">2004 – Carta a Mozart</li>
                    </ul>
                    <p className="text-2xl font-medium mt-10">Revista ARTES Y LETRAS</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1964 – Vidalita</li>
                    </ul>
                    <p className="text-2xl font-medium mt-10">Revista BUENOS AIRES LITERATURA</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1953 – Pedro Salinas y su triángulo de silencios</li>
                        <li className="text-base">1951 – Pedro Salinas y su triángulo de silencios</li>
                    </ul>
                    <p className="text-2xl font-medium mt-10">Revista CABALLO DE FUEGO</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1948 – Diciembre</li>
                    </ul>
                    <p className="text-2xl font-medium mt-10">Revista CAMBIO 16 - España</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1974 – Epístola moral</li>
                    </ul>
                    <p className="text-2xl font-medium mt-10">Revista CARAS</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1993 – Poesía</li>
                    </ul>
                    <p className="text-2xl font-medium mt-10">Revista CONTINENTE</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1948 – Vana historia</li>
                    </ul>
                    <p className="text-2xl font-medium mt-10">Revista CUADERNOS DE J.H. Y REISSIG</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1957 – La Forma</li>
                        <li className="text-base">1949 – LIED</li>
                        <li className="text-base">1947 – Septiembre</li>
                        <li className="text-base">1947 – Después de Bécquer</li>
                    </ul>
                    <p className="text-2xl font-medium mt-10">Revista CURSOS Y CONFERENCIAS</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1947 – Paisaje de elegía</li>
                    </ul>
                    <p className="text-2xl font-medium mt-10">Revista EL HOGAR</p>
                    <div className="flex flex-col md:flex-row md:gap-5">
                        <ul className="list-disc list-inside ml-5 text-2xl font-medium mt-2">
                            <li className="text-base">1956 – Primavera</li>
                            <li className="text-base">1951 – Claustros medievales en Nueva York (Con seudónimo Alejandra Bonomi)</li>
                            <li className="text-base">1951 – Mount Vernon, la casa de Washington (Con seudónimo Alejandra Bonomi)</li>
                            <li className="text-base">1949 – Manhattan con ojos argentinos</li>
                            <li className="text-base">1949 – Mis experiencias de viaje</li>
                            <li className="text-base">1949 – El pintor está en la 5ª. Avenida</li>
                            <li className="text-base">1949 – Viaje de David-Apolo</li>
                            <li className="text-base">1949 – Mis experiencias de viaje II</li>
                            <li className="text-base">1948 – Después de Bécquer</li>
                            <li className="text-base">1948 – Balada triste</li>
                        </ul>
                        <ul className="list-disc list-inside ml-5 mt-2">
                            <li className="text-base">1947 – …y ahora una carta que representa la voz de los que comienzan</li>
                            <li className="text-base">1947 – María Elena Walsh</li>
                            <li className="text-base">1947 – La cabalgata</li>
                            <li className="text-base">1947 – Vana historia</li>
                            <li className="text-base">1946 – La víspera</li>
                            <li className="text-base">1946 – Dedicatoria</li>
                            <li className="text-base">1946 – El solar</li>
                            <li className="text-base">1945 – Epílogo</li>
                            <li className="text-base">1945 – Balada de la alondra persuasiva</li>
                            <li className="text-base">1945 – El caballo muerto</li>
                        </ul>
                    </div>
                    <p className="text-2xl font-medium mt-10">Revista ESTAMPA</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1947 – Balada de la alondra persuasiva</li>
                    </ul>
                    <p className="text-2xl font-medium mt-10">Revista EXTRA</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1973 – Carta a una compatriota</li>
                        <li className="text-base">1973 – Dina Rot y la canción sefaradí</li>
                        <li className="text-base">1971 – PN a PN (Premio Nobel a Pablo Neruda)</li>
                    </ul>
                    <p className="text-2xl font-medium mt-10">Revista HOJAS DE POESÍA</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1974 – María Elena Walsh</li>
                    </ul>
                    <p className="text-2xl font-medium mt-10">Revista HUMOR</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1980 – Sepa usted porqué es machista</li>
                    </ul>
                    <p className="text-2xl font-medium mt-10">Revista LOS ANALES</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1947 – Invocación a la profunda adolescencia</li>
                        <li className="text-base">1947 – La casa</li>
                    </ul>
                    <p className="text-2xl font-medium mt-10">Revista MARIBEL</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1950 – Verídica balada de la flor de madera</li>
                    </ul>
                    <p className="text-2xl font-medium mt-10">Revista MUJER BATTLISTA - Montevideo</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1949 – Criatura anterior</li>
                    </ul>
                    <p className="text-2xl font-medium mt-10">Revista MUNDO INFANTIL</p>
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <ul className="list-disc list-inside ml-5 text-2xl font-medium mt-2">
                            <li className="text-base">1958 – Versos y travesuras de la Polilla: Desastres</li>
                            <li className="text-base">1958 – Versos y travesuras de la Polilla: Diente flojo</li>
                            <li className="text-base">1958 – Pastel de pajaritos</li>
                            <li className="text-base">1958 – Versos y travesuras de la Polilla: Doña Disparate</li>
                            <li className="text-base">1958 – Versos y travesuras de la Polilla: Londres</li>
                            <li className="text-base">1958 – Versos y travesuras de la Polilla: Tringuiti Tranguiti</li>
                            <li className="text-base">1958 – Versos y travesuras de la Polilla: Los amigos</li>
                            <li className="text-base">1958 – Versos y travesuras de la Polilla: El perro loquito</li>
                            <li className="text-base">1958 – Versos y travesuras de la Polilla: Canción de costurera</li>
                            <li className="text-base">1958 – Versos y travesuras de la Polilla: Canción de la monja en bicicleta</li>
                        </ul>
                        <ul className="list-disc list-inside ml-5 mt-2">
                            <li className="text-base">1958 – Versos y travesuras de la Polilla: Canción para vestirse</li>
                            <li className="text-base">1958 – Versos y travesuras de la Polilla: El pañuelito</li>
                            <li className="text-base">1958 – Versos y travesuras de la Polilla: Canción para comer puré</li>
                            <li className="text-base">1958 – Versos y travesuras de la Polilla: El vendedor de sueños</li>
                            <li className="text-base">1958 – Versos y travesuras de la Polilla: Quién?</li>
                            <li className="text-base">1958 – Versos y travesuras de la Polilla: Dos canciones tontas</li>
                            <li className="text-base">1958 – Versos y travesuras de la Polilla: Los gatos de París</li>
                            <li className="text-base">1958 – Versos y travesuras de la Polilla: La ratita Ofelia</li>
                            <li className="text-base">1957 – Los castillos</li>
                            <li className="text-base">1957 – La escuela de ratones</li>
                        </ul>
                        <ul className="list-disc list-inside ml-5 mt-2">
                            <li className="text-base">1957 – Canciones de Tutu Marambá</li>
                            <li className="text-base">1957 – Marcha de Michimiau</li>
                            <li className="text-base">1957 – Versos y travesuras de la Polilla: El charango</li>
                            <li className="text-base">1957 – Villancico norteño</li>
                            <li className="text-base">1956 – El pastel de pajaritos</li>
                            <li className="text-base">1956 – Sí, señores</li>
                            <li className="text-base">1956 – El gato Confites</li>
                            <li className="text-base">1956 – El pez tejedor</li>
                            <li className="text-base">1956 – Canción del pescador</li>
                        </ul>
                    </div>
                    <p className="text-2xl font-medium mt-10">Revista REALIDAD</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1949 – Ana Gándara: Génesis</li>
                    </ul>
                    <p className="text-2xl font-medium mt-10">Revista SIETE DIAS</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1967 – Cartas domésticas</li>
                        <li className="text-base">1967 – Cartas domésticas II</li>
                        <li className="text-base">1967 – Cartas domésticas III</li>
                        <li className="text-base">1967 – Cartas domésticas IV</li>
                        <li className="text-base">1967 – Cartas domésticas V</li>
                        <li className="text-base">1967 – Cartas domésticas VI</li>
                        <li className="text-base">1967 – Cartas domésticas VII</li>
                        <li className="text-base">1967 – Cartas domésticas VIII</li>
                        <li className="text-base">1967 – Cartas domésticas IX</li>
                        <li className="text-base">1967 – Cartas domésticas X</li>
                    </ul>
                    <p className="text-2xl font-medium mt-10">Revista SUR</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1959 – Sara Gallardo: Enero</li>
                        <li className="text-base">1957 – Las que cantan</li>
                        <li className="text-base">1957 – JRJ Premio Nobel</li>
                        <li className="text-base">1953 – Jocelyn Brooke: La imagen de la espada desnuda</li>
                        <li className="text-base">1952 – Francisco Luis Bernandez: Florilegio del cancionero vaticano</li>
                        <li className="text-base">1951 – Helena Muñoz Larreta: Sonetos en carne viva</li>
                        <li className="text-base">1950 – El señalado</li>
                        <li className="text-base">1949 – Sobre la vida diaria</li>
                        <li className="text-base">1948 – Verídica balada de la flor de la madera</li>
                    </ul>
                    <p className="text-2xl font-medium mt-10">Revista TÍA VICENTA</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1958 – Ensayo de interpretación de la literatura colectivesca argentina (Con seudónimo Melenita)</li>
                        <li className="text-base">1958 – Himno a Tía Vicenta (Con seudónimo Melenita)</li>
                    </ul>
                    <p className="text-2xl font-medium mt-10">Revista TODO BELGRANO</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1979 – Respuesta a la Amada Inmóvil</li>
                    </ul>
                    <p className="text-2xl font-medium mt-10">Revista VIGENCIA</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1981 – El año próximo seremos breves</li>
                        <li className="text-base">1981 – Fiesta patria</li>
                    </ul>
                    <p className="text-2xl font-medium mt-10">Revista VIVA, diario CLARÍN</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1999 – Vacaciones Inteligentes / Festejemos el hambre</li>
                        <li className="text-base">1997 – La Visita / Del libro Manuelita, Dónde vas?</li>
                        <li className="text-base">1997 – El Sabio</li>
                        <li className="text-base">1997 – El Concierto</li>
                        <li className="text-base">1997 – La Infanta</li>
                        <li className="text-base">1997 – La Selva</li>
                        <li className="text-base">1997 – La Balsa</li>
                        <li className="text-base">1997 – Regalos de Fin de Año</li>
                        <li className="text-base">1997 – Secretos Dorados</li>
                        <li className="text-base">1997 – Los Exorcistas</li>
                        <li className="text-base">1996 – Gente como uno</li>
                        <li className="text-base">1996 – Repartijas</li>
                        <li className="text-base">1996 – Deporte y amén</li>
                        <li className="text-base">1996 – Heredarás el viento…</li>
                        <li className="text-base">1996 – Ponzoñas sonoras</li>
                    </ul>
                    <p className="text-2xl font-medium mt-10">Revista VIVIR EN FAMILIA</p>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="text-base">1965 – La canción del jardinero</li>
                    </ul>
                </div>
            </div>}
        </>
    )
}