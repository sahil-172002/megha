import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

export function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ]

    return (
        <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-slate-200/20 border-b border-slate-200/50 py-3' : 'bg-white py-5'}`}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3 z-50 relative">
                        <img src="/meghalogo.png" alt="Megha Electronics" className="h-8 md:h-10 w-auto" />
                        <span className="font-display font-bold text-lg text-slate-900">Megha Electronics</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-[15px] font-medium transition-colors ${location.pathname === link.path ? 'text-emerald-600' : 'text-slate-600 hover:text-slate-900'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-600 z-50 relative"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-0 left-0 w-full h-[100dvh] bg-gradient-to-b from-white to-slate-50 shadow-xl border-b border-slate-100 p-6 pt-24 md:hidden flex flex-col gap-6 z-40 overflow-y-auto"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-2xl font-bold py-3 border-b border-slate-100 transition-colors ${location.pathname === link.path ? 'text-emerald-600' : 'text-slate-900 hover:text-emerald-700'
                                    }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="tel:+919423857496"
                            className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-xl font-semibold justify-center mt-6 text-lg shadow-lg shadow-slate-900/20 hover:from-emerald-600 hover:to-emerald-500 hover:shadow-emerald-600/30 active:scale-95 transition-all duration-300"
                        >
                            <Phone size={20} />
                            Call Now
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
