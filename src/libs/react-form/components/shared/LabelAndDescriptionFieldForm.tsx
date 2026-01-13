import { Fragment } from "react";

import { FieldDescription, FieldLabel } from "@/components/ui/field";
import { cn } from "@/libs/utils";
import { Asterisk } from "lucide-react";
import _ from "lodash";
import type { LabelDescription, WithClassNames } from "../type";

export default function LabelAndDescriptionFieldForm({
  classNames,
  children,
  label,
  description,
  required,
}: WithClassNames<"label" | "description"> &
  LabelDescription & { required?: boolean }) {
  return (
    <Fragment>
      {label && (
        <FieldLabel
          className={cn(
            "flex max-w-full gap-x-1.5 truncate break-all",
            classNames?.label
          )}
        >
          <span>{label}</span>

          {required && (
            <Asterisk className="size-3 self-start text-destructive" />
          )}
        </FieldLabel>
      )}
      {children}
      {description && (
        <FieldDescription
          className={cn(
            "line-clamp-3 max-w-full break-all",
            classNames?.description
          )}
        >
          {description}
        </FieldDescription>
      )}
    </Fragment>
  );
}
