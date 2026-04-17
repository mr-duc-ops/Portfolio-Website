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
    <Layout title="NoraAI">
      <Container maxW="container.xl" py={16}>

        {/* HERO SECTION */}
        <VStack spacing={10} align="start" mb={28}>
          <Flex align="center" gap={5} wrap="wrap">
            <Title 
              fontSize={['3.6rem', '4.6rem', '5.6rem']} 
              lineHeight="1.05"
              bgGradient={useColorModeValue(
                "linear(to-r, pink.500, purple.500)", 
                "linear(to-r, #ffffff, #f472b6)"
              )}
              bgClip="text"
              letterSpacing="-0.04em"
            >
              NoraAI
            </Title>
            <Badge
              colorScheme="pink"
              fontSize="lg"
              px={6}
              py={2.5}
              borderRadius="full"
              letterSpacing="wider"
              fontWeight="semibold"
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
            Intelligent AI Agent for Learning Management System using advanced 
            MCP architecture, vector search and multi-layer caching.
          </Heading>

          <P fontSize="lg" maxW="2xl" color={mutedTextColor} lineHeight="1.7">
            Built a powerful AI assistant that enhances learning experience through 
            intelligent content recommendation, automated tutoring, and natural language interaction.
          </P>

          <HStack spacing={6} pt={4}>
            <Link 
              href="https://noraclass.com" 
              target="_blank" 
              isExternal
            >
              <Tag
                size="lg"
                colorScheme="pink"
                px={10}
                py={5}
                borderRadius="full"
                fontWeight="semibold"
                fontSize="md"
                variant="solid" // Làm nút bấm đặc để nổi bật trên nền trắng
                _hover={{ 
                  transform: 'translateY(-4px)', 
                  boxShadow: '0 12px 30px rgba(236, 72, 153, 0.4)' 
                }}
                transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                Experience NoraAI in NoraClass <ExternalLinkIcon ml={3} boxSize={5} />
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
            color="pink.500"
            fontWeight="bold"
          >
            AI Capabilities
          </Text>

          <SimpleGrid columns={[1, 2, 3]} gap={8}>
            {[
              { value: 'MCP', label: 'Multi-Context Processing Architecture' },
              { value: 'Vector', label: 'Semantic Search & Knowledge Base' },
              { value: 'LLM', label: 'Advanced LLM Integration' },
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
                  fontSize="5xl"
                  fontWeight="900"
                  color="pink.500"
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
              <ListItem>• Designed and implemented AI Agent architecture for LMS</ListItem>
              <ListItem>• Built MCP (Multi-Context Processing) system with vector search</ListItem>
              <ListItem>• Integrated multiple LLMs with intelligent routing and fallback</ListItem>
              <ListItem>• Developed multi-layer caching strategy for performance optimization</ListItem>
            </List>
          </MotionBox>

          <MotionBox variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Text fontWeight="bold" fontSize="2xl" mb={10} color={textColor} letterSpacing="-0.02em">
              Core Information
            </Text>
            <List spacing={6} color={subTextColor} fontSize="md" lineHeight="1.8">
              <ListItem>
                <Meta>Platform</Meta> Integrated within NoraClass
              </ListItem>
              <ListItem><Meta>Role</Meta> AI Engineer / Technical Lead</ListItem>
              <ListItem><Meta>Domain</Meta> AI • EdTech • Intelligent Tutoring System</ListItem>
              <ListItem><Meta>Architecture</Meta> MCP Architecture • Vector Search • RAG Pipeline</ListItem>
              <ListItem><Meta>Key Features</Meta> AI Chatbot • Content Recommendation • Automated Tutoring • Semantic Search</ListItem>
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
            <ArrowForwardIcon color="pink.500" boxSize={5} />
          </Flex>

          <SimpleGrid columns={[1, 2]} gap={6}>
            {[
              "Designed MCP (Multi-Context Processing) architecture for handling complex learning contexts",
              "Implemented high-performance vector search and embedding system for educational content",
              "Built intelligent LLM orchestration with routing, fallback and cost optimization",
              "Developed multi-layer caching (Redis + in-memory) to ensure low-latency responses",
              "Created RAG pipeline optimized for educational domain knowledge",
              "Ensured AI responses are accurate, safe and aligned with pedagogical goals",
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
                borderLeftColor="pink.500"
                _hover={{
                  borderLeftColor: "pink.400",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
                }}
              >
                <Flex align="start" gap={5}>
                  <Text 
                    fontSize="2xl" 
                    fontWeight="bold" 
                    color="pink.500" 
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
            AI INTERFACE
          </Text>
          <MotionBox
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.5 }}
            borderRadius="3xl"
            overflow="hidden"
            boxShadow="0 30px 60px rgba(0, 0, 0, 0.15)"
          >
            <WorkImage 
              src="/images/works/nora-ai_01.png" 
              alt="NoraAI - AI Agent Interface" 
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
              'MCP Architecture', 'Vector Search', 'RAG Pipeline',
              'LLM Orchestration', 'Multi-Layer Caching', 'Semantic Search',
              'AI Agent', 'Educational AI'
            ].map((tag) => (
              <Tag
                key={tag}
                px={6}
                py={3}
                borderRadius="full"
                bg={tagBg}
                color={subTextColor}
                fontWeight="medium"
                _hover={{ bg: 'pink.600', color: 'white', transform: 'translateY(-2px)' }}
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