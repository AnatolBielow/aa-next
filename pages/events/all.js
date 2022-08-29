import image from "../../Images/newspaper.jpg";
import { Section } from "../../Components/Events.styled";
import { AllPostPage } from "../../Components/AllPostsPage";
import { BackButton } from "../../Components/BackButton";


const AllPost = ({ posts }) => {
  return (
    <Section img={image}>
      <AllPostPage posts={posts} />
      <BackButton />
    </Section>
  );
};

export default AllPost;

export async function getStaticProps(context) {
  const res = await fetch(`${process.env.DATA_HOST}/posts/`);
  const posts = await res.json();
  if (!posts) {
    return {
      notFound: true,
    };
  }
  return { props: { posts: posts.data } };
}
