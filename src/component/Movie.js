import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import {LoaderComp} from './Loader'
import { Link } from 'react-router-dom';
import Loader from "react-loader-spinner";
// let count = 45466/10;
// import Card from "react-bootstrap/Card";
// import { Redirect } from 'react-router'
let arr = []
function Movie(props) {
    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
    const [movies, setMovies] = useState([])
    const [prev, setPrev] = useState('')
    const [next, setNext] = useState('')
    const [temp , setTemp] = useState([])
    const [loader , setLoader] = useState(false)
    const [errNext , setErrorNext] = useState('')
    const [errPrev , setErrorPrev] = useState('')
    const [pageErr , setPageErr] = useState('')
    const [cardToShow , setCardToShow] = useState({})
    const [cardPresent , setCardPresent] = useState(false)
    const [useEffectErr , setUseEffectErr] = useState('')
    const handlePrevious = async()=>{
        try {
            const token =props.location.state.token;
            setLoader(true)
                const res = await axios.get(prev, {
                     headers: {
                        'Authorization': 'Token '+token
                    }
                });
                setLoader(false)
                let b = 'https://demo.credy.in/api/v1/maya/movies/?page='
                let tempstr = prev.substring(b.length)
                tempstr = Number(tempstr)
                console.log(tempstr)
                arr = []
                if(tempstr == 0){
                    for(let x = 1 ; x<tempstr+10;x++){
                        arr.push(x)
                    }
                }
                else{
                    for(let x = tempstr ; x<tempstr+10;x++){
                        arr.push(x)
                    }
                }
                setTemp(arr)
                setErrorPrev('')
                setMovies(res.data.results)
                if(res.data.next!=null){
                    setNext(res.data.next)
                }
                if(res.data.previous!=null){
                    setPrev(res.data.previous)
                }
                
                if(prev == 'https://demo.credy.in/api/v1/maya/movies/'){
                setPrev('')
                
            }
            } catch (error) {
            setLoader(false)
            setErrorPrev(error)
        }
            // console.log(prev)
    }
    const handleNext = async()=>{
        try {
            const token =props.location.state.token;
            setLoader(true)
            const res = await axios.get(next, {
                headers: {
                    'Authorization': 'Token '+token
                }
                });
                
                setLoader(false)
                arr = []
                let b = 'https://demo.credy.in/api/v1/maya/movies/?page='
                let tempstr = next.substring(b.length)
                tempstr = Number(tempstr)
                    for(let x = tempstr ; x<tempstr+10;x++){
                        arr.push(x)
                    }
                setTemp(arr)
                setErrorNext('')
                setPageErr('')
                
                console.log(res)
                setMovies(res.data.results)
                if(res.data.next!=null){
                    setNext(res.data.next)
                }
                if(res.data.previous!=null){
                    setPrev(res.data.previous)
                }
                
                
        } catch (error) {
            setLoader(false)
            setErrorNext(error)
        }
        
        // console.log(next)
        
    }
    const getPage=async(e)=>{
        try {
            const token =props.location.state.token;
            setLoader(true)
            const res = await axios.get('https://demo.credy.in/api/v1/maya/movies/?page='+e.target.textContent, {
            headers: {
                'Authorization': 'Token '+token
            }
            });
            setLoader(false)
            
            setMovies(res.data.results)
            if(res.data.next!=null){
                setNext(res.data.next)
            }
            if(res.data.previous!=null){
                setPrev(res.data.previous)
            }
            let tempstr = e.target.textContent
            tempstr = Number(tempstr)
            arr = []
            for(let x = tempstr ; x<tempstr+11;x++){
                arr.push(x)
            }
            setTemp(arr)
        } catch (error) {
            setLoader(false)
            setPageErr(error)
            // setError(error)
        }
        
        // console.log(prev)
    }
    const tempfun=async()=>{
        try {
            const token =props.location.state.token;
            setLoader(true)
            const res = await axios.get('https://demo.credy.in/api/v1/maya/movies/', {
        headers: {
            'Authorization': 'Token '+token
        }
        });
        setLoader(false)
        setUseEffectErr('')
        // console.log(res)
        setMovies(res.data.results)
        if(res.data.next!=null){
            setNext(res.data.next)
        }
        if(res.data.previous!=null){
            setPrev(res.data.previous)
        }
        arr = []
            for(let x = 1 ; x<11;x++){
                arr.push(x)
            }
            setTemp(arr)
        } catch (error) {
            setLoader(false)
            console.log(error)
            setUseEffectErr(error)
            // setError(error)
        }
    }
    useEffect(async() => {
        let unmounted = false;
        try {
                console.log(props.location.state.token)
                const token =props.location.state.token;
                setLoader(true)
                const res = await axios.get('https://demo.credy.in/api/v1/maya/movies/', {
                headers: {
                    'Authorization': 'Token '+token
                }
                });
                setLoader(false)
                setUseEffectErr('')
                setMovies(res.data.results)
                if(res.data.next!=null){
                    setNext(res.data.next)
                }
                if(res.data.previous!=null){
                    setPrev(res.data.previous)
                }
                arr = []
                for(let x = 1 ; x<11;x++){
                    arr.push(x)
                }
                setTemp(arr)
            }
            catch (error) {
                setLoader(false)
                console.log(error)
                setUseEffectErr(error)
            }
            return () => { unmounted = true };
    },[])
    const cardShow=(movie)=>{
        setCardToShow(movie)
        setCardPresent(true)
    }
    const removeCard=()=>{
        setCardPresent(false)
        setCardToShow({})
    }
    let count = 1;
    return (
        loader ==true?<Loader type="ThreeDots" color="#00BFFF" height={80} width={80}  style = {style}/>:
        errNext != ''? <><div > <h1 >Refresh again</h1> <button onClick = {handleNext}>Reload</button></div></>:
        errPrev != ''? <><h1>Refresh again</h1> <button onClick = {handlePrevious}>Reload</button></>:
        pageErr != ''? <><h1>Refresh again</h1> <button onClick = {handleNext}>Reload</button></>:
        useEffectErr != ''?<><h1>Refresh again</h1> <button onClick = {tempfun}>Reload</button></>:
        <>
        {cardPresent == true?<><div className = 'perticular' className = "body" style={{ 
            height:'60rem',
            padding:"7rem",
            backgroundImage: `url("https://img.freepik.com/free-vector/open-clapper-board-with-film-strip-background-design_1017-26102.jpg?size=626&ext=jpg")` 
          }}>
                <div class="card" style={{width: '58rem'}}>
                <img src={`https://ui-avatars.com/api/?rounded=true&name=${cardToShow.title}`} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{cardToShow.title}</h5>
                    <p class="card-text">{cardToShow.description}</p>
                    <h3 class="card-text">GENRE :    <p class="text-muted">  {cardToShow.genres}</p></h3>
                    <button type="button" class="btn btn-dark" onClick={removeCard}>CLOSE PROMPT</button>
                </div>
                </div>
        </div>
        </>
        :
        <>
        <div className = "bodyy" style={{ 
            backgroundImage: `url("https://img.freepik.com/free-vector/open-clapper-board-with-film-strip-background-design_1017-26102.jpg?size=626&ext=jpg")` 
          }}>
        </div>
        
              <div className="card-cont">
              
              <Link to={{pathname: "/search", state: { movies: movies }}}><button class="btn btn-outline-success my-2 my-sm-0" type="submit" style={{marginLeft:610,marginBottom:60,width:150,height:70,fontSize:40,textAlign:'center'}}>Search</button></Link>
            {movies.map((movie)=>{
                
                return(<div class="card mb-3" key = {movie.uuid} onClick = {()=>{cardShow(movie)}}>
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
            <div className = "button-cont">
            {prev != ''?<button type="button" onClick = {handlePrevious} class="btn btn-danger">Previous</button>:<></>}
            {temp.map((key)=>{
                if(count == 1){
                    count++;
                    return <button type="button" class="btn btn-success" onClick = {getPage} style = {{marginLeft:4,marginRight:4}}>{key}</button>
                }
                else{
                    return <button type="button" class="btn btn-light" onClick = {getPage} style = {{marginLeft:4,marginRight:4}}>{key}</button>
                }
               
            })}
            {next != ''?<button type="button" class="btn btn-danger" onClick = {handleNext}>Next</button>:<></>}
            </div>
            </div>
            </>
            }
        </>
    )
}

export default Movie
