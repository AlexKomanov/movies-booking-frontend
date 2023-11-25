"use client"
import React, { useEffect, useState } from 'react';
import '../Popup.css'

const LocationPopup = ({ setShowLocationPopup }: { setShowLocationPopup: React.Dispatch<React.SetStateAction<boolean>> }) => {

    const [cities, setCities] = useState<any[]>([]);

    const getCities = async () => {


        const citiesList = [
            "Karmiel", "Haifa", "Tel Aviv", "Jerusalem", "Beer Sheva", "Eilat", "Hertsliya"
        ]

        const citiesObject = citiesList.map((city) => {
            return {
                label: city,
                value: city.toLowerCase()
            }
        })

        setCities(citiesObject);
        
    }
        useEffect(() => {
            getCities();
            console.log(cities)
        }, []);

        const handleSave = () => {
            setShowLocationPopup(false);
        }

   
    return (
        <div className='popup-bg'>
            <div className='popup-cont'>
                <select className='select'>
                    <option value=""  disabled>Select Your City</option>
                    {
                    cities.map((city: any, index) => {
                        return <option key={index} value={city.value}>{city.label}</option>
                    })
                    }
                </select>

                <button className='btn'
                    onClick={handleSave}
                >Save</button>
            </div>
        </div>
    )
}

export default LocationPopup