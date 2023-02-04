import { Flex } from "@chakra-ui/react";
import React from "react";
import AuthButton from "./AuthButton";

type RightContentProps = {
  //user : any;
};

const RightContent: React.FC<RightContentProps> = () => {
  return (
    <>
      {/* <AuthModel/> */}
      <Flex justify="center" align="center">
        <AuthButton />
      </Flex>
    </>
  );
};
export default RightContent;
