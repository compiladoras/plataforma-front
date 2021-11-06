import colors from '../styles/colors';

export const BlogIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    width={31}
    height={31}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={15.5} cy={15.994} r={15} fill={colors.black} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.651 10.994c-.266 0-.35.106-.409.35-.409 1.695-.83 3.385-1.25 5.074-.084.35-.172.7-.291 1.145-.022-.076-.04-.133-.055-.18a1.867 1.867 0 01-.046-.164l-.5-2.02c-.3-1.215-.6-2.43-.905-3.642-.02-.08-.035-.15-.049-.209-.04-.182-.06-.271-.116-.314-.053-.04-.137-.038-.301-.036l-.222.002H18.28l.033.177c.01.055.017.099.027.143l.377 1.5.001.006v.001c.537 2.136 1.073 4.27 1.625 6.402.092.34.25.66.463.942a1.061 1.061 0 001.778 0c.225-.317.39-.673.486-1.05.392-1.478.762-2.96 1.133-4.44v-.001c.19-.763.381-1.525.575-2.287l.067-.274c.085-.348.171-.703.265-1.102a22.307 22.307 0 00-.698-.01c-.261 0-.51 0-.76-.013zm-6.663 7.932h-2.633v-2.23h1.743v-1.718h-1.743v-2.241H16.982c.213 0 .308-.06.302-.303v-1.15c0-.202-.065-.279-.255-.279h-3.213a1.097 1.097 0 00-1.115 1.186v7.257a1.104 1.104 0 001.115 1.186h3.207c.19 0 .261-.072.261-.273v-1.15c.006-.22-.077-.29-.296-.285zm-9.525-7.92c.698-.008 1.396-.016 2.09.047a2.419 2.419 0 012.135 2.371c.047 1.601.041 3.202 0 4.809a2.3 2.3 0 01-1.779 2.264c-1.132.132-2.27.203-3.409.214v-9.646l.089-.054c.291.002.583-.001.874-.005zm2.607 5.649c-.01-.758-.02-1.516.01-2.27.066-1.423-.349-1.714-1.588-1.672-.285.006-.362.095-.362.385v5.828h.907a1.001 1.001 0 001.044-1.132c0-.38-.005-.76-.01-1.139z"
      fill={colors.white}
    />
  </svg>
);
