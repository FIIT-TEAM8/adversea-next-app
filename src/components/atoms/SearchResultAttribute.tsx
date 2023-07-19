type Props = {
  label: string;
  value?: string | number;
  list?: string[];
}

export default function SearchResultAttribute({ label, value, list }: Props) {
  if (!value && !list) {
    return null;
  }

  let displayValue = "";

  if (list) {
    displayValue = listToString(list);
  } else {
    displayValue = String(value);
  }

  return (
    <div className="flex mt-1 text-sm">
      <span className="tracking-widest mr-6">{label}</span><span className="ml-auto whitespace-nowrap overflow-ellipsis overflow-hidden">{displayValue}</span>
    </div>
  )
}

function listToString(list: string[]): string {
  const length = list.length;
  let returnValue = "";
  list.forEach((item, index) => {
    if (index !== list.length - 1) {
      returnValue += `${item}, `;
    } else {
      returnValue += item;
    }
  })
  return returnValue
}