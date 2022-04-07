import React from 'react';
import { Fonts, ColorSet } from '../constants/styles/index'

interface TitleTextProps {
    text: string,
    containerStyle: React.CSSProperties
}

const Title: React.FC<TitleTextProps> = ({ text, containerStyle }: TitleTextProps) => {
    return (
        <div style={{ ...styles.container, ...containerStyle }}>
            <p style={styles.text}>{text}</p>
        </div>
    )
}

const styles = {
    container: {
        marginBottom: 50
    },
    text: {
        color: ColorSet.mainDark,
        fontWeight: 'bold',
        ...Fonts.size.xlarge,
        // marginVertical: 30,
    },

}

export default Title
