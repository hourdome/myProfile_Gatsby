import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ContactButton from "./Button";
import { emailIcon, facebookIcon, githubIcon, twitchIcon, xIcon, youtubeIcon } from "./images";



function ContactIcon() {
    const {
        site: {
            siteMetadata: {author, authorSocial},
        },
    } = useStaticQuery(graphql`
    query MyQuery {
        site {
            siteMetadata {
                author {
                    email
                }
                authorSocial {
                    github
                    pixiv
                    twitch
                    twitter
                    youtube
                    facebook
                }
            }
        }
    }
    `)
    

    return (
        <div className="m-4">    
        <div className="flex justify-between">
            {/* <div className=""> */}
                <ContactButton
                    image={emailIcon}
                    linkSocial={author.email}
                    description={'saengmueng_90@hotmail.com'}
                />
                <ContactButton
                    image={facebookIcon}
                    linkSocial={authorSocial.facebook}
                    description={'Facebook'}
                />
                <ContactButton
                    image={githubIcon}
                    linkSocial={authorSocial.github}
                    description={'Github'}
                />
                <ContactButton
                    image={xIcon}
                    linkSocial={authorSocial.twitter}
                    description={'X'}
                />
                <ContactButton
                    image={youtubeIcon}
                    linkSocial={authorSocial.youtube[0]}
                    description={'HOURDOME'}
                />
                {/* <ContactButton
                    image={youtubeIcon}
                    linkSocial={authorSocial.youtube[1]}
                    description={'BLUEJEWELLY'}
                /> */}
                <ContactButton
                    image={twitchIcon}
                    linkSocial={authorSocial.twitchIcon}
                    description={'HOURDOME'}
                />
            {/* </div> */}
        </div>
        </div>
    )
}

export default ContactIcon;