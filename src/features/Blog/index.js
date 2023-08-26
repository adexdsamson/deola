/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import { Loader, Typography } from "../../common/shared";
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
                    coverImage
                }
            }
        }
    }
`;

const BlogSection = () => {
  const [gql, { data, isLoading, isError }] = useGetHashNodeBlogsMutation();
  const posts = data?.data?.user?.publication?.posts;
  // console.log(posts);
  let articles = posts?.length ? posts : [];

  useEffect(() => {
    gql({ query: GET_USER_ARTICLES, variables: { page: 0 } });
  }, [gql]);

  return (
    <div className="h-screen overflow-x-hidden scrollbar-hide bg-black ">
      <div className="text-center mt-20">
        <Typography
          variant="h2"
          color="white"
          className={"font-bold text-secondary"}
          uppercase
        >
          My <span className="text-primary">Blogs</span>
        </Typography>
      </div>
      {!isLoading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 mt-14 lg:px-20 px-8 pb-10 lg:pb-0">
          {articles.map(({ coverImage, title, slug, brief }, key) => (
            <BlogCard {...{ coverImage, slug, title, body: brief, key }} />
          ))}
        </div>
      )}
      {isLoading && (
        <div className="lg:h-3/4 h-1/2 flex items-center justify-center">
          {" "}
          <Loader />{" "}
        </div>
      )}
      {isError && (
        <div className="lg:h-3/4 h-1/2 flex items-center justify-center">
          <Typography
            color="white"
            className={"border-2 border-red-400 px-5 py-2 text-opacity-60 rounded-lg"}
            uppercase
          >
           Error fetching blog posts
          </Typography>
        </div>
      )}
    </div>
  );
};

export default BlogSection;
