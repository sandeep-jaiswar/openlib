import { TextFieldProps as AriaTextFieldProps,
    ValidationResult, } from "react-aria-components";

export interface TextFieldProps extends AriaTextFieldProps {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
  }