import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { Input, InputProps } from "./input";

interface InputFormItemProps extends InputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  name: string;
  label: string;
  description?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
}

export function InputFormItem({
  control,
  name,
  label,
  description,
  children,
  actions,
  ...props
}: InputFormItemProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel
            className={`text-slate-900 dark:text-slate-100 ${
              children && "flex justify-between items-center"
            }`}
          >
            <div>
              {label}
              {props.required && <span className="!text-red-500">*</span>}
            </div>

            {children}
          </FormLabel>
          <FormControl>
            <div className="relative">
              {actions}
              <Input {...field} {...props} />
            </div>
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
