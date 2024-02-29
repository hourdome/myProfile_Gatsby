import React from "react";
import PropTypes from "prop-types";

function ContactButton({image, linkSocial, description}){
    return (
        <div className="w-12 h-12">
            <a href={linkSocial}>
                <button><img src={image}/></button>
            </a>
        </div>
    )
}

export default ContactButton;
ContactButton.prototype = {
    image: PropTypes.string,
    linkSocial: PropTypes.string,
    description: PropTypes.string,
}