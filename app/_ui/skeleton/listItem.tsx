interface Props {
  length: number;
}

export const ListItemSkeleton = ({ length }: Props) =>
  [...Array(length)].map((_, idx) => (
    <div className="p-2" key={idx}>
      <div className="h-16 bg-gray-300 rounded-xl w-full animate-pulse"></div>
    </div>
  ));
