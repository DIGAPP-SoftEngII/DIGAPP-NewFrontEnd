import React, { useEffect, useState } from 'react'
import styles from "./Signin.module.css";
import DigNavbar from '../../Components/DigNavbar/DigNavbar';
import {
    Input,
    InputGroup,
    Container,
    Button
    
} from 'reactstrap'
import { gql, useLazyQuery} from "@apollo/client"


export const LOGIN_QUERY = gql`
    query LoginUser($email: String!, $password: String!) {
        loginUser(Email: $email, Password: $password) {
                Token
                Message  
            }
        }
`


function Signin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");

    
    const [ getLogin, result ] = useLazyQuery(LOGIN_QUERY, {
        variables: { email: email, password: password },
    });

    const handleSubmit = () => {
        getLogin();
    }

    useEffect(() =>{ 
        if(result.data){
            console.log(result.data.loginUser)
        }
    })


    const handleChange = (e) => {
        if (e.target.name === "name") {
            setEmail(e.target.value);
        } else if(e.target.name === "password"){
            setPassword(e.target.value);
        }
    }


  return (
    <main>
        <DigNavbar />
        <main className={styles.main}>
            <h1 className={styles.tittle}>Login</h1>
            <section className="row justify-content-center">
            <Container className="row justify-content-center mt-5">
                <InputGroup>
                    <Input type="email" name="name" placeholder='email' onChange={handleChange} />
                </InputGroup>
                <InputGroup>
                    <Input type="password" name="password" placeholder='password' onChange={handleChange}/>
                </InputGroup>
                <Button
                onClick={() => {
                    handleSubmit();
                }}
                >
              Login
            </Button>
            </Container>
            </section>
        </main>
    </main>
  )
}

export default Signin