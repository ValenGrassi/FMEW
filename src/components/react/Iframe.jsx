import { useState, useEffect } from 'preact/hooks';

export const Iframe = () => {
    const [fullscreen, setFullScreen] = useState(false);

    useEffect(() => {
        // Deshabilitar el scroll del cuerpo cuando el iframe está en pantalla completa
        document.body.style.overflow = fullscreen ? 'hidden' : 'auto';

        // Limpiar el efecto al desmontar el componente o cambiar el estado
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [fullscreen]);

    return (
        <div class={`${fullscreen ? "h-screen w-screen fixed inset-0 z-30" : "relative m-auto flex justify-center w-full lg:w-2/3 h-[55rem] sm:h-[45rem] my-8 border-[none]"}`}>
            <iframe
                id="myIframe"
                class={`rounded absolute ${fullscreen ? "w-screen h-screen" : "w-full h-full"}`}
                src="https://juego.fundacionmariaelenawalsh.com/"
                style={{ border: 'none' }}
            />
            {fullscreen ? <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setFullScreen(false)} class="absolute bottom-5 right-5 cursor-pointer hover:scale-125 transition" width="35" height="35" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 9l4 0l0 -4" /><path d="M3 3l6 6" /><path d="M5 15l4 0l0 4" /><path d="M3 21l6 -6" /><path d="M19 9l-4 0l0 -4" /><path d="M15 9l6 -6" /><path d="M19 15l-4 0l0 4" /><path d="M15 15l6 6" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setFullScreen(true)} class="absolute bottom-5 right-5 cursor-pointer hover:scale-125 transition" width="35" height="35" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 4l4 0l0 4" /><path d="M14 10l6 -6" /><path d="M8 20l-4 0l0 -4" /><path d="M4 20l6 -6" /><path d="M16 20l4 0l0 -4" /><path d="M14 14l6 6" /><path d="M8 4l-4 0l0 4" /><path d="M4 4l6 6" /></svg>}
        </div>
    );
};
