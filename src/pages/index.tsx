import {LayoutPage} from "../typing";
import {Box, Image, Text, HStack, Link} from "@chakra-ui/react";
import TopBox from "src/components/topBox";
import {H1} from "src/components/primitives";
import ProjectBox from "src/components/projectBox";

const Home: LayoutPage = () => {
    return (
        <Box>
            <TopBox>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDir="column"
                    maxW="700px"
                    margin="0 auto"
                    minH="500px"
                >
                    <Image src="./logo.png"></Image>
                    <H1
                        mt="15px"
                        bg="linear-gradient(to left, #30CFD0 0%, #330867 100%)"
                        bgClip="text"
                        fill="transparent"
                    >
                        Afterwork Design
                    </H1>
                    <Text mt="40px">
                        「Afterwork Design」是由两个常年在互联网上冲浪的年轻人组成的组织，因为我们对这个世界充满好奇，也乐于尝试不同的东西，所以我们希望在这里，
                        为我们自己，也为大家，开发一些有趣又有用的东西。
                    </Text>
                </Box>
                <HStack
                    position="absolute"
                    top="15px"
                    right="15px"
                >
                    <Link href="https://github.com/afterwork-design" target="_blank">
                        <Image
                            src="./github.png"
                        />
                    </Link>
                    <Link href="./member">
                        <Image
                            src="./member.png"
                        />
                    </Link>
                </HStack>
            </TopBox >
            <ProjectBox />
        </Box >
    );
};

export default Home;
