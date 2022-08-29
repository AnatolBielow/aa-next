import { Page } from "../Components/Page";
import image from "../Images/tradition.jpg";
import { traditions } from "../Helpers/traditions";

const title = "12 Tradycji AA";

const Traditions = () => {
  return <Page title={title} img={image} items={traditions} />;
};
export default Traditions;
