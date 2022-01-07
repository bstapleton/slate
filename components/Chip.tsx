import { FC } from 'react'
import styles from '../scss/components/chip.module.scss'
import cn from 'classnames'
import {Colors} from "../data/colors";

type ChipProps = {
    color: Colors
    solid?: boolean
}

type ListProps = {
    description?: String
}

export const ChipList: FC<ListProps> = ({ description, children }) =>
    <div className={styles.chips}>
        {description ?
            <div className={styles.chips__descriptor}>{description}</div>
        : null}
        {children}
    </div>

const Chip: FC<ChipProps> = ({
    color,
    solid,
    children }) =>
<div className={cn(styles.chip, {
    [styles.solid]: solid,
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

export default Chip
