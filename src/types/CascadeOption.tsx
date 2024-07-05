export interface CascadeOption {
  value: string;
  label: string;
  children?: CascadeOption[];
  code?: number;
  disabled?: boolean;
}
