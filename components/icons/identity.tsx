import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const Identity = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <path d="M37.79,45.5H36.41a4,4,0,1,0-5.25,0H29.79a2,2,0,0,0-2,2v6a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2v-6A2,2,0,0,0,37.79,45.5Z"/>
                <path d="M45.29,38.5h11.5a1,1,0,0,1,1,1V41a2.5,2.5,0,0,1-2.5,2.5H43.79a1,1,0,0,1-1-1V41A2.5,2.5,0,0,1,45.29,38.5Z"/>
                <path d="M45.29,46.5h25.5a1,1,0,0,1,1,1V49a2.5,2.5,0,0,1-2.5,2.5H43.79a1,1,0,0,1-1-1V49A2.5,2.5,0,0,1,45.29,46.5Z"/>
                <path d="M63.29,38.5h7.5a1,1,0,0,1,1,1V41a2.5,2.5,0,0,1-2.5,2.5h-7.5a1,1,0,0,1-1-1V41A2.5,2.5,0,0,1,63.29,38.5Z"/>
                <path d="M70,30H25a5,5,0,0,0-5,5V65a5,5,0,0,0,5,5H75a5,5,0,0,0,5-5V40A10,10,0,0,0,70,30Zm4.79,35.5h-5V62a2,2,0,0,0-2-2h-4a2,2,0,0,0-2,2v3.5H54V62a2,2,0,0,0-2-2H48a2,2,0,0,0-2,2v3.5H37.79V62a2,2,0,0,0-2-2h-4a2,2,0,0,0-2,2v3.5h-5v-30h45a5,5,0,0,1,5,5Z"/>
            </g>
        </svg>
    )
}

Identity.defaultProps = {
    symbolOnly: false,
}
