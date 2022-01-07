import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const Restart = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <path d="M80.53,48.09A30.15,30.15,0,0,0,51.59,20a29.81,29.81,0,0,0-17.66,5,4.9,4.9,0,0,0-.75,7.54l.15.15a5,5,0,0,0,6.26.56A19.82,19.82,0,0,1,50.42,30,20,20,0,1,1,31.25,55l2,.6A4.59,4.59,0,0,0,38.61,49L30.69,34.57,16.25,42.49a4.59,4.59,0,0,0,.93,8.43l3.48,1a30,30,0,0,0,59.87-3.85Z"/>
            </g>
        </svg>
    )
}

Restart.defaultProps = {
    symbolOnly: false,
}
