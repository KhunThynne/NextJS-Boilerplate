import { Fragment } from 'react'

import { Asterisk } from 'lucide-react'
import type { LabelDescription, WithClassNames } from '../type'
import { FieldLabel, FieldDescription } from '@components/ui/field'
import { cn } from '@components/ui/utils'

export default function LabelAndDescriptionFieldForm({
  classNames,
  children,
  label,
  description,
  required
}: WithClassNames<'label' | 'description'> & LabelDescription & { required?: boolean }) {
  return (
    <Fragment>
      {label && (
        <FieldLabel
          className={cn(
            'flex max-w-full gap-x-1.5 truncate break-all items-center',
            classNames?.label
          )}
        >
          <span>{label}</span>

          {required && <Asterisk className="size-2.5  self-start text-destructive my-auto" />}
        </FieldLabel>
      )}
      {children}
      {description && (
        <FieldDescription
          className={cn('line-clamp-3 max-w-full break-all', classNames?.description)}
        >
          {description}
        </FieldDescription>
      )}
    </Fragment>
  )
}
