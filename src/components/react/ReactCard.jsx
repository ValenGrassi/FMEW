export const ReactCard = ({href, title, src}) => {
    return(
        <div class="bg-white p-4 w-full rounded-lg lg:w-[17rem]">
            <div class="overflow-hidden">
                <a class="flex h-72" href={href}>
                    <img src={src} alt="card" class="w-full transition-all duration-700 hover:scale-125 hover:brightness-75 object-cover" />
                </a>
            </div>
            <div class="text-black grid justify-center my-8 gap-4">
                <p class="font-bold text-sm m-auto text-center">{title}</p>
                <a href={href} class="m-auto text-sm font-bold border-black px-6 py-2 rounded border-2 hover:brightness-75">{title != "El archivo de María Elena" ? "VER MÁS" : "Proximamente"}</a>
            </div>
        </div>
        )
}
