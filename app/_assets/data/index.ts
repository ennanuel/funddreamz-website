import { AiFillSafetyCertificate } from "react-icons/ai";
import { BiSolidBriefcase } from "react-icons/bi";
import { BsCalendar2EventFill } from "react-icons/bs";
import { FaDonate, FaHandHoldingHeart, FaHandsHelping, FaTools } from "react-icons/fa";
import { FaBriefcase, FaHandshake, FaLandmarkDome, FaLightbulb, FaMonument, FaPeopleGroup, FaPersonBreastfeeding, FaTrophy } from "react-icons/fa6";
import { GiAfrica, GiHealthCapsule, GiPrayer, GiReceiveMoney, GiSoccerBall } from "react-icons/gi";
import { HiOutlineLightBulb, HiOutlinePencil } from "react-icons/hi2";
import { IoIosSchool } from "react-icons/io";
import { MdFamilyRestroom, MdPets, MdSchool, MdVolunteerActivism } from "react-icons/md";
import { PiHandHeartLight } from "react-icons/pi";
import { TbMedicalCross, TbPlant2, TbSailboat } from "react-icons/tb";
import { child1, church1, dog1, dog2, family1, family2, family3, farm1, friends1, girl1, graduation1, graduation2, momAndChild1, officer1, protest1 } from "../images/category-fundraisers";
import { board, peopleSharing } from "../images";



export const DEFAULT_HEADER_COLORS = { 
    '--background': '#f3f4f6',
    '--icon-background': '#b9f8cf',
    '--icon-color': '#02a85c',
    '--main': '#022d19',
    '--secondary': '#ffffff',
    '--text-color': '#1e2939',
    '--search-background': 'rgba(255, 255, 255, 0.8)',
} as React.CSSProperties;

export const BADGES = [
    {
        title: "Transparent",
        Icon: AiFillSafetyCertificate
    },
    {
        title: "Trustworthy",
        Icon: FaHandshake
    },
    {
        title: "For Africa",
        Icon: GiAfrica
    },
]

export const CATEGORIES = [
    {
        title: "Your cause",
        href: "/your-cause",
        image: "/home/your-cause1.jpg",
        Icon: FaPersonBreastfeeding
    },
    {
        title: "Emergency",
        href: "/emergency",
        image: "/home/emergency1.jpg",
        Icon: TbMedicalCross
    },
    {
        title: "Medical",
        href: "/medical",
        image: "/home/emergency2.jpg",
        Icon: GiHealthCapsule
    },
    {
        title: "Business",
        href: "/business",
        image: "/home/business2.jpg",
        Icon: BiSolidBriefcase
    },
    {
        title: "Education",
        href: "/education",
        image: "/home/education1.jpg",
        Icon: IoIosSchool
    },
    {
        title: "Animal",
        href: "/animal",
        image: "/home/agrculture3.jpg",
        Icon: MdPets
    },
];

export const DEMOS = [
    {
        subTitle: "Our tools",
        title: "Use our tools to create your fundraiser",
        description: "You'll be guided by prompts to add fundraiser details and set your goal. Make updates anytime.\n Get tips for starting your fundraiser.",
        Icon: FaTools,
        shortTitle: "Tools",
        extraTips: true
    },
    {
        subTitle: "Reach and share",
        title: "Reach donors by sharing",
        description: "Share your fundraiser link and use the resources in your dashboard to gain momentum.",
        Icon: FaDonate,
        shortTitle: "Sharing",
        extraTips: false
    },
    {
        subTitle: "Security ensured",
        title: "Securely receive funds",
        description: "Add your bank information, or invite your fundraiser beneficiary to add theirs, and start receiving funds.",
        Icon: FaHandsHelping,
        shortTitle: "Security",
        extraTips: false
    },
];

export const FUNDRAISERS = [
    {
        title: "Support Shyam's Life-Saving Heart surgery & recovery.",
        image: "/home/your-cause1.jpg",
        donations: "2.2K",
        amountRaised: "117,853",
        currency: "$"
    },
    {
        title: "Raising funds for Callum’s brain tumour treatment.",
        image: "/home/business1.jpg",
        donations: "4.4K",
        amountRaised: "118,704",
        currency: "£"
    },
    {
        title: "Sven kämpft um sein Leben - gegen den Krebs.",
        image: "/home/emergency1.jpg",
        donations: "2.1K",
        amountRaised: "73,379",
        currency: "€"
    },
    {
        title: "Let's Help Get Jeff Off The Streets!",
        image: "/home/agriculture2.jpg",
        donations: "5.7K",
        amountRaised: "111,017",
        currency: "$"
    },
    {
        title: "Support for Roland Nulada and his family",
        image: "/home/agriculture3.jpg",
        donations: "3.6K",
        amountRaised: "137,513",
        currency: "$"
    }
];

