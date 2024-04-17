// Complete the Index page component here
// Use chakra-ui
import React from "react";
import { Box, Text, Input, Button, VStack, Image } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  // State to hold the search term
  const [searchTerm, setSearchTerm] = React.useState("amtico flooring");
  const [iframeUrl, setIframeUrl] = React.useState(`https://www.pinterest.com/search/pins/?q=amtico%20flooring`);

  // Function to handle search input changes
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to update the iframe URL based on the search term
  const handleSearch = () => {
    setIframeUrl(`https://www.pinterest.com/search/pins/?q=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <VStack spacing={4} p={5}>
      <Text fontSize="2xl" fontWeight="bold">
        Pinterest Image Search
      </Text>
      <Box>
        <Input placeholder="Search for images" value={searchTerm} onChange={handleSearchChange} size="md" width="300px" />
        <Button onClick={handleSearch} leftIcon={<FaSearch />} colorScheme="blue" ml={2}>
          Search
        </Button>
      </Box>
      <Box border="1px" borderColor="gray.200" w="full" h="500px">
        <iframe src={iframeUrl} width="100%" height="100%" style={{ border: "none" }} title="Pinterest Search Results"></iframe>
      </Box>
    </VStack>
  );
};

export default Index;
