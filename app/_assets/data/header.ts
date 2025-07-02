import { Link as LinkType } from "@/app/_types";
import { BiPlusMedical } from "react-icons/bi";
import { FaCircleInfo, FaPeopleGroup } from "react-icons/fa6";

import { MdLocalActivity, MdTipsAndUpdates, MdVolunteerActivism, MdWorkspacesFilled } from "react-icons/md";
import { PiPlantFill, PiTipJarFill } from "react-icons/pi";
import { RiArticleFill } from "react-icons/ri";
import { TbCategoryFilled } from "react-icons/tb";


export const LINKS: LinkType[] = [
    {
        title: "Donate",
        href: "/donate",
        article: {
            title: "Discover fundraisers to support",
            image: "/home/article2.jpg",
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
            {
                title: "Supporter space",
                href: "/categories",
                description: "Inspiration, FAQs and where to give",
                Icon: MdWorkspacesFilled
            },
        ]
    },
    {
        title: "Fundraise",
        href: "/fundraise",
        isGrid: true,
        subLinks: [
            {
                title: "Getting started",
                href: "/how-to-get-started",
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
                title: "Fundraising ideas",
                href: "/fundraising-ideas",
                description: "Ideas to spark your creativity",
                Icon: MdTipsAndUpdates
            },
            {
                title: "Team fundraising",
                href: "/team-fundraising",
                description: "Fundraise together with a team",
                Icon: FaPeopleGroup
            },
            {
                title: "Charity fundraising",
                href: "/charity-fundraising",
                description: "Fundraise for a charity",
                Icon: PiTipJarFill
            },
            {
                title: "Fundraising blog",
                href: "/blog",
                description: "Resources, tips and more",
                Icon: RiArticleFill
            },
            {
                title: "Sign up as a nonprofit",
                href: "/nonprofit",
                description: "Claim your nonprofit",
                Icon: BiPlusMedical
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
                href: "",
                isExternalLink: true
            },
            {
                title: "Help center",
                href: "",
                isExternalLink: true
            },
            {
                title: "Pricing",
                href: ""
            },
            {
                title: "For developers",
                href: "",
                isExternalLink: true
            },
            {
                title: "News",
                href: ""
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