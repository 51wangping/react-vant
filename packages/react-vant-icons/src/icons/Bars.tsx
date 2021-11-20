import * as React from 'react';

function SvgBars(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M194.444 277.778c-30.682 0-55.555-24.873-55.555-55.556 0-30.682 24.873-55.555 55.555-55.555 30.683 0 55.556 24.873 55.556 55.555 0 30.683-24.873 55.556-55.556 55.556zm152.778-97.222h472.222c23.012 0 41.667 18.654 41.667 41.666 0 23.012-18.655 41.667-41.667 41.667H347.222c-23.012 0-41.666-18.655-41.666-41.667s18.654-41.666 41.666-41.666zm0 277.777h472.222c23.012 0 41.667 18.655 41.667 41.667s-18.655 41.667-41.667 41.667H347.222c-23.012 0-41.666-18.655-41.666-41.667s18.654-41.667 41.666-41.667zm0 277.778h472.222c23.012 0 41.667 18.655 41.667 41.667s-18.655 41.666-41.667 41.666H347.222c-23.012 0-41.666-18.654-41.666-41.666 0-23.012 18.654-41.667 41.666-41.667zM194.444 555.556c-30.682 0-55.555-24.874-55.555-55.556s24.873-55.556 55.555-55.556C225.127 444.444 250 469.318 250 500s-24.873 55.556-55.556 55.556zm0 277.777c-30.682 0-55.555-24.873-55.555-55.555 0-30.683 24.873-55.556 55.555-55.556 30.683 0 55.556 24.873 55.556 55.556 0 30.682-24.873 55.555-55.556 55.555z"
        fill="#323233"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgBars;
