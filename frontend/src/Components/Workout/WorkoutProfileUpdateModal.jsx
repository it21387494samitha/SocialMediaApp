import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";

import React, { useState } from "react";
import axios from "axios";

const WorkoutProfileUpdateModal = ({ onClose, isOpen }) => {
  const [height, setHeight] = useState(1.2);
  const [weight, setWeight] = useState(60);
  const [bmi, setBmi] = useState(20);
  const [calories, setCalories] = useState(2000);

  const handleUpdate = async () => {
    try {
      // Make an HTTP PUT request to update the workout profile
      const response = await axios.put(
        "/api/workout-profiles", // Update the endpoint as per your backend API
        {
          height: height,
          weight: weight,
          bmi: bmi,
          calories: calories,
        }
      );
      console.log("Update Successful:", response.data);
      // Optionally, you can handle success messages or close the modal
      onClose();
    } catch (error) {
      console.error("Update Error:", error.response.data);
      // Handle errors or display error messages
    }
  };

  const handleClick = () => {
    onClose();
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
      <Modal size={"2xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div className="flex items-center">
              {/* Image Section (Half Screen Width) */}
              <div className="">
                <div className="h-[60vh] relative right-6">
                  <img
                    src="https://images.pexels.com/photos/1865131/pexels-photo-1865131.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt=""
                    className="w-full h-full object-cover "
                  />
                </div>
              </div>

              {/* Form Section (Half Screen Width) */}
              <div className="w-1/2">
                <Card maxW="md" className="">
                  <CardHeader></CardHeader>
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
                    <Button
                      onClick={handleUpdate}
                      className="text-4xl mt-4 float-end"
                    >
                      Save
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
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default WorkoutProfileUpdateModal;
