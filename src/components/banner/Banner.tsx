import factors from "@/constants/factors";
import Button from "../button/Button";
import ArrowDown from "../icons/ArrowDown";
import LineChart from "../icons/LineChart";
import PieChart from "../icons/PieChart";
import styles from "./Banner.module.css"

function Banner() {
  return (
    <section
      className="flex-col"
      role="banner"
    >
      {/* Sold Differences */}
      <div className="flex items-center justify-center bg-sold-dark-gray">
        <div className="container flex flex-col items-center justify-center mt-16 mb-12 h-96 md:h-56 md:flex-row md:justify-evenly">
          {/* Info */}
          <div className="w-11/12 h-full md:w-5/12">
            <h1 className="text-2xl font-semibold text-white">
              SOLD.com Difference
            </h1>
            <p className="my-5 text-xs font-medium leading-6 text-white lg:text-base lg:leading-8 ">
              Unlike other lead sources and portals, we don’t focus on worthless
              metrics like impressions or even leads. SOLD.com shows you how
              many clients actually cross the finish line and buy or sell a
              home.
            </p>
            <p className="my-5 text-xs font-medium leading-6 text-white lg:text-base lg:leading-8 ">
              After all, isn’t that the metric that matters most?
            </p>
          </div>
          {/* Card Container */}
          <div className="w-11/12 h-full md:w-4/12">
            <div className="h-full p-6 rounded-lg bg-sold-light-gray">
              <p className="text-xs font-medium lg:text-sm h-1/6 text-sold-dark-gray">
                In your zips over the last 18 months, we’ve originated:
              </p>
              {/* Statistics */}
              <div className="flex items-center justify-center pt-6 h-5/6">
                <div className="flex flex-col justify-between w-1/2 h-full pl-1 pr-3 border-r lg:pl-6 lg:pr-10">
                  <LineChart className={`w-6 h-6 md:w-8 md:h-8`} />
                  <h1 className="text-2xl font-medium lg:text-3xl">$20M</h1>
                  <p className="text-xs text-sold-dark-gray">in sales</p>
                </div>
                <div className="flex flex-col justify-between w-1/2 h-full pl-3 pr-1 lg:pl-10 lg:pr-6">
                  <PieChart className={`w-6 h-6 md:w-8 md:h-8`} />
                  <h1 className="text-2xl font-medium lg:text-3xl">$500K</h1>
                  <p className="overflow-hidden text-xs text-sold-dark-gray whitespace-nowrap text-ellipsis">
                    in Commissions (est)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.referralsCard} flex justify-center items-center`}>
        {/* Sold Differences - Paragraph*/}
        <div className="container">
          <div className="flex flex-col justify-between w-11/12 px-5 py-5 mx-auto rounded-lg shadow-lg md:pr-6 md:flex-row md:pl-14 shadow-sold-dark-gray-50 bg-sold-light-gray">
            <div className="w-full md:w-5/12">
              <p className="mb-4 text-base">
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
                    className="w-full mb-2 lg:w-1/2"
                    role="list-item"
                  >
                    <span className="mr-3 text-sold-orange">+</span>
                    {factor.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-6/12">
              <div className="px-5 py-6 rounded-lg bg-sold-semilight-gray">
                <div className="flex items-center justify-start mb-4">
                  <h2 className="w-2/3 pr-2 font-semibold md:w-1/2">
                    Your average rank in the markets you serve is:
                  </h2>
                  <h1 className="flex items-center justify-center w-1/3 text-4xl font-bold md:justify-start md:w-1/4 text-sold-orange display">
                    25 <ArrowDown />
                  </h1>
                  <Button
                    className="hidden md:block md:w-1/4"
                    text="Learn more"
                  ></Button>
                </div>
                <p className="text-xs leading-5">
                  Your ranking will directly affect the number of referrals you
                  receive. Learn about our{" "}
                  <span className="text-sold-orange">Guaranteed Display</span>{" "}
                  program to help improve your ranking.
                </p>
                <Button
                    className="w-full mt-4 md:hidden"
                    text="Learn more"
                  ></Button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
