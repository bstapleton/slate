import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const DocumentSearch = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <path className={styles.background} d="M65.5,35H45a1,1,0,0,1-1-1V32.5c0-1.37,1.13-4.5,2.5-4.5H67a1,1,0,0,1,1,1v3.5A2.5,2.5,0,0,1,65.5,35"/>
                <path className={styles.background} d="M65.5,46H41a1,1,0,0,1-1-1V43.5c0-1.37,1.13-4.5,2.5-4.5H67a1,1,0,0,1,1,1v3.5A2.5,2.5,0,0,1,65.5,46"/>
                <path className={styles.background} d="M65.5,57H49a1,1,0,0,1-1-1V52.5A2.51,2.51,0,0,1,50.5,50H67a1,1,0,0,1,1,1v3.5A2.5,2.5,0,0,1,65.5,57"/>
                <path className={styles.background} d="M63.5,73H35a1,1,0,0,1-1-1V70.5A2.51,2.51,0,0,1,36.5,68H65a1,1,0,0,1,1,1v1.5A2.51,2.51,0,0,1,63.5,73"/>
                <path className={styles.background} d="M63.5,65H35a1,1,0,0,1-1-1V62.5A2.51,2.51,0,0,1,36.5,60H65a1,1,0,0,1,1,1v1.5A2.51,2.51,0,0,1,63.5,65"/>
                <path className={styles.background} d="M44.08,36H36.5A2.51,2.51,0,0,0,34,38.5V40a1,1,0,0,0,1,1h9.08Z"/>
                <path className={styles.background} d="M44,28H36.5A2.51,2.51,0,0,0,34,30.5V32a1,1,0,0,0,1,1h9Z"/>
                <path className={styles.background} d="M60,15H30a5,5,0,0,0-5,5V80a5,5,0,0,0,5,5H70a5,5,0,0,0,5-5V30A15.38,15.38,0,0,0,60,15ZM70,51.14V80H30V20H60A10.4,10.4,0,0,1,70,30v.61a15,15,0,0,1,0,20.53Z"/>
                <path className={styles.background} d="M44,52H36.5A2.51,2.51,0,0,0,34,54.5V56a1,1,0,0,0,1,1h9Z"/>
                <path className={styles.background} d="M44,44H36.5A2.51,2.51,0,0,0,34,46.5V48a1,1,0,0,0,1,1h9Z"/>
                <path d="M59.08,20.88A20,20,0,0,0,43,52.77l-9.36,9.36a5,5,0,0,0-4.22,1.39L22.37,70.6a5,5,0,0,0,7.08,7.07l7.07-7.07a5,5,0,0,0,1.39-4.23L47.29,57A20,20,0,1,0,59.08,20.88Zm0,35a15,15,0,1,1,15-15A15,15,0,0,1,59.08,55.88Z"/>
            </g>
        </svg>
    )
}

DocumentSearch.defaultProps = {
    symbolOnly: false,
}
