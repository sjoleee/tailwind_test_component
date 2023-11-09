type Props = {
  name?: string;
};

export const Init = ({ name }: Props) => {
  return <div className="bg-gray-500">{name}</div>;
};
