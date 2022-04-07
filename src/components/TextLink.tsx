import React from 'react';
import { Fonts, ColorSet } from '../constants/styles/index'

interface TextLinkProps {
    text: string,
    linkText: string,
    onClick: any,
    style: React.CSSProperties,
    containerStyle: React.CSSProperties
}

const TextLink: React.FC<TextLinkProps> = ({ text, linkText, onClick, style, containerStyle }: TextLinkProps) => {
    return (
        <div style={{ ...styles.container, ...containerStyle }}>
            <p style={{ ...styles.text }} >{text + ' '}
                <span style={{ ...styles.link, ...style }} className='link' onClick={onClick}>{linkText} </span>
            </p>
        </div>
    )
}

const styles = {
    container: {
        alignItem: 'center'
    },
    text: {
        color: ColorSet.lightDark,
        fontWeight: 'normal',
        ...Fonts.size.small,
        marginTop: 10,
        marginBottom: 10,
    },
    link: {
        color: ColorSet.brand,
        fontWeight: 'normal',
        ...Fonts.size.small,
    },

}

export default TextLink
