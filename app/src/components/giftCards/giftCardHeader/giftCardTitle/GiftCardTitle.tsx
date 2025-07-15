import Gift from "../../../../images/icons/gift.svg";
import { Title } from "../../../common/title/Title";

export type GiftCardTitleProps = {
  title: string;
};
export const GiftCardTitle = ({ title }: GiftCardTitleProps) => {
  return (
    <div className="flex flex-col gap-4">
      <img src={Gift} alt="Gift icon" className="w-10 h-10 md:w-16 md:h-16" />
      <Title weight="semibold" className="text-xl md:text-2xl">
        {title}
      </Title>
    </div>
  );
};
