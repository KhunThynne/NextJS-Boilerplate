import { createFormHook as rootCreateFormHook } from "@tanstack/react-form";
import { lazy, type LazyExoticComponent, type ComponentType } from "react";
import { fieldContext, formContext, useFormContext } from "./form-context";
import { Button } from "@/components/ui/button";

type LazyComp = LazyExoticComponent<ComponentType<any>>;

const FieldInput: LazyComp = lazy(() => import("../components/FieldInput"));
const FieldTextArea: LazyComp = lazy(
  () => import("../components/FieldTextArea")
);
const FieldSelect: LazyComp = lazy(() => import("../components/FieldSelect"));
const FieldCheckBox: LazyComp = lazy(
  () => import("../components/FieldCheckBox")
);
const FieldSwitch: LazyComp = lazy(() => import("../components/FieldSwitch"));
const FieldRadioGroup: LazyComp = lazy(
  () => import("../components/FieldRadioGroup")
);
function SubscribeButton({ label }: { label: string }) {
  const form = useFormContext();
  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => <Button disabled={isSubmitting}>{label}</Button>}
    </form.Subscribe>
  );
}

export type createFormProps = Parameters<typeof rootCreateFormHook>[0];

export const createAppForm = (config?: Partial<createFormProps>) => {
  return rootCreateFormHook({
    fieldComponents: {
      Input: FieldInput,
      Select: FieldSelect,
      TextArea: FieldTextArea,
      CheckBox: FieldCheckBox,
      Switch: FieldSwitch,
      RadioGroup: FieldRadioGroup,
      ...config?.fieldComponents,
    },
    formComponents: {
      SubscribeButton,
      ...config?.formComponents,
    },
    fieldContext,
    formContext,
    ...config,
  });
};
