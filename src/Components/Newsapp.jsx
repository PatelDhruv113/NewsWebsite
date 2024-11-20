import React, { useEffect, useState } from 'react'
import Card from './Card'


function Newsapp() {
  
  const [search, setSearch] = useState("india");
  const [newsdata, setNewsData] = useState(null)
  const API_KEY = "bafe85daae5a4210818e3a28b09ed086";
  
  const getData = async() =>{
      const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apikey=${API_KEY}`);
      const jsonData = await response.json();
      console.log(jsonData.articles)
      setNewsData(jsonData.articles)
  }
  
  useEffect(()=> {
      getData()
  }, []) 

  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value)
  }

  const userInput = (e) => {
      console.log(e.target.value)
      setSearch(e.target.value)
  }

  return (
   <div>
       <nav>
        
        <div>
          <h1 className='tn'>Trending News</h1>
        </div>
        
        <ul>
           <h1 className='heades'>NewsMania</h1>
        </ul>

           <div className='searchbar'>
                  <input type="text" placeholder='Search News' value={search} 
                  onChange={handleInput}/>
     
               <button onClick={getData}>Search</button>
           </div>

       </nav>
       <br/>

            <div className='categoryBtn'>
                   <button onClick={userInput} value="technology">Technology</button>
                   <button onClick={userInput} value="sports">Sports</button>
                   <button onClick={userInput} value="politics">Politics</button>
                   <button onClick={userInput} value="economy">Economy</button>
                   <button onClick={userInput} value="health">Health</button>
            </div>

       <div>
        {newsdata?<Card data={newsdata} /> : null }
           
       </div>
   </div>
  )
}

export default Newsapp
