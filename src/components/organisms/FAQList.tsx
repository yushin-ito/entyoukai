import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  VStack,
  Text,
  HStack,
  Heading
} from "@chakra-ui/react";

import type { FAQ } from "../../types";

type FAQListProps = {
  faq: FAQ[];
};

const FAQList = ({ faq }: FAQListProps) => {
  return (
    <Accordion w="100%" allowToggle>
      {faq.map((item, index) => (
        <AccordionItem key={index}>
          {/* 質問 */}
          <AccordionButton
            px={{ base: "6px", sm: "12px" }}
            py={{ base: "16px", sm: "20px" }}
            alignItems="center"
            justifyContent="space-between"
            _hover={{ bg: { base: "transparent", sm: "gray.50" } }}
            _active={{ bg: "gray.50" }}
          >
            <HStack
              alignItems="flex-start"
              spacing={{ base: "4px", sm: "6px" }}
            >
              <Text
                as="span"
                fontSize={{ base: "xs", sm: "sm" }}
                fontWeight="bold"
              >
                Q.
              </Text>
              <Heading
                as="h3"
                textAlign="left"
                fontSize={{ base: "xs", sm: "sm" }}
              >
                {item.question}
              </Heading>
            </HStack>
            <AccordionIcon
              boxSize={{ base: "16px", sm: "24px" }}
              color="brand"
            />
          </AccordionButton>

          {/* 回答 */}
          <AccordionPanel
            px={{ base: "6px", sm: "12px" }}
            pb={{ base: "4", sm: "6" }}
          >
            <VStack alignItems="flex-start" spacing="2">
              <HStack
                alignItems="flex-start"
                spacing={{ base: "4px", sm: "6px" }}
              >
                <Text
                  as="span"
                  fontSize={{ base: "xs", sm: "sm" }}
                  fontWeight="bold"
                  color="red.500"
                >
                  A.
                </Text>
                <Text
                  as="p"
                  fontSize={{ base: "xs", sm: "sm" }}
                  fontWeight="bold"
                  color="red.500"
                >
                  {item.answer}
                </Text>
              </HStack>
              <Text as="p" fontSize={{ base: "2xs", sm: "xs" }}>
                {item.info}
              </Text>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQList;
