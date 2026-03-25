interface ButtonProps {
  title: string;
  onClickHandler: () => void;
  backgroundColor?: string;
  textColor?: string;
  customClasses?: string;
}

export default function Button({
  title,
  onClickHandler,
  backgroundColor,
  textColor,
  customClasses,
}: ButtonProps) {
  return (
    <button
      onClick={onClickHandler}
      className={`${customClasses} cursor-pointer ${backgroundColor ? backgroundColor : "bg-primary hover:bg-primary-fixed"} ${textColor ? textColor : "text-on-primary"} px-8 py-3 font-bold font-label text-sm uppercase tracking-wider transition-all active:scale-95 shrink-0 rounded-md`}
    >
      {title}
    </button>
  );
}
