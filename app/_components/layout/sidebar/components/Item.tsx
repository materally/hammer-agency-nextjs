interface Props {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

export const Item = ({ icon, label, active }: Props) => {
  const isActive = active ? "bg-purple-600" : "";

  return (
    <li
      className={`transition flex items-center justify-center flex-col text-center py-4 gap-2 text-xxs/[15px] hover:bg-purple-600 cursor-pointer ${isActive}`}
    >
      {icon}
      {label}
    </li>
  );
};
