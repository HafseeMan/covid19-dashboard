import React from 'react'


export default function Display({cases,recovered,deaths}){
    return (
        <div className="w-100 p-4 mx-auto text-center"
        >
            <div className="mx-auto p-1 text-light display-inner text-monospace text-uppercase">
                <h3>Confirmed Cases: <span className="text-bright">{cases}</span></h3>
                <h3>Recovered: <span className="text-bright">{recovered}</span></h3>
                <h3>Deaths: <span className="text-danger">{deaths}</span></h3>
            </div>
        </div>
    )
}