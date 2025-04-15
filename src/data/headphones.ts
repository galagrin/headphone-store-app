import headphone from "../assets/HeadPhones/headphone.png";
import headphone1 from "../assets/HeadPhones/headphone1.png";
import headphone2 from "../assets/HeadPhones/headphone2.png";
import wireless1 from "../assets/Wireless/wireless1.png";
import wireless2 from "../assets/Wireless/wireless2.png";
import wireless3 from "../assets/Wireless/wireless3.png";

export interface HeadphoneItem {
    id: number;
    img: string;
    title: string;
    price: number;
    originalPrice?: number;
    rate: string;
    quantity: number;
}

export const headphones: HeadphoneItem[] = [
    {
        id: 1,
        img: headphone,
        title: "Apple BYZ S852I",
        price: 2927,
        originalPrice: 3527,
        rate: "4.7",
        quantity: 1,
    },
    {
        id: 2,
        img: headphone1,
        title: "Apple EarPods",
        price: 2327,
        rate: "4.5",
        quantity: 1,
    },
    {
        id: 3,
        img: headphone2,
        title: "Apple EarPods",
        price: 2327,
        rate: "4.5",
        quantity: 1,
    },
    {
        id: 4,
        img: headphone,
        title: "Apple BYZ S852I",
        price: 2927,
        rate: "4.7",
        quantity: 1,
    },
    {
        id: 5,
        img: headphone1,
        title: "Apple EarPods",
        price: 2327,
        rate: "4.5",
        quantity: 1,
    },
    {
        id: 6,
        img: headphone2,
        title: "Apple EarPods",
        price: 2327,
        rate: "4.7",
        quantity: 1,
    },
];

export const wirelessHeadphones: HeadphoneItem[] = [
    {
        id: 111,
        img: wireless1,
        title: "Apple AirPods",
        price: 9527,
        rate: "4.7",
        quantity: 1,
    },
    {
        id: 112,
        img: wireless2,
        title: "GERLAX GH-04",
        price: 6527,
        rate: "4.7",
        quantity: 1,
    },
    {
        id: 113,
        img: wireless3,
        title: "BOROFONE BO4",
        price: 7527,
        rate: "4.7",
        quantity: 1,
    },
];
