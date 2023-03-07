import cardRowVariations from "@/constants/cardRowVariations";
import { CardRowProps } from "@/types/cards";
import getFontColor from "@/utils/colors";
import styles from "./CardRow.module.css";

function CardRow({
  variation,
  color,
  label,
  value,
}: CardRowProps) {
  const fontColor = getFontColor(color)
  // return Card row based on variation passed
  return variation === cardRowVariations.DETAIL ? (
    <div className={`${styles.detailRow} flex items-center justify-between h-20 mx-10 border-b-2 border-dashed border-sold-middle-gray`}>
      <div className="w-1/2 text-sold-dark-gray">{label}</div>
      <h1 className={`w-1/2 text-right text-2xl font-semibold ${fontColor}`}>{value}</h1>
    </div>
  ) : (
    <div className={`${styles.totalRow} flex flex-col justify-center items-end h-20 px-10 bg-sold-semilight-gray last: rounded-b`}>
      <div className="flex items-center h-1/2">{label}</div>  
      <div className={`flex items-center h-1/2 text-2xl font-medium	${fontColor}`}>{value}</div>
      <div className="w-full border-b border-sold-semi-dark-gray">{" "}</div>
    </div>
  );
}

export default CardRow;
