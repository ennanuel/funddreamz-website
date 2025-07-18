import { SiFacebook, SiInstagram, SiX, SiYoutube } from "react-icons/si";
import { CREATE_FUNDRAISER_LINK, SIGN_UP_LINK } from "./links";


export const SOCIALS = [
    {
        Icon: SiFacebook,
        href: ""
    },
    {
        Icon: SiYoutube,
        href: ""
    },
    {
        Icon: SiX,
        href: ""
    },
    {
        Icon: SiInstagram,
        href: ""
    },
];

export const LINKS_2 = [
    {
        title: "Fundraise",
        subLinks: [
            {
                title: "Start a fundraiser",
                href: CREATE_FUNDRAISER_LINK,
                isExternalLink: true
            },
            {
                title: "Fundraising categories",
                href: "/categories"
            },
            {
                title: "Sign up",
                href: SIGN_UP_LINK
            },
            {
                title: "Sign in",
                href: ""
            },
        ]
    },
    {
        title: "Resources",
        subLinks: [
            {
                title: "Support",
                href: "/support",
                isExternalLink: true
            },
            {
                title: "Pricing",
                href: "/pricing"
            },
            {
                title: "For developers",
                href: "",
                isExternalLink: true
            },
            {
                title: "Contact us",
                href: ""
            },
        ]
    },
    {
        title: "Company",
        subLinks: [
            {
                title: "About",
                href: "/about"
            },
            {
                title: "Careers",
                href: ""
            },
        ]
    },
    {
        title: "Socials",
        subLinks: [
            {
                title: "X",
                href: "",
                isExternalLink: true
            },
            {
                title: "LinkedIn",
                href: "",
                isExternalLink: true
            },
            {
                title: "Facebook",
                href: "",
                isExternalLink: true
            },
            {
                title: "YouTube",
                href: "",
                isExternalLink: true
            },
        ]
    }
];