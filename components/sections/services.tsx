"use client";

import {SERVICES} from "@/lib/settings/services";
import {Plans} from "@/components/plans";

const Service = () => {
    return <>
        {
            SERVICES.map((service => (
                <Plans key={service.name} service={service} annual={false}/>
            )))
        }
    </>
}

export default Service;
