export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ethic-black text-white">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 L30 60 L50 80 L70 40 L100 70 V100 H0Z" fill="currentColor" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest uppercase bg-ethic-red rounded-full">
            Campagne citoyenne — Lyon & sa métropole
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
            Charte de la <span className="text-ethic-red">Trottinette Éthique</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
            Pour des quais, des pentes et des places partagées en sécurité. Un engagement
            volontaire des usagers, après l&apos;alerte des HCL sur l&apos;explosion des accidents graves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#engagement"
              className="inline-flex items-center justify-center px-8 py-4 bg-ethic-red text-white font-bold rounded-full hover:bg-red-700 transition-colors"
            >
              Je signe la charte
            </a>
            <a
              href="#charte"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-ethic-black transition-colors"
            >
              Lire la charte
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
