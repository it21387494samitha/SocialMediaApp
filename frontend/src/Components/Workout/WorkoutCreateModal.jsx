import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaRunning } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { RiPinDistanceLine } from "react-icons/ri";
import { TimePicker } from "react-ios-time-picker";
import { HiOutlineClock } from "react-icons/hi";
import { TbActivityHeartbeat } from "react-icons/tb";

const WorkoutCreateModal = ({ onClose, isOpen }) => {
  const [runningStart, setRunningStart] = useState();
  const [runningEnd, setRunningEnd] = useState();
  const [weightLiftingStart, setWeightLiftingStart] = useState();
  const [weightLiftingEnd, setWeightLiftingEnd] = useState();
  const [yogaStart, setYogaStart] = useState();
  const [yogaEnd, setYogaEnd] = useState();

  const onChangeRunningSrart = (timeValue) => {
    setRunningStart(timeValue);
  };

  const onChangeRunningEnd = (timeValue) => {
    setRunningEnd(timeValue);
  };

  const onChangeWeightLiftingStart = (timeValue) => {
    setWeightLiftingStart(timeValue);
  };

  const onChangeWeightLiftingEnd = (timeValue) => {
    setWeightLiftingEnd(timeValue);
  };

  const onChangeYogaStart = (timeValue) => {
    setYogaStart(timeValue);
  };

  const onChangeYogaEnd = (timeValue) => {
    setYogaEnd(timeValue);
  };

  return (
    <div>
      <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div>
              <div className="pb-10">
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl m-4 font-semibold">Create Workout</h1>
                  <hr />
                  <hr />
                  <div>
                    <Input
                      size="md"
                      label="date"
                      placeholder="Select Date"
                      type="date"
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-4">
                    <div className="flex">
                      <FaRunning className="text-2xl" />
                      <h1 className="text-lg font-semibold ml-2">Running</h1>
                    </div>
                    <div className="flex items-center mt-4 space-x-3">
                      <div className="flex relative">
                        <Input
                          size="md"
                          label="Distance"
                          placeholder="Distance"
                          type="number"
                        />
                        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <RiPinDistanceLine className="text-xl" />
                        </span>
                      </div>
                      <div className="flex relative">
                        <TimePicker
                          onChange={onChangeRunningSrart}
                          value={runningStart}
                        />
                        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <HiOutlineClock className="text-xl" />
                        </span>
                      </div>
                      <div className="flex relative">
                        <TimePicker
                          onChange={onChangeRunningEnd}
                          value={runningEnd}
                        />
                        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <HiOutlineClock className="text-xl" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex">
                      <GiWeightLiftingUp className="text-2xl" />
                      <h1 className="text-lg font-semibold ml-2">
                        Weight Lifting
                      </h1>
                    </div>
                    <div className="flex  items-center mt-4 space-x-3">
                      <div className="flex relative">
                        <Input
                          size="md"
                          label="Reps"
                          placeholder="Reps"
                          type="number"
                        />
                        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <TbActivityHeartbeat className="text-xl" />
                        </span>
                      </div>
                      <div className="flex relative">
                        <Input
                          size="md"
                          label="Sets"
                          placeholder="Sets"
                          type="number"
                        />
                        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <TbActivityHeartbeat className="text-xl" />
                        </span>
                      </div>
                      <div className="flex relative">
                        <TimePicker
                          onChange={onChangeWeightLiftingStart}
                          value={weightLiftingStart}
                        />
                        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <HiOutlineClock className="text-xl" />
                        </span>
                      </div>
                      <div className="flex relative">
                        <TimePicker
                          onChange={onChangeWeightLiftingEnd}
                          value={weightLiftingEnd}
                        />
                        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <HiOutlineClock className="text-xl" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex">
                      <GrYoga className="text-2xl" />
                      <h1 className="text-lg font-semibold ml-2">Yoga</h1>
                    </div>
                    <div className="flex items-center mt-4  space-x-3">
                      <div className="flex relative">
                        <TimePicker
                          onChange={onChangeYogaStart}
                          value={yogaStart}
                        />
                        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <HiOutlineClock className="text-xl" />
                        </span>
                      </div>
                      <div className="flex relative">
                        <TimePicker
                          onChange={onChangeYogaEnd}
                          value={yogaEnd}
                        />
                        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <HiOutlineClock className="text-xl" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button className="float-end" colorScheme="twitter">
                Create Workout
              </Button>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default WorkoutCreateModal;
