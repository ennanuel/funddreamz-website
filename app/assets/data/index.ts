import { AiFillSafetyCertificate } from "react-icons/ai";
import { BiSolidBriefcase } from "react-icons/bi";
import { FaDonate, FaHandHoldingHeart, FaHandsHelping, FaTools } from "react-icons/fa";
import { FaHandshake, FaPersonBreastfeeding } from "react-icons/fa6";
import { GiAfrica, GiHealthCapsule } from "react-icons/gi";
import { HiOutlineLightBulb, HiOutlinePencil } from "react-icons/hi2";
import { IoIosSchool } from "react-icons/io";
import { MdFamilyRestroom, MdPets } from "react-icons/md";
import { PiHandHeartLight } from "react-icons/pi";
import { TbMedicalCross } from "react-icons/tb";


export const LINKS = [
    {
        title: "Donate",
        href: "/donate",
        subLinks: []
    },
    {
        title: "Fundraise",
        href: "/fundraise",
        subLinks: []
    },
    {
        title: "About",
        href: "/about",
        subLinks: null
    },
];

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
        colors: "bg-green-200 text-main",
        Icon: FaPersonBreastfeeding
    },
    {
        title: "Emergency",
        href: "/emergency",
        image: "/home/emergency1.jpg",
        colors: "bg-yellow-300 text-yellow-800",
        Icon: TbMedicalCross
    },
    {
        title: "Medical",
        href: "/medical",
        image: "/home/emergency2.jpg",
        colors: "bg-purple-400 text-purple-800",
        Icon: GiHealthCapsule
    },
    {
        title: "Business",
        href: "/business",
        image: "/home/business2.jpg",
        colors: "bg-blue-300 text-blue-900",
        Icon: BiSolidBriefcase
    },
    {
        title: "Education",
        href: "/education",
        image: "/home/education1.jpg",
        colors: "bg-orange-200 text-orange-900",
        Icon: IoIosSchool
    },
    {
        title: "Animal",
        href: "/animal",
        image: "/home/agrculture3.jpg",
        colors: "bg-teal-200 text-teal-800",
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
        image: "/home/Charity.jpg"
    },
    {
        title: "Los Angeles County Wildfires: How to Help",
        description: "",
        cta: "Donate now",
        isUrgent: false,
        image: "/home/Charity.jpg"
    },
    {
        title: "Fundraising FAQs: Israel/Gaza",
        description: "",
        cta: "Learn more",
        isUrgent: false,
        image: "/home/Charity.jpg",
    },
    {
        title: "GoFundMe Profiles",
        description: "",
        cta: "Learn more",
        isUrgent: false,
        image: "/home/Charity.jpg"
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