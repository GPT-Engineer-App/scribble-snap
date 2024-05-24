import { Box, Container, Flex, Heading, IconButton, Input, Text, Textarea, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNote = () => {
    if (title.trim() && content.trim()) {
      setNotes([...notes, { title, content }]);
      setTitle("");
      setContent("");
    }
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="center">
        <Heading size="lg">Note Taking App</Heading>
      </Flex>
      <VStack spacing={4} mt={4}>
        <Box w="100%">
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            mb={2}
          />
          <Textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            mb={2}
          />
          <IconButton
            aria-label="Add Note"
            icon={<FaPlus />}
            onClick={addNote}
            colorScheme="blue"
          />
        </Box>
        <VStack spacing={4} w="100%">
          {notes.map((note, index) => (
            <Box key={index} p={4} shadow="md" borderWidth="1px" w="100%">
              <Flex justifyContent="space-between" alignItems="center">
                <Box>
                  <Heading size="md">{note.title}</Heading>
                  <Text mt={2}>{note.content}</Text>
                </Box>
                <IconButton
                  aria-label="Delete Note"
                  icon={<FaTrash />}
                  onClick={() => deleteNote(index)}
                  colorScheme="red"
                />
              </Flex>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;