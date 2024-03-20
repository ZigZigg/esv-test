import React from 'react';
import classes from './Input.module.css'
type DefaultInputProps = React.InputHTMLAttributes<HTMLInputElement>;
type Props = DefaultInputProps & {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
};

const CommonInput: React.FC<Props> = (props) => {
    const { onChange, placeholder } = props

    return (
        <input
            {...props}
            className={classes.input}
            type="text"
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

export default CommonInput;