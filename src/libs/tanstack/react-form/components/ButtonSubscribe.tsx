import { Button } from '@components/ui/button'
import { useFormContext } from '../hooks/form-context'

export default function SubscribeButton({
  label,
  ...buttonProps
}: { label: string } & React.ComponentProps<typeof Button>) {
  const form = useFormContext()
  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <Button disabled={isSubmitting} {...buttonProps}>
          {label}
        </Button>
      )}
    </form.Subscribe>
  )
}
