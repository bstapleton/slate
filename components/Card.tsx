import { FC } from 'react'
import styles from '../scss/components/card.module.scss'
import cn from 'classnames'
import {Colors} from "../data/colors";

type CardProps = {
    color: Colors
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
    color,
    flex,
    children }) =>
<div className={cn(styles.card, {
    [styles.flex]: flex,
    [styles.primary]: color === Colors.Primary,
    [styles.secondary]: color === Colors.Secondary,
    [styles.tertiary]: color === Colors.Tertiary,
    [styles.black]: color === Colors.Black,
    [styles.white]: color === Colors.White,
    [styles.orange]: color === Colors.Orange,
    [styles.yellow]: color === Colors.Yellow,
    [styles.green]: color === Colors.Green,
    [styles.teal]: color === Colors.Teal,
    [styles.cyan]: color === Colors.Cyan,
    [styles.blue]: color === Colors.Blue,
    [styles.indigo]: color === Colors.Indigo,
    [styles.purple]: color === Colors.Purple,
    [styles.pink]: color === Colors.Pink,
    [styles.red]: color === Colors.Red,
})}>
    {children}
</div>

export default Card
