import { Page } from "../Components/Page";
import image from "../Images/conceptions.jpg";
import { conceptions } from "../Helpers";
import { Layout } from "../Components/Layout/Layout";

const title = "12 Koncepcji AA";

const Conceptions = () => {
  return (
      <Page title={title} img={image} items={conceptions} />
  );
};
export default Conceptions;