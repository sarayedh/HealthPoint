import React from 'react'
import { useNavigate } from 'react-router-dom'
import Title from '../../components/Title'
import TextLink from '../../components/TextLink'
import { ColorSet } from '../../constants/styles/index'

function Signup() {
    const navigate = useNavigate()

    const handleSigin = () => {
        navigate('/')
    }
    return (
        <div>
            <header style={styles.pageContainer}>
                <Title text={'Create a merchant Account'} containerStyle={{ alignItems: 'center' }} />
                Merchant app
                <TextLink linkText={' Sign in'} text={'Already have an account?'} containerStyle={{ alignItems: 'left' }} style={{ alignItems: 'left' }} onClick={handleSigin} />
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
export default Signup;
