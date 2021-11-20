import * as React from 'react';

function SvgBulbO(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M663.292 652.776V522.659c0-72.412-78.788-147.661-166.666-147.661-87.88 0-166.667 75.25-166.667 147.661v130.117h333.333zm55.556-130.117v185.672H274.403V522.66c0-99.167 99.493-203.217 222.223-203.217 122.73 0 222.222 104.05 222.222 203.217zM496.626 97.22c15.34 0 27.777 12.437 27.777 27.778v55.555c0 15.342-12.436 27.778-27.777 27.778-15.342 0-27.778-12.436-27.778-27.778v-55.555c0-15.341 12.436-27.778 27.778-27.778zm166.666 55.556c13.286 7.67 17.838 24.659 10.168 37.945l-27.778 48.112c-7.67 13.286-24.66 17.838-37.945 10.168-13.286-7.671-17.838-24.66-10.168-37.946l27.778-48.112c7.67-13.286 24.66-17.838 37.945-10.167zm134.123 111.11c10.848 10.849 10.848 28.436 0 39.284l-39.284 39.284c-10.847 10.848-28.435 10.848-39.283 0-10.848-10.848-10.848-28.436 0-39.284l39.283-39.283c10.848-10.848 28.436-10.848 39.284 0zM218.848 874.999c0-15.341 12.436-27.778 27.778-27.778h500c15.34 0 27.777 12.437 27.777 27.778s-12.436 27.778-27.777 27.778h-500c-15.342 0-27.778-12.437-27.778-27.778zm103.668-722.222c13.286-7.671 30.274-3.119 37.945 10.167l27.778 48.112c7.67 13.286 3.118 30.275-10.168 37.946-13.286 7.67-30.274 3.118-37.945-10.168l-27.778-48.112c-7.67-13.286-3.118-30.275 10.168-37.945zm-119.94 111.11c10.848-10.847 28.436-10.847 39.284 0l39.283 39.284c10.848 10.848 10.848 28.436 0 39.284-10.848 10.848-28.435 10.848-39.283 0l-39.284-39.284c-10.848-10.848-10.848-28.435 0-39.283z"
        fill="#323233"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgBulbO;
