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
import { BsPlusCircleFill, BsThreeDotsVertical } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { BiChat, BiLike, BiShare } from "react-icons/bi";
import WorkoutProfileUpdateModal from "../../Components/Workout/WorkoutProfileUpdateModal";
import { TbActivityHeartbeat } from "react-icons/tb";
import WorkoutGoalUpdateModal from "../../Components/Workout/WorkoutGoalUpdateModal";
import WorkoutGoalCreateModal from "../../Components/Workout/WorkoutGoalCreateModal";

const WorkoutGoals = () => {
  const {
    isOpen: isCreateOpen,
    onOpen: OnCreateOpen,
    onClose: onCreateClose,
  } = useDisclosure();
  const [distance, setDistance] = useState(0);
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [hour, setHour] = useState(0);

  const handleClick = () => {
    OnCreateOpen();
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
        <div className=" ml-8 flex justify-between items-center">
          <h1 className="text-2xl m-4 font-semibold">My Goals</h1>
          <BsPlusCircleFill
            className="text-2xl text-blue-400"
            onClick={handleClick}
          />
        </div>
      </div>
      <div className="flex space-x-4 justify-center">
        <div className="w-[30%]">
          <Card>
            <CardHeader>
              <Flex justify="space-between">
                <Heading size="md">Dialy Goals</Heading>
                <BsThreeDotsVertical />
              </Flex>
            </CardHeader>
            <CardBody>
              <div className="justify-center items-center">
                <h1 className=" justify-center text-3xl font-semibold">
                  NO DATA
                </h1>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="w-[30%]">
          <Card>
            <CardHeader>
              <Flex justify="space-between">
                <Heading size="md">Weekly Goals</Heading>
                <BsThreeDotsVertical />
              </Flex>
            </CardHeader>
            <CardBody></CardBody>
          </Card>
        </div>
        <div className="w-[30%]">
          <Card>
            <CardHeader>
              <Flex justify="space-between">
                <Heading size="md">Monthly Goals</Heading>
                <BsThreeDotsVertical />
              </Flex>
            </CardHeader>
            <CardBody></CardBody>
          </Card>
        </div>
      </div>

      <WorkoutGoalCreateModal isOpen={isCreateOpen} onClose={onCreateClose} />
    </div>
  );
};

export default WorkoutGoals;
