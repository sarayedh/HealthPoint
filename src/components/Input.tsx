import React, { ReactEventHandler, useState } from "react";
import * as Icons from "../constants/assets/icons";
import { Fonts, ColorSet } from '../constants/styles/index'

interface InputProps {
    placeholder: string
    label: string
    value: string
    type: string
    id: string
    isSecure: boolean
    textarea: boolean
    errorText: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

const Input: React.FC<InputProps> = ({
    placeholder,
    label,
    value,
    onChange,
    type,
    id,
    isSecure,
    textarea,
    errorText }: InputProps) => {

    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordType, setPasswordType] = useState("password");
    const togglePassword = (e: any) => {
        e.preventDefault();
        setPasswordShown(!passwordShown);
        passwordType === "text"
            ? setPasswordType("password")
            : setPasswordType("text");
    };
    return (
        <>
            <div style={styles.container} className="position-relative">
                <p style={styles.label}>{label}</p>
                <div style={styles.inputRow} className="form-input-container">
                    <div style={styles.inputContainer} className="form-input-container__input">
                        {!textarea && (
                            <input
                                style={styles.input}
                                className="form-control input__theme"
                                id={id}
                                type={isSecure && isSecure ? passwordType : type}
                                value={value}
                                placeholder={''}
                                onChange={onChange}
                            // style={isSecure && { 'padding-right': '36px' }}
                            />
                        )}
                        {/* {textarea && (
                            <textarea
                                className="form-control input__theme"
                                id={id}
                                value={value}
                                placeholder={placeholder}
                                onChange={onChangeTextArea}
                            />
                        )} */}
                    </div>
                    {isSecure && (
                        // <span className="form-input-container__icon--right">
                        <button style={styles.iconBtn} className="pass-btn" type="button" onClick={togglePassword}>
                            <img
                                src={
                                    passwordType === "password"
                                        ? Icons.eye
                                        : Icons.eyeDisable
                                }
                                alt="Trulli"
                                className="img-fluid img__fluid"
                                style={styles.icon}
                            />
                        </button>
                        // </span>
                    )}
                </div>
                {
                    errorText &&
                    <span className="error-div">{errorText && errorText}</span>
                }
            </div>
        </>
    );
}

const styles = {
    container: {
        padding: 20,
        flex: 1
    },
    inputContainer: {
        flex: 1,
    },
    inputRow: {
        display: 'flex',
        borderBottom: '2px solid ' + ColorSet.lightBrand,
    },
    label: {
        ...Fonts.size.normal,
        color: ColorSet.midDark,
        margin: 0
    },
    input: {
        ...Fonts.size.normal,
        fontWeight: 'bold',
        height: 50,
        border: 0,
        borderRadius: 0,
        boxShadow: 'none',
        width: '100%',
        paddingLeft: 0,
    },
    iconBtn: {
        border: 0,
        backgroundColor: '#fff'
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    }
}
export default Input;