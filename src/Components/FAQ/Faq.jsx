import React, { useContext } from "react";
import { Element } from "react-scroll";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { ThemeContext } from "../../ThemeContext/ThemeContextProvider";
import styles from "./Faq.module.css";
import img1 from "../../Images/FaqImages/img1.png";
import star from "../../Images/Star.png";
export default function Faq() {
  const { isDarkMode } = useContext(ThemeContext);
  const data = [
    {
      id: 1,
      question: "the best financial accounting app ever!",
      answer:
        "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
    {
      id: 2,
      question: "the best financial accounting app ever!",
      answer:
        "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
    {
      id: 3,
      question: "the best financial accounting app ever!",
      answer:
        "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
    {
      id: 4,
      question: "the best financial accounting app ever!",
      answer:
        "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
    {
      id: 5,
      question: "the best financial accounting app ever!",
      answer:
        "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
    {
      id: 6,
      question: "the best financial accounting app ever!",
      answer:
        "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
  ];
  return (
    <Element name="faq">
      <Box
        // border={"1px solid black"}
        px={{ base: "1%", md: "3%", lg: "5%", xl: "8%" }}
        position={"relative"}
        bgColor={isDarkMode ? "gray.400" : "white"}
        overflowX={"hidden"}
      >
        <Image
          src={star}
          alt="star"
          position={"absolute"}
          top={"5%"}
          right={"5%"}
          w={"40px"}
        />
        <Image
          src={star}
          alt="star"
          position={"absolute"}
          bottom={"45%"}
          left={"5%"}
          w={"40px"}
          display={{ base: "none", md: "block" }}
        />
        <Image
          src={star}
          alt="star"
          position={"absolute"}
          bottom={"5%"}
          right={"5%"}
          w={"50px"}
        />

        <Box my={"2rem"}>
          <Heading color={isDarkMode ? "wheat" : "#E84D4D"} size={"md"}>
            FAQ
          </Heading>
          <Heading size={"2xl"}>Frequently Asked Questions</Heading>
        </Box>
        <Box className={styles.container} my={"2rem"}>
          {data.map((item) => (
            <Box
              key={item.id}
              borderRadius={"10px"}
              p={"1rem"}
              className={isDarkMode ? styles.dark : styles.light}
            >
              <Heading size={"md"}>{item.question}</Heading>
              <Text>{item.answer}</Text>
            </Box>
          ))}
        </Box>
        <Image src={img1} alt="img1" w={"100%"} />
      </Box>
    </Element>
  );
}
