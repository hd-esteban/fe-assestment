import Button from "../Button/Button";

function ScheduleCall() {
  return (
  <div className="flex flex-col items-center justify-center my-12">
    <p className="my-10 text-center">Unsatisfied with these stats? We can help you improve them.</p>
    <Button key="schedule-call-btn" className="w-11/12 md:w-44" text="Schedule A Call" />
  </div> );
}

export default ScheduleCall;