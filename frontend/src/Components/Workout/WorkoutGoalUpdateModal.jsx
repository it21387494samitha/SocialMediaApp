import React from "react";
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
} from "@chakra-ui/react";

import { FaRunning } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";

const WorkoutGoalUpdateModal = ({ onClose, isOpen }) => {
  return (
    <div>
      <Modal size={"2xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
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
                          <Button>Save</Button>
                        </div>
                      </TableContainer>
                    </div>
                  </CardBody>
                </Card>
              </Stack>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default WorkoutGoalUpdateModal;
