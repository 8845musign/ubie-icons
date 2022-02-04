import * as React from 'react';

function SvgAmbulance(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.8 4.59995L21.9 11.6C21.9618 11.6618 21.9854 11.7236 22.018 11.809C22.0382 11.8618 22.0618 11.9236 22.1 12V18C22.1 18.5 21.7 18.8 21.3 18.8H20C19.8 20.1 18.8 21.1 17.5 21.1C16.2 21.1 15.1 20.1 15 18.8H9C8.8 20.1 7.8 21.1 6.5 21.1C5.2 21.1 4.1 20.1 4 18.8H2.8C2.3 18.8 2 18.4 2 18V12V6.99995C2 5.39995 3.2 4.19995 4.8 4.19995H17.1C17.4 4.19995 17.7 4.29995 17.8 4.59995ZM13.7 11.2H19.9L18.7 9.19995H13.7V11.2ZM6 6.99995H3.5V12.1V14.1H20.5V12.9H13C12.5 12.9 12.2 12.5 12.2 12.1V8.59995C12.2 8.09995 12.6 7.79995 13 7.79995H17.8L17.4 6.99995H12C11.4 6.99995 11 6.59995 11 5.99995V5.79995H6.9C7 5.79995 7 5.89995 7 5.99995C7 6.59995 6.6 6.99995 6 6.99995ZM5.5 18.5C5.5 19.1 5.9 19.5 6.5 19.5C7.1 19.5 7.5 19.1 7.5 18.5C7.5 17.9 7.1 17.5 6.5 17.5C5.9 17.5 5.5 17.9 5.5 18.5ZM16.5 18.5C16.5 19.1 16.9 19.5 17.5 19.5C18.1 19.5 18.5 19.1 18.5 18.5C18.5 17.9 18.1 17.5 17.5 17.5C16.9 17.5 16.5 17.9 16.5 18.5ZM17.5 16C18.5 16 19.3 16.5 19.7 17.2H20.5V15.4H3.5V17.2H4.3C4.8 16.5 5.5 16 6.5 16C7.5 16 8.3 16.5 8.7 17.2H15.3C15.8 16.5 16.5 16 17.5 16ZM8.2002 12.7H6.8002V11.2H5.2002V9.69995H6.8002V8.19995H8.2002V9.69995H9.8002V11.2H8.2002V12.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAmbulance;
