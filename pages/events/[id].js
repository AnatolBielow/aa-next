import MarkdownIt from "markdown-it";
import {
  AllLinks,
  ContentWrapper,
  Description,
  Section,
  Title,
} from "../../Components/Events.styled";
import img from "../../Images/newspapers.jpg";
import { BackButton } from "../../Components/BackButton";
import { PostPage } from "../../Components/PostPage";
import Link from "next/link";

export default function Event({ post }) {
  return (
    <Section img={img}>
      {post? <><PostPage secondPost={post.attributes} />
      <ul>
        <li>
          <Link href={"/events/all"}>
            <AllLinks>Wszystkie wydarzenia</AllLinks>
          </Link>{" "}
        </li>
      </ul>
      </>: <div>
      <Title>Błąd 404 - nie znaleziono!</Title>
      <Description>Post z takim id nie istnieje</Description>
      </div>}
      <BackButton />
    </Section>
  );
}

export async function getServerSideProps(ctx) {
    const res = await fetch(`${process.env.DATA_HOST}/posts/${ctx.query.id}`);
    const post = await res.json();
    if (!post) {
      return {
        notFound: true,
      };
    }
    return { props: { post: post.data } };
  }
