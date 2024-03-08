'use client';
import React from 'react'
import styles from '../scss/components/colorcard.module.scss'
import cn from 'classnames'
import {Colors} from "../data/colors";

let c: string[]
c = ['primary', 'secondary']

type ColorCard = {
    color: Colors
    c: string[]
    children: React.ReactNode
}
// TODO can I map an enum's values to an array?
// TODO How do I dynamically apply the value of color without the statically typed array of style checks?
// TODO if I extend from a base colourable class, can I assign default props via inheritance?
export default function ColorCard({
    color, children
}: ColorCard) {
    let c = ['primary', 'secondary']
    for (let i = 0; i < c.length; i++) {
        console.log(c[i])
    }
    // for (let c in Colors) {
    //     const colorClass = styles.${c}
    //     return (
    //       <div className={cn(styles.card, {
    //       [styles.${color}]
    //       })}></div>
    //    )
    // }
    return (
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
          <div>{color} Normal</div>
          <div className={styles.darker}>{color} Darker</div>
          <div className={styles.dark}>{color} Dark</div>
          <div className={styles.light}>{color} Light</div>
          <div className={styles.lighter}>{color} Lighter</div>
      </div>
    )
}
