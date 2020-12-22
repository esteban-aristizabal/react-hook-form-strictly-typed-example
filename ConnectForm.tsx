import React, { forwardRef, Ref, useCallback, useEffect, useState } from "react";
import { FieldError, useFormContext } from "react-hook-form";
import { UseFormMethods } from "react-hook-form/dist/types";
import { useRef } from "react";
import { useTypedController } from "@hookform/strictly-typed";
import { TTypedController } from "./TTypedController";

export type TErrorMessage = "email";

export interface IFormMethods<T> extends UseFormMethods<T> {
  getErrorMessage: (
    fieldError: FieldError,
    typeErrorMessage?: TErrorMessage
  ) => string | undefined;
  onFocus: (fieldError: FieldError | undefined) => void;
  TypedController: TTypedController<T>;
}

const ConnectForm = <T extends {}>({
  children,
}: {
  children: (form: IFormMethods<T>) => JSX.Element;
}) => {
  const formMethods = useFormContext<T>();
  const ref = useRef<HTMLAnchorElement>(null);
  const TypedController = useTypedController<T>({});
  const [formSubmitCount, setFormSubmitCount] = useState<number>(0);

  const onFocus = (fieldError: FieldError | undefined) => {
    if (ref.current && fieldError && formSubmitCount < formMethods.formState.submitCount) {
      setFormSubmitCount(formMethods.formState.submitCount);

      const [firstFieldErrorKey, firstFieldErrorValue] = Object.entries(
        formMethods.formState.errors
      )[0];
      const firstFieldError = {
        [`${firstFieldErrorKey}`]: firstFieldErrorValue,
      };

      if (getErrorPath(firstFieldError, `${fieldError.ref?.name}.ref.name`))
        ref.current.focus();
    }
  };

  const getErrorPath = (obj: object, path: string) => {
    const path_array = path.match(/([^[.\]])+/g) || undefined;

    return path_array?.reduce(
      (prevObj, key) => prevObj && (prevObj as any)[key],
      obj
    );
  };

  const getErrorMessage = (
    fieldError: FieldError,
    typeErrorMessage?: TErrorMessage
  ): string | undefined => {
    if (fieldError.message) return fieldError.message;

    switch (fieldError.type) {
      case "required":
        return "Campo requerido";
      case "pattern":
        switch (typeErrorMessage) {
          case "email":
            return "E-mail inválido";
        }
    }
  };

  return (
    <React.Fragment>
      <ConnectFormRef ref={ref} />
      {children({
        ...formMethods,
        getErrorMessage,
        onFocus,
        TypedController,
      })}
    </React.Fragment>
  );
};

const ConnectFormRef = forwardRef(function ForwardRef(
  props,
  ref: Ref<HTMLAnchorElement>
) {
  return <a ref={ref} tabIndex={-1} />;
});

export default ConnectForm;
