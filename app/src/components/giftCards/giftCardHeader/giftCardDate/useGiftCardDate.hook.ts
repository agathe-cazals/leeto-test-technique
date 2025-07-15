import { useMemo } from "react";
import formatDate from "../../../../helpers/formatDate/formatDate";
import getDuration from "../../../../helpers/duration/getDuration";

type useGiftCardDateProps = {
  openingDate: string | Date;
  closingDate: string | Date;
};

export function useGiftCardDate({
  openingDate,
  closingDate,
}: useGiftCardDateProps) {
  const availability = useMemo(() => {
    return `${formatDate(openingDate)} - ${formatDate(closingDate)}`;
  }, [openingDate, closingDate]);

  const daysLeft = useMemo(() => {
    return `${getDuration(openingDate, closingDate)}`;
  }, [openingDate, closingDate]);

  return {
    availability,
    daysLeft,
  };
}
