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
        <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'bg-white shadow-sm border-b border-gray-100' : 'bg-white'}`}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-[72px]">
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
                        className="absolute top-0 left-0 w-full h-[100dvh] bg-white shadow-xl border-b border-slate-100 p-6 pt-24 md:hidden flex flex-col gap-6 z-40 overflow-y-auto"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-xl font-bold py-3 border-b border-slate-100 ${location.pathname === link.path ? 'text-emerald-600' : 'text-slate-900'
                                    }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="tel:+919423857496"
                            className="flex items-center gap-3 px-5 py-4 bg-slate-900 text-white rounded-xl font-medium justify-center mt-4 text-lg active:scale-95 transition-transform"
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
