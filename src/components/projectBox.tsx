import React from "react";
import {projects} from "src/server";
import {Box, Flex, Image, Link, Text} from "@chakra-ui/react";
import {H2} from "./primitives";

const ProjectBox = () => {
    return (
        <Box>
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
                                bgColor="#009dff"
                                borderRadius="8px"
                                color="white"
                                p="8px 15px"
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
