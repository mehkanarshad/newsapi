import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const fetchArticles = async () => {
    setLoading(true);
    let url = `https://newsapi.org/v2/everything?q=${props.q}&sortBy=publishedAt&apiKey=56e2ec28972e475ab759ac8c0c7226bd&page=${page}&pageSize=${props.pageSize}`;
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      setHasMore(parsedData.articles.length > 0);
      setTotalResults(parsedData.totalResults);
      setArticles((prevArticles) => [...prevArticles, ...parsedData.articles]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="container my-3">
      <p
        className="text-center"
        style={{
          marginTop: "90px",
          fontSize: "50px",
          fontWeight: "100px",
          color: "GrayText",
        }}
      >
        NewsMonkey
      </p>
      {/* {loading && <Spinner />} */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchArticles}
        hasMore={loading}
        loader={<Spinner />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div>
          {articles.map((element) => (
            <div className="mb-10" key={element.url}>
              <NewsItem
                title={element.title}
                description={element.description}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author ? element.author : "Anonymous"}
                publishedAt={element.publishedAt}
                date={new Date(element.publishedAt).toDateString()}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

News.defaultProps = {
  country: "us",
  pageSize: 20,
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
