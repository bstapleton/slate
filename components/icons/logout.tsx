import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const Logout = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <path d="M55.09,41.16l7.95,8a1.24,1.24,0,0,1,0,1.76l-7.95,8a2.49,2.49,0,0,0,0,3.53h0a2.49,2.49,0,0,0,3.53,0l10.61-10.6a2.52,2.52,0,0,0,0-3.54L58.62,37.63a2.49,2.49,0,0,0-3.53,0h0A2.49,2.49,0,0,0,55.09,41.16Z"/>
                <path d="M41.09,41.16l7.95,8a1.24,1.24,0,0,1,0,1.76l-7.95,8a2.49,2.49,0,0,0,0,3.53h0a2.49,2.49,0,0,0,3.53,0l10.61-10.6a2.52,2.52,0,0,0,0-3.54L44.62,37.63a2.49,2.49,0,0,0-3.53,0h0A2.49,2.49,0,0,0,41.09,41.16Z"/>
                <path d="M47.54,65H35V35h12.5A2.5,2.5,0,0,0,50,32.5h0a2.5,2.5,0,0,0-2.5-2.5H32a2,2,0,0,0-2,2V68a2,2,0,0,0,2,2h15.5A2.5,2.5,0,0,0,50,67.5h0A2.5,2.5,0,0,0,47.54,65Z"/>
            </g>
        </svg>
    )
}

Logout.defaultProps = {
    symbolOnly: false,
}
