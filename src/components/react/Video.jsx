import {useState} from "preact/hooks"

export const Video = () => {
    const [muted, setMuted] = useState(true)

    return (
        <>
            {muted ? <svg xmlns="http://www.w3.org/2000/svg" class='absolute z-10 top-80 md:top-auto md:bottom-10 right-10 md:right-20 border rounded-full p-1.5 cursor-pointer hidden md:flex' onClick={() => setMuted(false)} width="38" height="38" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M15 8a5 5 0 0 1 1.912 4.934m-1.377 2.602a5 5 0 0 1 -.535 .464" />
                <path d="M17.7 5a9 9 0 0 1 2.362 11.086m-1.676 2.299a9 9 0 0 1 -.686 .615" />
                <path d="M9.069 5.054l.431 -.554a.8 .8 0 0 1 1.5 .5v2m0 4v8a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l1.294 -1.664" />
                <path d="M3 3l18 18" />
            </svg>
            : <svg xmlns="http://www.w3.org/2000/svg" class='absolute z-10 top-80 md:top-auto md:bottom-10 right-10 md:right-20 border rounded-full p-1.5 cursor-pointer hidden md:flex' onClick={() => setMuted(true)} width="38" height="38" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M15 8a5 5 0 0 1 0 8" />
                <path d="M17.7 5a9 9 0 0 1 0 14" />
                <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
            </svg>}
            {muted ? <video muted id="miVideo" class="relative h-96 md:h-screen w-full object-cover" src="./introOpti.mp4" autoplay="" loop="" preload="auto" playsinline="" controlslist="nodownload"></video> : <video id="miVideo" class="relative h-96 md:h-screen w-full object-cover" src="./introOpti.mp4" autoplay="" loop="" preload="auto" playsinline="" controlslist="nodownload"></video>}
        </>
    )
}