import * as React from 'react';

function SvgMask(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20C14.3215 20 16.412 19.0112 17.8734 17.4317L17.8714 17.4285H17.8764L17.8794 17.4252L17.8714 17.4285L17.8694 17.4293L17.8665 17.4304L17.858 17.4338L17.8302 17.4446C17.8069 17.4535 17.7741 17.466 17.7324 17.4813C17.6491 17.512 17.5299 17.5546 17.3787 17.6049C17.0767 17.7056 16.6457 17.8381 16.1175 17.9701C15.0655 18.2332 13.6058 18.5 12 18.5C10.3942 18.5 8.9345 18.2332 7.88246 17.9701C7.35428 17.8381 6.92328 17.7056 6.62127 17.6049C6.47014 17.5546 6.35092 17.512 6.26758 17.4813C6.22589 17.466 6.19315 17.4535 6.16983 17.4446L6.14198 17.4338L6.13346 17.4304L6.13057 17.4293L6.12861 17.4285L6.12058 17.4252C7.58223 19.0085 9.67532 20 12 20ZM19.9831 12.5238C19.8829 14.0743 19.341 15.5045 18.4819 16.6899C18.4938 16.6281 18.5 16.5645 18.5 16.5V13.1594L19.9831 12.5238ZM17.4688 11.4254L19.8417 10.4085C19.1037 6.75266 15.8733 4 12 4C8.12675 4 4.89639 6.75257 4.15835 10.4083L6.53149 11.4253C6.56003 11.4156 6.58996 11.4055 6.62127 11.3951C6.92328 11.2944 7.35428 11.1619 7.88246 11.0299C8.9345 10.7668 10.3942 10.5 12 10.5C13.6058 10.5 15.0655 10.7668 16.1175 11.0299C16.6457 11.1619 17.0767 11.2944 17.3787 11.3951C17.4101 11.4055 17.4402 11.4157 17.4688 11.4254ZM5.51814 16.6899C4.65899 15.5045 4.11703 14.0742 4.01686 12.5236L5.5 13.1592V16.5C5.5 16.5645 5.50621 16.6281 5.51814 16.6899ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM8.36754 12.9701C8.02767 13.0551 7.73467 13.1398 7.5 13.213V15.787C7.73467 15.8602 8.02767 15.9449 8.36754 16.0299C9.3155 16.2668 10.6058 16.5 12 16.5C13.3942 16.5 14.6845 16.2668 15.6325 16.0299C15.9723 15.9449 16.2653 15.8602 16.5 15.787V13.213C16.2653 13.1398 15.9723 13.0551 15.6325 12.9701C14.6845 12.7332 13.3942 12.5 12 12.5C10.6058 12.5 9.3155 12.7332 8.36754 12.9701ZM10.449 8.1838C10.6236 8.70774 10.3404 9.27406 9.8165 9.44871L8.3165 9.94871C7.79256 10.1234 7.22624 9.8402 7.05159 9.31626C6.87694 8.79231 7.1601 8.22599 7.68404 8.05134L9.18404 7.55134C9.70799 7.3767 10.2743 7.65986 10.449 8.1838ZM13.551 8.1838C13.3764 8.70774 13.6596 9.27406 14.1835 9.44871L15.6835 9.94871C16.2074 10.1234 16.7738 9.8402 16.9484 9.31626C17.1231 8.79231 16.8399 8.22599 16.316 8.05134L14.816 7.55134C14.292 7.3767 13.7257 7.65986 13.551 8.1838Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMask;
