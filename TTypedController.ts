import { DeepPath } from "@hookform/strictly-typed/dist/types";
import React from "react";

export type TTypedController<TFieldValues> = <
  UFieldValues extends TFieldValues,
  TFieldName extends DeepPath<UFieldValues, TFieldName>,
  TAs extends "input" | "select" | "textarea"
>({
  name,
  ...rest
}: import("@hookform/strictly-typed/dist/types").Assign<
  {
    name: TFieldName;
    as?: TAs | undefined;
    rules?:
      | Partial<{
          required:
            | string
            | boolean
            | import("react-hook-form").ValidationValueMessage<boolean>;
          min: import("react-hook-form").ValidationRule<React.ReactText>;
          max: import("react-hook-form").ValidationRule<React.ReactText>;
          maxLength: import("react-hook-form").ValidationRule<React.ReactText>;
          minLength: import("react-hook-form").ValidationRule<React.ReactText>;
          pattern: import("react-hook-form").ValidationRule<RegExp>;
          validate:
            | import("@hookform/strictly-typed/dist/types").Validate<
                import("@hookform/strictly-typed/dist/types").DeepPathValue<
                  UFieldValues,
                  TFieldName
                >
              >
            | Record<
                string,
                import("@hookform/strictly-typed/dist/types").Validate<
                  import("@hookform/strictly-typed/dist/types").DeepPathValue<
                    UFieldValues,
                    TFieldName
                  >
                >
              >;
        }>
      | undefined;
    onFocus?: (() => void) | undefined;
    defaultValue?:
      | import("@hookform/strictly-typed/dist/types").DeepPathValue<
          UFieldValues,
          TFieldName
        >
      | undefined;
    render?:
      | ((props: {
          onChange: (...event: any[]) => void;
          onBlur: () => void;
          value: import("@hookform/strictly-typed/dist/types").DeepPathValue<
            UFieldValues,
            TFieldName
          >;
        }) => React.ReactElement<
          any,
          | string
          | ((
              props: any
            ) => React.ReactElement<
              any,
              | string
              | any
              | (new (props: any) => React.Component<any, any, any>)
            > | null)
          | (new (props: any) => React.Component<any, any, any>)
        >)
      | undefined;
  },
  JSX.IntrinsicElements[TAs]
>) => JSX.Element;
