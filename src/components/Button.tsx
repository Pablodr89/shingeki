interface ButtonProps {
  title: string;
  onClickHandler: () => void;
}

export default function Button({ title, onClickHandler }: ButtonProps) {
  return (
    <button
      onClick={onClickHandler}
      className="cursor-pointer bg-primary hover:bg-primary-fixed text-on-primary px-8 py-3 font-bold font-label text-sm uppercase tracking-wider transition-all active:scale-95 shrink-0 rounded-DEFAULT"
    >
      {title}
    </button>
  );
}
