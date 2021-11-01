import React, { useState } from 'react';
import styled from 'styled-components';
import { Constants } from '../../common/constants';
import Input from '../../components/input';
import Button from '../../components/button';

const SignUp = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signupHandler = () => {
        // TODO: handle sign up
    };
    return (
        <Body>
            <Container>
                <FieldsContainer>
                    <Input
                        type="email"
                        placeholder="Email"
                        valueChanged={(val) => setEmail(val)}
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        valueChanged={(val) => setPassword(val)}
                    />
                    <Button onClick={signupHandler}>Sign Up</Button>
                </FieldsContainer>
            </Container>
        </Body>
    );
};
export default SignUp;

const Body = styled.div`
    width: 100%;
    height: calc(100vh - ${Constants.menuHeight}px);
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('https://i.pinimg.com/originals/ff/14/75/ff14752a4f242d9e17e3b76327277e71.jpg');
    background-size: 50% cover;
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: center;
    position: relative;
    &:after {
        position: absolute;
        width: 50%;
        height: 100%;
        background: blue;
        top: 0;
        left: 0;
    }
`;
const Container = styled.div`
    width: 90%;
    max-width: 1000px;
    height: 90%;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    background: rgba(256, 256, 256, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const FieldsContainer = styled.form`
    width: 90%;
    max-width: 540px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
`;
