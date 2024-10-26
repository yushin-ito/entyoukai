import { VStack, Text, HStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <VStack
      as="footer"
      w="100%"
      mt="12"
      pt="8"
      pb="6"
      spacing="8"
      alignItems="center"
      bg="brand"
    >
      <HStack spacing="8">
        <Button
          as={Link}
          to="/"
          variant="link"
          fontSize="sm"
          fontWeight="extrabold"
          color="white"
        >
          サイトポリシー
        </Button>
        <Button
          as={Link}
          to="/"
          variant="link"
          fontSize="sm"
          fontWeight="extrabold"
          color="white"
        >
          プライバシーポリシー
        </Button>
        <Button
          as={Link}
          to="/"
          variant="link"
          fontSize="sm"
          fontWeight="extrabold"
          color="white"
        >
          お問い合わせ
        </Button>
      </HStack>
      <Text fontSize="2xs" color="white">
        &copy; 2024 entyoukai All rights reserved.
      </Text>
    </VStack>
  );
};

export default Footer;
