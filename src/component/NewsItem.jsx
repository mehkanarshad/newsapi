import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, publishedAt } =
    props;
  return (
    <div>
      <div
        className="card mb-20"
        style={{
          width: "60rem",
          margin: "100px",
          marginLeft: "200px",
          height: "",
        }}
      >
        <img
          src={!imageUrl ? " " : imageUrl}
          style={{ maxHeight: "450px" }}
          className="card-img-top"
        />

        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small class="text-body-secondary">
              By {author} on {date}{" "}
            </small>
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-small btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
