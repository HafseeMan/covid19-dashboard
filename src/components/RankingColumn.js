import React from 'react'

export default function RankingColumn({name,rank,cases}){
        return (
            <div className="middle">
                <p className="label text-capitalized font-weight-bold">{name}</p>
                <div className="bar-container">
                    <div className={rank}></div>
                </div>
                <p className="side-label">{cases}</p>
             </div>
        )
}