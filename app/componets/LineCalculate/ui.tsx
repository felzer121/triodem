import {
  IconTableExport,
  IconBow,
  IconSignLeft,
  IconArrowBigDownLines,
} from "@tabler/icons-react";

interface LineCalculateProps {
  step: number;
}

const steps = [
  {
    id: 1,
    icon: <IconTableExport size={28} />,
  },
  {
    id: 2,
    icon: <IconBow size={28} />,
  },
  {
    id: 3,
    icon: <IconSignLeft size={28} />,
  },
  {
    id: 4,
    icon: <IconArrowBigDownLines size={28} />,
  },
];

export const LineCalculate = ({ step }: LineCalculateProps) => {
  return (
    <div className="flex justify-between">
      {steps.map((item, index) => (
        <div className="relative" key={item.id}>
          <div
            className="relative p-6 bg-[#2F2F2F] rounded-full z-[4] shadow-[0px_4px_4px_rgba(0,0,0,0.35)]"
            style={
              index + 1 <= step
                ? { backgroundColor: "#EBEBEB", color: "#000" }
                : { color: '#868686'}
            }
          >
            {item.icon}
          </div>
          {index < steps.length - 1 && (
            <div
              className="absolute top-1/2 transform -translate-y-1/2 right-[-2px] left-[90%] h-[12px] z-[1]"
              style={
                index + 1 < step
                  ? { backgroundColor: "#EBEBEB", width: "calc(600px / 4)" }
                  : { backgroundColor: "#6C6C6C", width: "calc(600px / 4)" }
              }
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};
