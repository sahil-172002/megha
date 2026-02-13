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
                            <span className="inline-block px-4 py-2 bg-white/10 text-white text-xs sm:text-sm font-bold uppercase tracking-[0.2em] rounded-full mb-8 border border-white/20 backdrop-blur-md">
                                PREMIER AGRICULTURAL SOLUTIONS
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tighter">
                                Our Products
                            </h1>
                            <p className="text-lg sm:text-xl lg:text-2xl text-emerald-50 max-w-2xl mx-auto px-4 leading-relaxed font-medium">
                                Engineered for durability. Trusted for generations.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Filters */}
                <section className="sticky top-[72px] md:top-[88px] z-30 bg-white/70 backdrop-blur-xl border-b border-slate-200/60 py-5 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] transition-all duration-300">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-3 text-slate-900 font-extrabold text-sm uppercase tracking-widest shrink-0">
                                <Filter size={18} className="text-emerald-600" />
                                <span>Filter By</span>
                            </div>
                            <div className="flex flex-wrap justify-center gap-3 w-full md:w-auto">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        className={`px-6 py-2.5 rounded-xl text-sm font-bold tracking-tight transition-all duration-300 ${selectedCategory === category
                                            ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/10 -translate-y-0.5'
                                            : 'bg-white text-slate-500 border border-slate-200 hover:border-emerald-500/30 hover:text-emerald-600 hover:bg-emerald-50/30'
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
