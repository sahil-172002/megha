import { Link } from 'react-router-dom'
import { MapPin, Clock, Phone, Instagram } from 'lucide-react'

export function Footer() {
    return (
        <footer className="bg-slate-950 text-white py-16 md:py-20" id="contact">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-12 mb-12 border-b border-slate-800 pb-12">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 mb-2">
                            <img src="/meghalogo.png" alt="Megha Electronics" className="h-10 w-auto brightness-0 invert" />
                            <span className="font-display font-bold text-xl">Megha Electronics</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Quality electronics and industrial solutions since 1992.
                            <br />Serving Karmala and beyond.
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                            <a
                                href="https://www.instagram.com/megha_autoswitch/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white transition-all duration-300"
                                aria-label="Follow us on Instagram"
                            >
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-white">Products</h4>
                        <Link to="/products" className="text-slate-400 hover:text-white transition-colors text-sm">Industrial Panels</Link>
                        <Link to="/products" className="text-slate-400 hover:text-white transition-colors text-sm">Auto Switches</Link>
                        <Link to="/products" className="text-slate-400 hover:text-white transition-colors text-sm">Home Appliances</Link>
                        <Link to="/products" className="text-slate-400 hover:text-white transition-colors text-sm">Electrical Wiring</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h4>
                        <div className="flex items-start gap-3 text-slate-400 text-sm">
                            <MapPin size={16} className="mt-1 shrink-0" />
                            <span>Shop 646, Vetal Peth, Karmala, Dist Solapur - 413203</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-400 text-sm">
                            <Clock size={16} className="shrink-0" />
                            <span>Mon-Sat: 10:00 AM - 8:00 PM</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-400 text-sm">
                            <Phone size={16} className="shrink-0" />
                            <span>+91 94238 57496</span>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div>
                    <h3 className="text-lg font-bold text-white mb-6">Find Us on Map</h3>
                    <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg border border-slate-800">
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

                <div className="text-center pt-10 mt-10 border-t border-slate-800">
                    <p className="text-slate-500 text-sm">© 2025 Megha Electronics. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
