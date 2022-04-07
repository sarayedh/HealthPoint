import React, { ReactEventHandler } from 'react';
import { Fonts, ColorSet } from '../constants/styles/index'

interface PrimaryButtonProps {
    text: string,
    containerStyle: React.CSSProperties
    disabled: boolean
    onClick: () => void
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, containerStyle, disabled, onClick }: PrimaryButtonProps) => {
    return (
        <div style={{ ...styles.container, ...containerStyle }}>
            <button
                disabled={disabled}
                style={disabled ? styles.buttonDisabled : styles.button}
                onClick={onClick}>
                <p style={styles.text}> {text}</p>
            </button>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    button: {
        backgroundColor: ColorSet.brand,
        border: 0,
        padding: 10,
        paddingBottom: 15,
        margin: 20,
        minWidth: 140,
        height: 60,
        borderRadius: 100,
    },
    buttonDisabled: {
        backgroundColor: ColorSet.midGrey,
        border: 0,
        padding: 10,
        paddingBottom: 15,
        margin: 20,
        minWidth: 140,
        height: 60,
        borderRadius: 100,
    },
    text: {
        color: ColorSet.white,
        fontWeight: 'normal',
        ...Fonts.size.normal,
        margin: 0
    },

}

export default PrimaryButton
