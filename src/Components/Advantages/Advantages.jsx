import React, { useContext } from "react";
import { Element } from "react-scroll";
import { Box, Center, Heading, Image, Text } from "@chakra-ui/react";
import styles from "./Advantages.module.css";
import { ThemeContext } from "../../ThemeContext/ThemeContextProvider";
import img1 from "../../Images/AdvantagesImages/img1.png";
import img2 from "../../Images/AdvantagesImages/img2.png";
import img3 from "../../Images/AdvantagesImages/img3.png";
import img4 from "../../Images/AdvantagesImages/img4.png";
import topRed from "../../Images/topRed.png";
import topYellow from "../../Images/topYellow.png";
import star from "../../Images/Star.png";
export default function Advantages() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <Element name="advantages">
      <Box
        // border={"1px solid black"}
        px={{ base: "1%", md: "3%", lg: "5%", xl: "8%" }}
        position={"relative"}
        bgColor={isDarkMode ? "gray.400" : "white"}
      >
        <Box className={styles.container1}>
          <Image src={star} alt="star" position={"absolute"} top={"5%"} />
          <Image
            src={star}
            alt="star"
            position={"absolute"}
            top={"50%"}
            right={"45%"}
            w={"50px"}
          />
          <Image
            src={star}
            alt="star"
            position={"absolute"}
            bottom={"2%"}
            right={"2%"}
            w={"50px"}
          />
          <Box
            className={styles.left1}
            m={"auto"}
            // border={"1px solid black"}
            p={"2rem"}
          >
            <Heading
              size={"md"}
              zIndex={2}
              color={isDarkMode ? "wheat" : "#E84D4D"}
            >
              ADVANTAGES
            </Heading>
            <Heading size={"xl"} zIndex={2}>
              Why Choose Uifry?
            </Heading>
            <Box zIndex={2} position={"relative"}>
              <Center
                display={"flex"}
                gap={"1rem"}
                mt={"1rem"}
                justifyContent={"flex-start"}
              >
                <Image src={img3} alt="img2" />
                <Text fontWeight={"bold"}>Clever Notifications</Text>
              </Center>
              <Text color={isDarkMode ? "gray.700" : "gray.500"}>
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.
              </Text>
            </Box>
          </Box>
          <Box
            className={styles.right1}
            position={"relative"}
            h={{ base: "360px", md: "550px", lg: "600px", xl: "600px" }}
            w={{ base: "360px", md: "550px", lg: "600px", xl: "600px" }}
            // border={"1px solid black"}
            m={"auto"}
          >
            <Image
              src={topRed}
              alt="topRed"
              position={"absolute"}
              zIndex={1}
              left={"-2%"}
              bottom={"-5%"}
            />
            <Image src={img1} alt="img1" position={"absolute"} zIndex={2} />
          </Box>
        </Box>
        <Box className={styles.container2}>
          <Box
            className={styles.left2}
            position={"relative"}
            h={{ base: "360px", md: "550px", lg: "600px", xl: "600px" }}
            w={{ base: "360px", md: "550px", lg: "600px", xl: "600px" }}
            // border={"1px solid black"}
            m={"auto"}
          >
            <Image
              src={topYellow}
              alt="topYellow"
              position={"absolute"}
              zIndex={1}
              right={"10%"}
              bottom={"-5%"}
            />
            <Image src={img2} alt="img2" position={"absolute"} zIndex={2} />
          </Box>
          <Box
            className={styles.right2}
            m={"auto"}
            // border={"1px solid black"}
            p={"2rem"}
          >
            <Box zIndex={2} position={"relative"}>
              <Center
                display={"flex"}
                gap={"1rem"}
                mt={"1rem"}
                justifyContent={"flex-start"}
              >
                <Image src={img4} alt="img4" />
                <Text fontWeight={"bold"}>Fully Customizable</Text>
              </Center>
              <Text color={isDarkMode ? "gray.700" : "gray.500"}>
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Element>
  );
}
