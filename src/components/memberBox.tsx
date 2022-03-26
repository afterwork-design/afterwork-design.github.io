import React from "react";
import {Flex, Image, Text, Link, VStack} from "@chakra-ui/react";
import {members} from "src/server";

const MemberBox = () => {
    return (
        <Flex
            justifyContent="center"
            gap="80px"
            mt="60px"
            wrap="wrap"
        >
            {
                members.map((member) => (
                    <VStack
                        alignItems="center"
                        key={member.name}
                        bgColor={member.cardBgColor}
                        p="2rem"
                        borderRadius="8px"
                        flexShrink={0}
                        boxShadow={member.cardShadow}
                    >
                        <Image
                            height="160px"
                            width="160px"
                            borderRadius="80px"
                            src={member.avatar}
                            mb="20px"
                        />
                        <Text
                            fontSize="16px"
                        >
                            {member.tag}
                        </Text>
                        <Link
                            href={member.site}
                            color={member.nameColor}
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
