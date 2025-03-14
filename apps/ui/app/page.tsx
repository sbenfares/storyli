export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-white dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto flex flex-col gap-16 px-4 py-12 text-center sm:py-20 xl:max-w-6xl">
        <div>
          <a
            href="https://tailkit.com"
            className="active group inline-flex items-center justify-center gap-1.5 active:opacity-75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="inline-block size-8 transition duration-150 ease-out group-hover:scale-105 group-active:scale-100"
            >
              <circle
                cx={128}
                cy={128}
                r={120}
                fillOpacity={0}
                stroke="#13cdc6"
                strokeLinejoin="round"
                strokeWidth={16}
                fill="#293340"
              />
              <circle cx={128} cy={128} r={96} fill="#293340" />
              <path
                d="M130.424 165.032a20 20 0 01-14.142 24.495l-8.842 2.373a20 20 0 01-24.495-14.142l-2.369-8.842a20 20 0 0114.142-24.5l8.842-2.369a20 20 0 0124.5 14.142z"
                fill="#818cf8"
                fillRule="evenodd"
              />
              <path
                d="M191.9 148.561a20 20 0 01-14.143 24.5l-8.842 2.369a20 20 0 01-24.494-14.142l-2.37-8.842a20 20 0 0114.142-24.5l8.842-2.369a20 20 0 0124.5 14.142z"
                fill="#f472b6"
                fillRule="evenodd"
              />
              <path
                d="M113.953 103.561a20 20 0 01-14.142 24.5l-8.842 2.369a20 20 0 01-24.495-14.142l-2.369-8.842a20 20 0 0114.142-24.5l8.842-2.369a20 20 0 0124.495 14.142z"
                fill="#34d399"
                fillRule="evenodd"
              />
              <path
                d="M175.424 87.09a20 20 0 01-14.142 24.495l-8.842 2.369a20 20 0 01-24.5-14.142l-2.369-8.842a20 20 0 0114.142-24.495l8.842-2.369a20 20 0 0124.5 14.142z"
                fill="#fbbf24"
                fillRule="evenodd"
              />
            </svg>
            <span className="text-3xl font-bold transition-opacity duration-150 ease-out group-hover:opacity-75">
              Storyli
            </span>
          </a>
        </div>
        <div>
          <a
            href="https://pixelcave.com"
            className="group mb-2 inline-flex items-center gap-1 rounded-sm border border-gray-200 bg-gray-200/50 px-1.5 py-1 text-sm leading-4 font-semibold text-gray-700 transition hover:border-rose-100 hover:bg-rose-100 hover:text-rose-700 active:border-gray-200 active:bg-gray-200/50 active:text-gray-700 dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:hover:border-rose-900 dark:hover:bg-rose-800 dark:hover:text-rose-100 dark:active:border-gray-700 dark:active:bg-gray-700/50 dark:active:text-gray-300"
          >
            <span>Créé avec</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="inline-block h-4 w-4 text-rose-500 transition will-change-auto group-hover:animate-ping group-active:animate-none"
            >
              <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
            </svg>
            <span>par Samir</span>
          </a>
          <h1 className="lg:leading-tighter mb-4 text-3xl font-black text-black md:text-5xl lg:mx-auto lg:w-5/6 dark:text-white">
            <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
            Des histoires audio captivantes, 
            </span>{" "}
            taillées sur mesure pour l’imaginaire de votre enfant.  
          </h1>
          <h2 className="text-lg/relaxed font-medium text-gray-700 sm:text-xl/relaxed lg:mx-auto lg:w-3/5 dark:text-gray-300">
          Transformez chaque soirée en une aventure inédite avec des histoires personnalisées générées par l’IA. Des récits magiques, adaptés aux envies de vos enfants, en un clic !
          </h2>
          
        </div>
      </div>
    </div>
  );
}
