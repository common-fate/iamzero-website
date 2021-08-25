import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  AspectRatio,
  Button,
  chakra,
  ChakraProvider,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Layout from "@theme/Layout";
import React from "react";
import { HowItWorksBox } from "../components/HowItWorksBox";
import theme from "../utils/theme";

const MAX_WIDTH = "1200px";

const developerPreviewSignUpURL = "https://airtable.com/shrokrQz5dn3cepbD";

const infraAsCode = () => {
  return (
    <ChakraProvider theme={theme}>
      <Layout
        title="Infrastructure as Code"
        description="IAM simplified and secure"
      >
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
                  base: "1.75rem",
                  sm: "2.5rem",
                  lg: "3.5rem",
                }}
                fontFamily="heading"
                mb="12px"
                lineHeight="1.2"
              >
                Least-privilege with a single command.
              </chakra.h1>

              <Text
                maxW="500px"
                color="gray.600"
                fontSize={{ base: "lg", lg: "xl" }}
              >
                IAM Zero applies least-privilege recommendations to cloud
                resources defined with Terraform, AWS CDK, and more. Now in
                Developer Preview.
              </Text>
              <Stack
                spacing={4}
                mt={10}
                direction={["column", "column", "row"]}
              >
                <Button
                  h="3.5rem"
                  px="40px"
                  onClick={() =>
                    window.open(developerPreviewSignUpURL, "_blank")
                  }
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
                  Join the Developer Preview
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
              <Flex rounded="md">
                <Image
                  src="/img/iamzero-applier.png"
                  alt="A screenshot of the IAM Zero command-line application, showing an IAM policy in AWS CDK source code automatically being fixed"
                />
              </Flex>
            </AspectRatio>
          </Stack>
        </Container>
        <HStack
          bg={"gray.50"}
          mt={20}
          py="5em"
          px={5}
          spacing={3}
          flexDir={["column", "column", "row"]}
          justifyContent="center"
          as="section"
        >
          <Flex flexDir="column" justifyContent="center" maxW="1000px">
            <Stack spacing={"100px"}>
              <HowItWorksBox heading="Apply instantly">
                Fix overprivileged IAM policies defined in your infrastructure
                code with a single command.
              </HowItWorksBox>
              <HowItWorksBox heading="Create portable IAM policies" right>
                IAM Zero detects other resources in your stack and intelligently
                includes references to them in the generated IAM policies, so
                your policies will work across multiple environments or
                accounts.
              </HowItWorksBox>
              <HowItWorksBox heading="Achieve true least-privilege">
                Incrementally granting permissions makes sizing least-privilege
                access faster and improves your security posture.
              </HowItWorksBox>
            </Stack>
          </Flex>
        </HStack>

        <Container as="section" maxW={MAX_WIDTH} py="5em">
          <Stack spacing={8}>
            <Heading textAlign="center">Get Early Access.</Heading>
            <Text color="gray.600" fontSize={{ base: "lg", lg: "xl" }}>
              We're making least-privilege cloud permissions as easy as possible
              for everyone. We're looking for developers to partipate in our
              early access program.
            </Text>
            <Button
              h="3.5rem"
              px="40px"
              onClick={() => window.open(developerPreviewSignUpURL, "_blank")}
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
              Join the Developer Preview
            </Button>
          </Stack>
        </Container>
      </Layout>
    </ChakraProvider>
  );
};

export default infraAsCode;
