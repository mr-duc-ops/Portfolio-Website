'use client';

import React from 'react';
import { useColorModeValue } from '@chakra-ui/react';
import {
  Heading,
  Text,
  Box,
  Divider,
  Link,
  Image as ChakraImage,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Icon,
} from '@chakra-ui/react';
import { FaQuoteLeft } from 'react-icons/fa';

export function MDXComponents() {
  const textColor = useColorModeValue('gray.700', 'gray.300');
  const titleColor = useColorModeValue('gray.900', 'white');
  const subColor = useColorModeValue('gray.800', 'gray.200');
  const quoteBg = useColorModeValue('teal.50', 'whiteAlpha.50');
  const quoteText = useColorModeValue('gray.600', 'gray.400');
  const imgBorder = useColorModeValue('gray.100', 'whiteAlpha.200');
  const hrColor = useColorModeValue('gray.200', 'whiteAlpha.300');
  const tableBorder = useColorModeValue('gray.200', 'gray.600');
  const theadBg = useColorModeValue('gray.50', 'gray.700');
  const rowHoverBg = useColorModeValue('gray.50', 'gray.700');
  const thColor = useColorModeValue('gray.700', 'gray.200');
  const tdColor = useColorModeValue('gray.700', 'gray.300');

  return {
    pre: (props) => (
      <Box
        as="pre"
        position="relative"
        bg="#0B0F14"
        color="#E6EDF3"
        p={0}
        rounded="xl"
        overflow="hidden"
        my={10}
        fontSize="0.9em"
        lineHeight="1.7"
        border="1px solid rgba(255,255,255,0.08)"
        boxShadow="0 10px 30px rgba(0,0,0,0.4)"
      >
        {/* header */}
        <Box
          px={4}
          py={2}
          bg="rgba(255,255,255,0.03)"
          borderBottom="1px solid rgba(255,255,255,0.06)"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          fontSize="0.75em"
          color="gray.400"
        >
          <Box display="flex" gap={2}>
            <Box w="8px" h="8px" bg="#FF5F56" rounded="full" />
            <Box w="8px" h="8px" bg="#FFBD2E" rounded="full" />
            <Box w="8px" h="8px" bg="#27C93F" rounded="full" />
          </Box>
          <Box opacity={0.6}>code</Box>
        </Box>
    
        {/* content */}
        <Box
          px={5}
          py={4}
          overflowX="auto"
          fontFamily="mono"
        >
          {props.children}
        </Box>
      </Box>
    ),
    
    code: (props) => (
      <Box
        as="code"
        px="6px"
        py="3px"
        rounded="6px"
        bg="rgba(110, 118, 129, 0)"
        color="#79C0FF"
        fontSize="0.8em"
        fontWeight="500"
        border="1px solid rgba(255,255,255,0.08)"
        backdropFilter="blur(6px)"
        {...props}
      />
    ),
    h1: (props) => (
      <Heading
        as="h1"
        size="xl"
        mt={14}
        mb={6}
        textAlign="center"
        lineHeight="1.2"
        letterSpacing="-0.02em"
        color={titleColor}
        {...props}
      />
    ),

    h2: (props) => (
      <Heading
        as="h2"
        size="lg"
        mt={12}
        mb={5}
        pb={2}
        borderBottom="2px solid"
        borderColor="teal.500"
        color="teal.500"
        _dark={{ color: 'teal.300', borderColor: 'teal.300' }}
        lineHeight="1.3"
        {...props}
      />
    ),

    h3: (props) => (
      <Heading
        as="h3"
        size="md"
        mt={10}
        mb={4}
        color={subColor}
        {...props}
      />
    ),

    p: (props) => (
      <Text
        as="div"
        mb={6}
        fontSize="lg"
        lineHeight="1.8"
        color={textColor}
        {...props}
      />
    ),

    ul: (props) => (
      <Box
        as="ul"
        pl={6}
        mb={6}
        sx={{ 'li::marker': { color: 'teal.500' } }}
        {...props}
      />
    ),

    li: (props) => (
      <Box as="li" mb={3} color={textColor} lineHeight="1.8" {...props} />
    ),

    strong: (props) => (
      <Box as="strong" fontWeight="bold" color="teal.500" {...props} />
    ),

    hr: () => <Divider my={12} borderColor={hrColor} />,

    blockquote: (props) => (
      <Box
        my={10}
        pl={8}
        pr={6}
        py={6}
        borderLeft="4px solid"
        borderColor="teal.500"
        bg={quoteBg}
        roundedRight="xl"
        position="relative"
        _dark={{ borderColor: 'teal.400' }}
      >
        <Icon as={FaQuoteLeft} position="absolute" top={4} left={3} boxSize={5} color="teal.300" />
        <Box fontStyle="italic" fontSize="lg" lineHeight="1.8" color={quoteText}>
          {props.children}
        </Box>
      </Box>
    ),

    a: (props) => (
      <Link
        href={props.href}
        isExternal={props.href?.startsWith('http')}
        color="teal.500"
        fontWeight="600"
        _hover={{ textDecoration: 'underline' }}
        {...props}
      />
    ),

    img: (props) => (
      <Box as="span" display="block" my={10} textAlign="center">
        <ChakraImage
          src={props.src}
          alt={props.alt}
          mx="auto"
          rounded="lg"
          shadow="xl"
          border="1px solid"
          borderColor={imgBorder}
          _dark={{ borderColor: 'whiteAlpha.200' }}
          display="inline-block"
        />
        {props.alt && (
          <Text 
            as="span" 
            display="block" 
            mt={3} 
            fontSize="sm" 
            color="gray.500" 
            fontStyle="italic"
            _dark={{ color: 'gray.400' }}
          >
            {props.alt}
          </Text>
        )}
      </Box>
    ),

    table: (props) => (
      <Box my={8} overflowX="auto" borderRadius="lg" boxShadow="sm">
        <Table
          variant="striped"
          colorScheme="gray"
          size="md"
          __css={{ 'th, td': { borderColor: tableBorder } }}
          _dark={{ __css: { 'th, td': { borderColor: 'gray.600' } } }}
          {...props}
        />
      </Box>
    ),

    thead: (props) => <Thead bg={theadBg} {...props} />,
    tbody: (props) => <Tbody {...props} />,
    tr: (props) => (
      <Tr _hover={{ bg: rowHoverBg }} _dark={{ _hover: { bg: 'gray.700' } }} {...props} />
    ),
    th: (props) => (
      <Th
        py={4}
        fontWeight="600"
        textAlign="left"
        color={thColor}
        whiteSpace="nowrap"
        {...props}
      />
    ),
    td: (props) => <Td py={4} color={tdColor} {...props} />,
  };
}