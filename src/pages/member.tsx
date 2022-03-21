import {LayoutPage} from "../typing";
import {Box, Image, Text, HStack, Link} from "@chakra-ui/react";
import TopBox from "src/components/topBox";
import {H1} from "src/components/primitives";
import MemberBox from "src/components/memberBox";

const Home: LayoutPage = () => {
    return (
        <Box>
            <TopBox>
                <Box
                    display="flex"
                    justifyContent="center"
                    flexDir="column"
                    maxW="700px"
                    margin="0 auto"
                    minH="500px"
                >
                    <H1 textAlign="center">团队成员</H1>
                    <Text m="40px 0">
                        网站所有项目开源，如果你也感兴趣，我们也招募志愿者，欢迎和我们一起维护这个网站，让更多人得到更优质的体验。
                    </Text>
                    <Text>
                        咨询请联系：
                        <Link
                            href="mailto:weijuandesign@sina.com"
                            bg="linear-gradient(to left, #315891 0%, #330867 100%)"
                            bgClip="text"
                            fill="transparent"
                        >
                            weijuandesign@sina.com
                        </Link>
                    </Text>
                </Box>
                <Link href="/">
                    <Image src="./return.svg" pos="absolute" top="15px" left="15px" />
                </Link>
            </TopBox>
            <MemberBox />
        </Box>
    );
};

export default Home;
