import { auth } from "@/src/firebase/clientApp";
import { Button, Flex, Text } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import React from "react";
import AuthModel from "../../components/Modal/Auth/AuthModal";
import AuthButton from "./AuthButton";

type RightContentProps = {
  user: any;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModel />
      <Flex justify="center" align="center">
         {user ? <Button onClick={()=>signOut(auth)}>LogOut</Button> : <AuthButton/>}
      </Flex>
    </>
  );
};

export default RightContent;
