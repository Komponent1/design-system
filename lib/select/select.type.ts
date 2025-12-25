export type SelectVariant = 'default' | 'underlined';
export type SelectSize = 'sm' | 'md' | 'lg';

export type SelectOption = {
  value: string;
  label: string;
  icon?: React.ReactNode;
  description?: string;
  disabled?: boolean;
};
