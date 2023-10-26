import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";


const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const payload = {
      name,
      email,
      password,
    };
    fetch("http://localhost:7500/users/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.msg === "New User has been registered") {
          toast({
            title: "Registration Successful",
            description: "New user has been registered.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          navigate("/login");
        } else if (res.msg === "Email ID already exists") {
          toast({
            title: "Registration Failed",
            description: "Email ID already exists.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };
  
  return (
   <>
  
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={'#D0D0D5'} >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} >
        
        <Box
          rounded={"lg"}
          bg={'#FFF'}
          boxShadow={"lg"}
          p={8}
        >
          <Stack align={"center"}>
          <Heading fontSize={"3xl"} textAlign={"center"} color={"#1B1B32"}>
            Log in to freeCodeCamp Learn
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
          
          </Text>
        </Stack>
          <Stack spacing={4}>
            <HStack>
              
                <FormControl id="firstName" isRequired>
                  <FormLabel> Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
              
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleSubmit}
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user? <Link color={"blue.400"}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
   
    </>
  );
};
export { Register };
