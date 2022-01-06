import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const House = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <path d="M74.71,44.71,51.77,21.77a2.5,2.5,0,0,0-3.54,0L35,35V34a1,1,0,0,0-1-1H32.5A2.5,2.5,0,0,0,30,35.5V40l-4.41,4.41A2,2,0,0,0,25,45.83V74a1,1,0,0,0,1,1H46V61.5A2.5,2.5,0,0,1,48.5,59H53a1,1,0,0,1,1,1V75H72.5A2.5,2.5,0,0,0,75,72.5V45.41A1,1,0,0,0,74.71,44.71ZM40,67.5A2.5,2.5,0,0,1,37.5,70H31a1,1,0,0,1-1-1V64.5A2.5,2.5,0,0,1,32.5,62H39a1,1,0,0,1,1,1Zm0-16A2.5,2.5,0,0,1,37.5,54H31a1,1,0,0,1-1-1V48.5A2.5,2.5,0,0,1,32.5,46H39a1,1,0,0,1,1,1Zm12.5,0A2.5,2.5,0,0,1,50,54H48.5a1,1,0,0,1-1-1V48.5A2.5,2.5,0,0,1,50,46h1.5a1,1,0,0,1,1,1ZM70,67.5A2.5,2.5,0,0,1,67.5,70H61a1,1,0,0,1-1-1V64.5A2.5,2.5,0,0,1,62.5,62H69a1,1,0,0,1,1,1Zm0-16A2.5,2.5,0,0,1,67.5,54H61a1,1,0,0,1-1-1V48.5A2.5,2.5,0,0,1,62.5,46H69a1,1,0,0,1,1,1Z"/>
            </g>
        </svg>
    )
}

House.defaultProps = {
    symbolOnly: false,
}
