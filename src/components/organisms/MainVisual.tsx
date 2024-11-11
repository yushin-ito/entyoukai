import {
  VStack,
  Text,
  Button,
  HStack,
  Box,
  Icon,
  Center,
  useBreakpointValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
  IconButton,
  Image,
  Heading
} from "@chakra-ui/react";
import { useRef, useEffect, memo } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdPin } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";

import useScroll from "../../hooks/tools";
import useAppStore from "../../stores";

const MainVisual = memo(() => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const ref = useRef<HTMLDivElement>(null);
  const breakpoint = useBreakpointValue({ base: "base", md: "md", lg: "lg" });
  const background = useBreakpointValue({
    base: "/assets/images/background-mobile.webp",
    md: "/assets/images/background-tablet.webp",
    lg: "/assets/images/background-desktop.webp"
  });
  const progress = useAppStore((state) => state.progress);

  const { scrollToElement } = useScroll();

  useEffect(() => {
    if (pathname !== "/" && window.scrollY < 200 && progress === 100) {
      setTimeout(() => {
        const hash = window.location.hash;
        if (hash) {
          const sectionId = hash.substring(1);
          const element = document.getElementById(sectionId);
          if (element) {
            scrollToElement(element, 500);
          }
        } else {
          if (ref.current) {
            scrollToElement(ref.current, 500);
          }
        }
      }, 300);
    }
  }, [pathname, progress, scrollToElement]);

  return (
    <Center
      bg="white"
      w="100vw"
      h={{ base: "calc(100vh * 0.8)", lg: "100vh" }}
      pos="relative"
    >
      {/* 背景画像 */}
      <Image
        src={background}
        alt="backgroud"
        objectFit="cover"
        w="100vw"
        h="100%"
        pos="absolute"
        top="0"
        left="0"
        objectPosition="center center"
      />

      {/* ロゴ */}
      <Image
        src="/assets/images/logo.webp"
        alt="logo"
        objectFit="cover"
        w={{ base: "100px", lg: "120px" }}
        h="auto"
        pos="absolute"
        top="6"
        left="8"
        rounded="4px"
        onClick={() => navigate("/top")}
      />

      {/* ナビゲーションバー */}
      {breakpoint === "lg" ? (
        <HStack
          as="nav"
          pos="absolute"
          top="6"
          right="6"
          px="10"
          py="3"
          spacing="8"
          rounded="full"
          bg="brand"
          opacity="0.8"
        >
          <Button
            as={Link}
            to="/top"
            variant="link"
            color="white"
            _active={{ opacity: 0.6 }}
          >
            トップ
          </Button>
          <Button
            as={Link}
            to="/activity"
            variant="link"
            color="white"
            _active={{ opacity: 0.6 }}
          >
            活動について
          </Button>
          <Button
            as={Link}
            to="/sponsor"
            variant="link"
            color="white"
            _active={{ opacity: 0.6 }}
          >
            協賛について
          </Button>
          <Button
            as={Link}
            to="/memory"
            variant="link"
            color="white"
            _active={{ opacity: 0.6 }}
          >
            おもいで
          </Button>
          <Button
            as={Link}
            to="/contact"
            variant="link"
            color="white"
            _active={{ opacity: 0.6 }}
          >
            お問い合わせ
          </Button>
        </HStack>
      ) : (
        <IconButton
          icon={<FiMenu size="20px" />}
          aria-label="menu"
          pos="absolute"
          top="6"
          right="8"
          color="white"
          bg="brand"
          _hover={{ opacity: { base: 1, lg: 0.8 } }}
          _active={{
            transform: "scale(0.98)",
            opacity: 0.8
          }}
          rounded="md"
          opacity="0.8"
          onClick={onOpen}
        />
      )}

      {/* ドロワー */}
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          maxW={{ base: "60%", sm: "40%" }}
          bg="brand"
          opacity="0.8"
        >
          <DrawerCloseButton mt="2" color="white" size="md" />
          <DrawerBody>
            <VStack mt="20" spacing="10">
              <Button
                as={Link}
                to="/top"
                variant="link"
                color="white"
                fontSize="lg"
                _active={{ opacity: 0.6 }}
                onClick={onClose}
              >
                トップ
              </Button>
              <Button
                as={Link}
                to="/activity"
                variant="link"
                color="white"
                fontSize="lg"
                _active={{ opacity: 0.6 }}
                onClick={onClose}
              >
                活動について
              </Button>
              <Button
                as={Link}
                to="/sponsor"
                variant="link"
                color="white"
                fontSize="lg"
                _active={{ opacity: 0.6 }}
                onClick={onClose}
              >
                協賛について
              </Button>
              <Button
                as={Link}
                to="/memory"
                variant="link"
                color="white"
                fontSize="lg"
                _active={{ opacity: 0.6 }}
                onClick={onClose}
              >
                おもいで
              </Button>
              <Button
                as={Link}
                to="/contact"
                variant="link"
                color="white"
                fontSize="lg"
                _active={{ opacity: 0.6 }}
                onClick={onClose}
              >
                お問い合わせ
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* メインビジュアル */}
      <VStack
        px={{ base: "10", md: "16", lg: "24" }}
        py={{ base: "12", md: "14", lg: "16" }}
        spacing="4"
        rounded="xl"
        bg="brand"
        opacity="0.8"
        alignItems="center"
        justifyContent="center"
      >
        <Heading as="h1" fontSize={{ base: "3xl", lg: "5xl" }} color="white">
          二十歳のつどい
        </Heading>
        <VStack spacing="2">
          <Text
            fontSize={{ base: "md", lg: "xl" }}
            fontWeight="bold"
            color="white"
          >
            2025年1月12日（日）13時30分
          </Text>

          <HStack alignItems="center" spacing="1">
            <Icon
              as={IoMdPin}
              boxSize={{ base: "18px", lg: "24px" }}
              color="white"
            />
            <Text
              fontSize={{ base: "md", lg: "xl" }}
              fontWeight="bold"
              color="white"
            >
              保健福祉センター 1階ホール
            </Text>
          </HStack>
        </VStack>
      </VStack>
      <Box ref={ref} pos="absolute" bottom="20" />
    </Center>
  );
});

export default MainVisual;
