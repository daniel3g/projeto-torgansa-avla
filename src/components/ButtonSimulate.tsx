import { ButtonHTMLAttributes, FC } from 'react';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const CustomButton: FC<CustomButtonProps> = ({
  children = 'Simule Agora',
  className = '',
  ...props
}) => {
  return (
    <button
      className={`bg-primary_green w-40 h-10 rounded-3xl ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;