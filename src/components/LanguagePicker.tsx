import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap'
import en from '../assets/flags/en.png';
import de from '../assets/flags/de.png';
import nl from '../assets/flags/nl.png';
import dropdown from '../assets/icons/arrow-down.png';
import { ColorSet } from '../../src/constants/styles/colors'
import './global.css';
const pathString = '../assets/flags/name.png'

const LanguagePicker: React.FC<any> = props => {
    const [language, setLanguage] = useState('en')

    return (
        <Dropdown>
            <Dropdown.Toggle variant="default" id="dropdown-basic">
                <img style={styles.flag} src={en} />
                <img style={styles.dropdown} src={dropdown} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                    <div>
                        <img style={styles.flag} src={en} /><span style={styles.label} >English</span>
                    </div>
                </Dropdown.Item>

                <Dropdown.Item href="#/action-2">
                    <div>
                        <img style={styles.flag} src={de} /><span>German</span>
                    </div>
                </Dropdown.Item>

                <Dropdown.Item href="#/action-3 ">
                    <div>
                        <img style={styles.flag} src={nl} /><span>Dutch</span>
                    </div>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown >
    )
}

const styles = {
    flag: {
        width: 30,
        height: 20,
        marginRight: 10,
    },
    label: {
        color: ColorSet.brand
    },
    dropdown: {
        width: 20,
        height: 20,
        marginLeft: 5,
    }
}

export default LanguagePicker
