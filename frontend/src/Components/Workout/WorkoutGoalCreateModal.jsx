import React, { useState } from "react";
import axios from "axios"; // Import Axios for making HTTP requests
import {
  Button,
  Card,
  CardBody,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Select,
} from "@chakra-ui/react";

import { FaRunning, FaSwimmer } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";

const WorkoutGoalCreateModal = ({ onClose, isOpen }) => {
  const [activities, setActivities] = useState([]);
  const [availableActivities, setAvailableActivities] = useState([
    { name: "Running", desc: "-", unit: "km" },
    { name: "Weight Lifting", desc: "Sets", unit: "Reps" },
    { name: "Yoga", desc: "-", unit: "Hour" },
    { name: "Swimming", desc: "-", unit: "Hour" },
  ]);
  const [goalType, setGoalType] = useState("daily");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const addActivity = (name, desc, unit) => {
    setActivities([...activities, { name, desc, unit, target: "" }]);
    setAvailableActivities(
      availableActivities.filter((activity) => activity.name !== name)
    );
  };

  const removeActivity = (index) => {
    const removedActivity = activities[index];
    setActivities(activities.filter((activity, i) => i !== index));
    setAvailableActivities([...availableActivities, removedActivity]);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...activities];
    list[index][name] = value;
    setActivities(list);
  };

  const handleGoalTypeChange = (event) => {
    setGoalType(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const userId = localStorage.getItem("userId");

  const saveWorkoutGoal = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/workout-goals/${userId}`,
        {
          type: goalType,
          startDate,
          endDate,
          activities,
        }
      );
      console.log(response.data); // Log the response data if needed
      // Optionally, you can reset the state or close the modal after successful save
    } catch (error) {
      console.error("Error saving workout goal:", error);
    }
  };

  return (
    <div>
      <Modal size={"2xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div>
              <h1 className="text-2xl font-semibold mb-4">Create Goal</h1>
              <div className="flex mb-4">
                <Select
                  value={goalType}
                  onChange={handleGoalTypeChange}
                  className="mr-4"
                >
                  <option value="daily">Daily Goal</option>
                  <option value="weekly">Weekly Goal</option>
                  <option value="monthly">Monthly Goal</option>
                </Select>
                <Input
                  type="date"
                  value={startDate}
                  onChange={handleStartDateChange}
                  className="mr-2"
                />
                {goalType === "weekly" && (
                  <Input
                    type="date"
                    value={endDate}
                    onChange={handleEndDateChange}
                  />
                )}
                {goalType === "monthly" && (
                  <Input
                    type="date"
                    value={endDate}
                    onChange={handleEndDateChange}
                  />
                )}
              </div>
            </div>
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
                              <Th>Action</Th>
                            </Tr>
                          </Thead>

                          <Tbody>
                            {activities.map((activity, index) => (
                              <Tr key={index}>
                                <Td>
                                  <div className="flex">
                                    {activity.name === "Running" && (
                                      <FaRunning className="text-xl" />
                                    )}
                                    {activity.name === "Weight Lifting" && (
                                      <GiWeightLiftingUp className="text-xl" />
                                    )}
                                    {activity.name === "Yoga" && (
                                      <GrYoga className="text-xl" />
                                    )}
                                    {activity.name === "Swimming" && (
                                      <FaSwimmer className="text-xl" />
                                    )}
                                    <h2 className="ml-2">{activity.name}</h2>
                                  </div>
                                </Td>
                                <Td>
                                  <div className="flex">
                                    {activity.name === "Running" && (
                                      <span>{activity.desc}</span>
                                    )}
                                    {activity.name === "Weight Lifting" && (
                                      <div>
                                        <Input
                                          style={{ width: "4rem" }}
                                          className="mr-2"
                                          name="sets"
                                          value={activity.sets}
                                          onChange={(e) =>
                                            handleInputChange(index, e)
                                          }
                                        />
                                        <span>{activity.desc}</span>
                                      </div>
                                    )}
                                    {activity.name === "Yoga" && (
                                      <span>{activity.desc}</span>
                                    )}
                                    {activity.name === "Swimming" && (
                                      <span>{activity.desc}</span>
                                    )}
                                  </div>
                                </Td>
                                <Td>
                                  <Input
                                    style={{ width: "4rem" }}
                                    className="mr-2"
                                    name="target"
                                    value={activity.target}
                                    onChange={(e) =>
                                      handleInputChange(index, e)
                                    }
                                  />
                                  <span>{activity.unit}</span>
                                </Td>
                                <Td>
                                  <MdOutlineRemoveCircleOutline
                                    onClick={() => removeActivity(index)}
                                    className="text-2xl text-red-500 cursor-pointer"
                                  />
                                </Td>
                              </Tr>
                            ))}
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </div>
                  </CardBody>
                </Card>
              </Stack>
            </div>
            <div className="float-end mt-4">
              {availableActivities.map((activity, index) => (
                <Button
                  key={index}
                  onClick={() =>
                    addActivity(activity.name, activity.desc, activity.unit)
                  }
                  className="mr-2"
                >
                  {activity.name}
                </Button>
              ))}

              <Button onClick={saveWorkoutGoal}>Save</Button>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default WorkoutGoalCreateModal;
