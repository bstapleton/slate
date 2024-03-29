﻿import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const Report = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <path d="M60,15H30a5,5,0,0,0-5,5V80a5,5,0,0,0,5,5H70a5,5,0,0,0,5-5V30A15.38,15.38,0,0,0,60,15m0,5A10.4,10.4,0,0,1,70,30V80H30V20H60"/>
                <path d="M63.5,49H49a1,1,0,0,1-1-1V46.5A2.51,2.51,0,0,1,50.5,44H65a1,1,0,0,1,1,1v1.5A2.51,2.51,0,0,1,63.5,49"/>
                <path d="M42.5,49H35a1,1,0,0,1-1-1V46.5A2.51,2.51,0,0,1,36.5,44H44a1,1,0,0,1,1,1v1.5A2.51,2.51,0,0,1,42.5,49"/>
                <path d="M63.5,73H35a1,1,0,0,1-1-1V70.5A2.51,2.51,0,0,1,36.5,68H65a1,1,0,0,1,1,1v1.5A2.51,2.51,0,0,1,63.5,73"/>
                <path d="M63.5,65H35a1,1,0,0,1-1-1V62.5A2.51,2.51,0,0,1,36.5,60H65a1,1,0,0,1,1,1v1.5A2.51,2.51,0,0,1,63.5,65"/>
                <path d="M45.5,57H35a1,1,0,0,1-1-1V54.5A2.51,2.51,0,0,1,36.5,52H47a1,1,0,0,1,1,1v1.5A2.51,2.51,0,0,1,45.5,57"/>
                <path d="M63.5,57H53a1,1,0,0,1-1-1V54.5A2.51,2.51,0,0,1,54.5,52H65a1,1,0,0,1,1,1v1.5A2.51,2.51,0,0,1,63.5,57"/>
                <path d="M63.5,26h-10A2.5,2.5,0,0,0,51,28.5v10A2.51,2.51,0,0,0,53.5,41h10A2.51,2.51,0,0,0,66,38.5v-10A2.51,2.51,0,0,0,63.5,26Zm.19,11.21a1,1,0,1,1-1.48,1.48L58.5,35l-3.71,3.71a1,1,0,1,1-1.48-1.48L57,33.5l-3.71-3.71a1,1,0,1,1,1.48-1.48L58.5,32l3.71-3.71a1,1,0,1,1,1.48,1.48L60,33.5Z"/>
                <path d="M46.5,26h-10A2.5,2.5,0,0,0,34,28.5v10A2.51,2.51,0,0,0,36.5,41h10A2.51,2.51,0,0,0,49,38.5v-10A2.51,2.51,0,0,0,46.5,26Zm.18,5.17L41.24,36.6h0l-.78.78a1.11,1.11,0,0,1-1.55,0l-2.6-2.6a1.09,1.09,0,0,1,0-1.55h0a1.09,1.09,0,0,1,1.55,0l1.82,1.81,5.43-5.43a1.1,1.1,0,0,1,1.56,0A1.09,1.09,0,0,1,46.68,31.17Z"/>
            </g>
        </svg>
    )
}

Report.defaultProps = {
    symbolOnly: false,
}
