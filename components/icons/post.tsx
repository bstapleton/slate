import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const Post = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <path d="M84,30H17.5A2.5,2.5,0,0,0,15,32.5V69a1,1,0,0,0,1,1H82.5A2.5,2.5,0,0,0,85,67.5V31A1,1,0,0,0,84,30ZM80,65H20V35H80Z"/>
                <path d="M24,39.5h9a1,1,0,0,1,1,1v4a0,0,0,0,1,0,0H25a1,1,0,0,1-1-1v-4A0,0,0,0,1,24,39.5Z"/>
                <path d="M37,39.5H56a1,1,0,0,1,1,1v4a0,0,0,0,1,0,0H38a1,1,0,0,1-1-1v-4A0,0,0,0,1,37,39.5Z"/>
                <path d="M24,47.5H53a1,1,0,0,1,1,1v4a0,0,0,0,1,0,0H25a1,1,0,0,1-1-1v-4A0,0,0,0,1,24,47.5Z"/>
                <path d="M24,55.5H38a1,1,0,0,1,1,1v4a0,0,0,0,1,0,0H25a1,1,0,0,1-1-1v-4A0,0,0,0,1,24,55.5Z"/>
                <path d="M42,55.5H56a1,1,0,0,1,1,1v4a0,0,0,0,1,0,0H43a1,1,0,0,1-1-1v-4A0,0,0,0,1,42,55.5Z"/>
                <path d="M70,38h6a1,1,0,0,1,1,1v7a0,0,0,0,1,0,0H71a1,1,0,0,1-1-1V38A0,0,0,0,1,70,38Z"/>
            </g>
        </svg>
    )
}

Post.defaultProps = {
    symbolOnly: false,
}
