import React from "react";
import {Box, Button, Container, Flex, Image, Link, SimpleGrid, Text, VStack} from "@chakra-ui/react";
import {projects} from "src/server";
import {H3} from "./primitives";

const ProjectBox = () => {
    return (
        <Container maxW="1200px" pb={{base: 16, md: 24}}>
            <VStack alignItems="stretch" spacing={{base: 8, md: 10}}>
                <SimpleGrid columns={{base: 1, lg: 2}} spacing={{base: 6, md: 8}}>
                    {projects.map((project) => (
                        <Flex
                            key={project.title}
                            direction="column"
                            bg="rgba(255, 255, 255, 0.76)"
                            border="1px solid"
                            borderColor="rgba(38, 31, 22, 0.08)"
                            borderRadius="panel"
                            overflow="hidden"
                            minH="100%"
                            transition="border-color 0.2s ease, background-color 0.2s ease"
                            _hover={{
                                bg: "rgba(255, 255, 255, 0.92)",
                                borderColor: "rgba(38, 31, 22, 0.18)"
                            }}
                        >
                            <Box
                                px={{base: 5, md: 6}}
                                pt={{base: 5, md: 6}}
                                pb="4"
                            >
                                <Box
                                    bg="#f3eee6"
                                    borderRadius="8px"
                                    overflow="hidden"
                                    minH={{base: "220px", md: "280px"}}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    border="1px solid rgba(38, 31, 22, 0.06)"
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        objectFit="contain"
                                        maxH={{base: "220px", md: "280px"}}
                                        w="100%"
                                    />
                                </Box>
                            </Box>
                            <VStack
                                alignItems="stretch"
                                spacing="5"
                                px={{base: 5, md: 6}}
                                pb={{base: 5, md: 6}}
                                pt="1"
                                flex="1"
                            >
                                <Box>
                                    <H3>{project.title}</H3>
                                    <Text mt="4" color="ink.600" fontSize="15px" lineHeight="1.9">
                                        {project.description}
                                    </Text>
                                </Box>
                                <Box pt="2">
                                    <Link href={project.url} target="_blank" _hover={{textDecoration: "none"}}>
                                        <Button size="md" variant="solid">
                                            立即体验
                                        </Button>
                                    </Link>
                                </Box>
                            </VStack>
                        </Flex>
                    ))}
                </SimpleGrid>
            </VStack>
        </Container>
    );
};

export default ProjectBox;

