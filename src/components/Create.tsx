import { stringify } from "querystring";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Create = () => {
  const [title, settitle] = useState("");
  const [url, seturl] = useState("");
  const [text, settext] = useState("");
  const submit = () => {
    const a = sessionStorage.getItem("username");
    const d = new Date();
    const date = d.toDateString();

    const arr = {
      title: title,
      url: url,
      text: text,
      user: a,
      date: date,
      watch: 0,
      like: 0,
    };

    if (localStorage.getItem("blog") === null) {
      const blog = [];
      blog.push(arr);
      const data = JSON.stringify(blog);
      localStorage.setItem("blog", data);
    } else {
      const b = JSON.parse(localStorage.getItem("blog") as string);
      b.push(arr);
      const data = JSON.stringify(b);
      localStorage.setItem("blog", data);
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-indigo-700  uppercase ">
          News Form
        </h1>
        <form className="mt-6" action="/dashboard">
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Tittle</span>
              <input
                type="text"
                className="w-full block px-16 py-2 mt-2 border-gray-300 rounded-md shadow-sm  focus:border-indigo-300
                           focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="full"
                required
                value={title}
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
                onChange={(e) => settext(e.target.value)}
              ></textarea>
            </label>
          </div>

          <div className="mb-6 flex justify-around">
            <button
              className=" h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-color duration-150 focus:shadow-outline
                        hover:bg-indigo-800"
              onClick={submit}
            >
              Save
            </button>
            <button
              className="h-10 px-5 text-indigo-100 bg-red-800 rounded-lg transition-colors duration-150 focus:shadow-outline
                        hover:bg-red-800"
            >
              <Link to="/dashboard">Cancel</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
