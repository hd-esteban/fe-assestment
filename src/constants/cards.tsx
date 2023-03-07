import Leads from "@/components/icons/Leads";
import HappyFace from "@/components/icons/HappyFace";
import SadFace from "@/components/icons/SadFace";
import { Cards } from "@/types/cards";
import cardRowVariations from "./cardRowVariations";
import colors from "./colors";

const icons = {
  LEADS: <Leads />,
  HAPPY_FACE: <HappyFace />,
  SAD_FACE: <SadFace />,
};

const cards: Cards = [
  {
    id: 1,
    icon: icons.LEADS,
    title: "Opportunity",
    details: [
      {
        id: 1,
        variation: cardRowVariations.DETAIL,
        color: colors.BLUE,
        label: "SOLD.com Leads",
        value: "500",
      },
      {
        id: 2,
        variation: cardRowVariations.DETAIL,
        color: colors.BLUE,
        label: "Customers we promoted you to",
        value: "500",
      },
      {
        id: 3,
        variation: cardRowVariations.DETAIL,
        color: colors.BLUE,
        label: "Appointments set with you",
        value: "500",
      },
    ],
    totals: [],
  },
  {
    id: 2,
    icon: icons.HAPPY_FACE,
    title: "Wins",
    details: [
      {
        id: 1,
        variation: cardRowVariations.DETAIL,
        color: colors.GREEN,
        label: "Your signed agreements",
        value: "15",
      },
      {
        id: 2,
        variation: cardRowVariations.DETAIL,
        color: colors.GREEN,
        label: "Your closings",
        value: "10",
      },
    ],
    totals: [
      {
        id: 1,
        variation: cardRowVariations.TOTAL,
        color: colors.GREEN,
        label: "Your closed volume",
        value: "$3,000,000",
      },
      {
        id: 2,
        variation: cardRowVariations.TOTAL,
        color: colors.GREEN,
        label: "Your commission (est)",
        value: "$500,00",
      },
    ],
  },
  {
    id: 2,
    icon: icons.SAD_FACE,
    title: "Losses",
    details: [
      {
        id: 1,
        variation: cardRowVariations.DETAIL,
        color: colors.ORANGE,
        label: "Appointments that signed with another agent",
        value: "15",
      },
      {
        id: 2,
        variation: cardRowVariations.DETAIL,
        color: colors.ORANGE,
        label: "Lost closings",
        value: "10",
      },
    ],
    totals: [
      {
        id: 2,
        variation: cardRowVariations.TOTAL,
        color: colors.ORANGE,
        label: "Lost volume",
        value: "$3,000,000",
      },
      {
        id: 2,
        variation: cardRowVariations.TOTAL,
        color: colors.ORANGE,
        label: "Lost commission (est)",
        value: "$500,00",
      },
    ],
  },
];

export default cards;
