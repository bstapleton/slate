import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const Info = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <path d="M55,45.74v29H50a5,5,0,0,1-5-5v-29h5A5,5,0,0,1,55,45.74Z"/><rect x="45" y="25.74" width="10" height="10" rx="5" ry="5"/>
            </g>
        </svg>
    )
}

Info.defaultProps = {
    symbolOnly: false,
}
