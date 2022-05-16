import React, {useState, useEffect} from 'react'
import {useQuery} from "@apollo/client";
import {GET_NAME_COUNTRY} from '../queries/countries/index.jsx'
import image from '../img/doge.png'

const Home = () => {
    
    const [search, setSearch] = useState('')
    const [country, setCountry] = useState([]);
    const [storedCountries, setStoredCountries] = useState([])
    const [groupBy, setGroupBy] = useState({
        language: false,
        continent: false
    })
    const {language, continent} = groupBy
    const {data: countries, loading, error} = useQuery(GET_NAME_COUNTRY, {errorPolicy: 'all'})
    

    useEffect(() => {
        if (countries) {
            setStoredCountries(countries.countries)
            setCountry(countries.countries)
        }
    }, [countries]);
    
    if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>;
    }
    
    const groupByContinentHandler = () => {
        setGroupBy(prevState => ({
            language: false,
            continent: !prevState.continent
        }))
    }
    
    const groupByLanguageHandler = () => {
        setGroupBy(prevState => ({
            continent: false,
            language: !prevState.language
        }))
    }
    
    const handleSearch = (e) => {
        setSearch(e.target.value)
        filter(e.target.value)
    }
    
    const filter = (searchTerm) => {
        var resultSearch = country.filter((e) =>  {
            if(e.name.toString().toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                return e;
            }
        })
        setStoredCountries(resultSearch)
    }
    
    return (
        <div className="App">
                <h1 className='heading'>Country <span>Search</span> </h1>
                <p>Enter a country </p>
                <input className='input' type="text"  value={search} onChange={handleSearch}/>
            <div className='div-button'>
                <h2>Group by:</h2>
                <button className='button-continent' onClick={groupByContinentHandler}> Continent</button>
                <button className='button-language' onClick={groupByLanguageHandler}> Language</button>
            </div>
            { Object.keys(storedCountries).length === 0 ? <h1 className='not-found'>Sorry, not found... <span><img src={image} alt="Doge uwu" /></span> </h1> :  search === '' ? null : 
            <div className='container'>
            {storedCountries?.map(country => (
                <div key={country.code} className='cards'>
                    <h1 className='continent'>
                        {continent ? country.continent.name : 
                        language ? country.languages.map(x => ( <span className='language' key={x.code}>{language ? x.name : null}  </span>)) : null }
                    </h1>
                    <div className='card-body' on>
                        <h3 className='paragraphs'>{country.emoji} {country.name} </h3>
                        <p className='paragraphs'>Capital: <span>{country.capital}</span></p>
                        <p className='paragraphs'>Phone: <span>+{country.phone}</span></p>
                        <p className='paragraphs'>Currency: <span> {country.currency}</span></p>
                        <p className='paragraphs'>Native language: {country.languages.map(x => ( <span key={x.code}>{x.native} </span>))}</p>
                        <button className='redirect-to'><a href={`https://es.wikipedia.org/wiki/${country.name}`}>View more <span role='img' aria-label='label'>🌎</span></a></button>
                    </div>
                </div>
            ))}
            </div>
            }
        </div>
        
    )
}

export default Home