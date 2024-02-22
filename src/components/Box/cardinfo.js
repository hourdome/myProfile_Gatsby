import React from "react";
import PropTypes from "prop-types";

function CardInfo({/*image,*/ heading, content, endpoint}) {
    return (
        <div className="m-10 p-2 w-60 h-40 bg-white rounded-xl shadow-xl transform transition-all hover:-translate-y-2">
            <div className="p-2">
                    <h2 className="font-bold text-lg">{heading}</h2>
                    <p className="text-sm text-gray-600">{content}</p>
            </div>
            <div>
                <a role="button" href={endpoint} className="text-white bg-red-valo px-3 py-1 rounded-md">Learn More</a>
            </div>
        </div>
    )
}

export default CardInfo;

CardInfo.protoType = {
    //image: PropTypes.object,
    heading: PropTypes.string,
    content: PropTypes.string,
    endpoint: PropTypes.string,

}