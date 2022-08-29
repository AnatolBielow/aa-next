import { PostPage } from "../../Components/PostPage";
import { Description, Section, Title } from "../../Components/Events.styled";
import image from "../../Images/newspaper.jpg";
import { LatestPostsList } from "../../Components/LatestPostsList";
import { useState } from "react";

const title = "Wydarzenia Intergrupy AA";
const notPosts = "Aktualnie nie ma nowych wydarzeń Intergruppy AA Sztokholm";
const Events = ({ posts }) => {
  if (posts.length > 0) {
    const latestPost = posts.slice(1, 5);
    const secondPost = posts[0].attributes;
    return (
      <Section img={image}>
        <PostPage secondPost={secondPost} />
        <LatestPostsList posts={latestPost} />
      </Section>
    );
  } else {
    return (
      <Section img={image}>
        <Title>{title}</Title>
        <Description>{notPosts}</Description>
      </Section>
    );
  }
};

export default Events;

export async function getStaticProps(context) {
  const res = await fetch(`${process.env.DATA_HOST}/posts/`);
  const posts = await res.json();
  if (!posts) {
    return {
      notFound: true,
    };
  }
  return { props: { posts: posts.data.reverse() } };
}
