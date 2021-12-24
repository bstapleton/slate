import { FC } from 'react'
import styles from '../scss/components/chip.module.scss'
import cn from 'classnames'

type ChipProps = {
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
        {/*<ul>*/}
            {children}
        {/*</ul>*/}
    </div>

const Chip: FC<ChipProps> = ({
    type,
    solid,
    children }) =>
<div className={cn(styles.chip, {
    [styles.solid]: solid,
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

export default Chip
