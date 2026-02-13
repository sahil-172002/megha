import { Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

interface ProductCardProps {
    id: number
    name: string
    category: string
    price: number
    image: string
    description: string
}

export function ProductCard({ id, name, category, image, description }: ProductCardProps) {
    const handleWhatsAppClick = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        const message = `Hi, I'm interested in knowing the price for ${name}.`
        const phone = '919423857496'
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank')
    }

    return (
        <Link
            to={`/products/${id}`}
            className="group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-emerald-100/50 hover:-translate-y-1 transition-all duration-300 h-full w-full"
        >
            {/* Image Container with fixed aspect ratio */}
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-50 p-6 flex items-center justify-center group-hover:bg-emerald-50/10 transition-colors duration-500">
                <img
                    src={image}
                    alt={name}
                    className="object-contain w-full h-full drop-shadow-sm group-hover:scale-110 group-hover:drop-shadow-lg transition-transform duration-500 ease-out"
                />

                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1.5 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-sm border border-slate-800">
                    {category}
                </span>

                {/* Overlay gradient only visible on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content Container */}
            <div className="flex flex-col flex-grow p-6">
                <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2.5 line-clamp-1 group-hover:text-emerald-700 transition-colors tracking-tight">
                        {name}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 h-10 font-medium whitespace-pre-wrap">
                        {description}
                    </p>
                </div>

                {/* Footer pinned to bottom */}
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between gap-3">
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-[0.1em] font-extrabold text-slate-400 mb-0.5">AVAILABILITY</span>
                        <div className="flex items-baseline gap-1">
                            <span className="text-sm font-bold text-emerald-600">Contact for Price</span>
                        </div>
                    </div>

                    <button
                        className="flex items-center gap-2 px-5 py-3 bg-slate-900 text-white rounded-xl text-sm font-bold shadow-lg shadow-slate-900/10 hover:bg-emerald-600 hover:shadow-emerald-600/30 hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
                        onClick={handleWhatsAppClick}
                    >
                        <Phone size={16} />
                        Enquire
                    </button>
                </div>
            </div>
        </Link>
    )
}
