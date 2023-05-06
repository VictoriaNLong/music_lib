import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ArtistView() {

    const {id} = useParams()

    useEffect(() => {
        let fetchData = async () => {
            const response = await fetch(
                `https://itunes.apple.com/artist/${id}`
              );
              const resData = await response.json();  
              setArtistData(resData)
              debugger
        }
        fetchData()
    }) 
    const [artistData, setArtistData] = useState([])

    return (
        <div>
            <h2>The ID passed was: {id}</h2>
            <p>Artist Data</p>
        </div>
    )
}