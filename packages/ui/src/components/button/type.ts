interface PropsItem {
  type: string;
  validator: (value: string) => boolean;
}
export interface ButtonItemProps {
  icon: PropsItem;
  label: string;
  size: PropsItem;
  state: PropsItem;
  theme: PropsItem;
}
