import React, {  useContext, useState } from 'react'
import { getId, verifyPass } from '../client/users'
import { DataContext } from '../context/DataContext'
import { useHistory } from "react-router-dom";


export const Formularios = () => {

    const history = useHistory();
    const personInfo = {
        email:'',
        password:'',
    }

    const { setData } = useContext(DataContext);
    
    const [person, setPeron] = useState(personInfo);

    const handleInputChange = (e)=>{
        setPeron({
            ...person,
            [e.target.name] : e.target.value
        })
    }


 
    const sendData = async(e)=>{
        e.preventDefault();
        let  access = await verifyPass(person);
        if(access.status  === 200 ){
            let { token , id} = access.data.data;
            localStorage.setItem('token',token);
            localStorage.setItem('id',id);
            let person = await getId(token,id)
            setData(person);
            history.push('board')
        } 
        
    }
    return (
       <div className="row justify-content-center">
           <form 
           className="col-auto bg-danger p-5 "
           onSubmit={sendData}
           >
               <div className="form-group">
                    <input
                       placeholder="email"
                       className="form-control"
                       type="text"
                       name="email"
                       onChange={ handleInputChange}
                    />
               </div>
               <div className="form-group">
                    <input
                        placeholder="password"
                        className="form-control"
                        type="password"
                        name="password"
                        onChange={ handleInputChange}

                    />
               </div>
               <div className="form-group ">
                   <button
                   className="btn btn-primary form-control"
                   type="submit"
                   >Enviar</button>
               </div>
           </form>
         </div>
    )
}
