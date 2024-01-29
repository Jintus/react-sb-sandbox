import 'material-symbols';
import React from "react";
import styles from './Icon.module.css';

export interface IIconProps {
    name: string;
}
export const Icon = React.forwardRef<HTMLSpanElement, IIconProps>(({name}, ref) => {
    const className = `material-symbols-outlined ${styles.icon}`;
    return <span ref={ref} className={className}>{name}</span>
});