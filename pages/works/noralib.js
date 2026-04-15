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
import { motion } from 'framer-motion'
import { WorkImage } from '../../components/work'

const MotionBox = motion(Box)

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  },
}

const cardHover = {
  y: -10,
  scale: 1.02,
  transition: { duration: 0.4 }
}

const Work = () => {
  // Color configuration for Light/Dark mode
  const textColor = useColorModeValue('gray.800', 'white')
  const subTextColor = useColorModeValue('gray.600', 'gray.300')
  const mutedTextColor = useColorModeValue('gray.500', 'gray.400')
  const cardBg = useColorModeValue('white', 'rgba(255,255,255,0.03)')
  const cardBorder = useColorModeValue('gray.100', 'rgba(255,255,255,0.08)')
  const cardShadow = useColorModeValue(
    '0 15px 35px rgba(0,0,0,0.05)', 
    '0 25px 80px rgba(0,0,0,0.4)'
  )
  const dividerColor = useColorModeValue('blackblack.200', 'whiteAlpha.200')
  const tagBg = useColorModeValue('gray.100', 'whiteAlpha.100')

  return (
    <Layout title="NoraLib">
      <Container maxW="container.xl" py={16}>

        {/* HERO SECTION */}
        <VStack spacing={10} align="start" mb={28}>
          <Flex align="center" gap={5} wrap="wrap">
            <Title 
              fontSize={['3.6rem', '4.6rem', '5.6rem']} 
              lineHeight="1.05"
              // Cập nhật Gradient để dễ nhìn trên nền trắng
              bgGradient={useColorModeValue(
                "linear(to-r, cyan.600, blue.500)", 
                "linear(to-r, #ffffff, #67e8f9)"
              )}
              bgClip="text"
              letterSpacing="-0.04em"
            >
              NoraLib
            </Title>
            <Badge
              colorScheme="cyan"
              fontSize="lg"
              px={6}
              py={2.5}
              borderRadius="full"
              letterSpacing="wider"
              fontWeight="semibold"
            >
              2025 – Present
            </Badge>
          </Flex>

          <Heading 
            as="h2" 
            size="lg" 
            color={subTextColor} 
            fontWeight="medium" 
            maxW="4xl"
            lineHeight="1.35"
            letterSpacing="-0.01em"
          >
            Multi-tenant SaaS digital library platform with strong tenant isolation, 
            custom domains, and enterprise-ready architecture.
          </Heading>

          <P fontSize="lg" maxW="2xl" color={mutedTextColor} lineHeight="1.7">
            Led end-to-end architecture design, tenant isolation strategy, reusable core platform, 
            and successful production delivery for educational institutions.
          </P>

          <HStack spacing={6} pt={4}>
            <Link 
              href="https://thuvientansonnhat.noralib.com" 
              target="_blank" 
              isExternal
            >
              <Tag
                size="lg"
                colorScheme="cyan"
                px={10}
                py={5}
                borderRadius="full"
                variant="solid" // Dùng variant solid để nổi bật trên nền trắng
                fontWeight="semibold"
                fontSize="md"
                _hover={{ 
                  transform: 'translateY(-4px)', 
                  boxShadow: '0 10px 25px rgba(0, 184, 212, 0.4)' 
                }}
                transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                Visit Demo Site <ExternalLinkIcon ml={3} boxSize={5} />
              </Tag>
            </Link>
          </HStack>
        </VStack>

        <Divider mb={24} borderColor={dividerColor} />

        {/* MEASURABLE IMPACT */}
        <Box mb={28}>
          <Text
            fontSize="xs"
            letterSpacing="0.2em"
            textTransform="uppercase"
            mb={12}
            color="cyan.600" // Đổi màu key achievements cho đậm hơn
            fontWeight="bold"
          >
            Key Achievements
          </Text>

          <SimpleGrid columns={[1, 2, 3]} gap={8}>
            {[
              { value: 'Multi-Tenant', label: 'Complete Tenant Isolation' },
              { value: 'Custom Domain', label: 'Per-Tenant Branding & Routing' },
              { value: 'Enterprise', label: 'Production Ready Architecture' },
            ].map((metric, idx) => (
              <MotionBox
                key={idx}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                whileHover={cardHover}
                viewport={{ once: true }}
                p={10}
                borderRadius="3xl"
                bg={cardBg}
                border="1px solid"
                borderColor={cardBorder}
                boxShadow={cardShadow}
                display="flex"
                flexDirection="column"
                alignItems="center"
                textAlign="center"
                minH="220px"
                justifyContent="center"
              >
                <Text
                  fontSize="2xl"
                  fontWeight="900"
                  color="cyan.600"
                  lineHeight="1"
                  mb={4}
                  letterSpacing="-0.05em"
                >
                  {metric.value}
                </Text>
                <Text 
                  fontSize="md" 
                  color={subTextColor} 
                  fontWeight="medium" 
                  lineHeight="1.5"
                >
                  {metric.label}
                </Text>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Box>

        {/* LEADERSHIP & CORE INFORMATION */}
        <SimpleGrid columns={[1, 2]} gap={16} mb={28}>
          <MotionBox variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Text fontWeight="bold" fontSize="2xl" mb={10} color={textColor} letterSpacing="-0.02em">
              Leadership
            </Text>
            <List spacing={6} color={subTextColor} fontSize="md" lineHeight="1.8">
              <ListItem>• Technical Leader – Full architecture ownership</ListItem>
              <ListItem>• Designed multi-tenant strategy with strong isolation</ListItem>
              <ListItem>• Built reusable core platform for future products</ListItem>
              <ListItem>• Led implementation of custom domain + OAuth flow</ListItem>
            </List>
          </MotionBox>

          <MotionBox variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Text fontWeight="bold" fontSize="2xl" mb={10} color={textColor} letterSpacing="-0.02em">
              Core Information
            </Text>
            <List spacing={6} color={subTextColor} fontSize="md" lineHeight="1.8">
              <ListItem>
                <Meta>Website</Meta>{' '}
                <Link 
                  href="https://thuvientansonnhat.noralib.com" 
                  target="_blank" 
                  color="cyan.600"
                  fontWeight="medium"
                  _hover={{ color: 'cyan.500', textDecoration: 'underline' }}
                >
                  thuvientansonnhat.noralib.com <ExternalLinkIcon mx="2px" />
                </Link>
              </ListItem>
              <ListItem><Meta>Role</Meta> Technical Leader / Solution Architect</ListItem>
              <ListItem><Meta>Domain</Meta> EdTech • SaaS • Digital Library • Multi-Tenant</ListItem>
              <ListItem><Meta>Architecture</Meta> Multi-Tenant SaaS • Clean Architecture • Domain-Driven Design</ListItem>
              <ListItem><Meta>Key Features</Meta> Tenant Isolation • Custom Domains • Payment Gateway • Mail Service • OAuth</ListItem>
            </List>
          </MotionBox>
        </SimpleGrid>

        <Divider mb={20} borderColor={dividerColor} />

        {/* TRANSFORMATION / HIGHLIGHTS */}
        <Box mb={24}>
          <Flex align="center" gap={4} mb={12}>
            <Text 
              fontSize="xs" 
              letterSpacing="0.15em" 
              color="gray.500" 
              fontWeight="bold"
            >
              TECHNICAL HIGHLIGHTS
            </Text>
            <ArrowForwardIcon color="cyan.600" boxSize={5} />
          </Flex>

          <SimpleGrid columns={[1, 2]} gap={6}>
            {[
              "Designed robust multi-tenant architecture with complete data and resource isolation",
              "Implemented per-tenant custom domain routing and branding system",
              "Built reusable core platform services to accelerate future product development",
              "Integrated secure OAuth callback flow and external payment/mail gateways",
              "Applied Clean Architecture + DDD principles throughout the system",
              "Ensured high security standards and scalability for institutional usage",
            ].map((text, idx) => (
              <MotionBox
                key={idx}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                p={8}
                borderRadius="2xl"
                bg={cardBg}
                border="1px solid"
                borderColor={cardBorder}
                boxShadow={cardShadow}
                borderLeft="5px solid"
                borderLeftColor="cyan.500"
                _hover={{
                  borderLeftColor: "cyan.400",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
                }}
              >
                <Flex align="start" gap={5}>
                  <Text 
                    fontSize="2xl" 
                    fontWeight="bold" 
                    color="cyan.600" 
                    opacity={0.4}
                    mt={-1}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </Text>
                  <Text color={textColor} fontSize="md" lineHeight="1.7">
                    {text}
                  </Text>
                </Flex>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Box>

        {/* PRODUCT IMAGES */}
        <Box mb={16}>
          <Text fontSize="xs" letterSpacing="0.2em" color="gray.500" mb={10} fontWeight="bold">
            PLATFORM INTERFACE
          </Text>
          <VStack spacing={12}>
            <MotionBox
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.5 }}
              borderRadius="3xl"
              overflow="hidden"
              boxShadow="0 30px 60px rgba(0, 0, 0, 0.15)" // Đổ bóng nhẹ hơn cho light mode
            >
              <WorkImage src="/images/works/noralib_01.png" alt="NoraLib Dashboard" />
            </MotionBox>
          </VStack>
        </Box>

        {/* TECH TAGS */}
        <Box>
          <Text fontSize="xs" letterSpacing="0.2em" color="gray.500" mb={8} fontWeight="bold">
            TECHNOLOGIES & APPROACHES
          </Text>
          <HStack spacing={3} wrap="wrap">
            {[
              'Multi-Tenant SaaS', 'Clean Architecture', 'Domain-Driven Design',
              'Tenant Isolation', 'Custom Domain Routing', 'OAuth Integration',
              'Payment Gateway', 'Scalable Core Platform'
            ].map((tag) => (
              <Tag
                key={tag}
                px={6}
                py={3}
                borderRadius="full"
                bg={tagBg}
                color={subTextColor}
                fontWeight="medium"
                _hover={{ bg: 'cyan.600', color: 'white', transform: 'translateY(-2px)' }}
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