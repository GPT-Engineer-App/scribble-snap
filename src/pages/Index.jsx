import { useState } from "react";
import { Box, Container, VStack, HStack, Input, Textarea, Button, Heading, IconButton, Text } from "@chakra-ui/react";
import { FaTrash, FaPlus } from "react-icons/fa";

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
      <Heading mb={6} textAlign="center">Note Taking App</Heading>
      <VStack spacing={4} mb={6}>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={addNote}>
          Add Note
        </Button>
      </VStack>
      <VStack spacing={4}>
        {notes.map((note, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="lg" w="100%">
            <HStack justifyContent="space-between">
              <Box>
                <Heading size="md">{note.title}</Heading>
                <Text mt={2}>{note.content}</Text>
              </Box>
              <IconButton
                aria-label="Delete Note"
                icon={<FaTrash />}
                colorScheme="red"
                onClick={() => deleteNote(index)}
              />
            </HStack>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;