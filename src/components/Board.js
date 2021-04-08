import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

export const Board = () => {

    const { data} = useContext(DataContext)
    return (
        <div className="row justify-content-center">
        <div className="card " style= {{width: "18rem"}}>
            
            <img src="https://electronicssoftware.net/wp-content/uploads/user.png" class="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Bienvenido {data.name}</h5>
                    
                    
                    <p className="card-text">
                        Nombre : {data.name} {data.lastName} <br/>
                        email : {data.email} <br/>
                        id : {data.id} 
                    </p>
                </div> 
                </div> 
        </div>
    )
}
