import Link from "next/link";
import { useEffect, useState } from "react";
import { AllLinks, Description, List, PrewievCard, Title } from "./LatestPostsList.styled";

export const LatestPostsList = ({ posts }) => {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    setLatestPosts(posts);
  }, [posts]);

  return (
    <>
    <List>
      {latestPosts &&
        latestPosts.map((post) => (
          <li key={post.id}>
            <Link href={`/events/${post.id}`}>
              <a>
                <PrewievCard>
                  <Title>{post.attributes.title}</Title>
                  <Description>{post.attributes.description}</Description>
                </PrewievCard>
              </a>
            </Link>
          </li>
        ))}
      <Link href={'/events/all'}><AllLinks>Wszystkie wydarzenia</AllLinks></Link>  
    </List>
    
    </>
    
  );
};
