/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import { Typography } from "../../common/shared";
import { useGetHashNodeBlogsMutation } from "./api";
import BlogCard from "./layout";

const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!) {
        user(username: "adexd") {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
                }
            }
        }
    }
`;

const BlogSection = () => {
  const [gql, { data }] = useGetHashNodeBlogsMutation()
  let articles = data?.lenght ? data : []

  useEffect(() => {
    gql(GET_USER_ARTICLES, { page: 0 });
  }, [gql])
  
  return (
      <div className="h-screen overflow-x-hidden scrollbar-hide bg-black ">
        <div className="text-center mt-20">
          <Typography
            variant="h2"
            color="white"
            className={"font-bold"}
            uppercase
          >
            My <span className="text-green-400">Blogs</span>
          </Typography>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 mt-14 lg:px-20 px-8 pb-10 lg:pb-0">
          {articles.map(({ src, title, link, brief }, i) => (
            <BlogCard {...{ src, link, title, body: brief }} />
          ))}
        </div>
      </div>
  );
};

export default BlogSection;
