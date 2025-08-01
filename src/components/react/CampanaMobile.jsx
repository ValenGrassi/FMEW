import { useState, useEffect } from "preact/hooks"

export const Campana = () => {
    const [hasNews, setHasNews] = useState(null);

    useEffect(() => {
        const stored = localStorage.getItem("campana-hasNews");
    
        if (stored === null) {
          // Si no existe nada, asumimos que hay noticias nuevas
          setHasNews(true);
        } else {
          // Convertimos string a booleano
          setHasNews(stored === "true");
        }
      }, []);

      useEffect(() => {
        if (hasNews !== null) {
          localStorage.setItem("campana-hasNews", hasNews.toString());
        }
      }, [hasNews]);
    
    return (
        <div class="absolute right-12 top-0 mt-6 mr-5 justify-center">
            {/* Icono campana */}
            <a href="#noticias" onClick={(e) => {
                    setHasNews(false) // Por ejemplo, quitar la notificación al click
                }}>
                <svg class="invert cursor-pointer" xmlns="..." width="30" height="28" viewBox="0 0 64 64">
                  <path d="M 32 10 C 29.662 10 28.306672 11.604938 27.638672 13.085938 C 24.030672 13.809937 17.737984 16.956187 16.958984 24.742188 C 16.665984 29.334188 16.1185 37.883781 13.0625 39.300781 C 12.8505 39.398781 12.655234 39.533219 12.490234 39.699219 C 12.235234 39.954219 10 42.294 10 46 C 10 47.104 10.896 48 12 48 L 25.257812 48 C 25.652433 51.372928 28.522752 54 32 54 C 35.477248 54 38.347567 51.372928 38.742188 48 L 52 48 C 53.104 48 54 47.104 54 46 C 54 42.294 51.764766 39.954219 51.509766 39.699219 C 51.344766 39.534219 51.1495 39.397828 50.9375 39.298828 C 47.8825 37.881828 47.333203 29.333922 47.033203 24.669922 C 46.258203 16.945922 39.966375 13.806984 36.359375 13.083984 C 35.692375 11.603984 34.338 10 32 10 z M 32 14 C 32.603 14 32.766719 14.619859 32.886719 15.255859 C 33.063719 16.190859 33.884422 16.914062 34.857422 16.914062 C 34.931422 16.914063 42.311828 17.650047 43.048828 24.998047 C 43.557828 32.932047 44.389891 40.250797 48.837891 42.716797 C 49.024891 42.956797 49.333937 43.401 49.585938 44 L 14.414062 44 C 14.667063 43.397 14.976203 42.95375 15.158203 42.71875 C 19.609203 40.25475 20.442312 32.935313 20.945312 25.070312 C 21.688313 17.650312 29.068578 16.914062 29.142578 16.914062 C 30.099578 16.914062 30.934375 16.156391 31.109375 15.275391 C 31.232375 14.660391 31.396 14 32 14 z M 29.335938 48 L 34.664062 48 C 34.319789 49.152328 33.262739 50 32 50 C 30.737261 50 29.680211 49.152328 29.335938 48 z"></path>
                </svg>
            </a>

            {/* Notificación roja */}
            {hasNews && (
                <span class="absolute top-0 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
            )}
        </div>
    )
}
