type Props = {
  className: string;
  text: string;
};
function Button({ className, text }: Props) {
  return (
    <button
      className={`flex items-center justify-center p-1 md:p-3 text-xs font-medium md:text-base text-white rounded bg-sold-orange h-11 ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
