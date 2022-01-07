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
import {Scales} from "../data/scales";
import {Colors} from "../data/colors";
import {Icons} from "../data/icons";

type IconProps = {
    type: Icons
    color: Colors
    symbolOnly: boolean,
    size: Scales
}

export function getIcon(type:Icons, symbolOnly:boolean) {
    switch (type) {
        case Icons.ArrowDownDouble:
            return <ArrowDownDouble symbolOnly={symbolOnly} />
        case Icons.ArrowDownSingle:
            return <ArrowDownSingle symbolOnly={symbolOnly} />
        case Icons.ArrowLeftDouble:
            return <ArrowLeftDouble symbolOnly={symbolOnly} />
        case Icons.ArrowLeftSingle:
            return <ArrowLeftSingle symbolOnly={symbolOnly} />
        case Icons.ArrowRightDouble:
            return <ArrowRightDouble symbolOnly={symbolOnly} />
        case Icons.ArrowRightSingle:
            return <ArrowRightSingle symbolOnly={symbolOnly} />
        case Icons.ArrowUpDouble:
            return <ArrowUpDouble symbolOnly={symbolOnly} />
        case Icons.ArrowUpSingle:
            return <ArrowUpSingle symbolOnly={symbolOnly} />
        case Icons.Asterisk:
            return <Asterisk symbolOnly={symbolOnly} />
        case Icons.Bank:
            return <Bank symbolOnly={symbolOnly} />
        case Icons.Bell:
            return <Bell symbolOnly={symbolOnly} />
        case Icons.Briefcase:
            return <Briefcase symbolOnly={symbolOnly} />
        case Icons.Chart:
            return <Chart symbolOnly={symbolOnly} />
        case Icons.Clock:
            return <Clock symbolOnly={symbolOnly} />
        case Icons.Cogs:
        case Icons.Gears:
            return <Cogs symbolOnly={symbolOnly} />
        case Icons.Company:
        case Icons.Business:
            return <Company symbolOnly={symbolOnly} />
        case Icons.Document:
            return <Document symbolOnly={symbolOnly} />
        case Icons.DocumentSearch:
            return <DocumentSearch symbolOnly={symbolOnly} />
        case Icons.Documents:
            return <Documents symbolOnly={symbolOnly} />
        case Icons.Edit:
            return <Edit symbolOnly={symbolOnly} />
        case Icons.Email:
            return <Email symbolOnly={symbolOnly} />
        case Icons.Envelope:
            return <Envelope symbolOnly={symbolOnly} />
        case Icons.Exclamation:
            return <Exclamation symbolOnly={symbolOnly} />
        case Icons.FaceHappy:
            return <FaceHappy symbolOnly={symbolOnly} />
        case Icons.FaceUnhappy:
            return <FaceUnhappy symbolOnly={symbolOnly} />
        case Icons.Grid:
            return <Grid symbolOnly={symbolOnly} />
        case Icons.HorizontalOne:
            return <HorizontalOne symbolOnly={symbolOnly} />
        case Icons.HorizontalThree:
            return <HorizontalThree symbolOnly={symbolOnly} />
        case Icons.HorizontalTwo:
        case Icons.Equals:
            return <HorizontalTwo symbolOnly={symbolOnly} />
        case Icons.House:
            return <House symbolOnly={symbolOnly} />
        case Icons.Identity:
            return <Identity symbolOnly={symbolOnly} />
        case Icons.Info:
            return <Info symbolOnly={symbolOnly} />
        case Icons.List:
            return <List symbolOnly={symbolOnly} />
        case Icons.Lock:
            return <Lock symbolOnly={symbolOnly} />
        case Icons.Logout:
        case Icons.Exit:
            return <Logout symbolOnly={symbolOnly} />
        case Icons.Money:
            return <Money symbolOnly={symbolOnly} />
        case Icons.Person:
            return <Person symbolOnly={symbolOnly} />
        case Icons.Phone:
            return <Phone symbolOnly={symbolOnly} />
        case Icons.PipOne:
            return <PipOne symbolOnly={symbolOnly} />
        case Icons.PipThree:
            return <PipThree symbolOnly={symbolOnly} />
        case Icons.PipTwo:
            return <PipTwo symbolOnly={symbolOnly} />
        case Icons.Plus:
            return <Plus symbolOnly={symbolOnly} />
        case Icons.Post:
        case Icons.Letter:
            return <Post symbolOnly={symbolOnly} />
        case Icons.Question:
            return <Question symbolOnly={symbolOnly} />
        case Icons.Renew:
            return <Renew symbolOnly={symbolOnly} />
        case Icons.Report:
            return <Report symbolOnly={symbolOnly} />
        case Icons.Restart:
            return <Restart symbolOnly={symbolOnly} />
        case Icons.Search:
            return <Search symbolOnly={symbolOnly} />
        case Icons.Sms:
            return <Sms symbolOnly={symbolOnly} />
        case Icons.StarFull:
            return <StarFull symbolOnly={symbolOnly} />
        case Icons.StarHalf:
            return <StarHalf symbolOnly={symbolOnly} />
        case Icons.Tick:
        case Icons.Check:
            return <Tick symbolOnly={symbolOnly} />
        case Icons.Timer:
            return <Timer symbolOnly={symbolOnly} />
        case Icons.Times:
            return <Times symbolOnly={symbolOnly} />
        case Icons.VerticalOne:
        case Icons.Standby:
            return <VerticalOne symbolOnly={symbolOnly} />
        case Icons.VerticalThree:
            return <VerticalThree symbolOnly={symbolOnly} />
        case Icons.VerticalTwo:
        case Icons.Pause:
            return <VerticalTwo symbolOnly={symbolOnly} />
    }
}

export const Icon = ({ type, color, symbolOnly, size }: IconProps) => {
    return(
        <div className={cn(styles.icon, {
            [styles.symbolOnly]: symbolOnly,
            [styles.larger]: size === Scales.Larger,
            [styles.large]: size === Scales.Large,
            [styles.small]: size === Scales.Small,
            [styles.smaller]: size === Scales.Smaller,
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
            {getIcon(type, symbolOnly)}
        </div>
    )
}

Icon.defaultProps = {
    color: Colors.Primary,
    symbolOnly: false,
    size: Scales.Normal
}
