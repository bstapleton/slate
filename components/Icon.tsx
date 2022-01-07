import styles from '../scss/components/icon.module.scss';
import cn from 'classnames'
import React from "react";
import {ArrowRightDouble} from './icons/arrow-right-double';
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
import {House} from "./icons/house";
import {Identity} from "./icons/identity";
import {Info} from "./icons/info";
import {List} from "./icons/list";
import {Lock} from "./icons/lock";
import {Logout} from "./icons/logout";
import {Person} from "./icons/person";
import {Phone} from "./icons/phone";
import {PipOne} from "./icons/pip-one";
import {PipThree} from "./icons/pip-three";
import {PipTwo} from "./icons/pip-two";
import {Plus} from "./icons/plus";
import {Post} from "./icons/post";
import {Question} from "./icons/question";
import {Renew} from "./icons/renew";
import {FaceHappy} from "./icons/face-happy";
import {FaceUnhappy} from "./icons/face-unhappy";
import {Restart} from "./icons/restart";
import {Search} from "./icons/search";
import {Sms} from "./icons/sms";
import {Tick} from "./icons/tick";
import {Timer} from "./icons/timer";
import {VerticalOne} from "./icons/vertical-one";
import {VerticalTwo} from "./icons/vertical-two";
import {VerticalThree} from "./icons/vertical-three";
import {Times} from "./icons/times";
import {Scale} from "../data/scale";

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
        | 'check'
        | 'clock'
        | 'cogs'
        | 'company'
        | 'document'
        | 'document-search'
        | 'documents'
        | 'edit'
        | 'email'
        | 'envelope'
        | 'equals'
        | 'exclamation'
        | 'exit'
        | 'face-happy'
        | 'face-unhappy'
        | 'grid'
        | 'horizontal-one'
        | 'horizontal-three'
        | 'horizontal-two'
        | 'house'
        | 'identity'
        | 'info'
        | 'letter'
        | 'list'
        | 'lock'
        | 'logout'
        | 'money'
        | 'pause'
        | 'person'
        | 'phone'
        | 'pip-one'
        | 'pip-three'
        | 'pip-two'
        | 'plus'
        | 'post'
        | 'question'
        | 'renew'
        | 'report'
        | 'restart'
        | 'search'
        | 'sms'
        | 'standby'
        | 'star-full'
        | 'star-half'
        | 'tick'
        | 'timer'
        | 'times'
        | 'vertical-one'
        | 'vertical-three'
        | 'vertical-two',
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
    size: Scale
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
        case 'face-happy':
            return <FaceHappy symbolOnly={symbolOnly} />
        case 'face-unhappy':
            return <FaceUnhappy symbolOnly={symbolOnly} />
        case 'grid':
            return <Grid symbolOnly={symbolOnly} />
        case 'horizontal-one':
            return <HorizontalOne symbolOnly={symbolOnly} />
        case 'horizontal-three':
            return <HorizontalThree symbolOnly={symbolOnly} />
        case 'horizontal-two':
        case 'equals':
            return <HorizontalTwo symbolOnly={symbolOnly} />
        case 'house':
            return <House symbolOnly={symbolOnly} />
        case 'identity':
            return <Identity symbolOnly={symbolOnly} />
        case 'info':
            return <Info symbolOnly={symbolOnly} />
        case 'list':
            return <List symbolOnly={symbolOnly} />
        case 'lock':
            return <Lock symbolOnly={symbolOnly} />
        case 'logout':
        case 'exit':
            return <Logout symbolOnly={symbolOnly} />
        case 'money':
            return <Money symbolOnly={symbolOnly} />
        case 'person':
            return <Person symbolOnly={symbolOnly} />
        case 'phone':
            return <Phone symbolOnly={symbolOnly} />
        case 'pip-one':
            return <PipOne symbolOnly={symbolOnly} />
        case 'pip-three':
            return <PipThree symbolOnly={symbolOnly} />
        case 'pip-two':
            return <PipTwo symbolOnly={symbolOnly} />
        case 'plus':
            return <Plus symbolOnly={symbolOnly} />
        case 'post':
        case 'letter':
            return <Post symbolOnly={symbolOnly} />
        case 'question':
            return <Question symbolOnly={symbolOnly} />
        case 'renew':
            return <Renew symbolOnly={symbolOnly} />
        case 'report':
            return <Report symbolOnly={symbolOnly} />
        case 'restart':
            return <Restart symbolOnly={symbolOnly} />
        case 'search':
            return <Search symbolOnly={symbolOnly} />
        case 'sms':
            return <Sms symbolOnly={symbolOnly} />
        case 'star-full':
            return <StarFull symbolOnly={symbolOnly} />
        case 'star-half':
            return <StarHalf symbolOnly={symbolOnly} />
        case 'tick':
        case 'check':
            return <Tick symbolOnly={symbolOnly} />
        case 'timer':
            return <Timer symbolOnly={symbolOnly} />
        case 'times':
            return <Times symbolOnly={symbolOnly} />
        case 'vertical-one':
        case 'standby':
            return <VerticalOne symbolOnly={symbolOnly} />
        case 'vertical-three':
            return <VerticalThree symbolOnly={symbolOnly} />
        case 'vertical-two':
        case 'pause':
            return <VerticalTwo symbolOnly={symbolOnly} />
    }
}

export const Icon = ({ type, color, symbolOnly, size }: IconProps) => {
    return(
        <div className={cn(styles.icon, {
            [styles.symbolOnly]: symbolOnly,
            [styles.larger]: size === Scale.Larger,
            [styles.large]: size === Scale.Large,
            [styles.small]: size === Scale.Small,
            [styles.smaller]: size === Scale.Smaller,
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
