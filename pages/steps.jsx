import { Page } from "../Components/Page";
import image from "../Images/mountain.jpg";
import { steps } from "../Helpers/steps";

const title = "12 Kroków AA";

const Steps = () => {
  return <Page title={title} img={image} items={steps} />;
};

export default Steps;
