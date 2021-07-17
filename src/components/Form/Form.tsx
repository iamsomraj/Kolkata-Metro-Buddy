/* eslint-disable react/jsx-no-undef */
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

export interface ResponseType {
  balance: Number;
  cardNumber: String;
  endLocation: string;
  endLocationIndex: number;
  fmiNumber: string;
  lastUsedInGateAtStn: string;
  lastUsedInGateOn: string;
  startLocation: string;
  startLocationIndex: number;
  statusCode: number;
  strLastUsedInGateOn: string;
  strValidUpto: string;
  validUpto: string;
}

const Form: React.FC = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [isCardNumberValid, setIsCardNumberValid] = useState(false);
  const [balanceResponse, setBalanceResponse] = useState<null | ResponseType>(
    null
  );

  const [isOpen, setIsOpen] = useState(false);

  const onModalCloseHandler: React.MouseEventHandler<HTMLButtonElement> =
    () => {
      onClose();
    };

  const onClose = () => {
    setIsOpen(false);
  };

  const submitHandler: React.MouseEventHandler<HTMLButtonElement> = async (
    event
  ) => {
    event.preventDefault();
    if (isCardNumberValid) {
      localStorage.setItem("cardNumber", JSON.stringify(cardNumber));
      const corsAnyWhere = "https://cors-anywhere.herokuapp.com/";
      const response = await axios.get(
        corsAnyWhere +
          "https://mtp.indianrailways.gov.in/KolkataMetroPG/CardBalanceAction.jsp",
        {
          params: { cardNumber: cardNumber, reCardNumber: cardNumber },
        }
      );
      setBalanceResponse(response.data);
      setIsOpen(true);
    }
  };

  const cardNumberChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setCardNumber(event.target.value);
    setIsCardNumberValid(
      event.target.value.trim().length === 9 &&
        isFinite(parseInt(event.target.value))
    );
  };

  useEffect(() => {
    const getCardNumberFromStorage = () => {
      const cardFromStorage: any = localStorage.getItem("cardNumber")
        ? JSON.parse(localStorage.getItem("cardNumber") as any)
        : null;
      setCardNumber(cardFromStorage);
      setIsCardNumberValid(
        cardFromStorage &&
          cardFromStorage.trim().length === 9 &&
          isFinite(parseInt(cardFromStorage))
      );
    };
    getCardNumberFromStorage();
  }, []);

  return (
    <>
      <Flex
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>
              See Your{" "}
              <Text as={"span"} color={"green.400"}>
                Balance
              </Text>
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Card Number</FormLabel>
                <Input
                  type="text"
                  isInvalid={!isCardNumberValid}
                  value={cardNumber}
                  placeholder={"Enter Card Number"}
                  onChange={cardNumberChangeHandler}
                />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  type="submit"
                  disabled={!isCardNumberValid}
                  onClick={submitHandler}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Check Balance
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      {balanceResponse && (
        <Card
          isOpen={isOpen}
          onModalClose={onModalCloseHandler}
          onClose={onClose}
          cardNumber={cardNumber}
          response={balanceResponse}
        />
      )}
    </>
  );
};

export default Form;
