import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  InputProps,
} from "@mui/material";
import React, { useId } from "react";
import Render from "../Render";

export interface IInputGroup extends InputProps {
  label?: string;
  helperText?: string;
}
const InputGroup: React.FC<IInputGroup> = React.forwardRef((props, ref) => {
  const id = useId();
  const { label, helperText, ...inputProps } = props;
  return (
    <FormControl
      fullWidth
      required={props.required}
      error={props.error}
      disabled={props.disabled}
    >
      <Render in={!!label}>
        <InputLabel htmlFor={id}>{label}</InputLabel>
      </Render>
      <Input id={id} {...inputProps} ref={ref} />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
});

InputGroup.displayName = "InputGroup";
export default InputGroup;
