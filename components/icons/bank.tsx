import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const Bank = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <path d="M76.5,68.91h-4v-4a1,1,0,0,0-1-1h-4v-24a1,1,0,0,0-1-1H65a2.5,2.5,0,0,0-2.5,2.5v22.5h-5v-24a1,1,0,0,0-1-1H55a2.5,2.5,0,0,0-2.5,2.5v22.5h-5v-24a1,1,0,0,0-1-1H45a2.5,2.5,0,0,0-2.5,2.5v22.5h-5v-24a1,1,0,0,0-1-1H35a2.5,2.5,0,0,0-2.5,2.5v22.5H30a2.5,2.5,0,0,0-2.5,2.5v2.5H25a2.5,2.5,0,0,0-2.5,2.5v1.5a1,1,0,0,0,1,1H75a2.5,2.5,0,0,0,2.5-2.5v-1.5A1,1,0,0,0,76.5,68.91Z"/>
                <path d="M49.45,22.28,28.25,35.07a1,1,0,0,0,.55,1.84H71.2a1,1,0,0,0,.55-1.84L50.55,22.28A1,1,0,0,0,49.45,22.28Zm1.17,11.55A2.5,2.5,0,1,1,52.43,32,2.51,2.51,0,0,1,50.62,33.83Z"/>
            </g>
        </svg>
    )
}

Bank.defaultProps = {
    symbolOnly: false,
}
