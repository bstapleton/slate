import { FC } from 'react'
import styles from '../scss/components/pip.module.scss'
import cn from 'classnames'
import {Colors} from "../data/colors";

type PipProps = {
    hollow?: boolean,
    align?: 'left' | 'right',
    color: Colors
}

const Pip: FC<PipProps> = ({
    hollow,
    align,
    color,
    children }) =>
<div className={cn(styles.pip, {
    [styles.solid]: !hollow,
    [styles.left]: align === 'left',
    [styles.right]: align === 'right',
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

Pip.defaultProps = {
    hollow: false,
    align: 'left'
}

export default Pip
