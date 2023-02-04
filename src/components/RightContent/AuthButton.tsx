import { authModalState } from "@/src/atoms/authmodalAtom";
import { Button } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import React from "react";

const AuthButton: React.FC = () => {
  const setAuthModelState = useSetRecoilState(authModalState);
  return (
    <>
      <Button
        variant="outline"
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr={2}
        onClick={() => setAuthModelState({open: true, view:"login"})}
      >
        Log In
      </Button>
      <Button
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr={2}
        onClick={() => setAuthModelState({open: true, view:"signup"})}
      >
        Sign up
      </Button>
    </>
  );
};
export default AuthButton;
