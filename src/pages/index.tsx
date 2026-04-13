import {Box, Container, Flex, HStack, Image, Link, Text, VStack} from "@chakra-ui/react";
import TopBox from "src/components/topBox";
import {H1} from "src/components/primitives";
import ProjectBox from "src/components/projectBox";
import {LayoutPage} from "../typing";

const Home: LayoutPage = () => {
    return (
        <Box mb={{base: 12, md: 16}}>
            <TopBox>
                <Container maxW="1200px">
                    <Flex
                        alignItems="center"
                        justifyContent="space-between"
                        gap="4"
                        mb={{base: 10, md: 14}}
                        flexWrap="wrap"
                    >
                        <HStack spacing="4">
                            <Image src="./logo.svg" alt="Afterwork Design logo" boxSize="42px" />
                        </HStack>
                        <HStack spacing={{base: 2, md: 3}}>
                            <Link href="/member">
                                <Text
                                    px="3"
                                    py="2"
                                    borderRadius="6px"
                                    color="ink.700"
                                    transition="background-color 0.2s ease, color 0.2s ease"
                                    _hover={{bg: "whiteAlpha.700", color: "ink.900"}}
                                >
                                    成员
                                </Text>
                            </Link>
                            <Link href="https://github.com/afterwork-design" target="_blank">
                                <Text
                                    px="4"
                                    py="2"
                                    borderRadius="6px"
                                    border="1px solid rgba(38, 31, 22, 0.16)"
                                    color="ink.800"
                                    transition="background-color 0.2s ease, border-color 0.2s ease"
                                    _hover={{bg: "white", borderColor: "rgba(38, 31, 22, 0.28)"}}
                                >
                                    GitHub
                                </Text>
                            </Link>
                        </HStack>
                    </Flex>
                    <VStack
                        alignItems="flex-start"
                        spacing={{base: 5, md: 6}}
                        maxW="760px"
                        justifyContent="center"
                        minH={{base: "auto", lg: "320px"}}
                    >
                        <H1 maxW="680px">
                            Afterwork Design
                        </H1>
                        <Text
                            maxW="600px"
                            fontSize={{base: "16px", md: "18px"}}
                            lineHeight={{base: "1.9", md: "2"}}
                            color="ink.600"
                        >
                            Afterwork Design 是由两个年轻人组成的组织，因为我们对这个世界充满好奇，
                            也乐于尝试不同的东西，所以我们希望在这里，为我们自己，也为大家，开发一些有趣又有用的东西。
                        </Text>
                    </VStack>
                </Container>
            </TopBox>
            <Box id="projects">
                <ProjectBox />
            </Box>
        </Box>
    );
};

export default Home;
