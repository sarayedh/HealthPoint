import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Title from '../../components/Title'
import TextLink from '../../components/TextLink'
import PrimaryButton from '../../components/PrimaryButton'
import Input from '../../components/Input'

import { ColorSet } from '../../constants/styles/index'

const Login: React.FC<any> = (props) => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const buttonDisabled = (email == '' || password == '')
    
    const handleForgotPassword = () => {
        navigate('/forgot-password')
    }

    const handleLogin = () => {
        navigate('/dashboard')
    }
    return (
        <div>
            <header style={styles.pageContainer}>
                <Title text={'Login to your Account'} containerStyle={{ alignItems: 'center' }} />

                <Input
                    placeholder={'Email'}
                    label={'Email'}
                    value={email}
                    onChange={(e) => setEmail(e?.target?.value)}
                    type={'text'}
                    id={'id'}
                    isSecure={false}
                    textarea={false}
                    errorText={''}
                />

                <Input
                    placeholder={'Password'}
                    label={'Password'}
                    value={password}
                    onChange={(e) => setPassword(e?.target?.value)}
                    type={'text'}
                    id={'id'}
                    isSecure={true}
                    textarea={false}
                    errorText={''}
                />

                <TextLink linkText={'Forgot password'} text={''} containerStyle={{ alignItems: 'left' }} style={{ alignItems: 'left' }} onClick={handleForgotPassword} />

                <PrimaryButton
                    disabled={buttonDisabled}
                    text={'Log in'}
                    onClick={handleLogin}
                    containerStyle={
                        {
                            alignItems: 'center'
                        }
                    }
                />

            </header>
        </div>
    );
}

const styles = {
    pageContainer: {
        backgroundColor: ColorSet.white,
        alignItems: 'center',
    }
}
export default Login;
