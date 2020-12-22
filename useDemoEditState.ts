import { SubmitHandler, useForm, UseFormMethods } from "react-hook-form";
import { IDemoEditForm } from "./IDemoEditForm";
import { TDemoEditProps } from "./DemoEdit";
import { DEMO_EDIT_DEFAULT_VALUES } from "./constants";
import { compact } from "lodash";

export interface IDemoEditState {
  form: UseFormMethods<TDemoEditForm>;
  actions: {
    handleSubmitForm: SubmitHandler<TDemoEditForm>;
  };
}

export type TDemoEditForm = IDemoEditForm;

export const useDemoEditState = (props: TDemoEditProps): IDemoEditState => {
  /**
   * Hook form init values
   */
  const getDemoEditFormValues = (): TDemoEditForm | object => {
    return {
      ...DEMO_EDIT_DEFAULT_VALUES
    };
  };

  const form = useForm<TDemoEditForm>({
    defaultValues: {
      ...getDemoEditFormValues()
    },
    mode: "onBlur",
    reValidateMode: "onBlur"
  });

  const handleSubmitForm: SubmitHandler<TDemoEditForm> = async formData => {
    alert(
      JSON.stringify(
        { ...formData, weeklyChargeDays: compact(formData.weeklyChargeDays) },
        undefined,
        2
      )
    );
  };

  return {
    form,
    actions: {
      handleSubmitForm
    }
  };
};
