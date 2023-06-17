// React
import { useState } from 'react';

// Styles
import * as S from './Input.styles';

// Models
import { inputProps, inputValueProps } from './models';

const InputValue = (props: inputValueProps) => {
  const {
    id,
    type,
    title,
    value,
    checked,
    required,
    className,
    placeholder,
    classContainer,
    onBlur,
    onChange,
    onEnterPress,
  } = props;

  const [invalidRequired, setInvalidRequired] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (onEnterPress && event.key === 'Enter') {
      onEnterPress((event.target as HTMLInputElement).value);
    }
  };

  const onChangeValue = (event: { target: { value: string } }) => {
    const value = event.target?.value ?? '';

    if (!value && required) {
      setInvalidRequired(true);
    } else {
      setInvalidRequired(false);
    }

    onChange(value);
  };

  return (
    <div
      className={`${'input'} ${classContainer} ${invalidRequired ? 'required' : ''} ${isFocused ? 'focused' : ''} ${type === 'password' ? 'password' : ''
        }`}
    >
      <>
        <label
          className={'label'}
          htmlFor={id}
          data-testid={`${id}-label`}
          dangerouslySetInnerHTML={{ __html: title as string }}
        />
        <input
          id={id}
          key={id}
          type={type}
          title={title}
          value={value}
          data-testid={id}
          checked={checked}
          required={required}
          className={className}
          onChange={onChangeValue}
          placeholder={placeholder}
          onKeyUp={event => onKeyUp(event)}
          onFocus={() => setIsFocused(true)}
          onBlur={event => {
            onBlur && onBlur(event);
            setIsFocused(false);
          }}
        />
      </>
    </div>
  );
};

const Input = (props: inputProps) => {
  const {
    id,
    type,
    title,
    value,
    checked,
    required,
    className,
    placeholder,
    textarea,
    onBlur,
    onChange,
    onEnterPress,
    width,
    values,
    autocomplete,
  } = props;

  return (
    <S.Component style={{ width }}>
      {values?.length ? (
        values.map(input => (
          <InputValue
            id={input.id}
            type={input.type}
            title={input.title}
            value={input.value}
            className={input.className}
            placeholder={input.placeholder}
            key={input.id}
            classContainer={input.classContainer}
            checked={input.checked}
            required={input.required}
            textarea={input.textarea}
            onChange={input.onChange}
            onEnterPress={input.onEnterPress}
            autocomplete={input.autocomplete}
          />
        ))
      ) : (
        <InputValue
          id={id}
          title={title}
          type={type}
          value={value}
          className={className}
          placeholder={placeholder}
          checked={checked}
          required={required}
          textarea={textarea}
          onChange={onChange as (value: string) => void}
          onEnterPress={onEnterPress}
          autocomplete={autocomplete}
          onBlur={onBlur}
        />
      )}
    </S.Component>
  );
};

export default Input;
