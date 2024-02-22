import React from "react"
import { CardInfo } from '../components'


function Home() {
    return (
        
    <div className="bg-black-valo flex justify-center item-center w-full min-h-screen">
        <div className="grid grid-flow-row justify-stretch md:grid-cols-4 grid-rows-4">
            <CardInfo 
                heading={'Personal'}
                content={'ประวัติส่วนตัว'}
                endpoint={'/BlogContent/personal'}
            />
            <CardInfo 
                heading={'Working'}
                content={'การทำงาน'}
                endpoint={'/BlogContent/working'}
            />
            <CardInfo 
                heading={'Contact'}
                content={'ช่องทางการติดต่อ'}
                endpoint={'/BlogContent/contact'}
            />
        </div>
    </div>
    );
}

export default Home;