export const TOPICS = [
    {
        title: "How to Help: FSU Shooting Relief",
        description: "On April 17, many people were killed and injured at FSU in Tallahassee. Donate to verified fundraisers today to help the people and families affected.",
        cta: "Donate now",
        isUrgent: true,
        image: "/home/featured-topic1.jpg"
    },
    {
        title: "Los Angeles County Wildfires: How to Help",
        description: "",
        cta: "Donate now",
        isUrgent: false,
        image: "/home/featured-topic2.jfif"
    },
    {
        title: "Fundraising FAQs: Israel/Gaza",
        description: "",
        cta: "Learn more",
        isUrgent: false,
        image: "/home/featured-topic3.jfif",
    },
    {
        title: "GoFundMe Profiles",
        description: "",
        cta: "Learn more",
        isUrgent: false,
        image: "/home/featured-topic4.jfif"
    },
];

export const POINTS = [
    {
        title: "Verified",
        subTitle: "Campaigns"
    },
    {
        title: "Fund",
        subTitle: "Protection"
    },
];

export const CATEGORIES_2 = [
    {
        title: "Yourself",
        description: "Funds are delivered to your bank account for your own use",
        backgroundColor: "bg-orange-400",
        textColor: "text-orange-900",
        borderColor: "border-orange-900/40",
        Icon: FaPersonBreastfeeding
    },
    {
        title: "Friends and family",
        description: "You’ll invite a beneficiary to receive funds or distribute them yourself",
        backgroundColor: "bg-blue-900",
        textColor: "text-blue-200",
        borderColor: "border-blue-200/40",
        Icon: MdFamilyRestroom
    },
    {
        title: "Charity",
        description: "Funds are delivered to your chosen nonprofit for you",
        backgroundColor: "bg-purple-800",
        textColor: "text-purple-200",
        borderColor: "border-purple-200/40",
        Icon: FaHandHoldingHeart
    }
];


export const TIPS = [
    {
        title: "Top tips for your GoFundMe fundraiser",
        Icon: HiOutlineLightBulb
    },
    {
        title: "Tips for telling a great fundraiser story",
        Icon: HiOutlinePencil
    },
    {
        title: "Tips for sharing your fundraiser",
        Icon: PiHandHeartLight
    },
];

export const CATEGORIES_3 = [
    {
        title: "Medical",
        href: "/medical",
        hoverColor: "hover:text-blue-600 hover:border-blue-600/40",
        Icon: GiHealthCapsule
    },
    {
        title: "Memorial",
        href: "/memorial",
        hoverColor: "hover:text-yellow-600 hover:border-yellow-600/40",
        Icon: FaMonument
    },
    {
        title: "Emergency",
        href: "/emergency",
        hoverColor: "hover:text-purple-600 hover:border-purple-600/40",
        Icon: TbMedicalCross
    },
    {
        title: "Nonprofit",
        href: "/nonprofit",
        hoverColor: "hover:text-main hover:border-main/40",
        Icon: GiReceiveMoney
    },
    {
        title: "Education",
        href: "/education",
        hoverColor: "hover:text-blue-600 hover:border-blue-600/40",
        Icon: MdSchool
    },
    {
        title: "Animal",
        href: "/animal",
        hoverColor: "hover:text-main hover:border-main/40",
        Icon: MdPets
    },
    {
        title: "Environment",
        href: "/environment",
        hoverColor: "hover:text-orange-600 hover:border-orange-600/40",
        Icon: FaLandmarkDome
    },
    {
        title: "Business",
        href: "/business",
        hoverColor: "hover:text-blue-600 hover:border-blue-600/40",
        Icon: FaBriefcase
    },
    {
        title: "Community",
        href: "/community",
        hoverColor: "hover:text-purple-600 hover:border-purple-600/40",
        Icon: FaPeopleGroup
    },
    {
        title: "Competition",
        href: "/competition",
        hoverColor: "hover:text-teal-600 hover:border-teal-600/40",
        Icon: FaTrophy,
    },
    {
        title: "Creative",
        href: "/creative",
        hoverColor: "hover:text-yellow-600 hover:border-yellow-600/40",
        Icon: FaLightbulb
    },
    {
        title: "Event",
        href: "/event",
        hoverColor: "hover:text-red-600 hover:border-red-600/40",
        Icon: BsCalendar2EventFill
    },
    {
        title: "Faith",
        href: "/faith",
        hoverColor: "hover:text-blue-600 hover:border-blue-600/40",
        Icon: GiPrayer
    },
    {
        title: "Family",
        href: "/family",
        hoverColor: "hover:text-purple-600 hover:border-purple-600/40",
        Icon: MdFamilyRestroom
    },
    {
        title: "Sports",
        href: "/sports",
        hoverColor: "hover:text-orange-600 hover:border-orange-600/40",
        Icon: GiSoccerBall
    },
    {
        title: "Travel",
        href: "/travel",
        hoverColor: "hover:text-teal-600 hover:border-teal-600/40",
        Icon: TbSailboat
    },
    {
        title: "Volunteer",
        href: "/volunteer",
        hoverColor: "hover:text-yellow-600 hover:border-yellow-600/40",
        Icon: MdVolunteerActivism
    },
    {
        title: "Wishes",
        href: "/wishes",
        hoverColor: "hover:text-main hover:border-main/40",
        Icon: TbPlant2
    }
];

