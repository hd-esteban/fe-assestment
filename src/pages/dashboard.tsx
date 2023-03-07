import { Montserrat } from "next/font/google";
import Banner from "@/components/banner/Banner";
import Summary from "@/components/summary/Summary";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

function Dashboard() {
  return (
    <div
      className={`dashboard ${montserrat.variable} font-sans h-screen py-10`}
    >
      <Banner />
      <Summary />
    </div>
  );
}

export default Dashboard;
