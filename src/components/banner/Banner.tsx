import factors from "@/constants/factors";
import Button from "../button/Button";
import ArrowDown from "../icons/ArrowDown";
import LineChart from "../icons/LineChart";
import PieChart from "../icons/PieChart";

function Banner() {
  return (
    <section
      className="flex-col"
      role="banner"
    >
      {/* Sold Differences */}
      <div className="flex flex-col items-center bg-sold-dark-gray">
        <div className="container flex items-center h-56 mt-16 mb-12 justify-evenly">
          {/* Info */}
          <div className="w-5/12 h-full">
            <h1 className="font-semibold text-white sm:text-2xl">
              SOLD.com Difference
            </h1>
            <p className="my-5 text-sm font-medium text-white sm:text-base sm:leading-8 ">
              Unlike other lead sources and portals, we don’t focus on worthless
              metrics like impressions or even leads. SOLD.com shows you how
              many clients actually cross the finish line and buy or sell a
              home.
            </p>
            <p className="text-sm font-medium text-white sm:text-base sm:leading-8">
              After all, isn’t that the metric that matters most?
            </p>
          </div>
          {/* Card Container */}
          <div className="w-4/12 h-full">
            <div className="h-full p-6 rounded-lg bg-sold-light-gray">
              <p className="text-xs font-medium md:text-sm h-1/6 text-sold-dark-gray">
                In your zips over the last 18 months, we’ve originated:
              </p>
              {/* Statistics */}
              <div className="flex items-center justify-center pt-6 h-5/6">
                <div className="flex flex-col w-1/2 h-full pl-6 pr-10 border-r justify-evenly">
                  <LineChart className={`w-6 h-6 md:w-8 md:h-8`} />
                  <h1 className="text-3xl font-medium">$20M</h1>
                  <p className="text-xs text-sold-dark-gray">in sales</p>
                </div>
                <div className="flex flex-col w-1/2 h-full pl-10 pr-6 justify-evenly">
                  <PieChart className={`w-6 h-6 md:w-8 md:h-8`} />
                  <h1 className="text-3xl font-medium">$500K</h1>
                  <p className="text-xs text-sold-dark-gray">
                    in Commissions (est)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-52">
        <div className="h-1/2 bg-sold-dark-gray"></div>
        {/* Sold Differences - Paragraph*/}
        <div className="container absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <div className="flex justify-between w-11/12 py-5 pr-6 mx-auto rounded-lg shadow-lg pl-14 shadow-sold-dark-gray-50 bg-sold-light-gray">
            <div className="w-5/12">
              <p className="mb-4 font-base">
                Our referrals are routed to the top performing agents in our
                network. Rankings are based on numerous factors, including:
              </p>
              <ul
                role="list"
                className="flex flex-wrap text-sm list-none"
              >
                {factors.map((factor) => (
                  <li
                    key={factor.id}
                    className="w-1/2 mb-2"
                    role="list-item"
                  >
                    <span className="mr-3 text-sold-orange">+</span>
                    {factor.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-6/12">
              <div className="px-5 py-6 rounded-lg bg-sold-semilight-gray">
                <div className="flex justify-start mb-4">
                  <h2 className="w-1/2 font-semibold">
                    Your average rank in the markets you serve is:
                  </h2>
                  <h1 className="flex items-center justify-start w-1/4 text-4xl font-bold text-sold-orange display">
                    25 <ArrowDown />
                  </h1>
                  <Button
                    className="w-1/4"
                    text="Learn more"
                  ></Button>
                </div>
                <p className="text-xs leading-5">
                  Your ranking will directly affect the number of referrals you
                  receive. Learn about our{" "}
                  <span className="text-sold-orange">Guaranteed Display</span>{" "}
                  program to help improve your ranking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
