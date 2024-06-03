import React, { useContext } from "react";
import { Element } from "react-scroll";
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import styles from "./Home.module.css";
import img1 from "../../Images/HomeImages/img1.png";
import topRed from "../../Images/topRed.png";
import star from "../../Images/Star.png";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { GoPlay } from "react-icons/go";
import topYellow from "../../Images/topYellow.png";
import img2 from "../../Images/HomeImages/img2.png";
import img4 from "../../Images/HomeImages/img4.png";
import img5 from "../../Images/HomeImages/img5.png";
import { ThemeContext } from "../../ThemeContext/ThemeContextProvider.jsx";

export default function Home() {
  const { isDarkMode } = useContext(ThemeContext);
  console.log(isDarkMode);
  return (
    <Element name="home">
      <Box
        className={styles.container}
        px={{ base: "1%", md: "3%", lg: "5%", xl: "8%" }}
        position={"relative"}
        bgColor={isDarkMode ? "gray.400" : "white"}
      >
        <Image
          src={star}
          alt="star"
          position={"absolute"}
          top={"15%"}
          left={"5%"}
        />
        <Image
          src={star}
          alt="star"
          position={"absolute"}
          top={"5%"}
          right={"5%"}
        />
        <Image
          src={star}
          alt="star"
          position={"absolute"}
          bottom={{ base: "20%", md: "30%", lg: "40%", xl: "42%" }}
          left={"18%"}
          width={"40px"}
        />
        <Image
          src={star}
          alt="star"
          position={"absolute"}
          bottom={{ base: "10%", md: "10%", lg: "13%", xl: "15%" }}
          right={"38%"}
          width={"40px"}
        />

        <Box
          className={styles.left}
          position={"relative"}
          display={"flex"}
          flexDirection={"column"}
          gap={"2rem"}
          p={"2rem"}
        >
          <Image
            src={topRed}
            alt="tr"
            position={"absolute"}
            top={"-2%"}
            left={"20%"}
            zIndex={1}
            w={"55%"}
          />
          <Heading size="2xl" mt={"2rem"} zIndex={2}>
            Make The Best Financial Decisions
          </Heading>
          <Text color={isDarkMode ? "gray.700" : "gray.500"} zIndex={2}>
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </Text>
          <Box>
            <Button
              bgColor={"black"}
              color={"white"}
              borderRadius={"none"}
              zIndex={2}
            >
              Get Started{" "}
              <HiOutlineArrowLongRight
                size={20}
                style={{ marginLeft: "5px" }}
              />{" "}
            </Button>
            <Button variant={"outline"} borderRadius={"none"} zIndex={2}>
              <GoPlay size={20} style={{ marginRight: "5px" }} />
              Watch Video
            </Button>
          </Box>
          <Image src={img1} alt="logo" w={"80%"} />
        </Box>
        <Box
          className={styles.right}
          position={"relative"}
          h={{ base: "360px", md: "650px", lg: "700px", xl: "720px" }}
          w={{ base: "360px", md: "650px", lg: "700px", xl: "720px" }}
          m={"auto"}
          mt={{ base: "-1rem", md: "-1rem", lg: "-2rem", xl: "-3rem" }}
        >
          <Image
            src={topYellow}
            alt="color"
            position={"absolute"}
            zIndex={1}
            w={{ base: "300px", md: "550px", lg: "600px", xl: "600px" }}
            bottom={"-5%"}
            left={"-5%"}
            // border={"1px solid black"}
          />
          <Image
            src={img2}
            alt="circles"
            position={"absolute"}
            zIndex={1}
            w={{ base: "320px", md: "600px", lg: "650px", xl: "650px" }}
            // border={"1px solid black"}
            right={"8%"}
          />
          <Image
            src={img5}
            alt="mobile1"
            position={"absolute"}
            zIndex={2}
            w={{ base: "285px", md: "530px", lg: "580px", xl: "580px" }}
            // border={"1px solid black"}
            right={"-5%"}
            top={"18%"}
          />
          <Image
            src={img4}
            alt="mobile2"
            position={"absolute"}
            zIndex={3}
            w={{ base: "285px", md: "530px", lg: "580px", xl: "580px" }}
            // border={"1px solid black"}
            right={"10%"}
            top={"8%"}
          />
          <Image
            src={img5}
            alt="mobile3"
            position={"absolute"}
            zIndex={4}
            w={{ base: "285px", md: "530px", lg: "580px", xl: "580px" }}
            // border={"1px solid black"}
            left={"-5%"}
            top={"-1%"}
          />
        </Box>
      </Box>
    </Element>
  );
}
