import { FC } from 'react'
import styles from '../scss/components/button.module.scss'
import cn from 'classnames'

type ButtonProps = {
    type:
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
    disabled?: boolean,
}

const Button: FC<ButtonProps> = ({ type, disabled, children }) =>
    <div className={cn(styles.button, {
        [styles.disabled]: disabled,
        [styles.primary]: type === 'primary',
        [styles.secondary]: type === 'secondary',
        [styles.tertiary]: type === 'tertiary',
        [styles.black]: type === 'black',
        [styles.white]: type === 'white',
        [styles.orange]: type === 'orange',
        [styles.yellow]: type === 'yellow',
        [styles.green]: type === 'green',
        [styles.teal]: type === 'teal',
        [styles.cyan]: type === 'cyan',
        [styles.blue]: type === 'blue',
        [styles.indigo]: type === 'indigo',
        [styles.purple]: type === 'purple',
        [styles.pink]: type === 'pink',
        [styles.red]: type === 'red',
    })}>
        {children}
    </div>

export default Button;
