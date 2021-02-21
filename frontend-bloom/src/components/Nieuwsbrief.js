import React from 'react'


export default() =>{
    return(
        <div>
            <div className="nieuwsbrief">
                <h1 className="nieuwsbrief__titel">Mis nooit een update</h1>
                <p className="nieuwsbrief__tekst">Schrijf je in voor de Bloom nieuwsbrief</p>
                <div className="nieuwsbrief__formulier">  
                    <input className="nieuwsbrief__field" type="text" placeholder="Jouw e mailadres"/>
                    <button className="nieuwsbrief__knop" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="27.47" viewBox="0 0 34 27.47">
                        <path id="Path_58" data-name="Path 58" d="M907.812,3692H880.188a3.318,3.318,0,0,0-3.188,3.43v20.61a3.312,3.312,0,0,0,3.188,3.43h27.624a3.312,3.312,0,0,0,3.188-3.43v-20.61A3.318,3.318,0,0,0,907.812,3692Zm0,3.43v2.92c-1.488,1.31-3.862,3.34-8.937,7.62-1.118.95-3.334,3.23-4.875,3.2-1.541.03-3.757-2.25-4.875-3.2-5.074-4.28-7.448-6.31-8.937-7.62v-2.92Zm-27.624,20.61v-13.28c1.521,1.31,3.679,3.14,6.968,5.91,1.451,1.23,3.993,3.95,6.844,3.93,2.837.02,5.346-2.66,6.843-3.93,3.289-2.77,5.448-4.6,6.969-5.91v13.28Z" transform="translate(-877 -3692)" fill="#fff"/>
                        </svg>
                    </button>
                </div>    
            </div>        
        </div>
    )
}
