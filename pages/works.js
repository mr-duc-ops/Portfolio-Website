import { 
  Box, Text, HStack, Tag, Container, Heading, 
  SimpleGrid, Divider, Card, CardBody, CardHeader, 
  VStack, Badge, Icon, Flex 
} from '@chakra-ui/react'
import { FaCode, FaCalendarAlt, FaTrophy, FaMedal } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Image from 'next/image'

import thumbInkdrop from '../public/images/works/noraclass_01.png'
import thumbWalknote from '../public/images/works/noralib_01.png'
import thumbFourPainters from '../public/images/works/nora-ai_01.png'
import thumbMenkiki from '../public/images/works/nora-os_01.png'

const MotionBox = motion(Box)

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
}

const Works = () => (
  <Layout title="Works">
    <Container maxW="container.xl" py={8}>

      {/* Featured Projects */}
      <Heading as="h3" fontSize={28} mb={6} letterSpacing="-0.5px">
        Featured Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={8}>
        <Section>
          <WorkGridItem id="noraclass" title="NoraClass" thumbnail={thumbInkdrop}>
            National-scale digital learning ecosystem integrating AI, 3D simulation, DevSecOps and scalable architecture.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="noralib" title="NoraLib" thumbnail={thumbWalknote}>
            Multi-tenant SaaS digital library platform with tenant isolation, custom domains, payments and enterprise-ready architecture.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="nora-ai" title="NoraAI" thumbnail={thumbFourPainters}>
            AI Agent for LMS using MCP architecture, vector search, LLM integrations and multi-layer caching.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="khohoclieuso" title="NoraOS" thumbnail={thumbMenkiki}>
            Internal modern LMS operating platform powering multiple products with reusable core services.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      {/* Earlier Career */}
      <Section delay={0.4}>
        <Divider my={12} borderColor="whiteAlpha.300" _light={{ borderColor: "gray.200" }} />

        <HStack justify="space-between" align="center" mb={8}>
          <Heading as="h3" fontSize={28} letterSpacing="-0.5px">
            Earlier Career
          </Heading>
          <Badge colorScheme="purple" fontSize="sm" px={3} py={1} borderRadius="full">
            2022 — 2024
          </Badge>
        </HStack>
      </Section>

      <SimpleGrid columns={[1, 2, 3]} gap={6}>
        {/* TechSport */}
        <Section delay={0.5}>
          <Card
            bg="whiteAlpha.50"
            _dark={{ bg: "whiteAlpha.50" }}
            _light={{ bg: "white", borderColor: "gray.200" }}
            backdropFilter="blur(16px)"
            border="1px solid"
            borderColor="whiteAlpha.200"
            borderRadius="2xl"
            overflow="hidden"
            transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
            _hover={{
              transform: "translateY(-8px) scale(1.02)",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
              borderColor: "purple.400",
            }}
            h="full"
          >
            <CardHeader pb={2}>
              <HStack justify="space-between">
                <HStack>
                  <Icon as={FaCode} color="purple.400" boxSize={5} />
                  <Heading size="md" letterSpacing="tight" color="gray.800" _dark={{ color: "white" }}>
                    TechSport
                  </Heading>
                </HStack>
                <Badge colorScheme="green" variant="subtle">TechZen</Badge>
              </HStack>
            </CardHeader>

            <CardBody pt={0}>
              <VStack align="start" spacing={4}>
                <Text 
                  fontSize="sm" 
                  color="gray.600" 
                  _dark={{ color: "whiteAlpha.800" }}
                  lineHeight="tall"
                >
                  Sports venue booking platform with real-time availability, 
                  payment integration and high-performance booking flow.
                </Text>

                <Text 
                  fontSize="xs" 
                  color="gray.500" 
                  _dark={{ opacity: 0.7 }}
                  display="flex" 
                  alignItems="center" 
                  gap={1}
                >
                  <Icon as={FaCalendarAlt} /> 2023 — 2024
                </Text>

                <HStack spacing={2} flexWrap="wrap">
                  <Tag size="sm" colorScheme="blue" variant="solid">Spring Boot</Tag>
                  <Tag size="sm" colorScheme="teal" variant="solid">Vue.js</Tag>
                  <Tag size="sm" colorScheme="purple" variant="solid">PostgreSQL</Tag>
                  <Tag size="sm" variant="outline">Performance Optimization</Tag>
                </HStack>
              </VStack>
            </CardBody>
          </Card>
        </Section>

        {/* AcademyAI */}
        <Section delay={0.6}>
          <Card
            bg="whiteAlpha.50"
            _dark={{ bg: "whiteAlpha.50" }}
            _light={{ bg: "white", borderColor: "gray.200" }}
            backdropFilter="blur(16px)"
            border="1px solid"
            borderColor="whiteAlpha.200"
            borderRadius="2xl"
            overflow="hidden"
            transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
            _hover={{
              transform: "translateY(-8px) scale(1.02)",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
              borderColor: "purple.400",
            }}
            h="full"
          >
            <CardHeader pb={2}>
              <HStack justify="space-between">
                <HStack>
                  <Icon as={FaCode} color="purple.400" boxSize={5} />
                  <Heading size="md" letterSpacing="tight" color="gray.800" _dark={{ color: "white" }}>
                    AcademyAI
                  </Heading>
                </HStack>
                <Badge colorScheme="orange" variant="subtle">AI Voice</Badge>
              </HStack>
            </CardHeader>

            <CardBody pt={0}>
              <VStack align="start" spacing={4}>
                <Text 
                  fontSize="sm" 
                  color="gray.600" 
                  _dark={{ color: "whiteAlpha.800" }}
                  lineHeight="tall"
                >
                  AI-powered auto-call system using Twilio, advanced prompt engineering, 
                  voice streaming and intelligent conversation flow.
                </Text>

                <Text 
                  fontSize="xs" 
                  color="gray.500" 
                  _dark={{ opacity: 0.7 }}
                  display="flex" 
                  alignItems="center" 
                  gap={1}
                >
                  <Icon as={FaCalendarAlt} /> 2023
                </Text>

                <HStack spacing={2} flexWrap="wrap">
                  <Tag size="sm" colorScheme="red" variant="solid">Twilio</Tag>
                  <Tag size="sm" colorScheme="cyan" variant="solid">Voice AI</Tag>
                  <Tag size="sm" colorScheme="yellow" variant="solid">LLM Prompting</Tag>
                  <Tag size="sm" variant="outline">WebSocket Streaming</Tag>
                </HStack>
              </VStack>
            </CardBody>
          </Card>
        </Section>

        {/* Clever Group */}
        <Section delay={0.7}>
          <Card
            bg="whiteAlpha.50"
            _dark={{ bg: "whiteAlpha.50" }}
            _light={{ bg: "white", borderColor: "gray.200" }}
            backdropFilter="blur(16px)"
            border="1px solid"
            borderColor="whiteAlpha.200"
            borderRadius="2xl"
            overflow="hidden"
            transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
            _hover={{
              transform: "translateY(-8px) scale(1.02)",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
              borderColor: "purple.400",
            }}
            h="full"
          >
            <CardHeader pb={2}>
              <HStack justify="space-between">
                <HStack>
                  <Icon as={FaCode} color="purple.400" boxSize={5} />
                  <Heading size="md" letterSpacing="tight" color="gray.800" _dark={{ color: "white" }}>
                    Clever Group
                  </Heading>
                </HStack>
                <Badge colorScheme="blue" variant="subtle">Enterprise</Badge>
              </HStack>
            </CardHeader>

            <CardBody pt={0}>
              <VStack align="start" spacing={4}>
                <Text 
                  fontSize="sm" 
                  color="gray.600" 
                  _dark={{ color: "whiteAlpha.800" }}
                  lineHeight="tall"
                >
                  Multiple internal enterprise systems: reporting dashboards, 
                  admin panels, OAuth2.0 integration, and automated CI/CD pipelines.
                </Text>

                <Text 
                  fontSize="xs" 
                  color="gray.500" 
                  _dark={{ opacity: 0.7 }}
                  display="flex" 
                  alignItems="center" 
                  gap={1}
                >
                  <Icon as={FaCalendarAlt} /> 2022 — 2023
                </Text>

                <HStack spacing={2} flexWrap="wrap">
                  <Tag size="sm" colorScheme="gray" variant="solid">Spring Boot</Tag>
                  <Tag size="sm" colorScheme="pink" variant="solid">OAuth 2.0</Tag>
                  <Tag size="sm" colorScheme="teal" variant="solid">CI/CD</Tag>
                  <Tag size="sm" variant="outline">DevOps</Tag>
                  <Tag size="sm" variant="outline">Microservices</Tag>
                </HStack>
              </VStack>
            </CardBody>
          </Card>
        </Section>
      </SimpleGrid>

      {/* Awards & Recognition */}
      <Section delay={0.8}>
        <Divider my={16} borderColor="whiteAlpha.300" _light={{ borderColor: "gray.200" }} />

        <VStack spacing={10} align="start">
          <HStack spacing={4} align="center">
            <Icon as={FaTrophy} color="yellow.400" boxSize={8} />
            <Heading as="h3" fontSize={28} letterSpacing="-0.5px">
              Awards & Recognition
            </Heading>
          </HStack>

          <Text fontSize="lg" color="gray.600" _dark={{ color: "gray.400" }} maxW="3xl">
            Tự hào được vinh danh bởi Bộ Giáo dục và Đào tạo, Liên hiệp các Hội Khoa học và Kỹ thuật Việt Nam, 
            Trung ương Đoàn và các tổ chức uy tín.
          </Text>

          <MotionBox
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            w="full"
          >
            <Card
              bg="whiteAlpha.50"
              _dark={{ bg: "whiteAlpha.50" }}
              _light={{ bg: "white", borderColor: "gray.200" }}
              backdropFilter="blur(20px)"
              border="1px solid"
              borderColor="whiteAlpha.200"
              borderRadius="3xl"
              overflow="hidden"
              transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
              _hover={{
                transform: "translateY(-12px)",
                boxShadow: "0 30px 60px -15px rgba(250, 204, 21, 0.25)",
                borderColor: "yellow.400",
              }}
            >
              <Flex direction={{ base: "column", md: "row" }} align="center" gap={8} p={10}>
                <Box 
                  flexShrink={0}
                  borderRadius="2xl" 
                  overflow="hidden"
                  boxShadow="0 20px 40px rgba(0,0,0,0.4)"
                  maxW={{ base: "100%", md: "320px" }}
                >
                  <Image
                    src="/images/works/sei-award.png"
                    alt="SEI Awards 2025"
                    width={320}
                    height={240}
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                </Box>

                <VStack align="start" spacing={6} flex={1}>
                  <Badge 
                    colorScheme="yellow" 
                    fontSize="md" 
                    px={5} 
                    py={2} 
                    borderRadius="full"
                    letterSpacing="wider"
                  >
                    SEI Awards 2025
                  </Badge>

                  <Heading size="lg" lineHeight="1.3" color="gray.800" _dark={{ color: "white" }}>
                    Ảnh hưởng giáo dục đào tạo của năm
                  </Heading>

                  <Text fontSize="md" color="gray.600" _dark={{ color: "gray.300" }} lineHeight="1.8">
                    Được Viện Sáng tạo và Chuyển đổi số (Liên hiệp các Hội Khoa học và Kỹ thuật Việt Nam) 
                    vinh danh cho hệ sinh thái học liệu số quốc gia <strong>NoraClass</strong> với khả năng 
                    tích hợp AI và mô phỏng 3D, góp phần chuyển đổi phương pháp dạy và học trong kỷ nguyên số.
                  </Text>

                  <Box>
                    <Text fontSize="sm" color="gray.500" _dark={{ color: "gray.400" }}>
                      Quyết định số <strong>897/QĐ-LHHVN</strong>, ngày 07/11/2025
                    </Text>
                    <Text fontSize="sm" color="gray.500" _dark={{ color: "gray.400" }}>
                      Ký bởi Chủ tịch TSKH. Phan Xuân Dũng
                    </Text>
                  </Box>

                  <HStack spacing={3} pt={4}>
                    <Icon as={FaMedal} color="yellow.400" boxSize={6} />
                    <Text fontWeight="semibold" color="yellow.600" _dark={{ color: "yellow.300" }}>
                      Vinh danh bởi Liên hiệp Hội KH&KT Việt Nam
                    </Text>
                  </HStack>
                </VStack>
              </Flex>
            </Card>
          </MotionBox>
        </VStack>
      </Section>

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'