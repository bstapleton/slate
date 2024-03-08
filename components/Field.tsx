import {FC} from 'react'
import styles from '../scss/components/field.module.scss'
import cn from 'classnames'
import {Fields} from "../data/fields";
import {Colors} from "../data/colors";
import {Icons} from "../data/icons";
import {Scales} from "../data/scales";
import {Icon} from "./Icon";

/**
 * TODO: field component for each type
 * TODO: validation through props passed up from child components
 * TODO: assistive animation on validation (if possible)
 * TODO: mobile testing of fields
 */

type FieldProps = {
    type: Fields,
    label?: string,
    required?: boolean,
    prefix?: string,
    affix?: boolean,
    help?: string,
    valid?: boolean,
    validation?: string,
}

export function getField(type:Fields) {
    switch (type) {
        case Fields.Text:
            return <input type={'text'} className={styles.field__input} />
        case Fields.Textarea:
            return <textarea />
        case Fields.Select:
            return <select />
        case Fields.MultiSelect:
            return <select multiple={true} />
        case Fields.Checkbox:
            return <input type={'checkbox'} />
        case Fields.Radio:
            return <input type={'radio'} />
        case Fields.Range:
            return <input type={'range'} />
        case Fields.Date:
            return <input type={'date'} />
        case Fields.Time:
            return <input type={'time'} />
    }
}

const Field: FC<FieldProps> = ({
    type,
    label,
    required,
    prefix,
    affix,
    help,
    valid,
    validation,
    children }) =>
<div className={cn(styles.field, {
    [styles.required]: required === true,
    [styles.text]: type === Fields.Text,
    [styles.textarea]: type === Fields.Textarea,
    [styles.select]: type === Fields.Select,
    [styles.multiselect]: type === Fields.MultiSelect,
    [styles.checkbox]: type === Fields.Checkbox,
    [styles.radio]: type === Fields.Radio,
    [styles.range]: type === Fields.Range,
    [styles.date]: type === Fields.Date,
    [styles.time]: type === Fields.Time,
    [styles.valid]: valid === true,
    [styles.error]: valid === false
})}>
    <div className={styles.field__content}>
        {prefix ?
            <div className={styles.field__prefix}>{prefix}</div>
        : null}
        <div className={styles.field__main}>
            {children}
            {label ?
                <label className={styles.field__label}>{label}</label>
            : null}
            {getField(type)}
        </div>
        <div className={styles.field__affix}>
            <div className={styles.field__validation}>
                {valid === true ?
                  <Icon color={Colors.Green} type={Icons.Tick} size={Scales.Normal}/>
                : null}
                {valid === false ?
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                      <path d="M50,0a50,50,0,1,0,50,50A50,50,0,0,0,50,0Zm0,95A45,45,0,1,1,95,50,45,45,0,0,1,50,95Z" />
                      <g>
                          <rect x="45" y="20.33" width="10" height="41" rx="5" ry="5"/>
                          <rect x="43" y="66.33" width="14" height="14" rx="7" ry="7"/>
                      </g>
                  </svg>
                : null}
            </div>
        </div>
    </div>
    {valid === false ?
      <div className={styles.validation}>{validation}</div>
    : null}
    {help ?
      <div className={styles.field__helper}>
          {help}
      </div>
    : null}
</div>

export default Field
