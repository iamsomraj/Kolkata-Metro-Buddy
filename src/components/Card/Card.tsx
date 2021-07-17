import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Table,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { ResponseType } from "../Form/Form";

interface CardProps {
  cardNumber: string;
  response: null | ResponseType;
  isOpen: boolean;
  onModalClose: React.MouseEventHandler<HTMLButtonElement>;
  onClose: () => void;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <>
      <Modal
        onClose={props.onClose}
        isCentered
        isOpen={props.isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Card # {props.cardNumber}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {!props.response && <Spinner />}
            {props.response && (
              <>
                <Stat align={"center"} justify={"center"}>
                  <StatLabel>Card Balance</StatLabel>
                  <StatNumber>₹ {props.response.balance.toFixed(2)}</StatNumber>
                  <StatHelpText>
                    {props.response.lastUsedInGateOn} -{" "}
                    {props.response.validUpto}
                  </StatHelpText>
                </Stat>
                <Table variant="simple">
                  <TableCaption>Card Information</TableCaption>
                  <Thead>
                    <Tr>
                      <Th>Description</Th>
                      <Th>Value</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>starting location</Td>
                      <Td>{props.response.startLocation}</Td>
                    </Tr>
                    <Tr>
                      <Td>ending location</Td>
                      <Td>{props.response.endLocation}</Td>
                    </Tr>
                    <Tr>
                      <Td>card last used at</Td>
                      <Td>{props.response.lastUsedInGateAtStn}</Td>
                    </Tr>
                  </Tbody>
                  <Tfoot>
                    <Tr>
                      <Th>Description</Th>
                      <Th>Value</Th>
                    </Tr>
                  </Tfoot>
                </Table>
              </>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={props.onModalClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Card;

// <Stat>
//                   <StatLabel>Balance</StatLabel>
//                   <StatNumber>₹ {props.response.balance.toFixed(2)}</StatNumber>
//                 </Stat>
//                 <Stat>
//                   <StatLabel>Starting Location</StatLabel>
//                   <StatNumber>
//                     {props.response.startLocation.trim().toLowerCase()}
//                   </StatNumber>
//                 </Stat>
//                 <Stat>
//                   <StatLabel>Ending Location</StatLabel>
//                   <StatNumber>
//                     {props.response.endLocation.trim().toLowerCase()}
//                   </StatNumber>
//                 </Stat>
//                 <Stat>
//                   <StatLabel>Last Used In Station</StatLabel>
//                   <StatNumber>{props.response.lastUsedInGateAtStn}</StatNumber>
//                 </Stat>
//                 <Stat>
//                   <StatLabel>Validity</StatLabel>
//                   <StatNumber>{props.response.validUpto}</StatNumber>
//                 </Stat>
//                 <Stat>
//                   <StatLabel>Balance</StatLabel>
//                   <StatNumber>{props.response.balance}</StatNumber>
//                 </Stat>
