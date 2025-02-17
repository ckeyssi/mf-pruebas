import './label.css';

interface LabelProps {
  text: string;
  primary?: boolean;
}

export function Label({ text, primary = false }: LabelProps) {
  return <h1 className={primary ? 'primary-label' : ''}>{text}</h1>;
}