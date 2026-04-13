import React from "react";
import {Heading, HeadingProps, BoxProps, Box} from "@chakra-ui/react";

type P = HeadingProps;
export const H1: React.FC<P> = p => <Heading as="h1" fontSize={{base: "48px", md: "72px"}} lineHeight={{base: "1.02", md: "0.96"}} mt={0} {...p} />;
export const H2: React.FC<P> = p => <Heading as="h2" fontSize={{base: "28px", md: "42px"}} lineHeight="1.06" {...p} />;
export const H3: React.FC<P> = p => <Heading as="h3" fontSize={{base: "22px", md: "28px"}} lineHeight="1.15" {...p} />;
export const H4: React.FC<P> = p => <Heading as="h4" fontSize={{base: "18px", md: "22px"}} lineHeight="1.2" {...p} />;
export const H5: React.FC<P> = p => <Heading as="h5" fontSize="16px" lineHeight="1.3" {...p} />;
export const H6: React.FC<P> = p => <Heading as="h6" fontSize="14px" lineHeight="1.4" {...p} />;
export const RounderBox: React.FC<BoxProps> = p => <Box borderRadius="panel" backgroundColor="white" {...p} />;

