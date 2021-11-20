import * as React from 'react';

function SvgArrowDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M494.094 733.426a41.472 41.472 0 01-20.023-11.126L140.16 388.388c-16.272-16.271-16.272-42.653 0-58.925 16.271-16.272 42.653-16.272 58.925 0L503.66 634.037 808.186 329.51c16.271-16.272 42.653-16.272 58.925 0s16.272 42.654 0 58.926L533.2 722.347c-10.607 10.607-25.508 14.3-39.106 11.08z"
        fill="#323233"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgArrowDown;
