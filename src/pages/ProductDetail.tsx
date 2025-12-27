import { useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Phone, Share2, Check, Shield, Star, Filter } from 'lucide-react'
import { products } from '../data/products'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ProductCard } from '../components/ProductCard'
import { SEO } from '../components/SEO'
import '../App.css'

export function ProductDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const product = products.find(p => p.id === Number(id))

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])

    if (!product) {
        return (
            <div className="app flex flex-col min-h-screen">
                <SEO
                    title="Product Not Found"
                    description="The requested product could not be found."
                    canonical="/products"
                />
                <Header />
                <main className="flex-grow flex items-center justify-center pt-32 pb-20">
                    <div className="container mx-auto px-4 text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 rounded-full mb-6">
                            <Filter size={32} className="text-slate-400" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Product not found</h2>
                        <Link
                            to="/products"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors"
                        >
                            <ArrowLeft size={18} />
                            Back to Products
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }

    const handleWhatsAppClick = () => {
        const message = `Hi, I'm interested in ${product.name} (₹${product.price.toLocaleString('en-IN')})`
        const phone = '919423857496'
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank')
    }

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: product.name,
                    text: `Check out ${product.name} at Megha Electronics`,
                    url: window.location.href
                })
            } catch (err) {
                console.log('Error sharing:', err)
            }
        }
    }

    const relatedProducts = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4)

    return (
        <div className="app bg-slate-50 min-h-screen">
            <SEO
                title={`${product.name} - Best Price in Karmala`}
                description={product.description}
                canonical={`/products/${product.id}`}
                image={product.image}
            />
            <Header />

            <main>
                {/* Product Detail */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                        <div className="absolute inset-0 bg-white"></div>
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: 'url(/livehubheader.svg)',
                                backgroundRepeat: 'repeat-x',
                                backgroundPosition: 'center top',
                                backgroundSize: 'auto 100%'
                            }}
                        ></div>
                    </div>
                    <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
                        <motion.button
                            className="group flex items-center gap-2 text-slate-600 hover:text-emerald-600 font-medium mb-8 transition-colors"
                            onClick={() => navigate(-1)}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <div className="p-2 bg-white rounded-full shadow-sm group-hover:shadow border border-slate-200 group-hover:border-emerald-200 transition-all">
                                <ArrowLeft size={18} />
                            </div>
                            Back to Products
                        </motion.button>

                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-start">
                            {/* Product Image */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="sticky top-24 lg:top-32"
                            >
                                <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 sm:p-12 relative overflow-hidden group">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                                    <div className="aspect-square relative z-10 flex items-center justify-center">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="max-h-full max-w-full object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Trust Badges */}
                                    <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-100">
                                        <div className="text-center">
                                            <div className="mx-auto w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-2">
                                                <Shield size={20} />
                                            </div>
                                            <p className="text-xs font-semibold text-slate-600">Genuine</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="mx-auto w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-2">
                                                <Star size={20} />
                                            </div>
                                            <p className="text-xs font-semibold text-slate-600">Top Rated</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="mx-auto w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-2">
                                                <Check size={20} />
                                            </div>
                                            <p className="text-xs font-semibold text-slate-600">Verified</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Product Info */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="flex flex-col gap-8"
                            >
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider rounded-full">
                                            {product.category}
                                        </span>
                                        <span className="text-sm text-slate-500 font-medium">In Stock</span>
                                    </div>
                                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                                        {product.name}
                                    </h1>
                                    <p className="text-lg text-slate-600 leading-relaxed">
                                        {product.description}
                                    </p>
                                </div>

                                {/* Price Card */}
                                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div>
                                        <p className="text-sm text-slate-500 font-medium mb-1">Best Price</p>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-lg text-slate-900 font-semibold">₹</span>
                                            <span className="text-4xl font-bold text-slate-900 tracking-tight">{product.price.toLocaleString('en-IN')}</span>
                                        </div>
                                    </div>
                                    <div className="text-left sm:text-right p-3 bg-emerald-50 rounded-xl sm:bg-transparent sm:p-0">
                                        <p className="text-xs text-slate-500 sm:text-slate-400">Inclusive of all taxes</p>
                                        <p className="text-xs text-emerald-700 sm:text-emerald-600 font-bold sm:font-medium">Free delivery within Karmala</p>
                                    </div>
                                </div>

                                {/* Features */}
                                {product.features && product.features.length > 0 && (
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                            Key Features
                                        </h3>
                                        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                                            <ul className="grid sm:grid-cols-2 gap-4">
                                                {product.features.map((feature, index) => (
                                                    <li key={index} className="flex items-start gap-3">
                                                        <div className="mt-1 min-w-[18px] text-emerald-500">
                                                            <Check size={18} />
                                                        </div>
                                                        <span className="text-slate-600 text-sm font-medium leading-relaxed">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}

                                {/* Actions */}
                                <div className="flex flex-col sm:flex-row gap-4 pt-4 sticky bottom-0 bg-slate-50/80 backdrop-blur-md p-4 sm:static sm:bg-transparent sm:p-0 z-20 -mx-4 sm:mx-0 border-t border-slate-200 sm:border-0 rounded-t-2xl sm:rounded-none shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.1)] sm:shadow-none">
                                    <button
                                        className="flex-1 btn bg-[#25D366] hover:bg-[#20BA5A] text-white border-none h-14 rounded-xl flex items-center justify-center gap-2 font-bold text-lg shadow-lg shadow-emerald-100 transform active:scale-95 transition-all"
                                        onClick={handleWhatsAppClick}
                                    >
                                        <Phone size={22} />
                                        Buy on WhatsApp
                                    </button>
                                    <button
                                        className="px-6 btn bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 h-14 rounded-xl flex items-center justify-center gap-2 font-semibold text-lg transition-colors active:scale-95"
                                        onClick={handleShare}
                                    >
                                        <Share2 size={22} />
                                        <span className="sm:hidden">Share</span>
                                    </button>
                                </div>

                                {/* Support Info */}
                                <div className="bg-slate-100 rounded-xl p-4 flex items-start gap-4">
                                    <div className="p-2 bg-white rounded-full text-slate-600 shadow-sm">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900 text-sm">Need help deciding?</p>
                                        <p className="text-xs text-slate-500 mb-1">Talk to our expert before purchase</p>
                                        <a href="tel:+919423857496" className="text-emerald-600 font-bold text-sm hover:underline">
                                            Call +91 94238 57496
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <section className="py-12 md:py-20 bg-white">
                        <div className="container mx-auto px-4 md:px-6 lg:px-12">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Similar Products</h2>
                                <Link to="/products" className="text-emerald-600 font-semibold hover:text-emerald-700 text-sm">
                                    View All
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {relatedProducts.map(relatedProduct => (
                                    <ProductCard key={relatedProduct.id} {...relatedProduct} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>

            <Footer />
        </div>
    )
}
