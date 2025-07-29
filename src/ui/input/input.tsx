import {type ComponentProps, type ReactElement, useState} from 'react'
import styles from './input.module.scss'
import cn from 'classnames'
import {DynamicIcon} from "lucide-react/dynamic";

type InputType = 'password' | 'text' | 'number'
type IconSizeType = 's' | 'm' | 'l'

interface InputProps extends ComponentProps<'input'> {
  type: InputType,
  isClearable?: boolean
  iconSize?: IconSizeType
}

const iconSizeByVariant: Record<IconSizeType, number> = {
  's': 8,
  'm': 10,
  'l': 12,
}

export const Input = ({
                        type,
                        iconSize = 'm',
                        disabled,
                        isClearable,
                        ...rest
                      }: InputProps): ReactElement => {
  const [value, setValue] = useState('')
  const [inputType, setInputType] = useState<InputType>(type)
  const isTypePassword = type === 'password'

  const handleShowPassword = (): void => {
    setInputType(inputType === 'password' ? 'text' : 'password')
  }

  return (
    <div className={styles.field}>
      <input
        onChange={e => setValue(e.target.value)}
        value={value}
        type={inputType}
        disabled={disabled}
        className={cn(styles.field__input, {[styles.field__hasButton]: isClearable})}
        {...rest}
      />

      {isTypePassword && (
        <button className={styles.field__button} onClick={handleShowPassword} disabled={disabled}>
          <DynamicIcon name={'eye'} size={iconSizeByVariant[iconSize]}/>
        </button>)}

      {isClearable && !isTypePassword && (
        <button className={styles.field__button} onClick={() => setValue('')} disabled={disabled}>
          <DynamicIcon name={'x'} size={iconSizeByVariant[iconSize]}/>
        </button>)}
    </div>
  )
}
