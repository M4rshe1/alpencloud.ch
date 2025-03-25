import {Clock, Cpu, Globe2, Shield, Zap} from "lucide-react"

const Page = () => {
    return (
        <div className="mb-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Why Choose AlpenCloud?</h2>
                <p className="text-gray-300 max-w-3xl mx-auto">
                    We combine Swiss precision with cutting-edge technology to deliver a hosting experience that&#39;s reliable, secure, and blazing fast.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-lg">
                    <h3 className="text-xl font-semibold text-white mb-4">Technical Excellence</h3>
                    <ul className="space-y-3 text-gray-400">
                        <li className="flex items-center">
                            <Cpu className="h-5 w-5 text-red-400 mr-3" />
                            Latest PHP versions and automatic updates
                        </li>
                        <li className="flex items-center">
                            <Globe2 className="h-5 w-5 text-red-400 mr-3" />
                            Global CDN with 50+ edge locations
                        </li>
                        <li className="flex items-center">
                            <Shield className="h-5 w-5 text-red-400 mr-3" />
                            Advanced DDoS protection included
                        </li>
                    </ul>
                </div>

                <div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-lg">
                    <h3 className="text-xl font-semibold text-white mb-4">WordPress Optimization</h3>
                    <ul className="space-y-3 text-gray-400">
                        <li className="flex items-center">
                            <Zap className="h-5 w-5 text-red-400 mr-3" />
                            Server-level caching for maximum speed
                        </li>
                        <li className="flex items-center">
                            <Shield className="h-5 w-5 text-red-400 mr-3" />
                            WordPress-specific security rules
                        </li>
                        <li className="flex items-center">
                            <Clock className="h-5 w-5 text-red-400 mr-3" />
                            Automated core and plugin updates
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Page;