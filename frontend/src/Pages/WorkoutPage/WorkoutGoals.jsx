import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Input,
  Select,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { BsPlusCircleFill, BsThreeDotsVertical } from "react-icons/bs";
import WorkoutGoalCreateModal from "../../Components/Workout/WorkoutGoalCreateModal";

const WorkoutGoals = () => {
  const {
    isOpen: isCreateOpen,
    onOpen: onCreateOpen,
    onClose: onCreateClose,
  } = useDisclosure();
  const [selectedType, setSelectedType] = useState("daily");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetchGoalsByType(selectedType);
  }, [selectedType, startDate, endDate]);

  const fetchGoalsByType = async (type) => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await axios.get(
        `http://localhost:8080/api/workout-goals/${userId}/${type}`
      );

      setGoals(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(`Error fetching goals:`, error);
      // You can add code here to provide feedback to the user about the error
    }
  };

  const handleChangeType = (event) => {
    setSelectedType(event.target.value);
  };

  const handleClick = () => {
    onCreateOpen();
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  return (
    <div>
      <div className="flex justify-start space-x-20">
        <div className="ml-8 flex justify-between items-center">
          <h1 className="text-2xl m-4 font-semibold">My Goals</h1>
          <BsPlusCircleFill
            className="text-2xl text-blue-400"
            onClick={handleClick}
          />
        </div>
        <div>
          <Select value={selectedType} onChange={handleChangeType}>
            <option value="daily">Daily Goals</option>
            <option value="weekly">Weekly Goals</option>
            <option value="monthly">Monthly Goals</option>
          </Select>
        </div>
        <div>
          <Input
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
          />
          {selectedType !== "daily" && (
            <Input type="date" value={endDate} onChange={handleEndDateChange} />
          )}
        </div>
      </div>
      <div className="flex space-x-4 justify-center">
        <div className="w-[90%]">
          <Card>
            <CardHeader>
              <Flex justify="space-between">
                <Heading size="md">
                  {selectedType.charAt(0).toUpperCase() + selectedType.slice(1)}{" "}
                  Goals
                </Heading>
                <BsThreeDotsVertical />
              </Flex>
            </CardHeader>
            <CardBody>
              <Table size="" variant="simple">
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Description</Th>
                    <Th>Target</Th>
                    <Th>Unit</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {goals.map((goal) => {
                    const goalStartDate = new Date(goal.startDate);
                    const selectedDate = startDate ? new Date(startDate) : null;

                    if (
                      selectedType === "daily" &&
                      selectedDate &&
                      goalStartDate.getDate() === selectedDate.getDate() &&
                      goalStartDate.getMonth() === selectedDate.getMonth() &&
                      goalStartDate.getFullYear() === selectedDate.getFullYear()
                    ) {
                      return goal.activities.map((activity, index) => (
                        <Tr key={index}>
                          <Td>{activity.name}</Td>
                          <Td>{activity.sets}</Td>
                          <Td>{activity.target}</Td>
                          <Td>{activity.unit}</Td>
                        </Tr>
                      ));
                    } else if (
                      selectedType !== "daily" &&
                      (!startDate || goalStartDate >= new Date(startDate)) &&
                      (!endDate ||
                        !goal.endDate ||
                        new Date(goal.endDate) <= new Date(endDate))
                    ) {
                      return goal.activities.map((activity, index) => (
                        <Tr key={index}>
                          <Td>{activity.name}</Td>
                          <Td>{activity.sets}</Td>
                          <Td>{activity.target}</Td>
                          <Td>{activity.unit}</Td>
                        </Tr>
                      ));
                    } else {
                      return null;
                    }
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </div>
      </div>
      <WorkoutGoalCreateModal isOpen={isCreateOpen} onClose={onCreateClose} />
    </div>
  );
};

export default WorkoutGoals;
