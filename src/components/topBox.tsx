import React, {PropsWithChildren} from "react";
import {Box, BoxProps} from "@chakra-ui/react";

const TopBox: React.FC<PropsWithChildren<BoxProps>> = ({
    children,
    ...props
}) => {
    return (
        <Box
            bg="linear-gradient(90deg, rgba(255, 226, 159, 1) 0%, rgba(255, 169, 159, 1) 48%, rgba(255, 113, 154, 1) 100%)"
            {...props}
            p="0 10px"
        >
            {children}
        </Box>
    );
};

export default TopBox;
