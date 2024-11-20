import React from 'react';

function Card({ data }) {
    console.log(data);

    // Check if data is null or not an array, and provide a fallback
    const items = Array.isArray(data) ? data : [];
    
    const readMore = (url) => {
        window.open(url)
    }

    return (
        <div className='cardContainer'>
            {items.map((curItem, index) => {
                if(!curItem.urlToImage){
                    return null
                }else{
                    return (
                        <div key={index} className='card'>
                              <img src={curItem.urlToImage} />
                            
                            <div className='content'>
                                <a className='title' onClick={()=>window.open(curItem.url)}>{curItem.title}</a>
                               
                                <p>{curItem.description}</p>
                               
                                <button onClick={()=>window.open(curItem.url)}>Read More</button>
                            </div>
                        </div>
                    ); 
                }     
                })
            }
        </div>
    );
}

export default Card;