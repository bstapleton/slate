import {FC, Fragment} from 'react'
import styles from '../scss/components/button.module.scss'
import cn from 'classnames'
import {Icon} from "./Icon";

type ButtonProps = {
    iconType?:
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
    disabled?: boolean,
}

const Button: FC<ButtonProps> = ({ color, disabled, iconType, children }) =>
    <div className={cn(styles.button, {
        [styles.hasIcon]: iconType,
        [styles.disabled]: disabled,
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
        {iconType ?
            <Fragment>
                <div className={styles.button__icon}>
                    <Icon type={iconType} size={'small'} />
                </div>
                <div className={styles.button__text}>
                    {children}
                </div>
            </Fragment>
        :
            children
        }
    </div>

export default Button;
