import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export function Blog() {
  const blogs = JSON.parse(localStorage.getItem("blog") as string);
  const [showModal, setShowModal] = useState(false);
  const [showEdit, setEditShow] = useState(false);
  const [url, seturl] = useState("");
  const [title, settitle] = useState("");
  const [text, settext] = useState("");
  const [like, setlike] = useState(0);
  const [watch, setwatch] = useState(0);
  const [date] = useState("");
  const [user, setuser] = useState("");
  const navigate = useNavigate();
  const [key, setKey] = useState(0);
  const view = (key: number) => {
    seturl(blogs[key].url);
    settitle(blogs[key].title);
    settext(blogs[key].text);
    setlike(blogs[key].like);
    setwatch(blogs[key].watch);
    setKey(key);
    setuser(blogs[key].user);
    setShowModal(true);
  };
  const Update = () => {
    setEditShow(true);
  }
  const Update_oper = (key: number) => {
    setKey(key);
    let status_new = { url, title, text, like, watch }
    blogs[key] = status_new;
    console.log(blogs[key]);
    localStorage.setItem('blog', JSON.stringify(blogs));
    navigate("/dashboard");

  }
  const Like = (key: number) => {
    setlike(like + 1);
    let user_name = sessionStorage.getItem('username');
    if (user_name) {
      setlike(1);
      return;
    } else {
      setlike(like + 1);
    }
  }
  const Watch = (key: number) => {
    setwatch(watch + 1);
  }
  return (
    <div className="w-5/6 p-12 bg-white m-auto mt-8 bg-transparent">
      {sessionStorage.username ? (
        <div className="fixed top-30 first-letter:right-20 right-0 w-20 h-20">
          <Link to="/create">
            <img
              src="./download.png"
              alt="create photo"
              className="w-20 h-20"
            ></img>
          </Link>
        </div>
      ) : (
        <div></div>
      )}

      <div className="flex items-end justify-between mb-12 header">
        <div className="title ">
          <p className="mb-4   text-4xl font-bold text-gray-800">
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {blogs.map((blog: any, key: number) => (

          <div
            className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 lg:w-72 sm:w-64"
            key={key}
            onClick={() => view(key)}
          >
            <Link to="#" className="block w-full h-full">
              <img
                alt="blog photo"
                src={blog.url}
                className="object-cover w-full max-h-40"
              />
              <div className="w-full p-4 bg-white dark:bg-gray-800">
                <p className="font-medium text-indigo-500 text-md">
                  {blog.user}
                </p>
                <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                  {blog.title}
                </p>
                <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                  {blog.text}
                </p>
                <div className="flex items-center mt-4">
                  <div className="flex flex-col justify-between ml-4 text-sm">
                    <p className="text-gray-800 dark:text-white">
                      <i
                        className="fa fa-hand-stop-o"
                        style={{ fontSize: "18px" }}
                      ></i>
                      {blog.like}
                    </p>
                    <p className="text-gray-400 dark:text-gray-300">
                      <i className="fa fa-eye" style={{ fontSize: "18px" }}></i>
                      {blog.watch}
                    </p>
                  </div>
                  <div className="flex flex-col justify-between ml-4 text-sm">
                    <p className="text-gray-400 dark:text-gray-300">
                      <i
                        className="fa fa-clock-o"
                        style={{ fontSize: "18px" }}
                      ></i>
                      {blog.date}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {
        showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h1 className="text-3xl font-semibold text-center text-purple-700  uppercase ">
                      Modify the Detail
                    </h1>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  <div>
                    <img
                      alt="blog photo"
                      src={url}
                      className="object-cover w-full max-h-40"
                    />
                    <div className="w-full p-4 bg-white dark:bg-gray-800">
                      <p className="font-medium text-indigo-500 text-md">
                        {user}
                      </p>
                      <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                        {title}
                      </p>
                      <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                        {text}
                      </p>
                      <div className="flex items-center mt-4">
                        <div className="flex flex-col justify-between ml-4 text-sm">
                          <p className="text-gray-800 dark:text-white">
                            <i
                              className="fa fa-hand-stop-o"
                              style={{ fontSize: "18px" }}
                            ></i>
                            {like}
                          </p>
                          <p className="text-gray-400 dark:text-gray-300">
                            <i className="fa fa-eye" style={{ fontSize: "18px" }}></i>
                            {watch}
                          </p>
                        </div>
                        <div className="flex flex-col justify-between ml-4 text-sm">
                          <p className="text-gray-400 dark:text-gray-300">
                            <i
                              className="fa fa-clock-o"
                              style={{ fontSize: "18px" }}
                            ></i>
                            {date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                      onClick={() => Update()}
                    >
                      Edit

                    </button>

                    {showEdit ? (
                      <>
                        <div
                          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                          <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="text-3xl font-semibold">
                                  Update the Blog
                                </h3>
                                <button
                                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                  onClick={() => setShowModal(false)}
                                >
                                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                  </span>
                                </button>
                              </div>
                              <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 lg:max-w-xl">
                                <form className="mt-6" action="/dashboard">
                                  <div className="mb-2">
                                    <label>
                                      <span className="text-gray-700">Tittle</span>
                                      <input
                                        type="text"
                                        className="w-full block px-16 py-2 mt-2 border-gray-300 rounded-md shadow-sm  focus:border-indigo-300
                                        focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        placeholder="John cooks"
                                        required
                                        value={title}
                                        key={key}
                                        onChange={(e) => settitle(e.target.value)}
                                      />
                                    </label>
                                  </div>
                                  <div className="mb-2">
                                    <label>
                                      <span className="text-gray-700">Image url</span>
                                      <input
                                        type="text"
                                        className="block w-full mt-2 px-16 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300
                                        focus:ring focus:ring-indigo-200focus:ring-opacity-50"
                                        placeholder="http://abc.com or ../../a/b.jpg"
                                        value={url}
                                        key={key}
                                        onChange={(e) => seturl(e.target.value)}
                                        required
                                      />
                                    </label>
                                  </div>
                                  <div className="mb-2">
                                    <label>
                                      <span className="text-gray-700">Text</span>
                                      <textarea
                                        name="message"
                                        className="block w-full mt-2 px-16 py-8 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring
                                         focus:ring-indigo-200 focus:ring-opacity-50"
                                        value={text}
                                        key={key}
                                        onChange={(e) => settext(e.target.value)}
                                      ></textarea>
                                    </label>
                                  </div>
                                </form>
                              </div>
                              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                <button
                                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  type="button"
                                  onClick={() => setEditShow(false)}
                                >
                                  <Link to="/dashboard">Close</Link>
                                </button>
                                <button
                                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  type="button"
                                  key={key}
                                  onClick={() => Like(key)}
                                >
                                  Like
                                </button>
                                <button
                                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  type="button"
                                  key={key}
                                  onClick={() => Watch(key)}
                                >
                                  Watch
                                </button>
                                <button
                                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  type="button"
                                  key={key}
                                  onClick={() => Update_oper(key)}
                                >
                                  Save Changes
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                      </>
                    ) : null}
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      close
                    </button>
                    { }
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null
      }
    </div >
  );
}
