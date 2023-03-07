import { CardProps } from "@/types/cards";

function Card({ icon, title, children }: CardProps) {
  return (
    <div className="w-1/3 p-2 h-138">
      <div className="h-full border rounded border-sold-middle-gray">
        <div className="mx-10 mt-10 mb-4">
          {icon}
        </div>
        {title && (
          <h1 className="mx-10 mb-12 text-4xl font-medium m- text-sold-dark-gray">
            {title}
          </h1>
        )}
        {children}
      </div>
    </div>
  );
}

export default Card;
