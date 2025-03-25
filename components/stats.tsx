import {STATS} from "@/lib/settings/stats";

const Stats = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {
                STATS.map((stat, index) => {
                    return (
                        <div
                            key={index}
                            className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)] text-center">
                            <div className="text-4xl font-bold text-red-400 mb-2">{stat.value}</div>
                            <div className="text-gray-300">{stat.label}</div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Stats;