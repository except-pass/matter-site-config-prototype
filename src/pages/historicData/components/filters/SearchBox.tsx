interface SearchBoxProps {
  value: string;
  onChange: (next: string) => void;
}

export default function SearchBox({ value, onChange }: SearchBoxProps) {
  return (
    <div className="relative">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input
        className="w-full rounded-xl border pl-10 pr-3 py-2 text-sm outline-none focus:ring"
        placeholder="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
