import React, {useState} from 'react'
import { StyledInput } from '../common/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Input = props => {
    const [value, setValue] = useState('');
    const [showPass, setShowPass] = useState(false);
    const {
        type = 'text', 
        placeholder,
        valueChanged,
        onKeyPress
    } = props;

    return (
        <Container>
            <StyledInput
                type={showPass ? 'text' 
                    : type ? type 
                    : "text"
                }
                placeholder={placeholder}
                value={value}
                onChange={(e) => {
                    valueChanged(e.target.value)
                    setValue(e.target.value)
                }}
                onKeyPress={onKeyPress}
            />
            {type === 'password' &&
                <AbsoluteIcon onClick={()=>setShowPass(!showPass)} >
                    <FontAwesomeIcon icon={showPass ? faEyeSlash : faEye} />
                </AbsoluteIcon>
            }
        </Container>
    )
}

export default Input;

const AbsoluteIcon = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 9;
    height: 100%;
    display: flex;
    align-items: center;
`;
const Container = styled.div`
    position: relative;
    max-width: 300px;
    margin: 3%
`;