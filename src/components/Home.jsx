import React from 'react'
import { useQuery } from "@apollo/client";
import {ALL_COUNTRIES} from '../queries/countries/index.jsx'

const Home = () => {

    const {data, loading, error} = useQuery(ALL_COUNTRIES,
        {variables: {
            code: 'CL'
            }
        }
        )

    console.log(data ? data : 'no data');
    // console.log(loading);
    // console.log(error);
    return (
        <div>
            <p>hola este es home</p>
        </div>
    )
}

export default Home