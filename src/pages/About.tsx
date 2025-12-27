import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Users, Calendar, Award, Shield, Target, Heart, Zap, CheckCircle } from 'lucide-react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { SEO } from '../components/SEO'
import '../App.css'

export function About() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const stats = [
        { icon: Calendar, value: '33+', label: 'Years of Excellence', color: 'from-emerald-500 to-emerald-600', shadow: 'shadow-emerald-500/20' },
        { icon: Users, value: '1 Lakh+', label: 'Happy Customers', color: 'from-blue-500 to-blue-600', shadow: 'shadow-blue-500/20' },
        { icon: Zap, value: '10+', label: 'Auto Switch Variants', color: 'from-amber-500 to-amber-600', shadow: 'shadow-amber-500/20' },
        { icon: Award, value: '500+', label: 'Products Range', color: 'from-purple-500 to-purple-600', shadow: 'shadow-purple-500/20' },
    ]

    const values = [
        {
            icon: Shield,
            title: 'Quality First',
            description: 'Every product we sell undergoes rigorous quality checks. We only stock items that meet our high standards.',
            color: 'emerald'
        },
        {
            icon: Heart,
            title: 'Customer Trust',
            description: 'Building relationships through reliability, not just transactions. Our repeat customers are our pride.',
            color: 'rose'
        },
        {
            icon: Target,
            title: 'Technical Expertise',
            description: 'Deep knowledge in auto switches and electrical solutions. We solve problems, not just sell products.',
            color: 'blue'
        },
        {
            icon: CheckCircle,
            title: 'After-Sales Support',
            description: 'Our relationship doesn\'t end at sale. We provide ongoing support and service for all our products.',
            color: 'amber'
        },
    ]

    const timeline = [
        { year: '1992', title: 'The Beginning', description: 'Megha Electronics founded by Dinesh Vallabhdas Devi in Karmala with a vision to serve local farmers and businesses.' },
        { year: '2000', title: 'Expansion', description: 'Expanded product range to include consumer electronics alongside industrial components.' },
        { year: '2010', title: 'Market Leader', description: 'Became the go-to destination for auto switches in Solapur district, serving 50,000+ customers.' },
        { year: '2020', title: 'Digital Era', description: 'Modernized showroom and embraced digital payments, making shopping more convenient.' },
        { year: '2024', title: '1 Lakh Milestone', description: 'Crossed the milestone of serving over 1 Lakh happy customers across Maharashtra.' },
    ]

    return (
        <div className="app">
            <SEO
                title="About Us - 33+ Years of Trust"
                description="Founded in 1992, Megha Electronics is Karmala's most trusted name for auto switches, motor starters, and home appliances."
                canonical="/about"
            />
            <Header />

            <main>
                {/* Hero Section */}
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
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/20 rounded-full border border-white/30 backdrop-blur-sm mb-8 mx-auto">
                                <span className="flex h-2 w-2 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                                </span>
                                <span className="text-xs sm:text-sm font-medium text-white">Our Story Since 1992</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                                About Megha Electronics
                            </h1>
                            <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-16 px-4 leading-relaxed">
                                For over three decades, we've been Karmala's trusted destination for industrial auto switches,
                                electrical components, and premium consumer electronics. Our journey is built on quality, trust, and community.
                            </p>
                        </motion.div>

                        {/* Stats Grid - Redesigned */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto"
                        >
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-lg hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                                >
                                    {/* Subtle gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                    <div className="relative z-10">
                                        <div className={`w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-5 border border-white/30 group-hover:scale-110 group-hover:bg-white/30 transition-all`}>
                                            <stat.icon size={24} className="text-white" />
                                        </div>
                                        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
                                        <div className="text-xs md:text-sm font-medium text-white/80">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Our Legacy Section */}
                <section className="py-16 md:py-24 bg-white border-t border-slate-100">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <span className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-700 text-xs sm:text-sm font-semibold rounded-full mb-6">
                                    Our Legacy
                                </span>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                    Built on Trust,<br />Grown with Community
                                </h2>
                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                    Founded in 1992 by <strong>Mr. Dinesh Vallabhdas Devi</strong>, Megha Electronics
                                    started with a simple mission: to provide reliable electrical solutions to the
                                    farmers and businesses of Karmala.
                                </p>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    Over the last three decades, we have evolved into a multi-category showroom,
                                    maintaining our reputation as a "Quality First" establishment. We bridge the gap
                                    between industrial reliability and modern home comfort.
                                </p>
                                <div className="flex items-center gap-5 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-200 text-3xl">
                                        👤
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg text-slate-900">Dinesh Vallabhdas Devi</p>
                                        <p className="text-slate-500 font-medium">Founder & Proprietor</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="relative mt-8 lg:mt-0"
                            >
                                <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-8 md:p-10 text-white relative z-10 shadow-2xl shadow-emerald-900/20">
                                    <h3 className="text-2xl font-bold mb-8">Business At A Glance</h3>
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-center py-4 border-b border-white/10">
                                            <span className="text-emerald-100">Legal Entity</span>
                                            <span className="font-semibold text-right ml-4">Dinesh Vallabhdas Devi</span>
                                        </div>
                                        <div className="flex justify-between items-center py-4 border-b border-white/10">
                                            <span className="text-emerald-100">GST Number</span>
                                            <span className="font-mono font-semibold tracking-wide">27AGHPD5388D1ZE</span>
                                        </div>
                                        <div className="flex justify-between items-center py-4 border-b border-white/10">
                                            <span className="text-emerald-100">Established</span>
                                            <span className="font-semibold">1992</span>
                                        </div>
                                        <div className="flex justify-between items-center py-4 border-b border-white/10">
                                            <span className="text-emerald-100">Business Type</span>
                                            <span className="font-semibold">Wholesaler & Retailer</span>
                                        </div>
                                        <div className="flex justify-between items-center py-4">
                                            <span className="text-emerald-100">Focus</span>
                                            <span className="font-semibold">B2B & B2C</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-100 rounded-full z-0 opacity-50 blur-2xl"></div>
                                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-emerald-100 rounded-full z-0 opacity-50 blur-2xl"></div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Our Values Section */}
                <section className="py-16 md:py-24 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full mb-4">
                                Why Choose Us
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                                Our Core Values
                            </h2>
                            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                                These principles have guided us for over 33 years and continue to drive everything we do
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className={`w-14 h-14 bg-${value.color}-50 rounded-2xl flex items-center justify-center mb-6`}>
                                        <value.icon size={28} className={`text-${value.color}-600`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                                    <p className="text-slate-500 leading-relaxed">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Journey Timeline */}
                <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
                    <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-12 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16 md:mb-24"
                        >
                            <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-800 text-sm font-semibold rounded-full mb-4">
                                Our Journey
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                                Milestones Through The Years
                            </h2>
                            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                                From a small shop to a district leader, our path has been defined by consistency and growth.
                            </p>
                        </motion.div>

                        <div className="relative">
                            {/* Center Line (Desktop) */}
                            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500/0 via-emerald-300 to-emerald-500/0 md:-translate-x-1/2 h-full"></div>

                            <div className="space-y-12 md:space-y-24">
                                {timeline.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`relative flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                                    >
                                        {/* Date Marker (Mobile) */}
                                        <div className="absolute left-8 -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-md md:hidden top-8 z-20"></div>

                                        {/* Content Side */}
                                        <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-10">
                                            <motion.div
                                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: 0.1 }}
                                                className={`bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-emerald-100/50 transition-all duration-300 relative group text-left ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                                            >
                                                {/* Arrow for Desktop */}
                                                <div className={`hidden md:block absolute top-[45%] w-4 h-4 bg-white border-t border-r border-slate-100 transform rotate-45 z-0 ${index % 2 === 0 ? '-right-2.5 border-l-0 border-b-0' : '-left-2.5 border-r-0 border-t-0 border-b border-l'}`}></div>

                                                <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-sm font-bold rounded-lg mb-3">
                                                    {item.year}
                                                </span>
                                                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                                                    {item.title}
                                                </h3>
                                                <p className="text-slate-500 leading-relaxed font-medium">
                                                    {item.description}
                                                </p>
                                            </motion.div>
                                        </div>

                                        {/* Center Marker (Desktop) */}
                                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-emerald-100 items-center justify-center z-10 shadow-sm">
                                            <div className="w-4 h-4 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/50"></div>
                                        </div>

                                        {/* Empty Side for alignment */}
                                        <div className="w-full md:w-1/2 hidden md:block"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-4 md:px-6">
                    <div className="container mx-auto max-w-5xl">
                        <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    Ready to Experience the Megha Difference?
                                </h2>
                                <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                                    Visit our showroom in Karmala or reach out to us. We're here to help with all your electrical needs.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        to="/products"
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition-all hover:shadow-lg hover:shadow-emerald-500/25"
                                    >
                                        Browse Products
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
                                    >
                                        <Phone size={20} />
                                        Contact Us
                                    </Link>
                                </div>
                            </div>

                            {/* Bg Patterns */}
                            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-500/30 rounded-full blur-[100px]"></div>
                                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[100px]"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
