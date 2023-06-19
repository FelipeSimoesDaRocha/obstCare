// Styles
import * as S from './InputDate.styles';

// Models
import { InputDateProps } from './models';

// Components
import { Input } from 'components/input';

const InputDate = (props: InputDateProps) => {
  const { id, title, info, value, width, required, onChange } = props;

  return (
    <S.Container>
      <Input
        width={width}
        id={id}
        info={info}
        onChange={onChange}
        type="date"
        required={required}
        value={value}
        title={title}
      />
    </S.Container>
  );
}

export default InputDate;
