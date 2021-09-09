import React , {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import LoaderComp from './Loader'
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
function Login() {
    const [id , setId] = useState('')
    const [pass , setPass] = useState('')
    const [succ , setSucc] = useState(false)
    const [token , setToken] = useState('')
    const [btnLoad , setBtnLoad] = useState(false)
    const [idabsent , setIdabsent] = useState([1])
    const [idbool , setIdbool] = useState(id!='')
    const [passbool , setPassbool] = useState(pass!='')
    const [passabsent , setpassabsent] = useState([1])
    const[err , setError] = useState('')
    const handleusername=(e)=>{
        setId(e.target.value)
        if(e.target.value === ''){
            setIdabsent([1])
            // setBtnLoad(true)
            setIdbool(false)
        }
        else{
            
            setIdabsent([])
            // setBtnLoad(false)
            setIdbool(true)
        }
        
    }
    const handlepass = (e)=>{
        let x = e.target.value  
        setPass(x)
        console.log(x)
        console.log(pass)
        if(e.target.value === ""){
            setpassabsent([1])
            // setBtnLoad(true)
            setPassbool(false)
        }
        else{
            setpassabsent([])
            // setBtnLoad(false)
            setPassbool(true)
        }
    }
    const  handleSubmit= async()=>{
        setError('')
        try { 
            // setLoader(true)
            setBtnLoad(true)
            const request  = await axios.post('https://demo.credy.in/api/v1/usermodule/login/', {
                'username': id,
                'password': pass
              });
            let success = request.data.is_success
            if(success == true){
                const token = request.data.data.token
                setToken(token)     
                setSucc(true)
                // setLoader(false)
                setBtnLoad(false)
                // localStorage.setItem('token',  token);
            }
            // const token = 
        } catch (error) {
            // setLoader(false)
            setBtnLoad(false)
            console.log(error)
            // setError(error)
            setError(error)
        }
    }
    
    return (
        err!=''?<h1>WRONG CREDENTIALS... PLEASE RELOAD</h1>:
        succ == true?<Redirect to={{pathname: "/home", state: { token: token }}}></Redirect>:
        <div className = "login-page" >
        <div className="Login">
            <h5>Please use these Credentials to login: <br></br></h5>
               <h5 style = {{color: "red"}}>  ID = testuser ,  PASSWORD = ruDWLeHr9K7ErsUS</h5>
        <Form  className = "form">
            <Form.Group size="lg" className = "field">
            <h3>Username</h3>
            <Form.Control
                onChange={handleusername}
            />
            {idabsent.map(()=>{
                return <span className = 'err'>Enter username</span>
            })}
            </Form.Group>
            
            <Form.Group size="lg"  className = "field">
            <h3>Password</h3>
            <Form.Control
                type="password"
                onChange = {handlepass}
            />
            {passabsent.map(()=>{
                return <span className = 'err'>Enter password</span>
            })}
            </Form.Group>
            
            <Button block size="lg" type="submit" className = "login-btn" onClick={handleSubmit} disabled ={(btnLoad)||(!(passbool&&idbool))}>
                Login
            </Button>
        </Form>
        </div>
        </div>
    )
}

export default Login
