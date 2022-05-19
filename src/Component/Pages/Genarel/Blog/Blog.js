import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="container d-flex align-items-center flex-column mb-5">
      <h1 className="text-center header1 my-4">Blogs</h1>
      <div className="question-container">
        <h3>Differences Between JavaScript vs Node JS</h3>
        <p>
          JavaScript is a programing language that runs in any web browser which
          has a proper engine. On the other hand, Node.js is a runtime
          environment that runs on only V8 engine to execute JavaScript outside
          the web browser.
          <br />
          <br />
          JavaScript is mainly used for client-side activities like a web
          applications. And Node.js is mainly used for accessing or performing
          any non-blocking operation.
        </p>
      </div>
      <div className="question-container">
        <h3>Differences Between SQL and NonSQL</h3>
        <p>
          <h5>SQL</h5>
          <p>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</p>
          <p>These databases are not suited for hierarchical data storage.</p>
          <p>These databases are best suited for complex queries</p>
          <p>Vertically Scalable</p>
          <br />

          <h5>NoSQL</h5>
          <p>Non-relational or distributed database system.</p>
          <p>These databases are best suited for hierarchical data storage.</p>
          <p>These databases are not so good for complex queries</p>
          <p>Horizontally scalable</p>
        </p>
      </div>
      <div className="question-container">
        <h3>What is the purpose of JWT? And what is the porous of it?</h3>
        <p>
        The full meaning of JWT is JSON Web Token, JWT is used to share information between 2 parties client and server.

          <br />
          <br />
JWT contains encoded JSON object so if anyone try to access any info that is secured by using JWT other than the authorized user it will block them.
          
        </p>
      </div>
    </div>
  );
};

export default Blog;
