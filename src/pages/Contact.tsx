import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, CreditCard, Banknote } from 'lucide-react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { SEO } from '../components/SEO'
import '../App.css'

export function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="app">
            <SEO
                title="Contact Megha Electronics - Karmala"
                description="Visit our showroom in Karmala or call us for the best deals on auto switches, motors, and electronics. Open Monday to Saturday."
                canonical="/contact"
            />
            <Header />

            <main>
                {/* Contact Header */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: 'url(/newbg.png)',
                                backgroundRepeat: 'repeat',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover'
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
                                We're Here to Help
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                                Get in Touch
                            </h1>
                            <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto px-4 leading-relaxed">
                                Visit our showroom in Karmala or reach out to us for any inquiries about our products and services
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Cards - Modern Design */}
                <section className="py-12 md:py-20 -mt-10 relative z-10">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {/* Visit Our Store Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="group bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
                                    <MapPin size={24} className="text-emerald-600 md:w-7 md:h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Visit Our Store</h3>
                                <div className="space-y-1 text-slate-600 mb-6 text-sm md:text-base">
                                    <p className="font-medium text-slate-900">Shop Number 646, Vetal Peth</p>
                                    <p>Karmala, Solapur - 413203</p>
                                    <p>Maharashtra, India</p>
                                </div>
                                <a
                                    href="https://maps.google.com/?q=Megha+Electronics+Karmala"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors group-hover:gap-1.5 gap-1 text-sm md:text-base"
                                >
                                    Get Directions <span>→</span>
                                </a>
                            </motion.div>

                            {/* Call Us Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="group bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
                                    <Phone size={24} className="text-emerald-600 md:w-7 md:h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Call Us</h3>
                                <div className="space-y-3 mb-6">
                                    <a href="tel:+919423857496" className="block text-base md:text-lg font-medium text-slate-600 hover:text-emerald-600 transition-colors">
                                        +91 94238 57496
                                    </a>
                                    <a href="tel:+919423857478" className="block text-base md:text-lg font-medium text-slate-600 hover:text-emerald-600 transition-colors">
                                        +91 94238 57478
                                    </a>
                                    <a href="tel:+919175701280" className="block text-base md:text-lg font-medium text-slate-600 hover:text-emerald-600 transition-colors">
                                        +91 91757 01280
                                    </a>
                                </div>
                                <a
                                    href="https://wa.me/919423857496"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-3 px-4 bg-emerald-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200 text-sm md:text-base"
                                >
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                    WhatsApp Us
                                </a>
                            </motion.div>

                            {/* Business Hours Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="group bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 md:col-span-2 lg:col-span-1"
                            >
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
                                    <Clock size={24} className="text-emerald-600 md:w-7 md:h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Business Hours</h3>
                                <div className="space-y-3 w-full border-t border-slate-100 pt-4 text-sm md:text-base">
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600">Mon - Sat</span>
                                        <span className="font-bold text-slate-900">10:00 AM - 8:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm md:text-base">
                                        <span className="text-slate-600">Sunday</span>
                                        <span className="font-bold text-slate-900">10:00 AM - 1:30 PM</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium pt-3 mt-2 border-t border-slate-100">
                                        <span className="relative flex h-2.5 w-2.5">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                        </span>
                                        Open now
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className="py-12 md:py-20 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our Location</h2>
                            <p className="text-base sm:text-lg text-slate-600">Find us in the heart of Karmala, Solapur district</p>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-xl h-[300px] md:h-[500px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3849.7321478975705!2d75.1947271!3d18.4086783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc48f0a923dc5cb%3A0x90ba2bec827d41d4!2sMegha%20Electronics!5e1!3m2!1sen!2sin!4v1766816429698!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </section>

                {/* Business Info - Responsive Refactor */}
                <section className="py-12 md:py-20 bg-white">
                    <div className="container mx-auto px-4 md:px-6 lg:px-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">
                                    About Our Business
                                </h3>
                                <div className="space-y-4 text-slate-600">
                                    <div className="flex justify-between border-b border-slate-50 pb-2">
                                        <span className="font-medium">Proprietor</span>
                                        <span className="text-slate-900 font-semibold">Dinesh Vallabhdas Devi</span>
                                    </div>
                                    <div className="flex justify-between border-b border-slate-50 pb-2">
                                        <span className="font-medium">GST</span>
                                        <span className="text-slate-900 font-semibold font-mono">27AGHPD5388D1ZE</span>
                                    </div>
                                    <div className="flex justify-between border-b border-slate-50 pb-2">
                                        <span className="font-medium">Established</span>
                                        <span className="text-slate-900 font-semibold">1992</span>
                                    </div>
                                    <div className="flex justify-between pb-2">
                                        <span className="font-medium">Business Type</span>
                                        <span className="text-slate-900 font-semibold">Wholesaler and Retailer</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">
                                    Payment Methods
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg">
                                        <Banknote size={20} className="text-emerald-600" />
                                        <span className="text-slate-700 font-medium">Cash</span>
                                    </li>
                                    <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg">
                                        <CreditCard size={20} className="text-blue-600" />
                                        <span className="text-slate-700 font-medium">Credit/Debit Cards</span>
                                    </li>
                                    <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg">
                                        <div className="w-5 h-5 bg-slate-800 text-white flex items-center justify-center rounded-full text-xs font-bold">₹</div>
                                        <span className="text-slate-700 font-medium">UPI (Google Pay, PhonePe, Paytm)</span>
                                    </li>
                                    <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg">
                                        <div className="w-5 h-5 bg-slate-800 text-white flex items-center justify-center rounded-sm text-[10px] font-bold">NEFT</div>
                                        <span className="text-slate-700 font-medium">NEFT/RTGS for bulk orders</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
