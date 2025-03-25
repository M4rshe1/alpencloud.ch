"use client"

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { HEADER_LINKS } from "@/lib/settings/header-links";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-lg border-b border-red-500/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-bold text-red-400">
                            AlpenCloud
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <NavigationMenu>
                            <NavigationMenuList className="flex items-center space-x-4">
                                {
                                    HEADER_LINKS.map((link) => {
                                        const Icon = link.icon;
                                        return (
                                            link.submenu ? (
                                                <NavigationMenuItem key={link.title}>
                                                    <NavigationMenuTrigger
                                                        className={link.whiteButton
                                                            ? "bg-white text-gray-900 hover:bg-white hover:text-gray-900 data-[state=open]:bg-white data-[state=open]:text-gray-900"
                                                            : "bg-transparent text-gray-300 hover:bg-gray-800 hover:text-red-400 data-[state=open]:bg-gray-800 data-[state=open]:text-red-400"}>
                                                        <Icon className="w-4 h-4 mr-2"/>
                                                        {link.title}
                                                    </NavigationMenuTrigger>
                                                    <NavigationMenuContent
                                                        className="bg-gray-900/80 backdrop-blur-lg border border-red-500/20 rounded-lg shadow-lg">
                                                        <div className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                                                            {link.submenu.map((item) => {
                                                                const SubIcon = item.icon;
                                                                return (
                                                                    <NavigationMenuLink
                                                                        key={item.title}
                                                                        href={item.href}
                                                                        className="flex items-start space-x-4 p-3 rounded-lg hover:bg-red-500/10 transition-colors group"
                                                                    >
                                                                        <div
                                                                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-600/10 group-hover:bg-red-600/20 transition-colors">
                                                                            <SubIcon className="h-6 w-6 text-red-400"/>
                                                                        </div>
                                                                        <div className="space-y-1">
                                                                            <h4
                                                                                className="text-sm font-medium leading-none text-gray-300 group-hover:text-red-400 transition-colors">
                                                                                {item.title}
                                                                            </h4>
                                                                            <p
                                                                                className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors line-clamp-2">
                                                                                {item.description}
                                                                            </p>
                                                                        </div>
                                                                    </NavigationMenuLink>
                                                                );
                                                            })}
                                                        </div>
                                                    </NavigationMenuContent>
                                                </NavigationMenuItem>
                                            ) : (
                                                <NavigationMenuLink key={link.title}
                                                                    href={link.href}
                                                                    className="text-gray-300 hover:text-red-400 flex items-center gap-2">
                                                    <Icon className="w-4 h-4"/>
                                                    {link.title}
                                                </NavigationMenuLink>
                                            )
                                        );
                                    })
                                }
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    <div className="md:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {mobileMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            {mobileMenuOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 shadow-lg">
                        {HEADER_LINKS.map((link) => {
                            const Icon = link.icon;

                            if (link.submenu) {
                                return (
                                    <div key={link.title} className="py-2">
                                        <div className="px-3 py-2 font-medium text-gray-300 flex items-center">
                                            <Icon className="w-4 h-4 mr-2" />
                                            <span>{link.title}</span>
                                        </div>
                                        <div className="pl-6 mt-1 space-y-1">
                                            {link.submenu.map((subItem) => (
                                                <Link
                                                    key={subItem.title}
                                                    href={subItem.href}
                                                    className="block px-3 py-2 text-sm text-gray-400 hover:bg-gray-800 hover:text-white rounded-md flex items-center"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    <subItem.icon className="w-4 h-4 mr-2 text-red-400" />
                                                    {subItem.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={link.title}
                                    href={link.href}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white flex items-center"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <Icon className="w-4 h-4 mr-2" />
                                    {link.title}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Header;