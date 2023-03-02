import * as React from 'react';

function SvgBeginnerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5547 2.16795C6.24784 1.96338 5.8533 1.94431 5.52814 2.11833C5.20298 2.29235 5 2.63121 5 3V17C5 17.3344 5.1671 17.6466 5.4453 17.8321L11.4453 21.8321C11.7812 22.056 12.2188 22.056 12.5547 21.8321L18.5547 17.8321C18.8329 17.6466 19 17.3344 19 17V3C19 2.63121 18.797 2.29235 18.4719 2.11833C18.1467 1.94431 17.7522 1.96338 17.4453 2.16795L12 5.79815L6.5547 2.16795ZM7 16.4648V4.86852L12 8.20185V19.7982L7 16.4648Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBeginnerIcon;