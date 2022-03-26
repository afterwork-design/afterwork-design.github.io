import React from "react";
import {projects} from "src/server";
import {Box, Flex, Image, Link, Text} from "@chakra-ui/react";
import {H2} from "./primitives";

const ProjectBox = () => {
    return (
        <Box
            p="0 10px"
        >
            {
                projects.map((project) => (
                    <Flex
                        key={project.title}
                        flexDir="row"
                        alignItems="center"
                        justifyContent="center"
                        m="40px 0"
                        gap="40px"
                        flexWrap="wrap"
                    >
                        <Image src={project.image} />
                        <Box>
                            <H2 fontSize="30px">{project.title}</H2>
                            <Text m="40px 0" fontSize="14px">{project.description}</Text>
                            <Link
                                cursor="pointer"
                                href={project.url}
                                bg="linear-gradient(to left, #30CFD0 0%, #31afbf 100%)"
                                borderRadius="8px"
                                color="white"
                                p="8px 18px"
                                fontSize="16px"
                                _hover={{
                                    bg: "linear-gradient(90deg, #ffa99f 0%, #ff929d 48%, rgba(255, 113, 154, 1) 100%)"
                                }}
                            >
                                点击体验
                            </Link>
                        </Box>
                    </Flex>
                ))
            }
        </Box>
    )
};

export default ProjectBox;
