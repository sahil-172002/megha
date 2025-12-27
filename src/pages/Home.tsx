import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShieldCheck, Zap, Tv, Phone, ArrowRight } from 'lucide-react'
import { ProductCard } from '../components/ProductCard'
import { featuredProducts } from '../data/products'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { SEO } from '../components/SEO'
import { BackgroundRippleEffect } from '../components/ui/background-ripple-effect'
import '../App.css'

export function Home() {
    return (
        <div className="app">
            <SEO
                title="Best Motor Starters & Auto Switches in India"
                description="Megha Electronics offers reliable motor protection devices, auto switches, and control panels for Indian farmers. Trusted quality, durable performance."
                canonical="/"
                image="/products/hero1.png"
            />
            <Header />

            <main>
                {/* Hero Section */}
                <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden bg-slate-50">
                    {/* Background Ripple Effect */}
                    <BackgroundRippleEffect rows={45} cols={90} cellSize={50} />

                    {/* Gradient Overlay for better text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/30 to-slate-50/80 z-[1]"></div>

                    <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-20">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-center"
                        >
                            {/* Trust Badge */}
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white rounded-full border border-slate-200/80 shadow-sm mb-8 max-w-full">
                                <div className="w-2 h-2 shrink-0 bg-emerald-500 rounded-full animate-pulse"></div>
                                <span className="text-xs sm:text-sm font-medium text-slate-600 truncate">Trusted by 1 Lakh+ Farmers Since 1992</span>
                            </div>

                            {/* Headline */}
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[1.15] md:leading-[1.1] tracking-tight mb-6">
                                Reliable Motor Protection
                                <br className="hidden sm:block" />
                                <span className="text-emerald-600 block sm:inline mt-2 sm:mt-0"> for Indian Farms</span>
                            </h1>

                            {/* Description */}
                            <p className="text-base sm:text-lg lg:text-xl text-slate-500 leading-relaxed mb-10 max-w-2xl mx-auto px-4">
                                Premium auto switches and control panels engineered for durability. Protect your investment with technology built for Indian conditions.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 px-4">
                                <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold text-base hover:bg-slate-800 transition-all duration-200 shadow-lg shadow-slate-900/10 w-full sm:w-auto">
                                    <Phone size={18} />
                                    Get a Quote
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <Link
                                    to="/products"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 rounded-xl font-semibold text-base border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 w-full sm:w-auto"
                                >
                                    Browse Products
                                </Link>
                            </div>

                            {/* Stats Row */}
                            <div className="flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-20 border-t border-slate-200/50 pt-8 sm:border-0 sm:pt-0">
                                <div className="text-center w-28 sm:w-auto">
                                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">33+</div>
                                    <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Years of Excellence</div>
                                </div>
                                <div className="text-center w-28 sm:w-auto">
                                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">1L+</div>
                                    <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Happy Farmers</div>
                                </div>
                                <div className="text-center w-28 sm:w-auto">
                                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">500+</div>
                                    <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Dealer Network</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Authorized Partners */}
                <section className="py-12 md:py-16 bg-white border-b border-slate-100">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col items-center gap-8 md:gap-10">
                            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-slate-400 relative px-4 after:content-[''] after:hidden sm:after:block after:absolute after:top-1/2 after:left-full after:w-10 after:h-[1px] after:bg-slate-200 after:ml-4 before:content-[''] before:hidden sm:before:block before:absolute before:top-1/2 before:right-full before:w-10 before:h-[1px] before:bg-slate-200 before:mr-4">
                                Authorized Sales & Service Partner
                            </span>
                            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20">
                                {['Samsung', 'LG', 'Havells', 'Polycab', 'Bajaj'].map((brand) => (
                                    <span key={brand} className="font-display text-xl md:text-2xl font-bold text-slate-300 hover:text-emerald-600 transition-colors cursor-default">
                                        {brand}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Specialization */}
                <section className="py-16 md:py-24 bg-white" id="products">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                        <div className="text-center mb-12 md:mb-16">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 text-xs sm:text-sm font-semibold rounded-full mb-4">
                                    What We Do
                                </span>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                                    Our Specialization
                                </h2>
                                <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto">
                                    Dual expertise in industrial solutions and modern home electronics
                                </p>
                            </motion.div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {/* Card 1 - Industrial Auto Switches */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="group relative bg-gradient-to-br from-slate-50 to-white p-6 md:p-8 rounded-2xl border border-slate-200/80 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100/50 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/25 group-hover:scale-110 transition-transform duration-300">
                                    <Zap size={26} className="text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                                    Industrial Auto Switches
                                </h3>
                                <p className="text-slate-500 leading-relaxed mb-6 text-sm md:text-base">
                                    Megha Auto Switch panels for 3HP to 7.5HP motors. Digital protection with heavy-duty build quality.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {['DOL Motor Support', 'Fault Protection', 'Panel Boards'].map(tag => (
                                        <span key={tag} className="px-3 py-1.5 bg-emerald-50 text-emerald-700 text-xs md:text-sm font-medium rounded-full">{tag}</span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Card 2 - Consumer Electronics */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="group relative bg-gradient-to-br from-slate-50 to-white p-6 md:p-8 rounded-2xl border border-slate-200/80 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                                    <Tv size={26} className="text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    Consumer Electronics
                                </h3>
                                <p className="text-slate-500 leading-relaxed mb-6 text-sm md:text-base">
                                    Latest televisions, refrigerators, and home appliances from trusted global brands.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {['Smart TVs', 'Refrigeration', 'Air Conditioners'].map(tag => (
                                        <span key={tag} className="px-3 py-1.5 bg-blue-50 text-blue-700 text-xs md:text-sm font-medium rounded-full">{tag}</span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Card 3 - Electrical Wiring */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="group relative bg-gradient-to-br from-slate-50 to-white p-6 md:p-8 rounded-2xl border border-slate-200/80 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-100/50 transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-1"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-amber-500/25 group-hover:scale-110 transition-transform duration-300">
                                    <ShieldCheck size={26} className="text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                                    Electrical Wiring
                                </h3>
                                <p className="text-slate-500 leading-relaxed mb-6 text-sm md:text-base">
                                    Premium copper cables and wiring solutions for safe, efficient power distribution.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {['Copper Wire', 'Industrial Grade', 'Home Wiring'].map(tag => (
                                        <span key={tag} className="px-3 py-1.5 bg-amber-50 text-amber-700 text-xs md:text-sm font-medium rounded-full">{tag}</span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Featured Products */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Products</h2>
                            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                                Explore our most popular industrial panels and auto switches
                            </p>
                        </div>

                        {/* Responsive Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                            {featuredProducts.map((product) => (
                                <ProductCard key={product.id} {...product} />
                            ))}
                        </div>

                        <div className="text-center">
                            <Link to="/products" className="inline-flex items-center gap-2 px-8 py-3 bg-secondary text-white rounded-xl font-semibold hover:bg-slate-800 transition-all">
                                View All Products
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section - Auto-scrolling */}
                <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        {/* Section Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-12 md:mb-16"
                        >
                            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 text-xs sm:text-sm font-semibold rounded-full mb-4">
                                ग्राहकांचे अनुभव • Customer Stories
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                                Trusted by Thousands
                            </h2>
                            <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto px-4">
                                Real reviews from farmers, retailers, and consumers across Maharashtra
                            </p>
                        </motion.div>
                    </div>

                    {/* Scrolling Testimonials - Row 1 */}
                    <div className="relative mb-6 group">
                        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

                        <div className="flex animate-scroll-left hover:[animation-play-state:paused] w-max">
                            {[
                                { name: "राजेश पाटील", role: "शेतकरी, सोलापूर", text: "मेघा इलेक्ट्रॉनिक्सचे ऑटो स्विच पॅनल खूप भरवशाचे आहे. गेल्या ५ वर्षांपासून वापरतोय, कधी खराब झालं नाही!", rating: 5, color: "#10b981" },
                                { name: "Suresh Kumar", role: "Retailer, Pune", text: "Best quality panels in the market. My customers always come back satisfied. Megha Electronics never disappoints!", rating: 5, color: "#3b82f6" },
                                { name: "अमित शिंदे", role: "शेतकरी, कर्माळा", text: "३३ वर्षांचा अनुभव दिसतो. सर्व्हिस एकदम टॉप क्लास आहे. पंप कधी बंद पडला नाही.", rating: 5, color: "#f59e0b" },
                                { name: "Priya Deshmukh", role: "Consumer, Mumbai", text: "Bought Samsung TV from here. Great prices and excellent after-sales service. Highly recommended!", rating: 5, color: "#ec4899" },
                                { name: "संजय जाधव", role: "डीलर, उस्मानाबाद", text: "मेघा ऑटो स्विच हे माझ्या दुकानातील सर्वात जास्त विकले जाणारे उत्पादन आहे. क्वालिटी भारी!", rating: 5, color: "#8b5cf6" },
                                { name: "विकास मोरे", role: "इलेक्ट्रिशियन, बारामती", text: "१० वर्षांपासून मेघाचे प्रोडक्ट्स वापरतोय. कधी कंप्लेंट आली नाही कस्टमरची.", rating: 5, color: "#06b6d4" },
                            ].concat([
                                { name: "राजेश पाटील", role: "शेतकरी, सोलापूर", text: "मेघा इलेक्ट्रॉनिक्सचे ऑटो स्विच पॅनल खूप भरवशाचे आहे. गेल्या ५ वर्षांपासून वापरतोय, कधी खराब झालं नाही!", rating: 5, color: "#10b981" },
                                { name: "Suresh Kumar", role: "Retailer, Pune", text: "Best quality panels in the market. My customers always come back satisfied. Megha Electronics never disappoints!", rating: 5, color: "#3b82f6" },
                                { name: "अमित शिंदे", role: "शेतकरी, कर्माळा", text: "३३ वर्षांचा अनुभव दिसतो. सर्व्हिस एकदम टॉप क्लास आहे. पंप कधी बंद पडला नाही.", rating: 5, color: "#f59e0b" },
                                { name: "Priya Deshmukh", role: "Consumer, Mumbai", text: "Bought Samsung TV from here. Great prices and excellent after-sales service. Highly recommended!", rating: 5, color: "#ec4899" },
                                { name: "संजय जाधव", role: "डीलर, उस्मानाबाद", text: "मेघा ऑटो स्विच हे माझ्या दुकानातील सर्वात जास्त विकले जाणारे उत्पादन आहे. क्वालिटी भारी!", rating: 5, color: "#8b5cf6" },
                                { name: "विकास मोरे", role: "इलेक्ट्रिशियन, बारामती", text: "१० वर्षांपासून मेघाचे प्रोडक्ट्स वापरतोय. कधी कंप्लेंट आली नाही कस्टमरची.", rating: 5, color: "#06b6d4" },
                            ]).map((testimonial: any, index: number) => (
                                <div key={index} className="flex-shrink-0 w-[300px] md:w-[380px] mx-3">
                                    <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-lg shadow-slate-100/50 h-full">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div
                                                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                                                style={{ backgroundColor: testimonial.color }}
                                            >
                                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 line-clamp-1">{testimonial.name}</h4>
                                                <p className="text-sm text-slate-500 line-clamp-1">{testimonial.role}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-1 mb-3">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <p className="text-slate-600 leading-relaxed text-sm md:text-base line-clamp-4">{testimonial.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Scrolling Testimonials - Row 2 (Reverse) */}
                    <div className="relative group">
                        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

                        <div className="flex animate-scroll-right hover:[animation-play-state:paused] w-max">
                            {[
                                { name: "महेश कुलकर्णी", role: "शेतकरी, अहमदनगर", text: "पावसाळ्यात पण पंप चालू राहतो. वीज गेली तरी पॅनल सेफ राहतं. अशी क्वालिटी कुठे मिळत नाही.", rating: 5, color: "#059669" },
                                { name: "Anita Sharma", role: "Homemaker, Solapur", text: "Purchased refrigerator and washing machine. Both working perfectly for 3 years now. Great service!", rating: 5, color: "#db2777" },
                                { name: "रामचंद्र गायकवाड", role: "शेतकरी, पंढरपूर", text: "आधी दुसऱ्या कंपनीचं वापरत होतो, पण मेघाचं एकदा वापरल्यावर बदललं नाही. भारी प्रोडक्ट!", rating: 5, color: "#7c3aed" },
                                { name: "Deepak Traders", role: "Wholesale Dealer, Latur", text: "Been their dealer for 15 years. Consistent quality and excellent margin. Best brand for rural markets.", rating: 5, color: "#0891b2" },
                                { name: "सुनील पवार", role: "शेतकरी, तुळजापूर", text: "७.५ HP मोटरसाठी पॅनल घेतलं. एकदम परफेक्ट काम करतंय. किंमत पण योग्य आहे.", rating: 5, color: "#ea580c" },
                                { name: "Rekha Patil", role: "Shop Owner, Barshi", text: "Customer satisfaction is 100% with Megha products. No complaints in years of selling!", rating: 5, color: "#4f46e5" },
                            ].concat([
                                { name: "महेश कुलकर्णी", role: "शेतकरी, अहमदनगर", text: "पावसाळ्यात पण पंप चालू राहतो. वीज गेली तरी पॅनल सेफ राहतं. अशी क्वालिटी कुठे मिळत नाही.", rating: 5, color: "#059669" },
                                { name: "Anita Sharma", role: "Homemaker, Solapur", text: "Purchased refrigerator and washing machine. Both working perfectly for 3 years now. Great service!", rating: 5, color: "#db2777" },
                                { name: "रामचंद्र गायकवाड", role: "शेतकरी, पंढरपूर", text: "आधी दुसऱ्या कंपनीचं वापरत होतो, पण मेघाचं एकदा वापरल्यावर बदललं नाही. भारी प्रोडक्ट!", rating: 5, color: "#7c3aed" },
                                { name: "Deepak Traders", role: "Wholesale Dealer, Latur", text: "Been their dealer for 15 years. Consistent quality and excellent margin. Best brand for rural markets.", rating: 5, color: "#0891b2" },
                                { name: "सुनील पवार", role: "शेतकरी, तुळजापूर", text: "७.५ HP मोटरसाठी पॅनल घेतलं. एकदम परफेक्ट काम करतंय. किंमत पण योग्य आहे.", rating: 5, color: "#ea580c" },
                                { name: "Rekha Patil", role: "Shop Owner, Barshi", text: "Customer satisfaction is 100% with Megha products. No complaints in years of selling!", rating: 5, color: "#4f46e5" },
                            ]).map((testimonial: any, index: number) => (
                                <div key={index} className="flex-shrink-0 w-[300px] md:w-[380px] mx-3">
                                    <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-lg shadow-slate-100/50 h-full">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div
                                                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                                                style={{ backgroundColor: testimonial.color }}
                                            >
                                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 line-clamp-1">{testimonial.name}</h4>
                                                <p className="text-sm text-slate-500 line-clamp-1">{testimonial.role}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-1 mb-3">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <p className="text-slate-600 leading-relaxed text-sm md:text-base line-clamp-4">{testimonial.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-24 bg-slate-50" id="about">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 max-w-lg">Built on Trust, Grown with Community</h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                    Founded in 1992 by Mr. Dinesh Vallabhdas Devi, Megha Electronics
                                    began with a simple mission: provide reliable electrical solutions
                                    to the farmers and businesses of Karmala.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                    Over three decades, we've evolved from a small electrical shop
                                    into a comprehensive electronics showroom, always maintaining our
                                    commitment to quality and customer service.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-8">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Proprietor</span>
                                        <span className="text-base font-semibold text-slate-900">Dinesh Vallabhdas Devi</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">GST</span>
                                        <span className="text-base font-semibold text-slate-900">27AGHPD5388D1ZE</span>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="relative aspect-square bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden p-2">
                                    <div className="absolute top-6 right-6 z-10 bg-emerald-600 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg">Since 1992</div>
                                    <img
                                        src="/products/hero1.png"
                                        alt="Megha Electronics Storefront"
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-12 md:py-20 px-4 md:px-6">
                    <div className="container mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-center bg-slate-900 rounded-2xl p-8 md:p-12 shadow-2xl gap-8 md:gap-0">
                            <div className="text-center md:text-left">
                                <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">Visit Our Showroom</h2>
                                <p className="text-lg text-slate-300">
                                    Experience our products firsthand at our Karmala location
                                </p>
                            </div>
                            <button className="flex items-center gap-3 px-6 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-colors shrink-0 w-full md:w-auto justify-center">
                                <Phone size={20} />
                                +91 94238 57496
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
