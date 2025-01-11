import Image from "next/image";

import { Badge, BadgeColor, DownloadButton } from "@/app/_ui";
import { ItemProps, ItemStatus } from "../model";

interface Props {
  item: ItemProps;
  onClick: (item: ItemProps) => void;
}

const statusStyleMapping = {
  [ItemStatus.NEW_PROJECT]:
    "odd:bg-[#5E404B] even:bg-[#6d4e5a] border border-[#E9335F]",
  [ItemStatus.IN_PROGRESS]:
    "odd:bg-[#3D2F63] even:bg-[#49397A] border border-agencyPurple",
  [ItemStatus.FINISHED]: "odd:bg-[#4D405E] even:bg-agencyDarkGray",
};

export const Item = ({ item, onClick }: Props) => {
  const { id, name, percentage, download, status } = item;

  const colorMapping = {
    [ItemStatus.NEW_PROJECT]: BadgeColor.RED,
    [ItemStatus.IN_PROGRESS]: BadgeColor.PURPLE,
    [ItemStatus.FINISHED]: BadgeColor.GRAY,
  };

  return (
    <div
      className={`flex items-center justify-between pl-8 pr-2 py-3 rounded-xl mb-[10px] cursor-pointer transition hover:bg-opacity-50 ${statusStyleMapping[status]}`}
      onClick={() => onClick(item)}
    >
      <div className="flex items-center space-x-4">
        <div className="text-[17px] font-medium">{name}</div>
        <div className="font-medium text-xl text-agencyGray">{percentage}%</div>
        <div className="text-xxs text-agencyGray">Project ID: {id}</div>
        {download && <DownloadButton url={download} />}
      </div>
      <div className="flex">
        <div className="flex justify-between items-center min-w-[200px]">
          <div className="text-xxs text-agencyGray flex items-center gap-1">
            More info
            <Image
              src="/icon/common/info.svg"
              width={24}
              height={24}
              alt="more information"
            />
          </div>

          <Badge color={colorMapping[status]} label={status} />
        </div>

        <Image
          src="/icon/common/arrow.svg"
          width={24}
          height={24}
          alt="arrow left"
        />
      </div>
    </div>
  );
};
