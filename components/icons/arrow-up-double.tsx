import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const ArrowUpDouble = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <path d="M48.23,20.77,27.32,41.68a5,5,0,1,0,7.07,7.07L48.23,34.91a2.5,2.5,0,0,1,3.54,0L65.61,48.75a5,5,0,1,0,7.07-7.07L57.07,26.07h0l-5.3-5.3A2.5,2.5,0,0,0,48.23,20.77Z"/>
                <path d="M57.07,50.07l-5.3-5.3a2.5,2.5,0,0,0-3.54,0L27.32,65.68a5,5,0,0,0,7.07,7.07L48.23,58.91a2.5,2.5,0,0,1,3.54,0L65.61,72.75a5,5,0,1,0,7.07-7.07L57.07,50.07Z"/>
            </g>
        </svg>
    )
}

ArrowUpDouble.defaultProps = {
    symbolOnly: false,
}
