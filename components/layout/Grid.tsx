import { FC } from 'react'
import styles from '../../scss/layout/grid.module.scss'
import cn from 'classnames'

type ContainerProps = {
    columns?: number,
}

export const GridContainer: FC = ({ children }) =>
    <div className={styles.grid}>
        {children}
    </div>

type ItemProps = {
    span?: 1|2|3|4|5|6|7|8|9|10|11|12,
}

const GridItem: FC<ItemProps> = ({
    span,
    children }) =>
<div className={cn(styles.item, {
    [styles["span@1"]]: span === 1,
    [styles["span@2"]]: span === 2,
    [styles["span@3"]]: span === 3,
    [styles["span@4"]]: span === 4,
    [styles["span@5"]]: span === 5,
    [styles["span@6"]]: span === 6,
    [styles["span@7"]]: span === 7,
    [styles["span@8"]]: span === 8,
    [styles["span@9"]]: span === 9,
    [styles["span@10"]]: span === 10,
    [styles["span@11"]]: span === 11,
    [styles["span@12"]]: span === 12
})}>
    {children}
</div>

export default GridItem
