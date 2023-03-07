type Props = {
  className: string;
  text: string;
};
function Button({ className, text }: Props) {
  return (
    <button
      className={`flex items-center justify-center p-3 text-base font-medium text-white rounded bg-sold-orange h-11 ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
