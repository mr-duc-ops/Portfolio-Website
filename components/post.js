import NextLink from 'next/link'
import { Box, Heading, Link } from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons';

export const Title = ({ children }) => (
    <Box>
      <Link as={NextLink} href="/posts">
        Posts
      </Link>
      <span>
        {' '}
        <ChevronRightIcon />{' '}
      </span>
      <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
        {children}
      </Heading>
    </Box>
  )