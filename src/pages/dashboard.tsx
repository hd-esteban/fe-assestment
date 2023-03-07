import { Montserrat } from "next/font/google";
import Banner from "@/components/Banner/Banner";
import Summary from "@/components/Summary/Summary";
import ScheduleCall from "@/components/ScheduleCall/ScheduleCall";

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
      <ScheduleCall />
    </div>
  );
}

export default Dashboard;
