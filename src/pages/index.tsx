import {
  ArrowForwardIcon,
  EmailIcon,
  LockIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import {
  AspectRatio,
  Box,
  Button,
  chakra,
  ChakraProvider,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import { SiGnubash } from "react-icons/si";
import { Link } from "react-router-dom";
import FeatureBox from "../components/FeatureBox";
import { HowItWorksBox } from "../components/HowItWorksBox";
import AwsLogo from "../components/logos/AwsLogo";
import AzureLogo from "../components/logos/AzureLogo";
import ChromeLogo from "../components/logos/ChromeLogo";
import GcpLogo from "../components/logos/GcpLogo";
import GoLogo from "../components/logos/GoLogo";
import JavaLogo from "../components/logos/JavaLogo";
import KubernetesLogo from "../components/logos/KubernetesLogo";
import NodeLogo from "../components/logos/NodeLogo";
import PythonLogo from "../components/logos/PythonLogo";
import TerraformLogo from "../components/logos/TerraformLogo";
import VSCodeLogo from "../components/logos/VSCodeLogo";
import { SupportedProviderBox } from "../components/SupportedProviderBox";
import { WindowIcon } from "../utils/CustomIcons";
import theme from "../utils/theme";

const MAX_WIDTH = "1200px";

const index = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <ChakraProvider theme={theme}>
      <Layout
        title={`${siteConfig.title}`}
        description="IAM simplified and secure"
      >
        <Head>
          <link rel="stylesheet" type="text/css" href="/asciinema-player.css" />
          <script src="/asciinema-player.js" />
          <meta
            name="google-site-verification"
            content="bM7G-WmfN5oIkj3Kl_p8lE8EnM_9SMUfIe6Y6Q-qJiA"
          />
        </Head>
        <Container
          as="section"
          color="gray.700"
          textAlign="left"
          mt={10}
          py={"5em"}
          maxW={"1400px"}
        >
          <Stack direction={["column", "column", "column", "row"]} spacing={8}>
            <Flex direction={"column"} flex={1} justify="center">
              <chakra.h1
                maxW="25ch"
                fontSize={{
                  base: "2.25rem",
                  sm: "3rem",
                  lg: "4rem",
                }}
                fontFamily="heading"
                mb="12px"
                lineHeight="1.2"
              >
                IAM simplified and secure.
              </chakra.h1>

              <Text
                maxW="560px"
                color="gray.600"
                fontSize={{ base: "lg", lg: "xl" }}
              >
                IAM Zero detects identity and access management issues and
                automatically suggests least-privilege policies.
              </Text>
              <Stack
                spacing={4}
                mt={10}
                direction={["column", "column", "row"]}
              >
                <Button
                  h="3.5rem"
                  px="40px"
                  as={Link}
                  to={"/docs/getting-started"}
                  fontSize="1.2rem"
                  size="lg"
                  colorScheme="cfBlue"
                  transition="all .2s ease"
                  className="arrowBtn"
                  _hover={{ transform: "scale(1.02)" }}
                  rightIcon={
                    <ArrowForwardIcon
                      transition="all .2s ease"
                      sx={{
                        ".arrowBtn:hover &": { transform: "translateX(2px)" },
                      }}
                    />
                  }
                >
                  Get Started
                </Button>
              </Stack>
            </Flex>
            <AspectRatio
              ratio={16 / 9}
              maxW="800px"
              flex={4}
              sx={{
                // Blurred 'halo' around video wrapper
                "&::before": {
                  background:
                    "linear-gradient(to left top, #30d15e92, #619EFF);",
                  filter: "blur(34px);",
                },
              }}
            >
              <Flex
                as="video"
                autoPlay
                muted
                playsInline
                // maxW="800px"
                loop
                rounded="md"
              >
                <source src="demo.mp4" type="video/mp4" />
              </Flex>
            </AspectRatio>
          </Stack>
        </Container>
        <HStack
          bg={"gray.50"}
          my={20}
          py="5em"
          px={5}
          spacing={3}
          flexDir={["column", "column", "row"]}
          justifyContent="center"
          as="section"
        >
          <Flex flexDir="column" justifyContent="center" maxW="1000px">
            <Stack spacing={"100px"}>
              <HowItWorksBox heading="Start from zero">
                Create roles for your applications, infrastructure deployment
                services, or team members, starting with no permissions.
              </HowItWorksBox>
              <HowItWorksBox heading="Build permissions fast" right>
                Build permissions as quickly as you build your applications. IAM
                Zero automatically detects permission issues based on the
                behaviour of your team and services and recommends policies for
                you.
              </HowItWorksBox>
              <HowItWorksBox heading="Achieve true least-privilege">
                Incrementally granting permissions makes sizing least-privilege
                access faster and improves your security posture.
              </HowItWorksBox>
            </Stack>
          </Flex>
        </HStack>

        <Container as="section" maxW={MAX_WIDTH} py="3em">
          <Grid
            templateColumns={{
              base: "unset",
              md: "repeat(2,minmax(0,1fr))",
              lg: "repeat(3,minmax(0,1fr))",
            }}
            gap={6}
          >
            <FeatureBox
              icon={<WindowIcon color="cfBlue.500" boxSize="24px" />}
              heading="Transparent"
              body="IAM Zero can run transparently on any or all of your roles just by adding the client library."
            />
            <FeatureBox
              icon={<RepeatIcon color="cfBlue.500" boxSize="24px" />}
              heading="Continuous"
              body="IAM Zero can run as a service to continuously build least-privilege policies for your whole team."
            />
            <FeatureBox
              icon={<LockIcon color="cfBlue.500" boxSize="24px" />}
              heading="Secure"
              body="IAM Zero uses TLS to dispatch events and doesn't include any session tokens."
            />
          </Grid>
        </Container>

        <HStack
          bg={"gray.50"}
          mt={20}
          py="5em"
          spacing={3}
          flexDir={["column", "column", "row"]}
          justifyContent="center"
          as="section"
        >
          <Flex flexDir="column" justifyContent="center">
            <Heading textAlign="center">
              Works with your language, workflows, and cloud provider.
            </Heading>
            <Stack
              direction={["column", "row"]}
              spacing={16}
              justify="center"
              align="center"
              mt={8}
            >
              <SimpleGrid columns={2} spacing={5} rows={2}>
                <SupportedProviderBox>
                  <PythonLogo />
                </SupportedProviderBox>
                <SupportedProviderBox
                  notYetSupported
                  tooltip="Go support coming soon!"
                >
                  <GoLogo />
                </SupportedProviderBox>
                <SupportedProviderBox
                  notYetSupported
                  tooltip="Java support coming soon!"
                >
                  <JavaLogo />
                </SupportedProviderBox>
                <SupportedProviderBox
                  notYetSupported
                  tooltip="NodeJS support coming soon!"
                >
                  <NodeLogo />
                </SupportedProviderBox>
              </SimpleGrid>
              <SimpleGrid columns={2} spacing={5} rows={2}>
                <SupportedProviderBox
                  notYetSupported
                  tooltip="Cloud provider CLI support coming soon!"
                >
                  <SiGnubash size="3em" />
                </SupportedProviderBox>
                <SupportedProviderBox
                  notYetSupported
                  tooltip="VS Code integration coming soon!"
                >
                  <VSCodeLogo />
                </SupportedProviderBox>
                <SupportedProviderBox
                  notYetSupported
                  tooltip="Terraform integration coming soon!"
                >
                  <TerraformLogo />
                </SupportedProviderBox>
                <SupportedProviderBox
                  notYetSupported
                  tooltip="Cloud web console integration coming soon!"
                >
                  <ChromeLogo />
                </SupportedProviderBox>
              </SimpleGrid>
              <SimpleGrid columns={2} spacing={5} rows={2}>
                <SupportedProviderBox>
                  <AwsLogo />
                </SupportedProviderBox>
                <SupportedProviderBox
                  notYetSupported
                  tooltip="GCP support coming soon!"
                >
                  <GcpLogo />
                </SupportedProviderBox>
                <SupportedProviderBox
                  notYetSupported
                  tooltip="Azure support coming soon!"
                >
                  <AzureLogo />
                </SupportedProviderBox>
                <SupportedProviderBox
                  notYetSupported
                  tooltip="Kubernetes support coming soon!"
                >
                  <KubernetesLogo />
                </SupportedProviderBox>
              </SimpleGrid>
            </Stack>
          </Flex>
        </HStack>

        <HStack
          py={20}
          maxW="800px"
          m="0 auto"
          as="section"
          justify="space-between"
          textAlign="center"
          align="center"
          flexDirection={["column", "column", "row"]}
        >
          <Stack
            rounded="2xl"
            dir="column"
            w={{ base: "100%", md: "60%" }}
            justify="center"
            p={3}
            height="min-content"
            // This is to fix min-conent bug on safari/mobile
            maxH={{ base: "200px", md: "unset" }}
          >
            <Heading>Join our newsletter</Heading>
            <Text>Stay updated on new releases and development progress.</Text>
          </Stack>

          <Box
            as="form"
            action="https://commonfate.us5.list-manage.com/subscribe/post?u=69860be79239e5e8d492037c9&amp;id=2adfac0c83"
            method="POST"
            maxW={{ base: "100%", md: "330px" }}
            p={5}
          >
            <input type="hidden" name="u" value="0071729f235a2628f4afd9133" />
            <input type="hidden" name="id" value="2a855c4ea2" />
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<EmailIcon color="gray.300" />}
              />
              <Input
                id="MERGE0"
                name="MERGE0"
                type="email"
                autoCapitalize="off"
                autoCorrect="off"
                placeholder="Your email address"
                focusBorderColor="cfBlue.400"
              />
            </InputGroup>
            <Button colorScheme="cfBlue" mt={3} w="100%" type="submit">
              Subscribe
            </Button>
          </Box>
        </HStack>
      </Layout>
    </ChakraProvider>
  );
};

export default index;
