import React, {createContext, useEffect, useState} from "react";

export let AlbumContext = createContext();

export default function AlbumProvider({children}) {
  const [albums, setAlbums] = useState([]);

  
  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch('http://localhost:3000/albums'); 
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        console.error('Failed to fetch albums:', error);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <AlbumContext.Provider value={{albums}}>
      {children}
    </AlbumContext.Provider>
  )
   

  
  
}
