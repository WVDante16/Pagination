import React, {useState, useEffect} from 'react';
import Character from './Character';

export default function List() {
    const [characters, setCharacter] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPageUrl, setCurrentPageUrl] = useState("https://rickandmortyapi.com/api/character");
    const [nextPageUrl, setNextPageUrl] = useState();
    const [prevPageUrl, setPrevPageUrl] = useState();
    const [pages, setPages] = useState();

    useEffect(() => {
        const url = currentPageUrl;
        
        async function fetchData() {
            const data = await fetch(url);
            const {results, info} = await data.json();
            setCharacter(results);
            setLoading(false);

            setNextPageUrl(info.next);
            setPrevPageUrl(info.prev);
            setPages(info.pages);
        }

        fetchData();
    }, [currentPageUrl]);

    //Next Page
    const nextPage = () => {
        setCurrentPageUrl(nextPageUrl);
    }

    //Prev Page
    const prevPage = () => {
        setCurrentPageUrl(prevPageUrl);
    }

    //Choose Page
    const goToPage = (num) => {
        setCurrentPageUrl(`https://rickandmortyapi.com/api/character?page=${num}`)
    }

    return (
        <div>
            <h2>Characters</h2>
            <div className="row">
                {
                    loading? (
                        <div>Loading...</div>
                    )
                    :
                    (
                    characters.map((character) => (
                        <Character
                            key={character.id}
                            name={character.name}
                            origin={character.origin}
                            image={character.image}
                        />
                    )))
                }
            </div>
        </div>
    )
}