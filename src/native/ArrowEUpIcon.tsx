import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgArrowEUpIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M19.884 12.384a1.25 1.25 0 0 1-1.768 0L13.25 7.518V19.5a1.25 1.25 0 0 1-2.5 0V7.518l-4.866 4.866a1.25 1.25 0 0 1-1.768-1.768l7-7a1.25 1.25 0 0 1 1.768 0l7 7a1.25 1.25 0 0 1 0 1.768"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgArrowEUpIcon;
