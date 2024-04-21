import React, { useState } from "react";
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
import WorkoutGoalUpdateModal from "../../Components/Workout/WorkoutGoalUpdateModal";

const WorkoutGoals = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [distance, setDistance] = useState(0);
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [hour, setHour] = useState(0);

  const handleClick = () => {
    onOpen();
  };

  const handleDistance = (e) => {
    setDistance(e.target.value);
  };

  const handleSets = (e) => {
    setSets(e.target.value);
  };

  const handleReps = (e) => {
    setReps(e.target.value);
  };

  const handleHour = (e) => {
    setHour(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-start space-x-20">
        <div className="w-[40%] ml-8">
          <h1 className="text-2xl m-4 font-semibold">Dialy Goals</h1>
          <hr />
          <div>
            <Stack>
              <Card size="xs">
                <CardBody>
                  <div className="">
                    <TableContainer>
                      <Table variant="simple">
                        <Thead>
                          <Tr>
                            <Th>Name</Th>
                            <Th>Descrption</Th>
                            <Th>Target</Th>
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
                              <span>-</span>
                            </Td>
                            <Td>
                              <Input
                                style={{ width: "4rem" }}
                                className="mr-2"
                                onChange={handleDistance}
                                value={distance}
                              ></Input>
                              <span>km</span>
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
                              <Input
                                style={{ width: "4rem" }}
                                className="mr-2"
                                onChange={handleSets}
                                value={sets}
                              ></Input>
                              <span>Sets</span>
                            </Td>
                            <Td>
                              <Input
                                style={{ width: "4rem" }}
                                className="mr-2"
                                onChange={handleReps}
                                value={reps}
                              ></Input>
                              <span>Reps</span>
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
                              <span>-</span>
                            </Td>
                            <Td>
                              <Input
                                style={{ width: "4rem" }}
                                className="mr-2"
                                onChange={handleHour}
                                value={hour}
                              ></Input>
                              <span>Hour</span>
                            </Td>
                          </Tr>
                        </Tbody>
                      </Table>
                      <div className="float-end m-4 text-2xl cursor-pointer">
                        <Button onClick={handleClick} className="text-blue-400">
                          Update
                        </Button>
                      </div>
                    </TableContainer>
                  </div>
                  <Text></Text>
                </CardBody>
              </Card>
            </Stack>
          </div>
        </div>
        <div className="w-[40%]">
          <h1 className="text-2xl m-4 font-semibold">Weekly Goals</h1>
          <hr />
          <div>
            <Stack>
              <Card size="xs">
                <CardBody>
                  <div className="">
                    <TableContainer>
                      <Table variant="simple">
                        <Thead>
                          <Tr>
                            <Th>Name</Th>
                            <Th>Descrption</Th>
                            <Th>Target</Th>
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
                              <span>-</span>
                            </Td>
                            <Td>
                              <Input
                                style={{ width: "4rem" }}
                                className="mr-2"
                              ></Input>
                              <span>km</span>
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
                              <Input
                                style={{ width: "4rem" }}
                                className="mr-2"
                              ></Input>
                              <span>Sets</span>
                            </Td>
                            <Td>
                              <Input
                                style={{ width: "4rem" }}
                                className="mr-2"
                              ></Input>
                              <span>Reps</span>
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
                              <span>-</span>
                            </Td>
                            <Td>
                              <Input
                                style={{ width: "4rem" }}
                                className="mr-2"
                              ></Input>
                              <span>Hour</span>
                            </Td>
                          </Tr>
                        </Tbody>
                      </Table>
                      <div className="float-end m-4 text-2xl cursor-pointer">
                        <Button>Update</Button>
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
      <div className="w-[40%] ml-8">
        <h1 className="text-2xl m-4 font-semibold">Monthly Goals</h1>
        <hr />
        <div>
          <Stack>
            <Card size="xs">
              <CardBody>
                <div className="">
                  <TableContainer>
                    <Table variant="simple">
                      <Thead>
                        <Tr>
                          <Th>Name</Th>
                          <Th>Descrption</Th>
                          <Th>Target</Th>
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
                            <span>-</span>
                          </Td>
                          <Td>
                            <Input
                              style={{ width: "4rem" }}
                              className="mr-2"
                            ></Input>
                            <span>km</span>
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
                            <Input
                              style={{ width: "4rem" }}
                              className="mr-2"
                            ></Input>
                            <span>Sets</span>
                          </Td>
                          <Td>
                            <Input
                              style={{ width: "4rem" }}
                              className="mr-2"
                            ></Input>
                            <span>Reps</span>
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
                            <span>-</span>
                          </Td>
                          <Td>
                            <Input
                              style={{ width: "4rem" }}
                              className="mr-2"
                            ></Input>
                            <span>Hour</span>
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                    <div className="float-end m-4 text-2xl cursor-pointer">
                      <Button>Update</Button>
                    </div>
                  </TableContainer>
                </div>
                <Text></Text>
              </CardBody>
            </Card>
          </Stack>
        </div>
      </div>
      <WorkoutGoalUpdateModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default WorkoutGoals;
