import Link from "next/link";
import { useEffect, useState } from "react";
import { Description, List, PrewievCard, Title } from "./AllPostsPage.styled";

export const AllPostPage = ({ posts }) => {
  const [allPost, setAllPost] = useState([]);

  useEffect(() => {
    setAllPost(posts);
  }, [posts]);

  return ( 
    
      <List>
        {allPost &&
          allPost.map((post) => (
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
      </List>
   
  );
};
