import { Link } from "react-router-dom";

function Footer() {
    const footerLink = "text-stone-300 transition hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300";

    return (
        <footer className="relative overflow-hidden bg-[#23142d] text-white">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-orange-500 via-amber-300 to-rose-400" aria-hidden="true" />
            <div className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-orange-500/15 blur-3xl" aria-hidden="true" />
            <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="grid gap-12 border-b border-white/15 pb-12 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1.15fr]">
                    <div>
                        <h2 className="text-3xl font-black tracking-[0.18em] text-amber-300">KALASETU</h2>
                        <p className="mt-5 max-w-sm leading-7 text-stone-300">Connecting skilled professionals with people who value quality, trust, and craftsmanship.</p>
                        <div className="mt-6 h-1 w-20 bg-orange-500" aria-hidden="true" />
                    </div>

                    <div>
                        <h3 className="text-lg font-black text-white">Quick Links</h3>
                        <ul className="mt-5 space-y-3">
                            <li><Link to="/" className={footerLink}>Home</Link></li>
                            <li><a href="#" className={footerLink}>Services</a></li>
                            <li><a href="#categories" className={footerLink}>Categories</a></li>
                            <li><a href="#" className={footerLink}>About Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-black text-white">For Users</h3>
                        <ul className="mt-5 space-y-3">
                            <li><Link to="/signup" className={footerLink}>Create Account</Link></li>
                            <li><Link to="/login" className={footerLink}>Login</Link></li>
                            <li><a href="#" className={footerLink}>Become a Professional</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-black text-white">Contact</h3>
                        <ul className="mt-5 space-y-4 text-stone-300">
                            <li className="flex gap-3"><span className="text-amber-300" aria-hidden="true">✉</span><a className={footerLink} href="mailto:support@kalasetu.in">support@kalasetu.in</a></li>
                            <li className="flex gap-3"><span className="text-amber-300" aria-hidden="true">☎</span><a className={footerLink} href="tel:+919876543210">+91 98765 43210</a></li>
                            <li className="flex gap-3"><span className="text-amber-300" aria-hidden="true">⌖</span><span>Pune, Maharashtra</span></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col gap-5 pt-8 text-sm md:flex-row md:items-center md:justify-between">
                    <p className="text-stone-400">© {new Date().getFullYear()} Kalasetu. All Rights Reserved.</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-3 font-semibold">
                        <a href="#" className={footerLink}>Privacy Policy</a>
                        <a href="#" className={footerLink}>Terms</a>
                        <a href="#" className={footerLink}>Support</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
