import type { Props } from "./types";

export const amenitiesData: Props[] = [
    {
        title: "arrival",
        number: "01",
        icon: "/images/icon-key.svg",
        iconBackgroundAccent: "terracotta-600",
        header: "Check-in from 15:00",
        subheader: "Sat, 25 April",
        descriptionType: "justText",
        description: "Ring the brass bell by the blue door. If we're at the market, the key is in the terracotta pot by the olive tree.",
    },
    {
        title: "WIFI",
        number: "02",
        icon: "/images/icon-wifi.svg",
        iconBackgroundAccent: "blue-500",
        header: "Le Soleil · Guest",
        subheader: "Password below",
        descriptionType: "list",
        list: [
            {
                label: "Network",
                value: "Le soleil · Guest",
            },
            {
                label: "Password",
                value: "soleil-2026",
                actionText: "Copy",
            },
        ],
    },
    {
        title: "breakfast",
        number: "03",
        icon: "/images/icon-breakfast.svg",
        iconBackgroundAccent: "rose-500",
        header: "Served 8 - 10:30",
        subheader: "On the terrace",
        descriptionType: "justText",
        description: "Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free option? Leave a note the night before.",
    }
];