import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const Asterisk = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={'symbol'}>
                <path d="M76.25,60.54,58,50,76.25,39.46A2,2,0,0,0,77,36.73l-2-3.46a2,2,0,0,0-2.73-.73L54,43.07V22a2,2,0,0,0-2-2H48a2,2,0,0,0-2,2V43.07L27.75,32.54a2,2,0,0,0-2.73.73l-2,3.46a2,2,0,0,0,.73,2.73L42,50,23.75,60.54A2,2,0,0,0,23,63.27l2,3.46a2,2,0,0,0,2.73.73L46,56.93V78a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2V56.93L72.25,67.46A2,2,0,0,0,75,66.73l2-3.46A2,2,0,0,0,76.25,60.54Z"/>
            </g>
        </svg>
    )
}

Asterisk.defaultProps = {
    symbolOnly: false,
}
