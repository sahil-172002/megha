import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Filter } from 'lucide-react'
import { ProductCard } from '../components/ProductCard'
import { products, categories } from '../data/products'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { SEO } from '../components/SEO'
import '../App.css'

export function Products() {
    const [selectedCategory, setSelectedCategory] = useState('All')

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(p => p.category === selectedCategory)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="app bg-slate-50 min-h-screen">
            <SEO
                title="Our Products - Auto Switches & Motor Starters"
                description="Browse our complete range of Megha auto switches, motor starters, and control panels. High-quality electrical solutions for Indian agriculture."
                canonical="/products"
            />
            <Header />

            <main>
                {/* Products Header */}
                <section className="relative pt-32 pb-20 overflow-hidden bg-emerald-900">
                    <div className="absolute inset-0 -z-10">
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: 'url(/newbg.png)',
                                backgroundRepeat: 'repeat',
                                backgroundPosition: 'center',
                                backgroundSize: 'auto'
                            }}
                        ></div>
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-12 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block px-4 py-1.5 bg-white/20 text-white text-xs sm:text-sm font-semibold rounded-full mb-6 border border-white/30 backdrop-blur-sm">
                                Quality Products Since 1992
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                                Our Products
                            </h1>
                            <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto px-4 leading-relaxed">
                                Browse our complete range of industrial panels, auto switches, and electrical components
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Filters */}
                <section className="sticky top-[72px] z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                            <div className="flex items-center gap-2 text-slate-700 font-bold shrink-0">
                                <Filter size={18} />
                                <span>Filter By:</span>
                            </div>
                            <div className="flex flex-wrap gap-2 w-full overflow-x-auto pb-2 md:pb-0 no-scrollbar touch-pan-x">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${selectedCategory === category
                                            ? 'bg-emerald-600 text-white shadow-md shadow-emerald-200'
                                            : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                                            }`}
                                        onClick={() => setSelectedCategory(category)}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Products Grid */}
                <section className="py-12 md:py-16">
                    <div className="container mx-auto px-4 md:px-6">
                        <motion.div
                            layout
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 items-stretch"
                        >
                            {filteredProducts.map((product) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    key={product.id}
                                    className="h-full"
                                >
                                    <ProductCard {...product} />
                                </motion.div>
                            ))}
                        </motion.div>

                        {filteredProducts.length === 0 && (
                            <div className="text-center py-20">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
                                    <Filter size={24} className="text-slate-400" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">No products found</h3>
                                <p className="text-slate-500">Try selecting a different category</p>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
