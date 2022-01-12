import { FC } from 'react'
import styles from '../scss/components/tile.module.scss'
import cn from 'classnames'

type TileProps = {
    align?: 'center' | 'right'
}

const Tile: FC<TileProps> = ({
    align,
    children }) =>
<div className={cn(styles.tile, {
    [styles.tile_center]: align === 'center',
})}>
    {children}
</div>

export default Tile
