import colors from "@/constants/colors";

export default function getFontColor(color:number | undefined) {
  // set font color
  let fontColor = "text-sold-dark-gray";
  switch (color) {
    case colors.BLUE:
      fontColor = "text-sold-blue";
      break;
    case colors.GREEN:
      fontColor = "text-sold-green";
      break;
    case colors.ORANGE:
      fontColor = "text-sold-orange";
      break;
  }
  return fontColor;
}