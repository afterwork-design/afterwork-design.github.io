import {Box, Button, Container, HStack, Link, VStack} from "@chakra-ui/react";
import TopBox from "src/components/topBox";
import MemberBox from "src/components/memberBox";
import {H1} from "src/components/primitives";
import {LayoutPage} from "../typing";

const Home: LayoutPage = () => {
    return (
        <Box>
            <TopBox>
                <Container maxW="1100px">
                    <HStack justifyContent="space-between" mb={{base: 10, md: 12}}>
                        <Link href="/">
                            <Button variant="ghost" size="sm">
                                返回首页
                            </Button>
                        </Link>
                    </HStack>
                    <VStack alignItems="flex-start" spacing="4" maxW="680px" mb={{base: 6, md: 8}}>
                        <H1>团队成员</H1>
                    </VStack>
                </Container>
            </TopBox>
            <MemberBox />
        </Box>
    );
};

export default Home;