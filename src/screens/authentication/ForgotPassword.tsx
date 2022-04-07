import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Title from '../../components/Title'
import TextLink from '../../components/TextLink'
import { ColorSet } from '../../constants/styles/index'
import PrimaryButton from '../../components/PrimaryButton'
import Input from '../../components/Input'

const ForgotPassword: React.FC<any> = (props) => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const buttonDisabled = email == ''

    const handleLogin = () => {
        navigate('/')
    }

    return (
        <div>
            <header style={styles.pageContainer}>
                <Title text={'Forgot your password'} containerStyle={{ alignItems: 'center' }} />

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

                <PrimaryButton
                    disabled={buttonDisabled}
                    text={'Verify'}
                    onClick={handleLogin}
                    containerStyle={
                        {
                            alignItems: 'left'
                        }
                    }
                />

                <TextLink
                    linkText={'Login'}
                    text={'Already have an account?'}
                    onClick={handleLogin}
                    containerStyle={{ textAlign: 'center' }}
                    style={{ alignItems: 'center' }} />
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
export default ForgotPassword;
