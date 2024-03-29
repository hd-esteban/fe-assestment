import { CardProps } from "@/types/cards";

function Card({ icon, title, children }: CardProps) {
  return (
    <div className="w-full p-2 h-138 md:w-1/2 lg:w-1/3 ">
      <div className="h-full border rounded border-sold-middle-gray">
        <div className="mx-10 mt-10 mb-3.5">
          {icon}
        </div>
        {title && (
          <h1 className="mx-10 mb-12 text-4xl font-medium text-sold-dark-gray">
            {title}
          </h1>
        )}
        {children}
      </div>
    </div>
  );
}

export default Card;
