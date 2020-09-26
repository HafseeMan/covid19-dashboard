import React from 'react'

export default function Title({title}){
        return (
            <div className="row">
             <div className="col-10 mx-auto text-center text-title">
                <h2 className="text-capitalize dark-green underline font-weight-bold">{title}</h2>
             </div>
            </div>
        )
}