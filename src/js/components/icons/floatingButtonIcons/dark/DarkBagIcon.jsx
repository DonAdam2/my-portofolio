const DarkBagIcon = ({ width }) => (
  <svg viewBox="0 0 1288 1101" style={{ width }} aria-hidden="true" focusable="false">
    <defs>
      <linearGradient
        id="bagIcon__b"
        x1={644.32}
        y1={1058.59}
        x2={644.32}
        y2={45.11}
        gradientTransform="rotate(-45 644.325 551.852)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="var(--icon-ring-1)" />
        <stop offset={0.23} stopColor="var(--icon-ring-2)" />
        <stop offset={0.45} stopColor="var(--icon-ring-1)" />
        <stop offset={0.68} stopColor="var(--icon-ring-3)" />
        <stop offset={0.88} stopColor="var(--icon-ring-4)" />
        <stop offset={1} stopColor="var(--icon-ring-5)" />
      </linearGradient>
      <linearGradient
        id="bagIcon__a"
        x1={383.67}
        y1={397.82}
        x2={910.9}
        y2={397.82}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="var(--icon-fill-1)" />
        <stop offset={0.14} stopColor="var(--icon-fill-2)" />
        <stop offset={0.46} stopColor="var(--icon-fill-3)" />
        <stop offset={0.51} stopColor="var(--icon-fill-4)" />
        <stop offset={0.67} stopColor="var(--icon-fill-5)" />
        <stop offset={1} stopColor="var(--icon-fill-6)" />
      </linearGradient>
      <linearGradient
        id="bagIcon__c"
        x1={383.67}
        y1={644.98}
        x2={910.9}
        y2={644.98}
        xlinkHref="#bagIcon__a"
      />
    </defs>
    <g data-name="Layer 11">
      <rect
        x={163.17}
        y={70.7}
        width={962.3}
        height={962.3}
        rx={481.15}
        transform="rotate(45 644.323 551.857)"
        fill="var(--theme-bg)"
        strokeMiterlimit={10}
        strokeWidth={51.178}
        stroke="url(#bagIcon__b)"
      />
      <path d="M739.56 378.27v-67.7H555v67.7H383.67v106.79H910.9V378.27z" fill="url(#bagIcon__a)" />
      <path
        fill="url(#bagIcon__c)"
        d="M808.44 571.92h-46.99v-49.91H528.4v49.91h-47v-49.91h-97.73v245.94H910.9V522.01H808.44v49.91z"
      />
    </g>
  </svg>
);

export default DarkBagIcon;
