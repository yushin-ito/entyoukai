import { HStack, IconButton, useToast } from "@chakra-ui/react";
import { memo, useCallback } from "react";
import { FaLine } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiLink } from "react-icons/fi";

import Toast from "../atoms/Toast";

const ShareButtonGroup = memo(() => {
  const url = window.location.href;
  const toast = useToast();

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast({
        duration: 6000,
        containerStyle: { minW: "auto" },
        render: ({ onClose }) => (
          <Toast
            status="success"
            title="リンクをコピーしました。"
            onClose={onClose}
          />
        )
      });
    } catch {
      toast({
        duration: 6000,
        containerStyle: { minW: "auto" },
        render: ({ onClose }) => (
          <Toast
            status="error"
            title="コピーに失敗しました。"
            onClose={onClose}
          />
        )
      });
    }
  }, [url, toast]);

  return (
    <HStack
      w="100%"
      alignItems="center"
      justifyContent="center"
      spacing={{ base: "4", md: "6" }}
    >
      {/* LINE */}
      <IconButton
        aria-label="Share on LINE"
        icon={<FaLine size="18px" />}
        color="brand"
        borderWidth="1px"
        borderColor="brand"
        rounded="full"
        bg="white"
        _hover={{ opacity: { base: 1, md: 0.8 } }}
        _active={{
          transform: "scale(0.98)",
          opacity: 0.8
        }}
        onClick={() => {
          window.open(
            `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`
          );
        }}
      />

      {/* Twitter */}
      <IconButton
        aria-label="Share on X(Twitter)"
        icon={<FaXTwitter size="18px" />}
        color="brand"
        borderWidth="1px"
        borderColor="brand"
        rounded="full"
        bg="white"
        _hover={{ opacity: { base: 1, md: 0.8 } }}
        _active={{
          transform: "scale(0.98)",
          opacity: 0.8
        }}
        onClick={() => {
          window.open(
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`
          );
        }}
      />

      {/* リンク */}
      <IconButton
        aria-label="Copy link"
        icon={<FiLink size="18px" />}
        color="brand"
        borderWidth="1px"
        borderColor="brand"
        rounded="full"
        bg="white"
        _hover={{ opacity: { base: 1, md: 0.8 } }}
        _active={{
          transform: "scale(0.98)",
          opacity: 0.8
        }}
        onClick={copyToClipboard}
      />
    </HStack>
  );
});

export default ShareButtonGroup;
