// pages/posts/[slug].js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import React, { useState, useEffect } from 'react';
import remarkGfm from 'remark-gfm';

import {
  Container,
  VStack,
  HStack,
  Divider,
  Box,
  Text,
  Flex,
  Badge,
  Avatar,
  Icon,
  Button,
  Link as ChakraLink,
  useColorModeValue,
} from '@chakra-ui/react';

import { ExternalLinkIcon } from '@chakra-ui/icons';
import { FaCalendarAlt } from 'react-icons/fa';

import Layout from '../../components/layouts/article';
import { Title as PostTitle } from '../../components/post';
import { MDXComponents } from '../../components/mdx/MDXComponents';

const PostPage = ({ source, frontMatter }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const titleColor = useColorModeValue('gray.900', 'white');
  const descColor = useColorModeValue('gray.600', 'gray.400');
  const metaColor = useColorModeValue('gray.500', 'gray.400');
  const borderColor = useColorModeValue('gray.100', 'whiteAlpha.100');
  const signatureBg = useColorModeValue('gray.50', 'whiteAlpha.50');
  const signatureColor = useColorModeValue('teal.600', 'teal.300');

  const formatDate = (date) => {
    if (!date) return '';
    try {
      return new Date(date).toLocaleDateString('vi-VN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (e) {
      return '';
    }
  };

  const parseContact = (str) => {
    const urlRegex = /^(https?:\/\/)/i;
    if (urlRegex.test(str)) {
      return {
        isUrl: true,
        href: str,
        text: str.replace(/^https?:\/\/(www\.)?/, '')
      };
    }
    return { isUrl: false, text: str };
  };

  return (
    <Layout title={frontMatter.title}>
      <Container maxW="container.md" py={12}>
        <VStack align="start" spacing={8} mb={16}>
          <Flex align="center" gap={4} wrap="wrap">
            <Box>
              <PostTitle 
                fontSize={['3xl', '4xl', '5xl']} 
                lineHeight="1.1" 
                fontWeight="800" 
                letterSpacing="-0.04em" 
                color={titleColor}
              >
                {frontMatter.title}
              </PostTitle>
            </Box>
            <Badge
              colorScheme="teal"
              fontSize="lg"
              px={5}
              py={2}
              borderRadius="full"
              letterSpacing="wider"
            >
              {frontMatter.type || 'Technical Article'}
            </Badge>
            {frontMatter.description && (
              <Text 
                fontSize="xl" 
                color={descColor} 
                lineHeight="1.7" 
                borderLeft="2px solid" 
                borderColor="teal.500" 
                pl={6}
              >
                {frontMatter.description}
              </Text>
            )}
          </Flex>

          <Flex w="full" justify="space-between" align="center">
            <HStack spacing={4}>
              <Avatar 
                name={frontMatter.author?.name} 
                src={frontMatter.author?.avatar} 
                border="2px solid" 
                borderColor="teal.500" 
              />
              <VStack align="start" spacing={0}>
                <Text fontWeight="bold" color={titleColor}>
                  {frontMatter.author?.name}
                </Text>
                <HStack spacing={2} color={metaColor}>
                  <Icon as={FaCalendarAlt} boxSize={3} />
                  <Text fontSize="xs">
                    {mounted ? formatDate(frontMatter.date) : ''}
                  </Text>
                </HStack>
              </VStack>
            </HStack>

            {frontMatter.externalUrl && (
              <Button 
                as={ChakraLink} 
                href={frontMatter.externalUrl} 
                isExternal 
                colorScheme="teal" 
                size="sm" 
                rounded="full" 
                rightIcon={<ExternalLinkIcon />} 
                _hover={{ textDecoration: 'none' }}
              >
                Tài liệu gốc
              </Button>
            )}
          </Flex>
          <Divider borderColor={borderColor} />
        </VStack>

        {/* Phần MDX */}
        <Box as="article">
          <MDXRemote {...source} components={MDXComponents()} />
        </Box>

        {frontMatter.signatures && (
          <Box mt={20} p={10} rounded="3xl" bg={signatureBg} textAlign="center">
            <Text 
              fontSize="3xl" 
              fontWeight="bold" 
              fontFamily="serif" 
              color={signatureColor} 
              mb={4}
            >
              {frontMatter.signatures.name}
            </Text>
            <HStack justify="center" spacing={6} flexWrap="wrap">
              {frontMatter.signatures.contacts?.map((contact, index) => {
                const parsed = parseContact(contact);
                return parsed.isUrl ? (
                  <ChakraLink 
                    key={index} 
                    href={parsed.href} 
                    isExternal 
                    color="gray.500" 
                    fontSize="sm" 
                    fontWeight="600" 
                    _hover={{ color: 'teal.500', textDecoration: 'none' }}
                  >
                    {parsed.text}
                  </ChakraLink>
                ) : (
                  <Text key={index} color="gray.500" fontSize="sm" fontWeight="600">
                    {parsed.text}
                  </Text>
                );
              })}
            </HStack>
          </Box>
        )}
      </Container>
    </Layout>
  );
};

export default PostPage;

export async function getServerSideProps({ params, req }) {
  const POSTS_PATH = path.join(process.cwd(), 'content/posts');
  const slug = params.slug;
  const fullPath = path.join(POSTS_PATH, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return { notFound: true };
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
      development: process.env.NODE_ENV === 'development',
    },
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: {
        ...data,
        date: data.date ? new Date(data.date).toISOString() : null,
      },
      cookies: req.headers.cookie ?? '',
    },
  };
}