import React,{useState} from 'react'
import {useEffect} from "react"
import NewsItems from './NewsItems';
import InfiniteScroll from "react-infinite-scroll-component";


function News(props) {
    const [articles,setArticles]=useState([]);
    const [page,setPage]=useState(1)
    const [totalArticles,setTotalArticles]=useState(0)

    // document.title=`Daily News - ${props.category}`
    const updateNews= async()=>{
       let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=8`;
       let data=await fetch(url)
       let parsedData=await data.json()
       setArticles(parsedData.articles)
       setTotalArticles(parsedData.totalArticles)
    }
    useEffect(()=>{
        updateNews()
    },[])


    const fetchMoreData= async(props)=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=8`;
    console.log(url)
    let data = await fetch(url);
    let parsedData = await data.json();

    // this.setState({
    //   articles: this.state.articles.concat(parsedData.articles),
    // //   page: this.state.page + 1,
    
    // });
    setArticles(articles.concat(parsedData.articles))
    setPage(page+1)
     

    }

  return (
    <>
      <h2 className="text-center  mt-2 mb-8">
            {" "}
            DailyNews - Top {props.category} Headlines{" "}
      </h2>
      <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !==totalArticles}>
              {articles.map((element) => {
                  return (
                    <div className="container">
                      <div className="row">
                      <div className="col-md-8" key={element.url}>
                      <NewsItems
                        title={element.title}
                      
                        description={element.description}
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}
                        author={element.author}
                        source={element.source["name"]}
                        published={element.publishedAt}
                      />
                    </div>

                      </div>
                       
                    </div>
                   
                  );
                })}
                </InfiniteScroll>
          
          
        
    </>
  )
}

// News.defaultProps = {
//     pageSize: 8,
// };

// News.PropsTypes = {
//     pageSize: PropTypes.number,
// };


export default News
