type Props = {
  label: string;
  value?: string | number;
}

export default function SearchResultAttribute({ label, value }: Props) {
  if (!value) {
    return null;
  }

  return (
    <div className="flex mt-1 text-sm">
      <span className="tracking-widest">{label}</span><span className="ml-auto">{value}</span>
    </div>
  )
}