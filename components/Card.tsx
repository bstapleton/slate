import { FC } from 'react'
import styles from '../scss/components/card.module.scss'
import cn from 'classnames'

type CardProps = {
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
    flex?: boolean
}

type HeaderProps = {
    heading?: String,
    icon?: String
}

export const CardHeader: FC<HeaderProps> = ({ heading }) =>
    <div className={styles.card__header}>
        <h3 className={styles.card__heading}>{ heading }</h3>
    </div>

export const CardContent: FC = ({ children }) =>
    <div className={styles.card__content}>
        {children}
    </div>

export const CardFooter: FC = ({ children }) =>
    <div className={styles.card__footer}>
        {children}
    </div>

const Card: FC<CardProps> = ({
    type,
    flex,
    children }) =>
<div className={cn(styles.card, {
    [styles.flex]: flex,
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

export default Card
