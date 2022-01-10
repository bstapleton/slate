import { FC } from 'react'
import styles from '../scss/components/tile.module.scss'
import cn from 'classnames'

type TileProps = {
    column?: number,
    align?: 'center' | 'right'
}

export const TileList: FC = ({ children }) =>
    <div className={styles.tiles}>
        {children}
    </div>

const Tile: FC<TileProps> = ({
    column,
    align,
    children }) =>
<div className={cn(styles.tile, {
    [styles.tile_center]: align === 'center',
    [styles["tile@2"]]: column === 2,
    [styles["tile@3"]]: column === 3,
    [styles["tile@4"]]: column === 4,
    [styles["tile@5"]]: column === 5
})}>
    {children}
</div>

export default Tile
