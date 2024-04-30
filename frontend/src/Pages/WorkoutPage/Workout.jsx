import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { FaRunning } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { AiFillPlusCircle } from "react-icons/ai";
import WorkoutCreateModal from "../../Components/Workout/WorkoutCreateModal";
import {
  Card,
  CardBody,
  Flex,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { TiTick } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { TbActivityHeartbeat } from "react-icons/tb";
const Workout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
      {
        label: "My Second dataset",
        backgroundColor: "rgb(255, 99, 100)",
        borderColor: "rgb(225, 59, 100)",
        data: [0, 1, 4, 6, 24, 23, 42],
      },
      {
        label: "My Second dataset",
        backgroundColor: "rgb(255, 99, 100)",
        borderColor: "rgb(225, 59, 100)",
        data: [7, 10, 34, 23, 12, 27, 4],
      },
    ],
  };
  const handleClick = () => {
    onOpen();
  };

  return (
    <div>
      <div className="flex">
        <div className="w-[50%]">
          <div>
            <h1 className="text-2xl m-4 font-semibold">Fitness Activity</h1>
          </div>
          <div>
            <Line data={data} className="ml-4" />
          </div>
        </div>

        <div className="ml-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <TbActivityHeartbeat />
              <h1 className="text-2xl m-4 font-semibold">Last Workout</h1>
              <hr />
            </div>
            <div>
              <AiFillPlusCircle
                onClick={handleClick}
                className="text-4xl mr-4"
              />
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
                            <Th>Details</Th>
                            <Th>Duration</Th>
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
                              5 <span>(km)</span>
                            </Td>
                            <Td>
                              {" "}
                              120 <span>(min)</span>
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
                              120 <span>(min)</span>
                            </Td>

                            <Td>
                              <TiTick className="font-bold text-green-600 text-xl" />
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
      <div>
        <div>
          <h1 className="text-2xl m-4 font-semibold">Workout Summery</h1>

          <hr />

          <div>
            <Card size="md" className="w-[50%] m-4 ">
              <CardBody className="flex space-x-8">
                <div>
                  <h2 className="font-bold">Running</h2>
                  <p>5 km</p>
                  <p>120 min</p>
                </div>

                <div>
                  <h2 className="font-bold">Weight Lifting</h2>
                  <p>10 Reps</p>
                  <p>120 min</p>
                </div>
                <div>
                  <h2 className="font-bold">Yoga</h2>
                  <p>1 Hour</p>
                  <p>1 Hour</p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <WorkoutCreateModal onClose={onClose} isOpen={isOpen} />
    </div>
  );
};

export default Workout;
