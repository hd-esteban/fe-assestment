import Card from "../Card/Card";
import CardRow from "../Card/CardRow";
import cards from "@/constants/cards";
import CardSection from "../Card/CardSection";

function Summary() {
  return (
    <div className="container mx-auto mt-12">
      <div className="flex items-center my-2.5">
        <div className="w-4 h-8 mx-3 rounded bg-sold-orange"></div>
        <p className="font-semibold">
          Since you joined our network, here’s what we’ve been up to in your zip
          codes:
        </p>
      </div>
      {/** Cards */}
      <div className="flex flex-col flex-wrap md:flex-row">
        {cards.map(({ id, icon, title, details, totals }) => (
          <Card
            key={id}
            icon={icon}
            title={title}
          >
            {details && details?.length > 0 && (
              <CardSection>
                {details?.map(({ id, variation, color, label, value }) => {
                  return (
                    <CardRow
                      key={id}
                      variation={variation}
                      color={color}
                      label={label}
                      value={value}
                    />
                  );
                })}
              </CardSection>
            )}
            {totals && totals?.length > 0 && (
              <CardSection>
                {totals?.map(({ id, variation, color, label, value }) => {
                  return (
                    <CardRow
                      key={id}
                      variation={variation}
                      color={color}
                      label={label}
                      value={value}
                    />
                  );
                })}
              </CardSection>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Summary;
