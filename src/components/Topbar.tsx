
export default function Topbar() {
  return (
    <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden px-4 py-1 bg-white border-t-0 border-r-0 border-b border-l-0 border-[#eee]">
    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-4">
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M18.75 4C20.5449 4 22 5.45507 22 7.25V16.75C22 18.5449 20.5449 20 18.75 20H5.25C3.45507 20 2 18.5449 2 16.75V7.25C2 5.45507 3.45507 4 5.25 4H18.75ZM5.25 5.5C4.2835 5.5 3.5 6.2835 3.5 7.25V16.75C3.5 17.7165 4.2835 18.5 5.25 18.5H14.5V5.5H5.25Z"
          fill="#618666"
        />
      </svg>
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#afafaf]">
            Workspace
          </p>
        </div>
        <svg
          width={12}
          height={12}
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-3 h-3 relative"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M4.23483 2.10983C4.08839 2.25628 4.08839 2.49372 4.23483 2.64017L7.59467 6L4.23484 9.35984C4.08839 9.50628 4.08839 9.74372 4.23484 9.89016C4.38128 10.0366 4.61872 10.0366 4.76517 9.89016L8.39017 6.26516C8.53661 6.11872 8.53661 5.88128 8.39017 5.73483L4.76517 2.10983C4.61872 1.96339 4.38128 1.96339 4.23483 2.10983Z"
            fill="#AFAFAF"
          />
        </svg>
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#afafaf]">
            Folder 2
          </p>
        </div>
        <svg
          width={12}
          height={12}
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-3 h-3 relative"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M4.23483 2.10983C4.08839 2.25628 4.08839 2.49372 4.23483 2.64017L7.59467 6L4.23484 9.35984C4.08839 9.50628 4.08839 9.74372 4.23484 9.89016C4.38128 10.0366 4.61872 10.0366 4.76517 9.89016L8.39017 6.26516C8.53661 6.11872 8.53661 5.88128 8.39017 5.73483L4.76517 2.10983C4.61872 1.96339 4.38128 1.96339 4.23483 2.10983Z"
            fill="#AFAFAF"
          />
        </svg>
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#121212]">
            Spreadsheet 3
          </p>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-6 h-6 relative gap-2 rounded">
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M6.45832 10C6.45832 10.8054 5.80541 11.4583 4.99999 11.4583C4.19457 11.4583 3.54166 10.8054 3.54166 10C3.54166 9.19459 4.19457 8.54167 4.99999 8.54167C5.80541 8.54167 6.45832 9.19459 6.45832 10ZM11.4583 10C11.4583 10.8054 10.8054 11.4583 9.99999 11.4583C9.19457 11.4583 8.54166 10.8054 8.54166 10C8.54166 9.19459 9.19457 8.54167 9.99999 8.54167C10.8054 8.54167 11.4583 9.19459 11.4583 10ZM15 11.4583C15.8054 11.4583 16.4583 10.8054 16.4583 10C16.4583 9.19459 15.8054 8.54167 15 8.54167C14.1946 8.54167 13.5417 9.19459 13.5417 10C13.5417 10.8054 14.1946 11.4583 15 11.4583Z"
                fill="#AFAFAF"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-1">
      <div onClick={() => console.log('Search clicked')}
      className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 p-3 rounded-md bg-[#f3f2f2]">
        <svg
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.4732 14.4733C14.2132 14.7333 13.7866 14.7333 13.5266 14.4733L11.3666 12.3067C11.7132 12.0267 12.0266 11.7133 12.3066 11.3667L14.4732 13.5267C14.7332 13.7867 14.7332 14.2133 14.4732 14.4733Z"
            fill="#AFAFAF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.50004 12.3333C10.1694 12.3333 12.3334 10.1694 12.3334 7.5C12.3334 4.83062 10.1694 2.66666 7.50004 2.66666C4.83066 2.66666 2.66671 4.83062 2.66671 7.5C2.66671 10.1694 4.83066 12.3333 7.50004 12.3333ZM7.50004 13.6667C10.9058 13.6667 13.6667 10.9058 13.6667 7.5C13.6667 4.09424 10.9058 1.33333 7.50004 1.33333C4.09428 1.33333 1.33337 4.09424 1.33337 7.5C1.33337 10.9058 4.09428 13.6667 7.50004 13.6667Z"
            fill="#AFAFAF"
          />
        </svg>
        <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#757575]">
          Search within sheet
        </p>
      </div>
      <div  onClick={() => console.log('Notification clicked')}
      className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3 p-2 rounded-lg bg-white">
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M12 1.99623C16.0499 1.99623 19.3567 5.19097 19.4958 9.24528L19.5 9.49623V13.5932L20.88 16.7492C20.949 16.9071 20.9847 17.0776 20.9847 17.25C20.9847 17.9404 20.425 18.5 19.7347 18.5L15 18.5015C15 20.1584 13.6568 21.5015 12 21.5015C10.4023 21.5015 9.09633 20.2526 9.00508 18.6778L8.99954 18.4992L4.27485 18.5C4.10351 18.5 3.93401 18.4648 3.77685 18.3965C3.14365 18.1215 2.8533 17.3852 3.12834 16.752L4.49999 13.5942V9.49612C4.50059 5.34133 7.85208 1.99623 12 1.99623ZM13.4995 18.4992L10.5 18.5015C10.5 19.3299 11.1716 20.0015 12 20.0015C12.7797 20.0015 13.4204 19.4066 13.4931 18.646L13.4995 18.4992ZM12 3.49623C8.67983 3.49623 6.00047 6.17048 5.99999 9.49623V13.9059L4.65601 17H19.3525L18 13.9068L18.0001 9.50909L17.9964 9.28389C17.8853 6.05041 15.2416 3.49623 12 3.49623Z"
            fill="#121212"
          />
        </svg>
        <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-4 w-4 absolute left-[22px] top-0.5 rounded-[100px] bg-[#4b6a4f] border-2 border-white">
          <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#f6f6f6]">
            2
          </p>
        </div>
      </div>
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 pl-2 pr-3 py-1.5 rounded-lg bg-white">
        <img className="w-8 h-8 rounded-full object-cover" src="/image.png" />
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative space-y-[-2px]">
          <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#121212]">John Doe</p>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-14 text-[10px] text-left text-[#757575]">
            john.doe@companyname.com
          </p>
        </div>
      </div>
    </div>
  </div>
  );
}
