import styles from '../scss/components/icon.module.scss';
import cn from 'classnames'
import React from "react";
import { ArrowRightDouble } from './icons/arrow-right-double';

type IconProps = {
    type:
        | 'arrow-right-double',
    color:
        | 'primary'
        | 'secondary'
        | 'tertiary'
        | 'black'
        | 'white'
        | 'orange'
        | 'yellow'
        | 'green'
        | 'teal'
        | 'cyan'
        | 'blue'
        | 'indigo'
        | 'purple'
        | 'pink'
        | 'red',
    symbolOnly: boolean,
    size:
        | 'normal'
        | 'small'
        | 'smaller',
}

export function getIcon(type:string, symbolOnly:boolean) {
    switch (type) {
        default:
            return <ArrowRightDouble symbolOnly={symbolOnly} />
    }
}

export const Icon = ({ type, color, symbolOnly, size }: IconProps) => {
    return(
        <div className={cn(styles.icon, {
            [styles.symbolOnly]: symbolOnly,
            [styles.small]: size === 'small',
            [styles.smaller]: size === 'smaller',
            [styles.primary]: color === 'primary',
            [styles.secondary]: color === 'secondary',
            [styles.tertiary]: color === 'tertiary',
            [styles.black]: color === 'black',
            [styles.white]: color === 'white',
            [styles.orange]: color === 'orange',
            [styles.yellow]: color === 'yellow',
            [styles.green]: color === 'green',
            [styles.teal]: color === 'teal',
            [styles.cyan]: color === 'cyan',
            [styles.blue]: color === 'blue',
            [styles.indigo]: color === 'indigo',
            [styles.purple]: color === 'purple',
            [styles.pink]: color === 'pink',
            [styles.red]: color === 'red',
        })}>
            {getIcon(type, symbolOnly)}
        </div>
    )
}

Icon.defaultProps = {
    type: 'arrow-right-double',
    color: 'primary',
    symbolOnly: false,
    size: 'normal'
}
