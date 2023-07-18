"use client"
import countriesData from '@/app/travel-advisory/countries.json' assert { type: 'json' };
import HistoryModal from "@/components/travel-advisory/HistoryModal";
import { useState } from "react";

function getDangerLevel(danger) {
    let dangerLevel;
    switch (danger) {
        case 0:
            dangerLevel = "Safe to travel"
            break;
        case 1:
            dangerLevel = "Reconsider your travel"
            break;
        case 2:
            dangerLevel = "Really reconsider your travel"
            break;
        case 3:
            dangerLevel = "Do not travel"
            break;
        default:
            dangerLevel = "Seems like the danger level is broken!"
            break;
    }

    return dangerLevel;
}

export default function Countries(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showModal, setShowModal] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedDangerLevel, setSelectedDangerLevel] = useState(null);
    const [selectedCountryHistory, setSelectedCountryHistory] = useState(null);
    const countries = countriesData.countries;

    return countries.map((country) => {
        let dangerLevel = getDangerLevel(country.danger);

        const settlementsList = country.settlements.map((settlement) => {
            return (
                <div key={settlement.name}>
                    <h2 className="font-medium text-3xl">{settlement.name}</h2>
                    <h2 className="text-base">{getDangerLevel(settlement.danger)}</h2>
                </div>
            )
        })

        return (
            <div key="countries" className="bg-center bg-no-repeat bg-[image:var(--image-url)] bg-gray-500 bg-blend-multiply" style={{'--image-url': `url(${country.image})`}} >
                <div className="sm:px-40 px-10 py-10 space-y-3">
                    <h1 className="font-medium text-5xl">{country.name}</h1>
                    <h2 className="text-lg">{dangerLevel}</h2>
                    <div className="space-y-3">{settlementsList}</div>
                    <button className="transition duration-200 ease-in-out px-4 py-2 font-medium rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800" onClick={()=> {
                        setSelectedCountry(country.name);
                        setSelectedDangerLevel(dangerLevel)
                        setSelectedCountryHistory(country.history)
                        setShowModal(true)
                    }}>Information</button>
                </div>
                <HistoryModal isVisible={showModal} onClose={() => setShowModal(false)} countries={selectedCountry} dangerLevel={selectedDangerLevel} history={selectedCountryHistory} />
            </div>
        )
    })
}