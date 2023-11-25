import { Flex } from "antd";

interface RoadMapProps {
  title: string;
  items: string[];
}

const RoadMap = ({ title, items }: RoadMapProps) => {
  return (
    <Flex vertical>
      <h2 style={{ fontStyle: "italic" }}>{title}</h2>

      {items.map((item, index) => (
        <div style={{ fontSize: "1.6rem", margin: "16px 20px 0" }} key={index}>
          {index + 1}. {item}
        </div>
      ))}
    </Flex>
  );
};

export default RoadMap;
