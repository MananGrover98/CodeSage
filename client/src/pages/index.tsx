// index.tsx
import { Box, Heading, Button } from '@chakra-ui/react';
import Link from 'next/link';

export default function Home() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="xl" mb={6}>
        Welcome to CodeSage
      </Heading>
      <Link href="/learn">
        <Button colorScheme="teal" size="lg" mb={4}>
          Start Learning
        </Button>
      </Link>
      <Link href="/marketplace">
        <Button colorScheme="blue" size="lg">
          Explore Marketplace
        </Button>
      </Link>
    </Box>
  );
}
