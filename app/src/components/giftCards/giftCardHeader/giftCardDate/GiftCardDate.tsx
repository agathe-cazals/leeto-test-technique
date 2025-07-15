import Calendar from "../../../../images/icons/calendar_today.svg";
import Clock from "../../../../images/icons/access_time.svg";
import { Text } from "../../../common/text/Text";
import { useGiftCardDate } from "./useGiftCardDate.hook";

export type GiftCardDateProps = {
  openingDate: string | Date;
  closingDate: string | Date;
};
export const GiftCardDate = ({
  openingDate,
  closingDate,
}: GiftCardDateProps) => {
  const { availability, daysLeft } = useGiftCardDate({
    openingDate,
    closingDate,
  });
  return (
    <div className="flex flex-col md:flex-row gap-1 md:gap-3">
      <div className="flex flex-row items-center gap-2">
        <img src={Calendar} alt="Calendar" className="w-4 h-4" />
        <Text color="secondary">{availability}</Text>
      </div>
      <div className="flex flex-row items-center gap-2">
        <img src={Clock} alt="Calendar" className="w-4 h-4" />
        <Text color="secondary">Se clotûre dans {daysLeft}</Text>
      </div>
    </div>
  );
};
