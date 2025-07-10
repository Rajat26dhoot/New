

const tabs = [
  { label: "All Orders", active: true },
  { label: "Pending", active: false },
  { label: "Reviewed", active: false },
  { label: "Arrived", active: false },
];

export default function Bootombar() {
  return (
    <div className="flex items-center gap-6 px-8 bg-white border-t border-[#eee]">
      <div className="flex items-start">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 px-4 py-2.5 ${
              tab.active
                ? "bg-[#e8f0e9] border-t-2 border-[#4b6a4f]"
                : "bg-transparent"
            }`}
          >
            <p
              className={`text-base ${
                tab.active
                  ? "font-semibold text-[#3e5741]"
                  : "font-medium text-[#757575]"
              }`}
            >
              {tab.label}
            </p>
          </div>
        ))}

        <div className="flex items-center px-1 py-2">
          <button className="p-1 bg-white rounded">
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
            >
              <path
                d="M10 2.5C9.54 2.5 9.16667 2.87333 9.16667 3.33333V9.16667H3.33333C2.87333 9.16667 2.5 9.54 2.5 10C2.5 10.46 2.87333 10.8333 3.33333 10.8333H9.16667V16.6667C9.16667 17.1267 9.54 17.5 10 17.5C10.46 17.5 10.8333 17.1267 10.8333 16.6667V10.8333H16.6667C17.1267 10.8333 17.5 10.46 17.5 10C17.5 9.54 17.1267 9.16667 16.6667 9.16667H10.8333V3.33333C10.8333 2.87333 10.46 2.5 10 2.5Z"
                fill="#757575"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
