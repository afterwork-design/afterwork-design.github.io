import React, {PropsWithChildren} from "react";
import {Box, BoxProps} from "@chakra-ui/react";

const TopBox: React.FC<PropsWithChildren<BoxProps>> = ({
    children,
    ...props
}) => {
    return (
        <Box
            position="relative"
            overflow="hidden"
            px={{base: 6, md: 8}}
            py={{base: 8, md: 10}}
            {...props}
        >
            <Box
                position="absolute"
                top={{base: "-80px", md: "-120px"}}
                right={{base: "-60px", md: "-80px"}}
                w={{base: "220px", md: "360px"}}
                h={{base: "220px", md: "360px"}}
                borderRadius="full"
                bg="radial-gradient(circle, rgba(206, 184, 145, 0.32) 0%, rgba(206, 184, 145, 0) 70%)"
                pointerEvents="none"
            />
            <Box
                position="absolute"
                left={{base: "-90px", md: "-120px"}}
                bottom={{base: "-90px", md: "-120px"}}
                w={{base: "220px", md: "300px"}}
                h={{base: "220px", md: "300px"}}
                borderRadius="full"
                bg="radial-gradient(circle, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0) 72%)"
                pointerEvents="none"
            />
            {children}
        </Box>
    );
};

export default TopBox;

