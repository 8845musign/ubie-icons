import * as React from 'react';

function SvgCheckA(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.7071 5.29289C22.0976 5.68342 22.0976 6.31658 21.7071 6.70711L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071L2.29289 12.7071C1.90237 12.3166 1.90237 11.6834 2.29289 11.2929C2.68342 10.9024 3.31658 10.9024 3.70711 11.2929L9 16.5858L20.2929 5.29289C20.6834 4.90237 21.3166 4.90237 21.7071 5.29289Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCheckA;
