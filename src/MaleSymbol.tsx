import * as React from 'react';

function SvgMaleSymbol(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5858 5L11.4765 11.1093C10.4957 10.4108 9.29583 10 8 10C4.68629 10 2 12.6863 2 16C2 19.3137 4.68629 22 8 22C11.3137 22 14 19.3137 14 16C14 14.7042 13.5892 13.5043 12.8907 12.5235L19 6.41421V10C19 10.5523 19.4477 11 20 11C20.5523 11 21 10.5523 21 10V4.00098C21 4.00065 21 4.00033 21 4C21 3.984 20.9996 3.96801 20.9989 3.95203C20.9874 3.71232 20.8902 3.47595 20.7071 3.29289C20.6112 3.19702 20.5007 3.12468 20.3828 3.07588C20.2649 3.02699 20.1356 3 20 3H19.9998H14C13.4477 3 13 3.44772 13 4C13 4.55228 13.4477 5 14 5H17.5858ZM8 20C10.2091 20 12 18.2091 12 16C12 13.7909 10.2091 12 8 12C5.79086 12 4 13.7909 4 16C4 18.2091 5.79086 20 8 20Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMaleSymbol;
