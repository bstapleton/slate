import { FC } from 'react'
import styles from '../scss/components/card.module.scss'
import cn from 'classnames'
import {Colors} from "../data/colors";

type CardProps = {
    color: Colors
}

type ContentProps = {
    wrap?: boolean,
    fill?: boolean,
}

export const C: FC<ContentProps> = ({ wrap, fill, children }) =>
  <div className={cn({
      [styles.wrap]: wrap,
      [styles.fill]: fill,
  })}>
      {children}
  </div>

const Card: FC<CardProps> = ({
    color,
    children }) =>
<div className={cn(styles.card, {
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
    [styles.magenta]: color === Colors.Magenta,
})}>
    {children}
</div>

export default Card
