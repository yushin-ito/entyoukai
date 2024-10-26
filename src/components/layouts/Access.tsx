import { HStack, VStack, Text } from "@chakra-ui/react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import MotionBox from "../elements/MotionBox";

const Access = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={
        isInView ? { opacity: 1, x: 0, transition: { duration: 1 } } : {}
      }
      w="100%"
    >
      <HStack w="100%" spacing="6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6533.770941781844!2d136.66164791053401!3d35.0345949726894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400390039160dda3%3A0xee33fbe0c1cb0eb3!2z5pyd5pel55S656S-5Lya56aP56WJ5Y2U6K2w5Lya!5e0!3m2!1sja!2sjp!4v1729970214415!5m2!1sja!2sjp"
          width="320"
          height="240"
          loading="lazy"
          style={{ border: 0 }}
          allowFullScreen
        />
        <VStack spacing="8" alignItems="flex-start">
          <VStack spacing="2" alignItems="flex-start">
            <Text fontSize="xl" fontWeight="bold">
              保健福祉センター（さわやか村）
            </Text>
            <Text fontSize="xl" fontWeight="bold">
              〒510-8102 三重県三重郡朝日町大字小向891-5
            </Text>
          </VStack>
          <VStack spacing="2" alignItems="flex-start">
            <Text fontSize="xl" fontWeight="bold">
              ・近鉄伊勢朝日駅から徒歩x分
            </Text>
            <Text fontSize="xl" fontWeight="bold">
              ・JR朝日駅から徒歩x分
            </Text>
          </VStack>
        </VStack>
      </HStack>
    </MotionBox>
  );
};

export default Access;
