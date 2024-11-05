import { VStack } from "@chakra-ui/react";
import { useQueryEvents } from "../hooks/events";
import MainVisual from "../components/layouts/MainVisual";
import SectionTitle from "../components/elements/SectionTitle";
import Footer from "../components/layouts/Footer";
import Timeline from "../components/layouts/Timeline";
import ScrollToTopButton from "../components/elements/ScrollTopButton";

const Memory = () => {
  const { data: events } = useQueryEvents();

  return (
    <VStack
      flex="1"
      alignItems="center"
      spacing={{ base: "10", sm: "24" }}
      overflowX="hidden"
      pos="relative"
    >
      <ScrollToTopButton />
      <MainVisual />
      <VStack w={{ base: "75%", sm: "60%" }} spacing={{ base: "10", sm: "16" }}>
        <SectionTitle title="おもいで" />
        {events && <Timeline events={events} />}
      </VStack>
      <Footer />
    </VStack>
  );
};

export default Memory;