export const CATEGORY_FUNDRAISERS = [
    {
        categoryTitle: "Medical Fundraisers",
        fundraisers: [
            {
                location: "Conyers, GA",
                cause: "Help Adriana's Family During This Heartbreaking Journey",
                currency: "$",
                amountRaised: "423,142",
                image: momAndChild1
            },
            {
                location: "San Diego, CA",
                cause: "Help Arisbeth Muñoz Walk Again: Fund Prosthetics",
                currency: "$",
                amountRaised: "56,885",
                image: farm1
            },
            {
                location: "Novato, CA",
                cause: "Aid for Rio's Long Road to Healing",
                currency: "$",
                amountRaised: "99,890",
                image: dog2
            }
        ],
    },
    {
        categoryTitle: "Memorial Fundraisers",
        fundraisers: [
            {
                location: "Clinton, NY",
                cause: "Help Kayleigh Bisson Honor Her Twins",
                currency: "$",
                amountRaised: "177,112",
                image: family2

            },
            {
                location: "Albany, NY",
                cause: "Celebrate Earl Smith's Life and Legacy",
                currency: "$",
                amountRaised: "17,559",
                image: family1
            },
            {
                location: "Nashua, NH",
                cause: "Honoring Ian: Aid for the Blake Family",
                currency: "$",
                amountRaised: "20,919",
                image: friends1
            },
        ],
    },
    {
        categoryTitle: "Emergency Fundraisers",
        fundraisers: [
            {
                location: "Clinton Township, MI",
                cause: "Support Our Shelter's Flood Recovery Efforts",
                currency: "$",
                amountRaised: "34,993",
                image: child1
            },
            {
                location: "White Plains, NY",
                cause: "Let's Support our friend, Meredith Hudes-Lowder",
                currency: "$",
                amountRaised: "34,973",
                image: family3
            },
            {
                location: "Newberg, OR",
                cause: "Help the Sotelo Family with Expenses After ICE Detainment",
                currency: "$",
                amountRaised: "135,609",
                image: dog1
            }
        ]
    },
    {
        categoryTitle: "Nonprofit Fundraisers",
        fundraisers: [
            {
                location: "Maryville, TN",
                cause: "Support Deputy Dalton Swanger and Family",
                currency: "$",
                amountRaised: "29,380",
                image: officer1
            },
            {
                location: "Los Angeles, CA",
                cause: "Support street vendors impacted by ICE raids",
                currency: "$",
                amountRaised: "70,296",
                image: protest1
            },
            {
                location: "Saint Paul, MN",
                cause: "Building a Stronger Future - Church Conversion Project",
                currency: "$",
                amountRaised: "105,965",
                image: church1
            }
        ]
    },
    {
        categoryTitle: "Education Fundraisers",
        fundraisers: [
            {
                location: "Fort Collins, CO",
                cause: "Help Danielle Graduate and Save Lives",
                currency: "$",
                amountRaised: "19,528",
                image: graduation1
            },
            {
                location: "South Lawrence, MA",
                cause: "Honoring Tommy Cuddy's Legacy for His Kids",
                currency: "$",
                amountRaised: "21,585",
                image: graduation2
            },
            {
                location: "Columbus, OH",
                cause: "Help Mistura Pay for Accounting Tuition",
                currency: "$",
                amountRaised: "3,955",
                image: girl1
            }
        ]
    }
];


export const ARTICLES = [
    {
        date: "June 25, 2025",
        readDuration: "9 min read",
        title: "How to Set Up a Donation Page for Fundraising Success in 8 Steps"
    },
    {
        date: "June 24, 2025",
        readDuration: "5 min read",
        title: "Mental Health Fundraising Ideas That Make a Real Impact",
    },
    {
        date: "June 24, 2025",
        readDuration: "7 min read",
        title: "The Only Medical Crowdfunding Guide You’ll Need"
    },
    {
        date: "June 18, 2025",
        readDuration: "5 min read",
        title: "3 Easy Ways to Raise Money for Vet Bills"
    },
    {
        date: "June 18, 2025",
        readDuration: "8 min read",
        title: "Join the Fight: Save the Polar Bears and Their Home",
    },
    {
        date: "June 18, 2025",
        readDuration: "9 min read",
        title: "Supporting Flood Victims: Your Guide to Making an Impact"
    }
];


export const RESOURCE_CATEGORIES = [
    {
        title: "Charity",
        href: ""
    },
    {
        title: "Crowdfunding",
        href: ""
    },
    {
        title: "Financial Assistance",
        href: ""
    },
    {
        title: "Fundraiser Promotion",
        href: ""
    },
    {
        title: "Fundraising Strategy",
        href: ""
    },
    {
        title: "Guides",
        href: ""
    }
];

export const OTHER_RESOURCES = [
    {
        title: "Fundraising ideas",
        image: board
    },
    {
        title: "Fundraising tips",
        image: peopleSharing
    }
];