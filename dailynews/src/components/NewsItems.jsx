import React from 'react'


const NewsItems=(props)=> {
  
    let { title, description, imageUrl, newsUrl,author,source,published } = props;
    // let d={published}

    return (
      
          <div className='container'>
                
              <div className="card my-2 ">
                      <img src={!imageUrl ? "https://images.hindustantimes.com/tech/img/2021/09/02/1600x900/aed1cb7af8c96e961b_1630580381773_1630580410340.jpeg" : imageUrl} className="card-img-top" alt="..." />
                          <h5 className="card-title">{title?title.slice(0,80):" "}...<span className="position-absolute top-0 translate-middle badge rounded-pill bg-dark" style={{left:"90%",zIndex:1}}>
                            {!source?"Unknow source" :source}

                            </span></h5>
                          <p className="card-text">{description?description.slice(0,80):" "}...</p>
                          <p className="card-text"> <small className='text-muted'>By-{!author?"Anonymous" : author}   {new Date(published).toGMTString()}</small></p>
                          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
              </div>
           </div>
        
    )
  
}

export default NewsItems