import fs from "fs";
import path from "path";
import Layout from "@/components/layout/layout";
import React, { useEffect, useState } from "react";


export async function getServerSideProps({ params }) {
  const filePath = path.join(process.cwd(), "data/blogs.json");
  const fileData = fs.readFileSync(filePath);
  const { blogs } = JSON.parse(fileData);

  const blog = blogs.find((b) => b.id === parseInt(params.id));

  return {
    props: { blog: blog || null },
  };
}

export default function Blog({ blog }) {
   const [blogss, setBlogss] = useState([]);

   useEffect(() => {
      fetch("/api/blogs")
        .then((response) => response.json())
        .then((data) => {
          const shuffledBlogs = data.blogs.sort(() => 0.5 - Math.random()).slice(0, 4);
          setBlogss(shuffledBlogs);
        })
        .catch((error) => console.error("Error fetching blogs:", error));
    }, []);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      {/* <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover" />
      <p></p> */}
      <Layout>
        <div className="mx-auto container flex lg:flex-row flex-col items-center justify-between lg:py-20 py-10 xl:px-0 px-8">
          <div>
            <h1 className="text-[#6666b3] xl:text-5xl text-[32px] font-bold my-4 lg:text-left text-center">
              {blog.title}
            </h1>
          </div>
          <img src={blog.image} alt={blog.title} className="lg:w-1/2 lg:h-[500px] object-center object-cover lg:mt-0 mt-10" />
        </div>
        <div className="mx-auto container flex flex-col items-center justify-center px-4">
          <p className="text-lg">{blog.content}</p>
        </div>
        <div>
        <h2 className="text-[#252c39] text-[38px] font-semibold leading-[50px] tracking-wide  mx-auto container mt-20 xl:px-0 px-8 lg:text-left text-center">
          More Blogs For You
        </h2>
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8 xl:px-0 px-8">
          {blogss.map((blog) => (
            <a key={blog.id} className="cursor-pointer" href={`/blogs/${blog.id}`}>
            <div >
              <img src={blog.image} alt={blog.title} className="w-full h-48 md:h-64 object-cover rounded-md" />
              <h3 className="text-lg mt-4 font-semibold  mb-2">{blog.title}</h3>
              <p className="text-gray-700"> {blog.content.split(" ").slice(0, 15).join(" ")}...</p>
            </div>
            </a>
          ))}
        </div>
      </div>
      </Layout>
    </div>
  );
}
