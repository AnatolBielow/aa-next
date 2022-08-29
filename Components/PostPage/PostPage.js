import { useEffect, useState } from "react";
import MarkdownIt from "markdown-it";
import { ContentWrapper, Description, Title } from "./PostPage.styled";

const title = "Wydarzenia Intergrupy AA";

export const PostPage = ({ secondPost }) => {
  const [post, setPost] = useState('');

const md = new MarkdownIt({ html: true, linkify: true, typographer: true });
 const content = String(post.content);
 const htmlContent = md.render(content);

 
  useEffect(() => {
    setPost(secondPost);
  }, [secondPost]);

  return (

    <>
      {post && (
        <ContentWrapper>
          <Title>{post.title}</Title>
          <Description>{post.description}</Description>
          <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
        </ContentWrapper>
      )}
      
    </>
  );
};
