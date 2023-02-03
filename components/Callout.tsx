import { FC } from 'react'
import styles from '../scss/components/callout.module.scss'
import cn from 'classnames'
import {Colors} from "../data/colors";

type CalloutProps = {
    color: Colors
}

type HeaderProps = {
    heading?: String,
    icon?: String
}

export const CalloutHeader: FC<HeaderProps> = ({ heading }) =>
    <div className={styles.callout__header}>
        <h3 className={styles.callout__title}>{ heading }</h3>
    </div>

export const CalloutContent: FC = ({ children }) =>
    <div className={styles.callout__content}>
        {children}
    </div>

export const CalloutFooter: FC = ({ children }) =>
    <div className={styles.callout__footer}>
        {children}
    </div>

const Callout: FC<CalloutProps> = ({
    color,
    children }) =>
<div className={cn(styles.callout, {
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

export default Callout
