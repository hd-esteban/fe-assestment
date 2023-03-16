import colors from "@/constants/colors";

// Prevent Tailwind from not adding to the final bundle colors by getting complete text-color. 

export function getFontColor(color:number | undefined) {
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

export function getBackgroundColor(color:number | undefined) {
  // set font color
  let bgColor = "bg-sold-dark-gray";
  switch (color) {
    case colors.BLUE:
      bgColor = "bg-sold-blue";
      break;
    case colors.GREEN:
      bgColor = "bg-sold-green";
      break;
    case colors.ORANGE:
      bgColor = "bg-sold-orange";
      break;
  }
  return bgColor;
}