import React, { useState } from "react";
import './Blog.css';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' },
    { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image', 'video'],
    ['clean']
  ],
};

const formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
];

const Blog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div className="relative">
      <div className="img-left">
        <img src="Planet.png" alt="Planet" className="img-full" />
      </div>
      <div className="img-right">
        <img src="Vector.png" alt="Vector" className="img-full" />
      </div>
      <div className="content-container">
        <div className="form-container">
          <h1 className="title">
            Write Your Blog Here ...
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="title" className="input-label">
                TITLE :
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="TITLE"
                className="input-field"
              />
            </div>
            <div className="input-group">
              <label
                htmlFor="content"
                className="input-label"
              >
                Write the content over here
              </label>
              <div className="editor-container">
                <ReactQuill
                  id="content"
                  value={content}
                  onChange={setContent}
                  placeholder="Write the content over here"
                  theme="snow"
                  modules={modules}
                  formats={formats}
                  className="editor"
                />
              </div>
            </div>
            <button
              type="submit"
              className="submit-button"
            >
              Submit
            </button>
          </form>
          {showNotification && (
            <div className="notification">
              Blog submitted successfully!
            </div>
          )}
        </div>
        
      </div>
      <img src="Vector 2.png" alt="Vector" className="footer-img" />
    </div>
  );
};

export default Blog;
