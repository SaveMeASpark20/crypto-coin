import React, { useState, useEffect } from 'react'
import axios from 'axios'

const url = 'https://newsdata.io/api/1/news?apikey=pub_15663d7133dc6ba15b994cb8fc47cff7fa9c4&q'

const News = () => {
    const [data, setData] = useState(null);
    
    useEffect( () => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch(error => console.log(error))
    },[])
    console.log(data);
    return (
        <div></div>
    )
    

    }

export default News