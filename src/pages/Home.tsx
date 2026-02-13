import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Zap, Phone, ArrowRight } from 'lucide-react'
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
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border border-slate-200/60 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.07)] mb-8 max-w-full"
                            >
                                <div className="w-2 h-2 shrink-0 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                                <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-600 truncate">TRUSTED BY 1 LAKH+ FARMERS SINCE 1992</span>
                            </motion.div>

                            {/* Headline */}
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 tracking-tight mb-6">
                                Reliable Motor Protection <span className="text-emerald-600">for Indian Farms</span>
                            </h1>

                            {/* Description */}
                            <p className="text-base sm:text-lg lg:text-xl text-slate-500 leading-relaxed mb-10 max-w-2xl mx-auto px-4">
                                Premium auto switches and control panels engineered for durability. Protect your investment with technology built for Indian conditions.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 px-4">
                                <a
                                    href="tel:+919423857496"
                                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-xl font-bold text-base shadow-xl shadow-slate-900/10 hover:bg-emerald-600 transition-all duration-300 w-full sm:w-auto"
                                >
                                    <Phone size={18} className="animate-pulse" />
                                    Call Now
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </a>
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
                                    Our Expertise
                                </span>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                                    Core Specialization
                                </h2>
                                <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto">
                                    Engineering high-performance industrial solutions for Indian agriculture
                                </p>
                            </motion.div>
                        </div>

                        <div className="max-w-5xl mx-auto">
                            {/* Horizontal Industrial Auto Switches Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="group relative bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-emerald-200/60 transition-all duration-500 overflow-hidden"
                            >
                                {/* Decorative Background Elements */}
                                <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-50 rounded-full blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 -mr-20 -mt-20"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-50 rounded-full blur-[60px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 -ml-20 -mb-20"></div>

                                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                                    <div className="w-20 h-20 md:w-24 md:h-24 bg-slate-900 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-emerald-600 transition-all duration-500 shrink-0">
                                        <Zap size={36} className="text-white" />
                                    </div>

                                    <div className="flex-grow text-center md:text-left">
                                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors">
                                            Industrial Auto Switches
                                        </h3>
                                        <p className="text-slate-500 leading-relaxed mb-6 text-base md:text-lg max-w-2xl font-medium">
                                            Megha Auto Switch panels for 3HP to 7.5HP motors. Engineered with digital protection and heavy-duty components for maximum durability in harsh farm conditions.
                                        </p>
                                        <div className="flex flex-wrap justify-center md:justify-start gap-2.5">
                                            {['DOL Motor Support', 'Fault Protection', 'Panel Boards'].map(tag => (
                                                <span key={tag} className="px-4 py-1.5 bg-slate-50 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-lg border border-slate-100 group-hover:border-emerald-100 group-hover:bg-emerald-50/50 transition-colors whitespace-nowrap">{tag}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="shrink-0 w-full md:w-auto mt-4 md:mt-0">
                                        <Link
                                            to="/products"
                                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-emerald-600 hover:shadow-[0_10px_20px_rgba(16,185,129,0.2)] transition-all duration-300 w-full md:w-auto overflow-hidden group/btn"
                                        >
                                            <span className="relative z-10">View Range</span>
                                            <ArrowRight size={20} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
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
                                { name: "Vijay Deshmukh", role: "Farmer, Sangli", text: "The digital protection on these panels saved my motor during high voltage. Highly recommended!", rating: 5, color: "#ec4899" },
                                { name: "संजय जाधव", role: "डीलर, उस्मानाबाद", text: "मेघा ऑटो स्विच हे माझ्या दुकानातील सर्वात जास्त विकले जाणारे उत्पादन आहे. क्वालिटी भारी!", rating: 5, color: "#8b5cf6" },
                                { name: "विकास मोरे", role: "इलेक्ट्रिशियन, बारामती", text: "१० वर्षांपासून मेघाचे प्रोडक्ट्स वापरतोय. कधी कंप्लेंट आली नाही कस्टमरची.", rating: 5, color: "#06b6d4" },
                            ].concat([
                                { name: "महेश कुलकर्णी", role: "शेतकरी, अहमदनगर", text: "पावसाळ्यात पण पंप चालू राहतो. वीज गेली तरी पॅनल सेफ राहतं. अशी क्वालिटी कुठे मिळत नाही.", rating: 5, color: "#059669" },
                                { name: "Sunil Shinde", role: "Industrial Client, Solapur", text: "Purchased control panels for our facility. Robust build and perfect timing control. Great service!", rating: 5, color: "#db2777" },
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
                                        src="/farmer.jpeg"
                                        alt="Megha Electronics Supporting Farmers"
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
                            <a
                                href="tel:+919423857496"
                                className="flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-xl font-black shadow-lg hover:shadow-white/20 hover:scale-105 transition-all duration-300 shrink-0 w-full md:w-auto justify-center"
                            >
                                <Phone size={20} className="text-emerald-600" />
                                +91 94238 57496
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
