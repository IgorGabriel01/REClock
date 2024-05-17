import React from 'react';
import styles from './style.module.scss';

interface PropsInput {
    label: string;
    tipoInput: string;
    placeholder: string;
}

export const Input: React.FC<PropsInput> = (props) => {
    return (
        <div className={styles.input}>
            <label htmlFor="">{props.label}</label>
            <input type={props.tipoInput} placeholder={props.placeholder} />
        </div>
    )
}