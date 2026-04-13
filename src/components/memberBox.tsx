import React from "react";
import {Avatar, Box, Container, Flex, Link, SimpleGrid, Text, VStack} from "@chakra-ui/react";
import {FiGlobe} from "react-icons/fi";
import {members} from "src/server";

const MemberBox = () => {
    return (
        <Container maxW="1100px" pb={{base: 16, md: 24}}>
            <SimpleGrid columns={{base: 1, md: 2}} spacing={{base: 6, md: 8}}>
                {members.map((member) => {
                    const siteLabel = member.site.replace(/^https?:\/\//, "").replace(/\/$/, "");

                    return (
                        <Flex
                            key={member.name}
                            direction="column"
                            justifyContent="space-between"
                            minH="100%"
                            borderTop="1px solid rgba(38, 31, 22, 0.14)"
                            borderBottom="1px solid rgba(38, 31, 22, 0.14)"
                            bg="rgba(255, 255, 255, 0.28)"
                        >
                            <VStack
                                alignItems="stretch"
                                spacing="0"
                                px={{base: 0, md: 0}}
                                py={{base: 0, md: 0}}
                            >
                                <Box px={{base: 6, md: 8}} py={{base: 5, md: 6}}>
                                    <Text
                                        fontFamily="heading"
                                        fontSize={{base: "30px", md: "38px"}}
                                        lineHeight={{base: "1.08", md: "1.04"}}
                                        color="ink.900"
                                    >
                                        {member.name}
                                    </Text>
                                </Box>
                                <Flex
                                    alignItems="center"
                                    justifyContent="space-between"
                                    gap="6"
                                    px={{base: 6, md: 8}}
                                    py={{base: 5, md: 6}}
                                    borderTop="1px solid rgba(38, 31, 22, 0.12)"
                                >
                                    <Avatar
                                        size="xl"
                                        src={member.avatar}
                                        name={member.name}
                                        bg="transparent"
                                    />
                                    <Text
                                        fontSize="12px"
                                        letterSpacing="0.18em"
                                        textTransform="uppercase"
                                        color="ink.500"
                                    >
                                        {member.tag}
                                    </Text>
                                </Flex>
                                <Link
                                    href={member.site}
                                    target="_blank"
                                    _hover={{textDecoration: "none", color: "inherit"}}
                                >
                                    <Flex
                                        alignItems="center"
                                        gap={{base: 3, md: 4}}
                                        minH="84px"
                                        borderTop="1px solid rgba(38, 31, 22, 0.12)"
                                    >
                                        <Flex
                                            alignItems="center"
                                            justifyContent="center"
                                            w={{base: "72px", md: "84px"}}
                                            minH="84px"
                                            borderRight="1px solid rgba(38, 31, 22, 0.12)"
                                            color="ink.700"
                                            fontSize="18px"
                                        >
                                            <FiGlobe />
                                        </Flex>
                                        <Box flex="1" h="1px" bg="rgba(38, 31, 22, 0.12)" />
                                        <Text
                                            pr={{base: 6, md: 8}}
                                            fontSize={{base: "16px", md: "17px"}}
                                            color="ink.800"
                                            whiteSpace="nowrap"
                                        >
                                            {siteLabel}
                                        </Text>
                                    </Flex>
                                </Link>
                            </VStack>
                        </Flex>
                    );
                })}
            </SimpleGrid>
        </Container>
    );
};

export default MemberBox;
