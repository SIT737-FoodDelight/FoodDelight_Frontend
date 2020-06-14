import React from 'react';
import styled from 'styled-components'


const Input = styled.input`
    width: 10%;
    text-align: center;
    border-radius:8px;
    font-family: 'Courier New', Courier, monospace;
    border: solid 2px #048ABF;
    padding: 12px;
    margin-bottom: 10px;
`;


const Button = styled.button`{
    width: 20%;
    background-color: rgb(247, 184, 12);
    color: white;
    padding: 14px 20px;
    margin: 8px;
    border-radius: 10px;
    cursor: pointer;
  }
  :hover {
    background-color: #f37a17;
  }
  :disabled {
    background-color: gainsboro;}`;
  

const login = () => {
    return (
        <div>
            <h1> Sign In </h1>
            <form>
                <div>
                username : &nbsp;
                </div> <br></br>
                <Input placeholder="Email" name="email" type="email" ></Input>
                <div> 
                password : &nbsp;
                </div><br></br>
                <Input placeholder="password" name="password" type="password"></Input>
                <br></br>
                
                <br></br>
                <Button onclick="login" >Login</Button>
            </form>
        </div>
    )
}

export default login;