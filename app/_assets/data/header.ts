import { Link as LinkType } from "@/app/_types";
import { BiSolidLogIn } from "react-icons/bi";
import { FaCircleInfo } from "react-icons/fa6";

import { MdLocalActivity, MdVolunteerActivism } from "react-icons/md";
import { PiPlantFill } from "react-icons/pi";
import { TbCategoryFilled } from "react-icons/tb";
import { CREATE_FUNDRAISER_LINK, SIGN_UP_LINK } from "./links";
import { BsPersonFillAdd } from "react-icons/bs";


export const LINKS: LinkType[] = [
    {
        title: "Donate",
        href: "/donate",
        article: {
            title: "Discover fundraisers to support",
            image: "/home/article1.jpg",
            cta: "Learn more",
        },
        subLinks: [
            {
                title: "Categories",
                href: "/categories",
                description: "Browse fundraisers by category",
                Icon: TbCategoryFilled
            },
            {
                title: "Social Impact Funds",
                href: "/social-impact-funds",
                description: "Directly support for urgent needs",
                Icon: MdLocalActivity
            },
            {
                title: "Crisis relief",
                href: "/categories",
                description: "Donate to verified relief",
                Icon: MdVolunteerActivism
            },
        ]
    },
    {
        title: "Fundraise",
        href: "/fundraise",
        isGrid: true,
        subLinks: [
            {
                title: "Start your fundraiser",
                href: CREATE_FUNDRAISER_LINK,
                description: "Step-by-step help, examples, and more",
                Icon: PiPlantFill
            },
            {
                title: "Fundraising tips",
                href: "/tips/fundraising",
                description: "The ultimate fundraising tips guide",
                Icon: FaCircleInfo
            },
            {
                title: "Fundraising categories",
                href: "/categories",
                description: "Find the right category for you",
                Icon: TbCategoryFilled
            },
            {
                title: "Sign up",
                href: SIGN_UP_LINK,
                description: "Create a FundDreamz account",
                Icon: BsPersonFillAdd
            },
            {
                title: "Sign in",
                href: "/nonprofit",
                description: "Log in to your account",
                Icon: BiSolidLogIn
            },
        ]
    },
    {
        title: "Resources",
        href: "/resources",
        article: {
            title: "FundDreamz secures $3.16 Million to Power Life-Improving Conversations Across Global South",
            image: "/home/article.jfif",
            date: "01 April, 2025",
            cta: "Read more"
        },
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
                isInactive: true,
                isExternalLink: true
            },
            {
                title: "Contact us",
                href: ""
            },
        ]
    },
    {
        title: "About",
        href: "/about",
    },
];