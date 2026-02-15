import { useFieldContext } from '../../hooks'
import { useStore } from '@tanstack/react-form'
import { FieldError } from '@components/ui/field'
import { cn } from '@components/ui/utils'

export default function FieldFieldErrorI18nMessage({
  className,
  ...props
}: React.ComponentProps<'p'>) {
  const field = useFieldContext<string>()
  const errors = useStore(field.store, (state) => state.meta.errors)
  if (errors.length === 0) {
    return null
  }
  return (
    <FieldError {...props} className={cn('flex flex-col text-sm text-destructive', className)}>
      {errors.map((errorKey, index) => (
        <span key={`field-message-${field.name}-${index}`} data-slot="form-message" id={field.name}>
          {errorKey.message}
        </span>
      ))}
    </FieldError>
  )
}
