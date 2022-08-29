import { RiArrowGoBackFill } from "react-icons/ri";
import { Button } from "./BackButton.styled";
import { useRouter } from 'next/router'


export const BackButton = () => {
  const router = useRouter()
  
  return (
    <Button
      onClick={() => router.back()}>
      <RiArrowGoBackFill size={30} />
    </Button>
  );
};
