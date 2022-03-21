import React from "react";
import {Box, Flex, Image, Text, Link, VStack} from "@chakra-ui/react";
import {members} from "src/server";

const MemberBox = () => {
    return (
        <Flex
            justifyContent="center"
            gap="80px"
            mt="60px"
        >
            {
                members.map((member) => (
                    <VStack alignItems="center" key={member.name}>
                        <Image height="100px" width="100px" borderRadius="50px" src={member.avatar} />
                        <Text fontSize="16px">{member.tag}</Text>
                        <Link
                            href={member.site}
                            color="#ff7b9b"
                        >
                            {member.name}
                        </Link>
                    </VStack>
                ))
            }
        </Flex>
    );
};

export default MemberBox;
