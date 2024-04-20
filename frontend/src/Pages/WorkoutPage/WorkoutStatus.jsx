import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Image,
  Input,
  Select,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaRunning } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { FaRegShareFromSquare } from "react-icons/fa6";

import { BiChat, BiLike, BiShare } from "react-icons/bi";
import WorkoutProfileUpdateModal from "../../Components/Workout/WorkoutProfileUpdateModal";
import { TbActivityHeartbeat } from "react-icons/tb";

const WorkoutStatus = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [height, setHeight] = useState(1.2);
  const [weight, setWeight] = useState(60);
  const [bmi, setBmi] = useState(20);
  const [calories, setCalories] = useState(2000);

  const handleClick = () => {
    onOpen();
  };

  const handleHeight = (e) => {
    setHeight(e.target.value);
  };
  const handleWeight = (e) => {
    setWeight(e.target.value);
  };
  const handleBmi = (e) => {
    setBmi(e.target.value);
  };
  const handleCalories = (e) => {
    setCalories(e.target.value);
  };

  return (
    <div>
      <div className="flex">
        <Card maxW="md" className="ml-4 mt-20 w-[50%]">
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />

                <Box>
                  <Heading size="sm">Segun Adebayo</Heading>
                  <Text>Creator, Chakra UI</Text>
                </Box>
              </Flex>
              <IconButton
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
                icon={<BsThreeDotsVertical />}
              />
            </Flex>
          </CardHeader>
          <CardBody>
            <div>
              <label htmlFor="" className="font-semibold">
                Height
              </label>
              <Input onChange={handleHeight} value={height}></Input>
            </div>
            <div className="mt-4">
              <label htmlFor="" className="font-semibold">
                Weight
              </label>
              <Input onChange={handleWeight} value={weight}></Input>
            </div>
            <div className="mt-4">
              <label htmlFor="" className="font-semibold mt-4">
                Bmi
              </label>
              <Input onChange={handleBmi} value={bmi}></Input>
            </div>
            <div className="mt-4">
              <label htmlFor="" className="font-semibold">
                Calories
              </label>
              <Input onChange={handleCalories} value={calories}></Input>
            </div>
            <Button onClick={handleClick} className="text-4xl mt-4 float-end">
              Update
            </Button>
          </CardBody>

          <CardFooter
            justify="space-between"
            flexWrap="wrap"
            sx={{
              "& > button": {
                minW: "136px",
              },
            }}
          ></CardFooter>
        </Card>
        <div className="ml-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <TbActivityHeartbeat />
              <h1 className="text-2xl m-4 font-semibold">Workout Status</h1>
              <hr />
            </div>

            <div className="float-end">
              <Select placeholder="Select option">
                <option value="option1">Daily</option>
                <option value="option2">Weekly</option>
                <option value="option3">Monthly</option>
              </Select>
            </div>
          </div>
          <div>
            <Stack>
              <Card size="md">
                <CardBody>
                  <div className="">
                    <TableContainer>
                      <Table variant="simple">
                        <Thead>
                          <Tr>
                            <Th>Name</Th>
                            <Th>Goal</Th>
                            <Th>Archievment</Th>
                            <Th>Status</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Td>
                              <div className="flex">
                                <FaRunning className="text-xl" />
                                <h2 className="ml-2">Running</h2>
                              </div>
                            </Td>
                            <Td>
                              10 <span>(km)</span>
                            </Td>
                            <Td>
                              {" "}
                              12 <span>(km)</span>
                            </Td>
                            <Td>
                              <TiTick className="font-bold text-green-600 text-xl" />
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>
                              <div className="flex">
                                <GiWeightLiftingUp className="text-xl" />
                                <h2 className="ml-2">Weight Lifting</h2>
                              </div>
                            </Td>
                            <Td>
                              <Flex justify="space-between">
                                <Text>10 Reps</Text>
                              </Flex>
                              <Flex justify="space-between">
                                <Text>Using 3 Sets</Text>
                              </Flex>
                            </Td>
                            <Td>
                              <Flex justify="space-between">
                                <Text>8 Reps</Text>
                              </Flex>
                              <Flex justify="space-between">
                                <Text>Using 3 Sets</Text>
                              </Flex>
                            </Td>

                            <Td>
                              <IoClose className="font-bold text-red-600 text-xl" />
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>
                              <div className="flex">
                                <GrYoga className="text-xl" />
                                <h2 className="ml-2">Yoga</h2>
                              </div>
                            </Td>
                            <Td>
                              <Text>1 Hour</Text>
                            </Td>
                            <Td>
                              <Text>1 Hour</Text>
                            </Td>
                            <Td>
                              <TiTick className="font-bold text-green-600 text-xl" />
                            </Td>
                          </Tr>
                        </Tbody>
                      </Table>
                      <div className="float-end m-4 text-2xl cursor-pointer">
                        <FaRegShareFromSquare />
                      </div>
                    </TableContainer>
                  </div>
                  <Text></Text>
                </CardBody>
              </Card>
            </Stack>
          </div>
        </div>
      </div>
      <WorkoutProfileUpdateModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default WorkoutStatus;
