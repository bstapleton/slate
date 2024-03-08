'use client';
import React from 'react';
import { Fragment } from 'react'
import styles from '../scss/components/button.module.scss'
import cn from 'classnames'
import {Icon} from "./Icon";
import {Colors} from "../data/colors";
import {Scales} from "../data/scales";
import {Icons} from "../data/icons";

export default function Button({
  color, disabled, iconType, children
}: {
  color: Colors,
  disabled?: boolean,
  iconType?: Icons,
  children: React.ReactNode
}) {
  return (
    <div className={cn(styles.button, {
      [styles.hasIcon]: iconType,
      [styles.disabled]: disabled,
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
      {iconType ?
        <Fragment>
          <div className={styles.button__icon}>
            <Icon type={iconType} size={Scales.Small} />
          </div>
          <div className={styles.button__text}>
            {children}
          </div>
        </Fragment>
        :
        children
      }
    </div>
  )
}
