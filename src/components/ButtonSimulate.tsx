import { ButtonHTMLAttributes, FC } from 'react';
import Link from 'next/link';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const CustomButton: FC<CustomButtonProps> = ({
  children = 'Simule Agora',
  className = '',
  ...props
}) => {
  return (
    <Link href="/cotacao">
      <button
        className={`bg-primary_green w-40 h-10 rounded-3xl ${className}`}
        {...props}
      >
        {children}
      </button>
    </Link>
  );
};

export default CustomButton;