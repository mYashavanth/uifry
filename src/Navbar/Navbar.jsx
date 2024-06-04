import styles from "./Navbar.module.css";
import { ThemeContext } from "../ThemeContext/ThemeContextProvider.jsx";
import { useContext, useRef } from "react";
import { Link } from "react-scroll";
import {
  Box,
  Button,
  Center,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import logo from "../Images/NavbarImages/logo.png";
import DarkModeToggle from "react-dark-mode-toggle";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const btnRef = useRef();
  return (
    <Flex
      className={styles.navbar}
      justifyContent="space-between"
      alignItems="center"
      bg={isDarkMode ? "gray.500" : "white"}
      color={isDarkMode ? "gray.900" : "black"}
      zIndex={999}
      position="sticky"
      top="0"
      w={"100%"}
      px={"10%"}
      py={{ base: "0rem", sm: "0rem", md: "1rem", lg: "1rem" }}
      m={"auto"}
      // border={"1px solid black"}
      boxShadow={
        "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px"
      }
      gap={"2rem"}
    >
      <Center gap={"4rem"}>
        <Center w={{ base: "4rem", sm: "5rem", md: "8rem", lg: "10rem" }}>
          <Link to="home" spy={true} smooth={true} offset={-82} duration={500}>
            <Image src={logo} alt="logo" />
          </Link>
        </Center>
        <Center
          gap={"2rem"}
          fontSize={"1.2rem"}
          display={["none", "none", "none", "flex"]}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-82.5}
            duration={500}
            style={{ cursor: "pointer" }}
            activeStyle={{
              color: isDarkMode ? "wheat" : "#E84D4D",
              textDecoration: "underline",
              position: "relative",
              bottom: "5px",
            }}
          >
            Home
          </Link>
          <Link
            to="features"
            spy={true}
            smooth={true}
            offset={-81.5}
            duration={600}
            style={{ cursor: "pointer" }}
            activeStyle={{
              color: isDarkMode ? "wheat" : "#E84D4D",
              textDecoration: "underline",
              position: "relative",
              bottom: "5px",
            }}
          >
            Features
          </Link>
          <Link
            to="advantages"
            spy={true}
            smooth={true}
            offset={-81.5}
            duration={500}
            style={{ cursor: "pointer" }}
            activeStyle={{
              color: isDarkMode ? "wheat" : "#E84D4D",
              textDecoration: "underline",
              position: "relative",
              bottom: "5px",
            }}
          >
            Advantages
          </Link>
          <Link
            to="aboutus"
            spy={true}
            smooth={true}
            offset={-81.5}
            duration={600}
            style={{ cursor: "pointer" }}
            activeStyle={{
              color: isDarkMode ? "wheat" : "#E84D4D",
              textDecoration: "underline",
              position: "relative",
              bottom: "5px",
            }}
          >
            AboutUs
          </Link>
          <Link
            to="faq"
            spy={true}
            smooth={true}
            offset={-81.5}
            duration={500}
            style={{ cursor: "pointer" }}
            activeStyle={{
              color: isDarkMode ? "wheat" : "#E84D4D",
              textDecoration: "underline",
              position: "relative",
              bottom: "5px",
            }}
          >
            FAQ
          </Link>
        </Center>
      </Center>
      <Center
        gap={{ base: "0.5rem", md: "1rem", lg: "1rem", xl: "2rem" }}
        fontSize={"1.2rem"}
      >
        <Button
          bgColor={isDarkMode ? "gray.100" : "black"}
          color={isDarkMode ? "black" : "white"}
          _hover={{ bgColor: "gray.600", color: "white" }}
          fontSize={{ base: "0.8rem", md: "1rem", lg: "1rem", xl: "1.2rem" }}
          h={{ base: "2rem", md: "2.5rem", lg: "2.5rem", xl: "3rem" }}
          w={{ base: "4.5rem", md: "7rem", lg: "8rem", xl: "10rem" }}
        >
          Download
        </Button>

        <Center>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              // variant="outline"
              ref={btnRef}
              backgroundColor={isDarkMode ? "gray.900" : "#E84D4D"}
              color={"white"}
              display={["flex", "flex", "flex", "none"]}
              m={4}
              _hover={{
                backgroundColor: isDarkMode ? "black" : "red.400",
              }}
              h={{ base: "2rem", md: "2.5rem", lg: "2.5rem", xl: "3rem" }}
            />
            <MenuList
              backgroundColor={isDarkMode ? "gray.500" : "red.400"}
              display={["flex", "flex", "none", "none"]}
              color={"white"}
              flexDirection={"column"}
              p={4}
              gap={3}
            >
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-82}
                duration={500}
              >
                <MenuItem backgroundColor={"transparent"}>
                  <Box display={"flex"} alignItems={"center"} gap={2}>
                    Home
                  </Box>
                </MenuItem>
              </Link>
              <Link
                to="features"
                spy={true}
                smooth={true}
                offset={-82}
                duration={500}
              >
                <MenuItem backgroundColor={"transparent"}>
                  <Box display={"flex"} alignItems={"center"} gap={2}>
                    Features
                  </Box>
                </MenuItem>
              </Link>
              <Link
                to="advantages"
                spy={true}
                smooth={true}
                offset={-82}
                duration={500}
              >
                <MenuItem backgroundColor={"transparent"}>
                  <Box display={"flex"} alignItems={"center"} gap={2}>
                    Advantages
                  </Box>
                </MenuItem>
              </Link>
              <Link
                to="aboutus"
                spy={true}
                smooth={true}
                offset={-82}
                duration={500}
              >
                <MenuItem backgroundColor={"transparent"}>
                  <Box display={"flex"} alignItems={"center"} gap={2}>
                    AboutUs
                  </Box>
                </MenuItem>
              </Link>
              <Link
                to="faq"
                spy={true}
                smooth={true}
                offset={-82}
                duration={500}
              >
                <MenuItem backgroundColor={"transparent"}>
                  <Box display={"flex"} alignItems={"center"} gap={2}>
                    FAQ
                  </Box>
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Center>
        <DarkModeToggle
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={50}
        />
      </Center>
    </Flex>
  );
}
