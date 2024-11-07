import { useEffect, useState } from "react";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data.blogs))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <>
      <div className="mx-auto container flex lg:flex-row flex-col items-center justify-between lg:py-20 py-10 xl:px-0 px-8">
        <div>
          <p className="text-[#8c8c8c] xl:text-2xl text-xl font-medium  uppercase lg:text-left text-center">WE'RE ALL IN THIS TOGETHER</p>
          <h1 className="text-[#6666b3] xl:text-5xl text-[32px] font-bold my-4 lg:text-left text-center">Experience everything in a new way</h1>
          <p className="xl:w-[699px] text-[#8c8c8c] text-lg font-normal lg:text-left text-center">
            Find the support you need with Clear Mind's online Blogs which are designed to connect you with people who
            share similar experiences.
          </p>
        </div>
        <img src="../blogs.png" className="lg:w-1/2 lg:mt-0 mt-10" />
      </div>
      <div className="">
        <h2 className="text-[#252c39] text-[38px] font-semibold leading-[50px] tracking-wide  mx-auto container mt-20 xl:px-0 px-8">
          Blogs
        </h2>
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8 xl:px-0 px-8">
          {blogs.map((blog, index) => {
            return (
              <>
                <div key={blog.id} className="cursor-pointer">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 md:h-64 object-cover rounded-md"
                  />

                  <h3 className="text-lg mt-4 font-semibold text-gray-800 mb-2">{blog.title}</h3>
                  <p className="text-gray-700"> {blog.content.split(' ').slice(0, 15).join(' ')}...</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
