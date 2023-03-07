import colors from "@/constants/colors";
import { getFontColor, getBackgroundColor } from "@/utils/colors";

type Props = {
  color: number | undefined;
};

function ProgressBar({ color }: Props) {
  // color GRAY as default in case it is not defined when creating a new chart
  const fontColor = getFontColor(color || colors.DARK_GRAY);
  const bgColor = getBackgroundColor(color || colors.DARK_GRAY);
  return (
    <div className="flex items-center justify-center">
      <div className="flex justify-end w-20 h-1 mr-2 bg-sold-middle-gray">
        <div className={`w-1/2 ${bgColor}`}></div>
      </div>
      <p className={`text-xs ${fontColor}`}>(xx%)</p>
    </div>
  );
}

export default ProgressBar;
