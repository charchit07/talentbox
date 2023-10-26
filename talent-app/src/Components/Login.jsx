import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { useToast } from "@chakra-ui/react";

  import React, { useState } from "react";
  const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const toast = useToast();
    const handleSubmit = () => {
      const payload = {
        email,
        password,
      };
      fetch("http://localhost:7500/users/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((res) => {
          setMessage(res.msg);
          localStorage.setItem("token", res.token);
    
          if (res.msg === "Login Successful") {
            toast({
              title: "Login Successful",
              description: "You are now logged in.",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
    
    
            window.location.href = "/course";
          }
        })
        .catch((err) => console.log(err));
    };
    
    return (
      <Flex minH={"100vh"} align={"center"} justify={"center"} bg={'#D0D0D5'}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>

          <Box rounded={"lg"} boxShadow={"lg"} 
            bg={'#FFF'}
          p={8}>
            <Stack spacing={4}>
            <Stack align={"center"}>
            <Heading fontSize={"4xl"}>LOGIN to your account</Heading>

          </Stack>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  onClick={handleSubmit}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  LOGIN
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  };
  
  export { Login };
  