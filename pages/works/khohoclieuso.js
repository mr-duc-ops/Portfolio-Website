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
  const dividerColor = useColorModeValue('black.200', 'whiteAlpha.200')
  const tagBg = useColorModeValue('gray.100', 'whiteAlpha.100')

  return (
    <Layout title="Kho Học Liệu Số">
      <Container maxW="container.xl" py={16}>

        {/* HERO SECTION */}
        <VStack spacing={10} align="start" mb={28}>
          <Flex align="center" gap={5} wrap="wrap">
            <Title 
              fontSize={['3.6rem', '4.6rem', '5.6rem']} 
              lineHeight="1.05"
              bgGradient={useColorModeValue(
                "linear(to-r, indigo.600, blue.500)", 
                "linear(to-r, #ffffff, #a5b4fc)"
              )}
              bgClip="text"
              letterSpacing="-0.04em"
            >
              Kho Học Liệu Số
            </Title>
            <Badge
              colorScheme="indigo"
              fontSize="lg"
              px={6}
              py={2.5}
              borderRadius="full"
              letterSpacing="wider"
              fontWeight="semibold"
              boxShadow={useColorModeValue('0 4px 12px rgba(79, 70, 229, 0.2)', 'none')}
            >
              2024 – Present
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
            Modern Learning Management System and digital content platform 
            powering scalable education and training programs.
          </Heading>

          <P fontSize="lg" maxW="2xl" color={mutedTextColor} lineHeight="1.7">
            Core internal LMS platform that serves as the foundation for multiple 
            education products, including NoraClass and NoraLib.
          </P>

          <HStack spacing={6} pt={4}>
            <Link 
              href="https://khohoclieuso.com" 
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
                Visit Platform <ExternalLinkIcon ml={3} boxSize={5} />
              </Tag>
            </Link>
          </HStack>
        </VStack>

        <Divider mb={24} borderColor={dividerColor} />

        {/* KEY IMPACT */}
        <Box mb={28}>
          <Text
            fontSize="xs"
            letterSpacing="0.2em"
            textTransform="uppercase"
            mb={12}
            color="indigo.600"
            fontWeight="bold"
          >
            Platform Impact
          </Text>

          <SimpleGrid columns={[1, 2, 3]} gap={8}>
            {[
              { value: 'Core LMS', label: 'Foundation for Multiple Products' },
              { value: 'Reusable', label: 'Modular & Scalable Architecture' },
              { value: 'Enterprise', label: 'Supports National-scale Usage' },
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
                  fontSize="3xl"
                  fontWeight="900"
                  color="indigo.500"
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
              Role & Contributions
            </Text>
            <List spacing={6} color={subTextColor} fontSize="md" lineHeight="1.8">
              <ListItem>• Core platform development & architecture</ListItem>
              <ListItem>• Built reusable services used across NoraClass and NoraLib</ListItem>
              <ListItem>• Implemented modern LMS features and content management system</ListItem>
              <ListItem>• Optimized for performance and scalability</ListItem>
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
                  href="https://khohoclieuso.com" 
                  target="_blank" 
                  color="indigo.600"
                  fontWeight="medium"
                  _hover={{ color: 'indigo.500', textDecoration: 'underline' }}
                >
                  khohoclieuso.com <ExternalLinkIcon mx="2px" />
                </Link>
              </ListItem>
              <ListItem><Meta>Role</Meta> Full Stack Engineer → Technical Lead</ListItem>
              <ListItem><Meta>Domain</Meta> LMS • Digital Education • Content Platform</ListItem>
              <ListItem><Meta>Architecture</Meta> Modular Design • Reusable Core Services • Scalable Backend</ListItem>
              <ListItem><Meta>Key Features</Meta> Digital Content Management • Training Programs • Modern Learning Experience</ListItem>
            </List>
          </MotionBox>
        </SimpleGrid>

        <Divider mb={20} borderColor={dividerColor} />

        {/* TECHNICAL HIGHLIGHTS */}
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
            <ArrowForwardIcon color="indigo.500" boxSize={5} />
          </Flex>

          <SimpleGrid columns={[1, 2]} gap={6}>
            {[
              "Developed core LMS services serving as foundation for multiple education products",
              "Built modular architecture allowing fast feature development and reusability",
              "Implemented efficient digital content management and delivery system",
              "Optimized performance for large-scale user access and resource loading",
              "Designed clean separation between core platform and product-specific features",
              "Applied modern development practices for maintainability and scalability",
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
                borderLeftColor="indigo.500"
                _hover={{
                  borderLeftColor: "indigo.400",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
                }}
              >
                <Flex align="start" gap={5}>
                  <Text 
                    fontSize="2xl" 
                    fontWeight="bold" 
                    color="indigo.500" 
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

        {/* PRODUCT IMAGE */}
        <Box mb={16}>
          <Text fontSize="xs" letterSpacing="0.2em" color="gray.500" mb={10} fontWeight="bold">
            PLATFORM INTERFACE
          </Text>
          <MotionBox
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.5 }}
            borderRadius="3xl"
            overflow="hidden"
            boxShadow="0 30px 60px rgba(0, 0, 0, 0.15)"
          >
            <WorkImage 
              src="/images/works/nora-os_01.png" 
              alt="Kho Học Liệu Số - Learning Management Platform" 
            />
          </MotionBox>
        </Box>

        {/* TECH TAGS */}
        <Box>
          <Text fontSize="xs" letterSpacing="0.2em" color="gray.500" mb={8} fontWeight="bold">
            TECHNOLOGIES & APPROACHES
          </Text>
          <HStack spacing={3} wrap="wrap">
            {[
              'Learning Management System', 'Digital Content Platform',
              'Modular Architecture', 'Reusable Core Services',
              'Scalable Backend', 'Modern Education Tools',
              'Performance Optimization'
            ].map((tag) => (
              <Tag
                key={tag}
                px={6}
                py={3}
                borderRadius="full"
                bg={tagBg}
                color={subTextColor}
                fontWeight="medium"
                _hover={{ bg: 'indigo.600', color: 'white', transform: 'translateY(-2px)' }}
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