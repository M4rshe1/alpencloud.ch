import {FEATURES} from "@/lib/settings/features";

const Features = () => {
    return (
        <div className="flex flex-col">
            <h2 className={"text-3xl font-bold text-white mb-6 text-center w-full"}>Features</h2>
            <div className="flex flex-col md:flex-row gap-8">
                {
                    FEATURES.map(
                        (feature) => (
                            <div key={feature.title} className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-lg min-w-72">
                                <feature.icon className="h-8 w-8 text-red-400 mb-4" />
                                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </div>
                        ))
                }
            </div>
        </div>
    );
}

export default Features;