import React, { useEffect,useState } from "react";
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

  // constructor() {
  //   super();
  //    state = {
  //     articles: [],
  //     loading: false,
  //     page: 1,
  //     totalResults: 0,
  //     hasMore: true,
  //   };
  // }

  // async componentDidMount() {
  //   console.log("I am component did mount and I am being called");
  //   let url = `https://newsapi.org/v2/everything?q=${props.q}&sortBy=publishedAt&apiKey=56e2ec28972e475ab759ac8c0c7226bd`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData.articles);
  //    setState({
  //     hasMore: parsedData.articles,
  //   });
  //   if (!parsedData.articles) return;

  //   console.log(  articles);
  //    setState({
  //     totalResults: parsedData.totalResults,

  //     articles: parsedData.articles,
  //   });
  //   //  fetchArticles();
  // }

//   const updateNews = async ()=> {
//     props.setProgress(10);
//     let url = `https://newsapi.org/v2/everything?q=${props.q}&sortBy=publishedAt&apiKey=56e2ec28972e475ab759ac8c0c7226bd&page=${page}&pageSize=${props.pageSize}`; 
//     setLoading(true)
//     let data = await fetch(url);
//     props.setProgress(30);
//     let parsedData = await data.json();
//     props.setProgress(70);
//     if (!parsedData.articles) return;
//     setHasMore(parsedData.articles);
//     setArticles(parsedData.articles)
//     setTotalResults(parsedData.totalResults)
//     setLoading(false)
//     props.setProgress(100);

// }

  const fetchArticles = async () => {
    // props.setProgress(0);
    {loading && <Spinner/> }
    let url = `https://newsapi.org/v2/everything?q=${props.q}&sortBy=publishedAt&apiKey=56e2ec28972e475ab759ac8c0c7226bd&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setHasMore(parsedData.articles)
    if (!parsedData.articles) return;
    setTotalResults(parsedData.totalResults);
    setArticles(articles.concat(parsedData.articles));
    // props.setProgress(100);
  };

  useEffect(() => {
    // updateNews();
    fetchArticles();
  },[])

 const handleNextClick = async () => {
  //   console.log("I am handle next click articles and I am being called");

  //   let url = `https://newsapi.org/v2/everything?q=${props.q}&sortBy=publishedAt&apiKey=56e2ec28972e475ab759ac8c0c7226bd&page=${  page + 1}&pageSize=${props.pageSize}`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData.articles);
  //    setState({
  //     hasMore: parsedData.articles,
  //   });
  //   if (!parsedData.articles) return;

  //   console.log(  articles);
  //    setState({
  //     totalResults: parsedData.totalResults,

  //     articles:   articles.concat(parsedData.articles),
  //   });

    setPage(page);

    fetchArticles();
  };

    // const { articles } =  state;

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
        {console.log(articles.length)}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchArticles}
          hasMore={hasMore}
          loader={<Spinner />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="">
            {}
            {/* {articles.map((element) => (
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
            ))} */}
          </div>
        </InfiniteScroll>
      </div>
    );
}

News.defaultProps = {
  country: "us",
  pageSize: 20,
  // page: 1,
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
