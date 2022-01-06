import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const ArrowUpSingle = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <path d="M48.23,32.68,27.32,53.59a5,5,0,0,0,7.07,7.07L48.23,46.82a2.5,2.5,0,0,1,3.54,0L65.61,60.66a5,5,0,1,0,7.07-7.07L57.07,38h0l-5.3-5.3A2.5,2.5,0,0,0,48.23,32.68Z"/>
            </g>
        </svg>
    )
}

ArrowUpSingle.defaultProps = {
    symbolOnly: false,
}
