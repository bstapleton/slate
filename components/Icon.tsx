import styles from '../scss/components/icon.module.scss';
import cn from 'classnames'
import React from "react";
import { ArrowRightDouble } from './icons/arrow-right-double';
import {ArrowDownDouble} from "./icons/arrow-down-double";
import {ArrowLeftDouble} from "./icons/arrow-left-double";
import {ArrowUpDouble} from "./icons/arrow-up-double";
import {Asterisk} from "./icons/asterisk";
import {Bank} from "./icons/bank";
import {Bell} from "./icons/bell";
import {Briefcase} from "./icons/briefcase";
import {Chart} from "./icons/chart";
import {Clock} from "./icons/clock";
import {Cogs} from "./icons/cogs";
import {Company} from "./icons/company";
import {Document} from "./icons/document";
import {Documents} from "./icons/documents";
import {DocumentSearch} from "./icons/document-search";
import {ArrowDownSingle} from "./icons/arrow-down-single";
import {ArrowLeftSingle} from "./icons/arrow-left-single";
import {ArrowUpSingle} from "./icons/arrow-up-single";
import {ArrowRightSingle} from "./icons/arrow-right-single";
import {Edit} from "./icons/edit";
import {Email} from "./icons/email";
import {Envelope} from "./icons/envelope";
import {Exclamation} from "./icons/exclamation";
import {Grid} from "./icons/grid";
import {HorizontalOne} from "./icons/horizontal-one";
import {HorizontalTwo} from "./icons/horizontal-two";
import {HorizontalThree} from "./icons/horizontal-three";
import {Money} from "./icons/money";
import {Report} from "./icons/report";
import {StarFull} from "./icons/star-full";
import {StarHalf} from "./icons/star-half";

type IconProps = {
    type:
        | 'arrow-down-double'
        | 'arrow-down-single'
        | 'arrow-left-double'
        | 'arrow-left-single'
        | 'arrow-right-double'
        | 'arrow-right-single'
        | 'arrow-up-double'
        | 'arrow-up-single'
        | 'asterisk'
        | 'bank'
        | 'bell'
        | 'briefcase'
        | 'business'
        | 'chart'
        | 'clock'
        | 'cogs'
        | 'company'
        | 'document'
        | 'document-search'
        | 'documents'
        | 'edit'
        | 'email'
        | 'envelope'
        | 'exclamation'
        | 'grid'
        | 'horizontal-one'
        | 'horizontal-two'
        | 'horizontal-three'
        | 'money'
        | 'report'
        | 'star-full'
        | 'star-half',
    color:
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
    symbolOnly: boolean,
    size:
        | 'larger'
        | 'large'
        | 'normal'
        | 'small'
        | 'smaller',
}

export function getIcon(type:string, symbolOnly:boolean) {
    switch (type) {
        case 'arrow-down-double':
            return <ArrowDownDouble symbolOnly={symbolOnly} />
        case 'arrow-down-single':
            return <ArrowDownSingle symbolOnly={symbolOnly} />
        case 'arrow-left-double':
            return <ArrowLeftDouble symbolOnly={symbolOnly} />
        case 'arrow-left-single':
            return <ArrowLeftSingle symbolOnly={symbolOnly} />
        case 'arrow-right-double':
            return <ArrowRightDouble symbolOnly={symbolOnly} />
        case 'arrow-right-single':
            return <ArrowRightSingle symbolOnly={symbolOnly} />
        case 'arrow-up-double':
            return <ArrowUpDouble symbolOnly={symbolOnly} />
        case 'arrow-up-single':
            return <ArrowUpSingle symbolOnly={symbolOnly} />
        case 'asterisk':
            return <Asterisk symbolOnly={symbolOnly} />
        case 'bank':
            return <Bank symbolOnly={symbolOnly} />
        case 'bell':
            return <Bell symbolOnly={symbolOnly} />
        case 'briefcase':
            return <Briefcase symbolOnly={symbolOnly} />
        case 'chart':
            return <Chart symbolOnly={symbolOnly} />
        case 'clock':
            return <Clock symbolOnly={symbolOnly} />
        case 'cogs':
        case 'gears':
            return <Cogs symbolOnly={symbolOnly} />
        case 'company':
        case 'business':
            return <Company symbolOnly={symbolOnly} />
        case 'document':
            return <Document symbolOnly={symbolOnly} />
        case 'document-search':
            return <DocumentSearch symbolOnly={symbolOnly} />
        case 'documents':
            return <Documents symbolOnly={symbolOnly} />
        case 'edit':
            return <Edit symbolOnly={symbolOnly} />
        case 'email':
            return <Email symbolOnly={symbolOnly} />
        case 'envelope':
            return <Envelope symbolOnly={symbolOnly} />
        case 'exclamation':
            return <Exclamation symbolOnly={symbolOnly} />
        case 'grid':
            return <Grid symbolOnly={symbolOnly} />
        case 'horizontal-one':
            return <HorizontalOne symbolOnly={symbolOnly} />
        case 'horizontal-two':
            return <HorizontalTwo symbolOnly={symbolOnly} />
        case 'horizontal-three':
            return <HorizontalThree symbolOnly={symbolOnly} />
        case 'money':
            return <Money symbolOnly={symbolOnly} />
        case 'report':
            return <Report symbolOnly={symbolOnly} />
        case 'star-full':
            return <StarFull symbolOnly={symbolOnly} />
        case 'star-half':
            return <StarHalf symbolOnly={symbolOnly} />
    }
}

export const Icon = ({ type, color, symbolOnly, size }: IconProps) => {
    return(
        <div className={cn(styles.icon, {
            [styles.symbolOnly]: symbolOnly,
            [styles.larger]: size === 'larger',
            [styles.large]: size === 'large',
            [styles.small]: size === 'small',
            [styles.smaller]: size === 'smaller',
            [styles.primary]: color === 'primary',
            [styles.secondary]: color === 'secondary',
            [styles.tertiary]: color === 'tertiary',
            [styles.black]: color === 'black',
            [styles.white]: color === 'white',
            [styles.orange]: color === 'orange',
            [styles.yellow]: color === 'yellow',
            [styles.green]: color === 'green',
            [styles.teal]: color === 'teal',
            [styles.cyan]: color === 'cyan',
            [styles.blue]: color === 'blue',
            [styles.indigo]: color === 'indigo',
            [styles.purple]: color === 'purple',
            [styles.pink]: color === 'pink',
            [styles.red]: color === 'red',
        })}>
            {getIcon(type, symbolOnly)}
        </div>
    )
}

Icon.defaultProps = {
    color: 'primary',
    symbolOnly: false,
    size: 'normal'
}
