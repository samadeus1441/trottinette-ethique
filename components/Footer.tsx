export default function Footer() {
  return (
    <footer className="bg-ethic-black text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="flex items-center gap-2 font-black text-xl text-white tracking-tight mb-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-ethic-red text-white text-sm">
                T
              </span>
              <span>
                Trottinette<span className="text-ethic-red">Éthique</span>
              </span>
            </div>
            <p className="text-sm">Campagne citoyenne indépendante — Lyon & sa métropole.</p>
          </div>

          <div className="flex gap-6 text-sm">
            <a href="#charte" className="hover:text-white transition-colors">
              La charte
            </a>
            <a href="#petition" className="hover:text-white transition-colors">
              Pétition
            </a>
            <a href="#medias" className="hover:text-white transition-colors">
              Médias
            </a>
            <a href="#sources" className="hover:text-white transition-colors">
              Sources
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-xs text-center">
          © {new Date().getFullYear()} Trottinette Éthique Lyon. Initiative citoyenne non
          institutionnelle.
        </div>
      </div>
    </footer>
  )
}
