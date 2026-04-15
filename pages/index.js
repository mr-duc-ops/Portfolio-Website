import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoMail,
} from 'react-icons/io5'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      {/* Intro Banner */}
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a Software Engineer based in Viet Nam.
      </Box>

      {/* Hero */}
      <Box display={{ md: 'flex' }} alignItems="center">
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Huynh Duc
          </Heading>

          <Text fontSize="lg" fontWeight="semibold">
            Technical Leader / Software Engineer / Systems Thinker
          </Text>

          <Text mt={2} color="gray.500">
            Building scalable products with simplicity, clean architecture, and
            real business impact.
          </Text>
        </Box>

        <Box
          flexShrink={0}
          mt={{ base: 6, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="110px"
            h="110px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/Duc.jpg"
              alt="Huynh Duc"
              width="110"
              height="110"
            />
          </Box>
        </Box>
      </Box>

      {/* About */}
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>

        <Box
          mt={4}
          p={[5, 6]}
          borderRadius="2xl"
          bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')}
          borderWidth="1px"
          borderColor={useColorModeValue('blackAlpha.100', 'whiteAlpha.200')}
          boxShadow="lg"
        >
          <Text
            fontSize={['md', 'lg']}
            lineHeight="tall"
            fontWeight="medium"
            mb={4}
          >
            I am a <strong>Technical Leader & Software Engineer</strong> with 4+ years
            of hands-on experience building products, scaling systems, and leading
            engineering teams.
          </Text>

          <Text
            fontSize="md"
            color={useColorModeValue('gray.600', 'gray.300')}
            lineHeight="tall"
            mb={4}
          >
            My focus is not only writing code, but solving business problems through
            practical technology decisions. I value simplicity, clean architecture,
            long-term maintainability, and measurable impact.
          </Text>

          <Text
            fontSize="md"
            color={useColorModeValue('gray.600', 'gray.300')}
            lineHeight="tall"
            mb={6}
          >
            Currently, I lead architecture and engineering strategy for national-scale
            EdTech ecosystems involving AI, 3D simulation, multi-tenant SaaS, and
            DevSecOps platforms.
          </Text>

          <SimpleGrid columns={[2, 2, 4]} spacing={3} mb={6}>
            <Box
              p={3}
              borderRadius="xl"
              bg={useColorModeValue('teal.50', 'whiteAlpha.100')}
              textAlign="center"
            >
              <Text fontSize="xs" color="gray.500">
                Experience
              </Text>
              <Text fontWeight="bold">4+ Years</Text>
            </Box>

            <Box
              p={3}
              borderRadius="xl"
              bg={useColorModeValue('teal.50', 'whiteAlpha.100')}
              textAlign="center"
            >
              <Text fontSize="xs" color="gray.500">
                Leadership
              </Text>
              <Text fontWeight="bold">Tech Lead</Text>
            </Box>

            <Box
              p={3}
              borderRadius="xl"
              bg={useColorModeValue('teal.50', 'whiteAlpha.100')}
              textAlign="center"
            >
              <Text fontSize="xs" color="gray.500">
                Focus
              </Text>
              <Text fontWeight="bold">CTO</Text>
            </Box>

            <Box
              p={3}
              borderRadius="xl"
              bg={useColorModeValue('teal.50', 'whiteAlpha.100')}
              textAlign="center"
            >
              <Text fontSize="xs" color="gray.500">
                Mindset
              </Text>
              <Text fontWeight="bold">Impact</Text>
            </Box>
          </SimpleGrid>

          <Box textAlign="center">
            <Button
              as={NextLink}
              href="/works"
              scroll={false}
              size="lg"
              px={8}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
              borderRadius="full"
            >
              View Portfolio
            </Button>
          </Box>
        </Box>
      </Section>

      {/* Experience */}
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Experience
        </Heading>

        <Box mt={4} position="relative">
          <Box
            position="absolute"
            left="18px"
            top="0"
            bottom="0"
            w="2px"
            bg={useColorModeValue('teal.100', 'whiteAlpha.300')}
          />

          {/* Item */}
          <Box position="relative" pl={12} pb={8}>
            <Box
              position="absolute"
              left="10px"
              top="8px"
              w="18px"
              h="18px"
              borderRadius="full"
              bg="teal.400"
            />

            <Box
              p={5}
              borderRadius="2xl"
              bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')}
              boxShadow="lg"
            >
              <Text fontSize="sm" color="teal.400" fontWeight="bold">
                2025 - Present
              </Text>

              <Heading as="h4" size="md" mt={1}>
                Technical Leader
              </Heading>

              <Text fontSize="sm" color="gray.500" mt={1}>
                Rebo Technology JSC
              </Text>

              <Text mt={3}>
                Own technical vision, architecture roadmap, engineering standards,
                mentoring, RFC / ADR governance, and team leadership for the
                NoraClass ecosystem.
              </Text>
            </Box>
          </Box>

          {/* Item */}
          <Box position="relative" pl={12} pb={8}>
            <Box
              position="absolute"
              left="10px"
              top="8px"
              w="18px"
              h="18px"
              borderRadius="full"
              bg="teal.400"
            />

            <Box
              p={5}
              borderRadius="2xl"
              bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')}
              boxShadow="lg"
            >
              <Text fontSize="sm" color="teal.400" fontWeight="bold">
                2024 - Present
              </Text>

              <Heading as="h4" size="md" mt={1}>
                NoraClass
              </Heading>

              <Text fontSize="sm" color="gray.500" mt={1}>
                National Digital Learning Ecosystem
              </Text>

              <Text mt={3}>
                Re-architected a high-risk legacy platform using 4+1 View Model,
                Clean Architecture, DDD, DevSecOps. Reduced infrastructure cost by
                ~90% while supporting 16,000+ users with zero downtime.
              </Text>
            </Box>
          </Box>

          {/* Item */}
          <Box position="relative" pl={12} pb={8}>
            <Box
              position="absolute"
              left="10px"
              top="8px"
              w="18px"
              h="18px"
              borderRadius="full"
              bg="teal.400"
            />

            <Box
              p={5}
              borderRadius="2xl"
              bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')}
              boxShadow="lg"
            >
              <Text fontSize="sm" color="teal.400" fontWeight="bold">
                2025
              </Text>

              <Heading as="h4" size="md" mt={1}>
                NoraAI & NoraLib
              </Heading>

              <Text fontSize="sm" color="gray.500" mt={1}>
                AI Platform & Multi-Tenant SaaS
              </Text>

              <Text mt={3}>
                Built AI Agent platform with Vector DB + LLM integrations and designed
                enterprise-grade tenant-isolated SaaS architecture with scalable
                foundations.
              </Text>
            </Box>
          </Box>

          {/* Item */}
          <Box position="relative" pl={12} pb={8}>
            <Box
              position="absolute"
              left="10px"
              top="8px"
              w="18px"
              h="18px"
              borderRadius="full"
              bg="teal.400"
            />

            <Box
              p={5}
              borderRadius="2xl"
              bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')}
              boxShadow="lg"
            >
              <Text fontSize="sm" color="teal.400" fontWeight="bold">
                2023 - 2024
              </Text>

              <Heading as="h4" size="md" mt={1}>
                Full Stack Developer
              </Heading>

              <Text fontSize="sm" color="gray.500" mt={1}>
                Techzen Company Limited
              </Text>

              <Text mt={3}>
                Delivered AI Autocall systems, booking platforms, Spring Boot + Vue.js
                products, and performance-focused customer solutions.
              </Text>
            </Box>
          </Box>

          {/* Item */}
          <Box position="relative" pl={12}>
            <Box
              position="absolute"
              left="10px"
              top="8px"
              w="18px"
              h="18px"
              borderRadius="full"
              bg="teal.400"
            />

            <Box
              p={5}
              borderRadius="2xl"
              bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')}
              boxShadow="lg"
            >
              <Text fontSize="sm" color="teal.400" fontWeight="bold">
                2022
              </Text>

              <Heading as="h4" size="md" mt={1}>
                Software Engineer Intern
              </Heading>

              <Text fontSize="sm" color="gray.500" mt={1}>
                Clever Group Corporation
              </Text>

              <Text mt={3}>
                Built React + Laravel systems, CI/CD pipelines, reporting dashboards,
                Google OAuth integrations, and internal automation tools.
              </Text>
            </Box>
          </Box>
        </Box>
      </Section>

      {/* Core Strengths */}
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Core Strengths
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={4}>
          <Box
            p={4}
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')}
          >
            <Heading as="h4" size="sm" color="teal.400" mb={2}>
              Architecture
            </Heading>
            <Text fontSize="sm">
              4+1 View Model, Clean Architecture, DDD, Systems Thinking,
              RFC, ADR
            </Text>
          </Box>

          <Box
            p={4}
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')}
          >
            <Heading as="h4" size="sm" color="teal.400" mb={2}>
              Backend Engineering
            </Heading>
            <Text fontSize="sm">
              Laravel, PHP, Java Spring Boot, REST APIs,
              Security, Scalable Services
            </Text>
          </Box>

          <Box
            p={4}
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')}
          >
            <Heading as="h4" size="sm" color="teal.400" mb={2}>
              Frontend Engineering
            </Heading>
            <Text fontSize="sm">
              React, Next.js, TypeScript, Redux Toolkit,
              Modular Frontend Architecture
            </Text>
          </Box>

          <Box
            p={4}
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')}
          >
            <Heading as="h4" size="sm" color="teal.400" mb={2}>
              DevSecOps & Infra
            </Heading>
            <Text fontSize="sm">
              Docker, CI/CD, Linux, VPS Hardening,
              Coolify, CloudHub, Cloudflare
            </Text>
          </Box>

          <Box
            p={4}
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')}
          >
            <Heading as="h4" size="sm" color="teal.400" mb={2}>
              Data & AI
            </Heading>
            <Text fontSize="sm">
              SQL, Redis, Qdrant Vector DB,
              Embeddings, AI Integration
            </Text>
          </Box>

          <Box
            p={4}
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')}
          >
            <Heading as="h4" size="sm" color="teal.400" mb={2}>
              Leadership
            </Heading>
            <Text fontSize="sm">
              Team Mentoring, Decision Making,
              KPI Management, Engineering Culture
            </Text>
          </Box>
        </SimpleGrid>
      </Section>

      {/* Results */}
      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Impact
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={4}>
          <Box
            p={4}
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')}
          >
            <Heading as="h4" size="md" color="teal.400">
              ~90%
            </Heading>
            <Text mt={2}>Infrastructure cost reduction</Text>
          </Box>

          <Box
            p={4}
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')}
          >
            <Heading as="h4" size="md" color="teal.400">
              16,000+
            </Heading>
            <Text mt={2}>Users supported with zero downtime</Text>
          </Box>

          <Box
            p={4}
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')}
          >
            <Heading as="h4" size="md" color="teal.400">
              Faster Delivery
            </Heading>
            <Text mt={2}>Improved deployment speed and reliability</Text>
          </Box>

          <Box
            p={4}
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')}
          >
            <Heading as="h4" size="md" color="teal.400">
              Team Growth
            </Heading>
            <Text mt={2}>Mentored engineers and established standards</Text>
          </Box>

          <Box
            p={4}
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')}
            gridColumn={{ md: 'span 2' }}
          >
            <Heading as="h4" size="md" color="teal.400">
              SEI Awards 2025
            </Heading>
            <Text mt={2}>
              Core contributor to award-winning national EdTech platform
            </Text>
          </Box>
        </SimpleGrid>
      </Section>

      {/* Engineering Principles */}
      <Section delay={0.7}>
        <Heading as="h3" variant="section-title">
          Engineering Principles
        </Heading>

        <SimpleGrid columns={[1, 1, 3]} spacing={4} mt={4}>
          <Box
            p={5}
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')}
          >
            <Heading as="h4" size="sm" color="teal.400" mb={3}>
              Simplicity First
            </Heading>

            <Text fontSize="sm" color="gray.500">
              Solve problems with the simplest effective solution.
              Complexity should only be added when truly necessary.
            </Text>
          </Box>

          <Box
            p={5}
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')}
          >
            <Heading as="h4" size="sm" color="teal.400" mb={3}>
              Practical Impact
            </Heading>

            <Text fontSize="sm" color="gray.500">
              Technology is a tool, not the goal.
              I prioritize solutions that create real business value
              and solve actual user needs.
            </Text>
          </Box>

          <Box
            p={5}
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')}
          >
            <Heading as="h4" size="sm" color="teal.400" mb={3}>
              Clean & Sustainable Code
            </Heading>

            <Text fontSize="sm" color="gray.500">
              Build maintainable, scalable systems that others can
              understand, improve, and confidently grow over time.
            </Text>
          </Box>
        </SimpleGrid>
      </Section>

      {/* Web */}
      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          On The Web
        </Heading>

        <List spacing={1}>
          <ListItem>
            <Link
              href="https://github.com/mr-duc-ops"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                GitHub
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link
              href="https://linkedin.com/in/mr-duc"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                LinkedIn
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="mailto:duch9707@gmail.com">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoMail />}
              >
                Email
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'