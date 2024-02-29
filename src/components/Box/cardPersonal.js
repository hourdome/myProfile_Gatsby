import React from "react";
import PropTypes from "prop-types";

function CardPersonal({image, heading}) {
    return (
        <div className="m-10 p-2 w-[32rem] h-auto bg-white rounded-xl shadow-xl grid grid-row-2 ">
            <img className="h-48 object-cover rounded-full shadow-xl justify-self-center" src={image}></img>
            <div className="p-2 text-pretty font-Noto">
                    <h2 className="font-bold text-lg">{heading}</h2>
                    <p className="text-sm text-gray-600">นายธัญพิสิษฐ์ แสงเมือง ( โดม )<br/>19 ตุลาคม 2542<br/></p>
            </div>
            {/* <div>
                <a role="button" href={endpoint} className="text-white bg-red-valo px-3 py-1 rounded-md">Learn More</a>
            </div> */}
        </div>
    )
}

export default CardPersonal;
    CardPersonal.protoType = {
        image: PropTypes.string,
        heading: PropTypes.string,
}