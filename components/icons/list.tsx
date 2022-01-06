import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const List = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <circle cx="27.52" cy="27.5" r="5"/>
                <circle cx="27.53" cy="42.5" r="5"/>
                <circle cx="27.52" cy="57.5" r="5"/>
                <circle cx="27.52" cy="72.5" r="5"/>
                <path d="M75,32.5H38.48a1,1,0,0,1-1-1V25A2.5,2.5,0,0,1,40,22.5H76.48a1,1,0,0,1,1,1V30A2.51,2.51,0,0,1,75,32.5"/>
                <path d="M75,62.5H38.48a1,1,0,0,1-1-1V55A2.51,2.51,0,0,1,40,52.5H76.48a1,1,0,0,1,1,1V60A2.5,2.5,0,0,1,75,62.5"/>
                <path d="M75,47.5H38.49a1,1,0,0,1-1-1V40A2.5,2.5,0,0,1,40,37.5H76.49a1,1,0,0,1,1,1V45A2.51,2.51,0,0,1,75,47.5"/>
                <path d="M75,77.5H38.48a1,1,0,0,1-1-1V70A2.51,2.51,0,0,1,40,67.5H76.48a1,1,0,0,1,1,1V75A2.5,2.5,0,0,1,75,77.5"/>
            </g>
        </svg>
    )
}

List.defaultProps = {
    symbolOnly: false,
}
