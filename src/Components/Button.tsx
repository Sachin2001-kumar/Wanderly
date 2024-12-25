

interface ButtonProps {
  title: string;
  type?: 'submit' | 'button';
  icon: string;
  variant: string;
  full?: boolean;
}

const Button = ({ title, type = 'button', icon, variant, full }: ButtonProps) => {
  return (
    <button
      className={`gap-3 flex justify-center items-center rounded-full border ${variant} ${full ? 'w-full' : ''}`}
      type={type}
    >
      {icon && <img src={icon} alt={title} width={24} height={20} />}
      <span className="font-bold text-16 whitespace-nowrap">{title}</span>
    </button>
  );
};

export default Button;
