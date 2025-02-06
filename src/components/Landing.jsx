import React, { useEffect } from "react";
import Navbar from "./Navbar";
import {
  Box,
  Image,
  Img,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Text,
  FormLabel,
} from "@chakra-ui/react";
import flood from "../assets/flood.jpg";
import help from "../assets/help.jpg";
import hope from "../assets/hope.jpg";
import food from "../assets/food.jpg";
import "../components/style.css";

function Landing() {
  useEffect(() => {
    const scrollElements = document.querySelectorAll(".js-scroll");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    });

    scrollElements.forEach((el) => observer.observe(el));

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el)); // Clean up observer on unmount
    };
  }, []);

  return (
    <>
      <Navbar />
      <Box>
        <Box
          className="js-scroll"
          display="flex"
          justifyContent="center"
          alignItems="center"
          h="100vh"
        >
          <Img src={flood} alt="flood" borderRadius={"2xl"} />
          <Box ml={6} w={"500px"}>
            <Box
              fontSize="4xl"
              fontWeight={800}
              display={"flex"}
              justifyContent={"center"}
            >
              " If not us, then who?
              <br /> If not now, when? "

            </Box>
            <Box>
              <Box
                fontSize="xl"
                fontWeight={500}
                display={"flex"}
                justifyContent={"center"}
              >
                Our goal is to bridge the gap between disaster survivors and aid
                providers through a unified platform that ensures efficient
                rescue operations, prioritized medical care, and transparent
                distribution of relief resources.
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          className="js-scroll"
          display="flex"
          justifyContent="center"
          alignItems="center"
          h="90vh"
        >
          <Img src={help} alt="help" borderRadius={"2xl"} />
          <Box ml={6} w={"500px"}>
            <Box
              fontSize="4xl"
              fontWeight={800}
              display={"flex"}
              justifyContent={"center"}
            >
              Faster and More Efficient Rescue Operations
            </Box>
            <Box>
              <Box
                fontSize="xl"
                fontWeight={500}
                display={"flex"}
                justifyContent={"center"}
              >
                Victims can report their condition and location through the
                platform, allowing rescue teams to prioritize and respond
                efficiently.
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          className="js-scroll"
          display="flex"
          justifyContent="center"
          alignItems="center"
          h="90vh"
        >
          <Img src={hope} alt="hope" borderRadius={"2xl"} />
          <Box ml={6} w={"500px"}>
            <Box
              fontSize="4xl"
              fontWeight={800}
              display={"flex"}
              justifyContent={"center"}
            >
              Direct Support for Families and Loved Ones
            </Box>
            <Box>
              <Box
                fontSize="xl"
                fontWeight={500}
                display={"flex"}
                justifyContent={"center"}
              >
                If victims have relatives or friends outside the disaster zone,
                they can receive personal donations through the Personal
                Inventory, ensuring they get help directly from their loved
                ones.
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          className="js-scroll"
          display="flex"
          justifyContent="center"
          alignItems="center"
          h="90vh"
        >
          <Img src={food} alt="food" borderRadius={"2xl"} w={"750px"} />
          <Box ml={6} w={"500px"}>
            <Box
              fontSize="4xl"
              fontWeight={800}
              display={"flex"}
              justifyContent={"center"}
            >
              Access to Essential Relief Items
            </Box>
            <Box>
              <Box
                fontSize="xl"
                fontWeight={500}
                display={"flex"}
                justifyContent={"center"}
              >
                Victims can receive food, water, clothes, and other necessities
                from the Relief Inventory, which is stocked based on real-time
                needs and donations.
              </Box>
            </Box>
          </Box>
        </Box>
        <Tabs>
          <TabList gap={50} bg={"gray.800"} color={"white"}>
            <Tab flex={"1"} _selected={{ color: "white", bg: "blue.600" }}>
              About
            </Tab>
            <Tab flex={"1"} _selected={{ color: "white", bg: "blue.600" }}>
              Contact US
            </Tab>
            <Tab flex={"1"} _selected={{ color: "white", bg: "blue.600" }}>
              FAQ
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel bg={"gray.800"} color={"white"}>
              <Box
                fontSize="xl"
                fontWeight={600}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                textAlign={"center"}
                h={"40vh"}
              >
                <Text w={"900px"}>
                  We are a team committed to revolutionizing disaster management
                  by providing a structured and efficient system for rescue and
                  relief operations. In times of crisis, access to timely and
                  accurate information can make all the difference. Our platform
                  serves as a critical link between rescue teams, relief
                  providers, and donors, ensuring that aid reaches those
                  who need it most
                </Text>
              </Box>
            </TabPanel>
            <TabPanel
              bg={"gray.800"}
              color={"white"}
              fontSize="xl"
              fontWeight={600}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              textAlign={"center"}
              h={"40vh"}
            >
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
                gap={4}
              >
                <Text>For any queries, contact us at:</Text>
                <Text>Email: discode@gmail.com</Text>
                <Text>PH: 9754567890</Text>
              </Box>
            </TabPanel>
            <TabPanel
              bg={"gray.800"}
              color={"white"}
              fontSize="lg"
              fontWeight={500}
              display={"flex"}
              justifyContent={"center"}
              h={"45vh"}
            >
              Q1)How do i donate?
              <br />
              A) Users can donate either through net banking, or give physical
              items such as beds, clothes etc. Money can be sent by through the
              "Donation" page, by accessing the "Trust Fund" and following the
              rest of the steps in there. Physical items are to be registered in
              the "Relief Inventory" page under "Donations", and is to be
              verified before coming to pick up your items. If the total items
              registered is below a certain amount, you are to deliver the items
              to the nearest collection site.
              <br />
              <br />
              Q2)How am i sure my donations are going to the right place?
              <br />
              A) Users have full transparency on all transactions done using the
              trust fund, where no personal information is divulged, just the
              amount that has been added or used to buy necessary items for all
              relief camps. Any amount donated before it is required, or excess
              amounts, is stored for future disaster relief. All items are
              updated on where they have been sent to, after the items reach
              said relief site. In case the user suspects foul play, please
              contact us through the support line(tax free).
              <br />
              <br />
              Q3)Can i cancel a donation?
              <br />
              A) All transaction based donations, unless a significant amount
              was accidently transferred, are not refundable. Physical items are
              verified after 2 days of registration, upon which the items can be
              taken down from the donation list. After submitting the item to
              us, it cannot be returned.
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}

export default Landing;
