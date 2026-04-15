import {
  Container,
  Badge,
  Link,
  Box,
  SimpleGrid,
  List,
  ListItem,
  Divider,
  HStack,
  Tag,
  Text,
  VStack,
  Heading,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react'
import { ExternalLinkIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { AspectRatio } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const MotionBox = motion(Box)

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
}

const cardHover = {
  y: -8,
  scale: 1.02,
  transition: { duration: 0.3 }
}

const Work = () => {
  // Color values - gọi hook ở mức component top level
  const cardBg = useColorModeValue('white', 'whiteAlpha.50')
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100')
  const textColor = useColorModeValue('gray.700', 'gray.200')
  const numberColor = useColorModeValue('teal.600', 'teal.300')
  
  const shadowValue = useColorModeValue(
    '0 4px 20px rgba(0, 0, 0, 0.05)', 
    '0 15px 40px rgba(0, 0, 0, 0.3)'
  )
  const hoverShadow = useColorModeValue(
    '0 10px 30px rgba(0, 0, 0, 0.1)', 
    '0 20px 50px rgba(0, 0, 0, 0.4)'
  )

  const titleGradient = useColorModeValue(
    "linear(to-r, gray.900, teal.600)", 
    "linear(to-r, white, teal.200)"
  )

  const borderLeftColor = useColorModeValue('teal.500', 'teal.400')
  const borderLeftHoverColor = useColorModeValue('teal.600', 'teal.300')

  return (
    <Layout title="NoraClass">
      <Container maxW="container.xl" py={16}>

        {/* HERO SECTION */}
        <VStack spacing={8} align="start" mb={24}>
          <Flex align="center" gap={4} wrap="wrap">
            <Title 
              fontSize={['3.5rem', '4.5rem', '5.5rem']} 
              lineHeight="1.1"
              bgGradient={titleGradient}
              _dark={{ bgGradient: "linear(to-r, white, teal.200)" }}
              bgClip="text"
            >
              NoraClass
            </Title>
            <Badge
              colorScheme="teal"
              fontSize="lg"
              px={5}
              py={2}
              borderRadius="full"
              letterSpacing="wider"
            >
              2024 – Present
            </Badge>
          </Flex>

          <Heading 
            as="h2" 
            size="lg" 
            color="gray.600" 
            _dark={{ color: "gray.400" }}
            fontWeight="medium" 
            maxW="3xl"
            lineHeight="1.3"
          >
            National-scale EdTech platform combining{' '}
            <Text as="span" color="teal.600" _dark={{ color: "teal.300" }} fontWeight="semibold">AI intelligence</Text>,{' '}
            <Text as="span" color="teal.600" _dark={{ color: "teal.300" }} fontWeight="semibold">immersive 3D simulation</Text>, 
            and enterprise-grade LMS infrastructure.
          </Heading>

          <P fontSize="lg" maxW="2xl" color="gray.600" _dark={{ color: "gray.300" }}>
            Led complete technical evolution from unstable legacy monolith to a highly scalable, 
            secure, and production-grade distributed system supporting real national-level education.
          </P>

          <HStack spacing={5} pt={4}>
            <Link href="https://noraclass.com" target="_blank" isExternal>
              <Tag
                size="lg"
                colorScheme="teal"
                px={8}
                py={4}
                borderRadius="full"
                fontWeight="semibold"
                _hover={{ 
                  transform: 'translateY(-3px)', 
                  boxShadow: '0 10px 30px rgba(45, 212, 191, 0.3)' 
                }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                Visit Live Platform <ExternalLinkIcon ml={2} />
              </Tag>
            </Link>
          </HStack>
        </VStack>

        <Divider mb={20} borderColor="black.200" _dark={{ borderColor: "whiteAlpha.200" }} />

        {/* KEY IMPACT */}
        <Box mb={24}>
          <Text
            fontSize="xs"
            letterSpacing="0.15em"
            textTransform="uppercase"
            mb={10}
            color="gray.500"
            fontWeight="medium"
          >
            Measurable Impact
          </Text>

          <SimpleGrid columns={[1, 2, 3]} gap={8}>
            {[
              { value: '~90%', label: 'Infrastructure Cost Reduction' },
              { value: '~16,000', label: 'Active Users Supported' },
              { value: '100%', label: 'Zero-Downtime Migration' },
            ].map((metric, idx) => (
              <MotionBox
                key={idx}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                whileHover={cardHover}
                viewport={{ once: true }}
                p={9}
                borderRadius="3xl"
                bg="whiteAlpha.80"
                border="1px solid"
                borderColor="gray.200"
                backdropFilter="blur(16px)"
                boxShadow="0 25px 70px rgba(0,0,0,0.08)"
                display="flex"
                flexDirection="column"
                alignItems="center"
                textAlign="center"
                minH="220px"
                justifyContent="center"
              >
                <Text
                  fontSize={["5xl"]}
                  fontWeight="800"
                  color="teal.600"
                  _dark={{ color: "teal.300" }}
                  lineHeight="1"
                  mb={4}
                  whiteSpace="nowrap"
                >
                  {metric.value}
                </Text>
                <Text 
                  fontSize="md" 
                  color="gray.600" 
                  _dark={{ color: "gray.300" }}
                  fontWeight="medium" 
                  px={3}
                  lineHeight="1.4"
                >
                  {metric.label}
                </Text>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Box>

        {/* LEADERSHIP & CORE INFORMATION */}
        <SimpleGrid columns={[1, 2]} gap={14} mb={24}>
          <MotionBox variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Text fontWeight="bold" fontSize="2xl" mb={8} color="gray.800" _dark={{ color: "white" }}>
              Leadership
            </Text>
            <List spacing={5} color="gray.600" _dark={{ color: "gray.300" }} fontSize="md">
              <ListItem>• Technical Lead for 6 engineers</ListItem>
              <ListItem>• Established RFC/ADR governance & review process</ListItem>
              <ListItem>• Defined engineering standards, best practices & KPIs</ListItem>
              <ListItem>• Mentored team on DDD, Clean Architecture and DevSecOps</ListItem>
            </List>
          </MotionBox>

          <MotionBox variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Text fontWeight="bold" fontSize="2xl" mb={8} color="gray.800" _dark={{ color: "white" }}>
              Core Information
            </Text>
            <List spacing={5} color="gray.600" _dark={{ color: "gray.300" }} fontSize="md">
              <ListItem>
                <Meta>Website</Meta>{' '}
                <Link href="https://noraclass.com" target="_blank" color="teal.600" _dark={{ color: "teal.400" }}>
                  noraclass.com <ExternalLinkIcon mx="2px" />
                </Link>
              </ListItem>
              <ListItem><Meta>Domain</Meta> EdTech • SaaS • AI • 3D Interactive Learning</ListItem>
              <ListItem><Meta>Architecture</Meta> 4+1 View Model • Clean Architecture • Domain-Driven Design</ListItem>
              <ListItem><Meta>Tech Stack</Meta> Laravel • Java • React • Next.js • Docker • Redis • MySQL • CI/CD</ListItem>
            </List>
          </MotionBox>
        </SimpleGrid>

        <Divider mb={20} borderColor="black.200" _dark={{ borderColor: "whiteAlpha.200" }} />

        {/* TRANSFORMATION JOURNEY */}
        <Box mb={24}>
          <Flex align="center" gap={4} mb={12}>
            <Text 
              fontSize="xs" 
              letterSpacing="0.15em" 
              color="gray.500" 
              fontWeight="medium"
            >
              TRANSFORMATION JOURNEY
            </Text>
            <ArrowForwardIcon color="teal.500" _dark={{ color: "teal.400" }} boxSize={5} />
          </Flex>

          <SimpleGrid columns={[1, 2]} gap={6}>
            {[
              "Re-architected risky legacy monolith into modular Clean Architecture + DDD",
              "Designed and implemented full DevSecOps pipeline with CI/CD, automated rollback, security scanning & monitoring",
              "Migrated production infrastructure achieving ~90% cost reduction with zero downtime",
              "Refactored entire frontend into highly scalable modular structure",
              "Applied comprehensive security hardening (OWASP Top 10, least privilege, SSH key auth)",
              "Led engineering culture shift toward modern system design and multi-tenant architecture",
            ].map((text, idx) => (
              <MotionBox
                key={idx}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ x: 8 }}
                p={7}
                borderRadius="2xl"
                bg={cardBg}
                border="1px solid"
                borderColor={borderColor}
                borderLeft="6px solid"
                borderLeftColor={borderLeftColor}
                boxShadow={shadowValue}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                _hover={{
                  borderLeftColor: borderLeftHoverColor,
                  boxShadow: hoverShadow,
                  transform: 'translateY(-2px)'
                }}
              >
                <Flex align="start" gap={5}>
                  <Text 
                    fontSize="2xl" 
                    fontWeight="900" 
                    color={numberColor}
                    opacity={0.4}
                    mt={-1}
                    fontFamily="mono"
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </Text>
                  <Text 
                    color={textColor} 
                    fontSize="md" 
                    lineHeight="1.7"
                    fontWeight="medium"
                  >
                    {text}
                  </Text>
                </Flex>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Box>

        <Divider mb={20} borderColor="black.200" _dark={{ borderColor: "whiteAlpha.200" }} />

        {/* PRODUCT EXPERIENCE & VIDEO */}
        <Box mb={24}>
          <Text fontSize="xs" letterSpacing="0.15em" color="gray.500" mb={8}>PRODUCT EXPERIENCE</Text>
          <MotionBox
            borderRadius="3xl"
            overflow="hidden"
            boxShadow="0 40px 100px rgba(0, 0, 0, 0.1)"
            _dark={{ boxShadow: "0 40px 100px rgba(0, 0, 0, 0.6)" }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
            position="relative"
            width="100%"
            height={{ base: "400px", md: "600px" }}
          >
            <Image
              src="/images/works/noraclass_01.png"
              alt="NoraClass Platform Interface"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </MotionBox>
        </Box>

        <Box mb={24}>
          <AspectRatio 
            maxW="100%" 
            ratio={16 / 9} 
            borderRadius="3xl" 
            overflow="hidden"
            boxShadow="0 30px 80px rgba(0,0,0,0.1)"
            _dark={{ boxShadow: "0 30px 80px rgba(0,0,0,0.5)" }}
          >
            <iframe
              src="https://www.youtube.com/embed/25Ug4m8hg-I"
              title="NoraClass 3D Demo"
              allowFullScreen
            />
          </AspectRatio>
        </Box>
        <Divider mb={20} borderColor="black.200" _dark={{ borderColor: "whiteAlpha.200" }} />
        {/* TAGS */}
        <Box>
          <Text fontSize="xs" letterSpacing="0.15em" color="gray.500" mb={8}>TECHNOLOGIES & APPROACHES</Text>
          <HStack spacing={3} wrap="wrap">
            {[
              '4+1 View Model', 'Clean Architecture', 'Domain-Driven Design', 
              'DevSecOps', 'Multi-Tenant Architecture', 'System Design', 
              'Zero-Downtime Deployment', 'Scalability Engineering'
            ].map((tag) => (
              <Tag
                key={tag}
                px={6}
                py={3}
                borderRadius="full"
                bg="gray.100"
                color="gray.700"
                _dark={{ bg: "whiteAlpha.100", color: "gray.200" }}
                _hover={{ 
                  bg: 'teal.100', 
                  color: 'teal.700',
                  _dark: { bg: 'teal.900', color: 'white' }
                }}
                transition="all 0.3s"
              >
                {tag}
              </Tag>
            ))}
          </HStack>
        </Box>

      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'