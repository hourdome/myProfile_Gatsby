import React from "react"
import { CardContact, CardExp, CardPersonal } from '../components'
import workingPNG from '../images/profile/working.png'
import contactPNG from '../images/profile/contact.png'


function Home() {
    return (
        
    <div className="bg-black-valo flex justify-center item-center w-full min-h-screen">
        <div className="grid justify-stretch grid-cols-1">
            <CardPersonal 
                heading={'PERSONAL'}
                image={'profile/profile.jpg'}
            />
            <CardExp
                heading={'EXPERIENCE'}
                image={workingPNG}
            />
            <CardContact
                heading={'CONTACT'}
                image={contactPNG}               
            />
        </div>
    </div>
    );
}

export default Home;