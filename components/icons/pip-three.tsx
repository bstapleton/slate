import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const PipThree = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <path d="M50,12.5a10,10,0,1,0,10,10A10,10,0,0,0,50,12.5Zm0,15a5,5,0,1,1,5-5A5,5,0,0,1,50,27.5Z"/>
                <path d="M17.52,68.75a10,10,0,1,0,3.66-13.66A10,10,0,0,0,17.52,68.75Zm13-7.5a5,5,0,1,1-6.83-1.83A5,5,0,0,1,30.51,61.25Z"/>
                <path d="M82.48,68.75a10,10,0,1,0-13.66,3.66A10,10,0,0,0,82.48,68.75Zm-13-7.5a5,5,0,1,1,1.83,6.83A5,5,0,0,1,69.49,61.25Z"/>
                <path d="M75,50v.06a13.7,13.7,0,0,1,5,1.41c0-.49,0-1,0-1.47A30,30,0,0,0,63.71,23.32a13.71,13.71,0,0,1-1.27,5A25,25,0,0,1,75,50Z"/>
                <path d="M62.56,71.61a25,25,0,0,1-25.12,0,13.47,13.47,0,0,1-3.69,3.6,30,30,0,0,0,32.5,0A13.47,13.47,0,0,1,62.56,71.61Z"/>
                <path d="M25,50.06V50A25,25,0,0,1,37.56,28.32a13.71,13.71,0,0,1-1.27-5A30,30,0,0,0,20,50c0,.49,0,1,0,1.47A13.7,13.7,0,0,1,25,50.06Z"/>
            </g>
        </svg>
    )
}

PipThree.defaultProps = {
    symbolOnly: false,
}
