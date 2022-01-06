import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const Phone = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <path d="M65.29,77.13l-8.48-8.49a2,2,0,0,1,0-2.83l1.41-1.41h0L69.54,75.71h0l-1.42,1.42A2,2,0,0,1,65.29,77.13Z"/>
                <path d="M31.35,43.19,22.87,34.7a2,2,0,0,1,0-2.83l1.41-1.41h0L35.6,41.77h0l-1.42,1.42A2,2,0,0,1,31.35,43.19Z"/>
                <path d="M37,40.36,38.43,39c2.34-2.35,9.3.82,15.55,7.07s9.42,13.21,7.07,15.55L59.64,63,71,74.3l6.37-6.36C79.71,65.59,71.48,53.56,59,41.07S34.41,20.34,32.06,22.68L25.7,29.05Z"/>
            </g>
        </svg>
    )
}

Phone.defaultProps = {
    symbolOnly: false,
}
