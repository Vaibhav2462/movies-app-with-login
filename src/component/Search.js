import { Redirect } from 'react-router-dom'
import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function Search(props) {
    const [allmovies , setAllmovies] = useState([])
    const [filteredmovies , setFilteredMovies] = useState([])
    const[redir , setRedir] = useState(false)
    const handleFiltered=(e)=>{
        let x = e.target.value;
        x = x.toLowerCase()
        let k = allmovies.filter((obj)=>{
            let temp = obj.title;
            temp = temp.toLowerCase()
            return temp.includes(x)
        })
        setFilteredMovies(k)
    }
    useEffect(() => {
        setAllmovies(props.location.state.movies)
        setFilteredMovies(props.location.state.movies)
    }, [])
    const redirect=()=>{
        setRedir(true)
    }
    return (
        <div>
            <input onChange = {handleFiltered} placeholder = 'search...' style = {{marginLeft:500,width:300,height:40 ,marginTop:10,marginBottom:20}}></input>
            <button type="button" class="btn btn-danger" style={{marginLeft:20}} onClick = {redirect}>Back To Home</button>
            {redir == true?<Redirect to = '/home'></Redirect>:
            <>
            {filteredmovies.map((movie)=>{
                return(<div class="card mb-3" key = {movie.uuid}>
                <div class="row">
                  <div class="col-md-2" >  
                    <img src={`https://ui-avatars.com/api/?rounded=true&name=${movie.title}`} class="img-fluid rounded-start imageme" alt="..."/>
                  </div>
                  <div class="col-md-10">
                    <div class="card-body">
                      <h2 class="card-title">{movie.title}</h2>
                      <h5 class="card-text">{movie.description.substring(0,300)}</h5>
                      <h3 class="card-text">GENRE :    <p class="text-muted">  {movie.genres}</p></h3>
                    </div>
                  </div>
                </div>
              </div>)
            
            })}
            </>
            }
        </div>
    )
}

export default Search
