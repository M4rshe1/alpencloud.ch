import Link from "next/link";
import {SOCIALS} from "@/lib/settings/socials";

const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t border-red-500/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">About</h3>
                        <p className="text-gray-400">
                            AlpenCloud ist ein Premium-WordPress-Hosting-Anbieter, der sich auf die Bereitstellung von
                            erstklassigen Hosting-Lösungen spezialisiert hat.
                        </p>
                        {/*<p className="text-gray-400 mt-4">*/}
                        {/*    <Link href={GITHUB_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">*/}
                        {/*        <IconBrandGithub className="inline-block mr-1"/>*/}
                        {/*    </Link>*/}
                        {/*</p>*/}
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/services"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/team"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Team
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services#wordpress-hosting"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Wordpress Hosting
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Socials</h3>
                        <div className="text-gray-400">
                            {
                                SOCIALS.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <Link
                                            key={index}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-red-400 transition-colors"
                                        >
                                            <Icon className="inline-block mr-1"/>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                        {/*<p className="text-gray-400 mt-4">*/}
                        {/*    <Link href={GITHUB_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">*/}
                        {/*        <IconBrandGithub className="inline-block mr-1"/>*/}
                        {/*    </Link>*/}
                        {/*</p>*/}
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                    <p>© {new Date().getFullYear()} AlpenCloud. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;