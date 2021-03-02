import React from 'react';

import { useHomeStyles } from '../../../../pages/Countries/theme';

interface NorthAmericaProps {
  referenceNode: React.RefObject<SVGGElement>;
}

const NorthAmericaSVG: React.FC<NorthAmericaProps> = ({ referenceNode }) => {
  const classes = useHomeStyles();

  return (
    <g id="NA" ref={referenceNode} className={classes.northAmerica}>
      <polygon
        fill="#BCBEC0"
        points="410.6,91.9 403.3,91.7 401.7,93.8 397.6,93.8 397.6,97.7 412.4,99.8 421.1,95.5 421.1,94.4 
416.8,89.9 	"
      />
      <polygon
        fill="#BCBEC0"
        points="401.5,46.3 375.7,49.2 344.5,49.2 326.4,55.4 312,59.8 312,64.1 334,64.5 339.6,74.2 339.6,82.9 
329.1,89 329.3,100.8 335.9,107.4 343.9,107.4 355.7,94.8 372.6,89.9 378.8,85.1 391.6,84.3 400.5,81.6 417.2,55 427.5,52.9 
431.2,49.2 	"
      />
      <polygon fill="#BCBEC0" points="108.7,143.1 103.6,138.8 101.5,140.8 105,145.4 108.7,145.4 	" />
      <polygon
        fill="#BCBEC0"
        points="297.1,142.7 297.1,138.2 297.1,138.2 297.1,138.2 286,149.5 286,149.5 286,149.5 304.5,149.5 
300.6,143.5 	"
      />
      <polygon
        fill="#BCBEC0"
        points="298.8,85.5 298.7,79.1 276.1,69.9 272.8,69.9 265.1,76.3 267.8,69.9 263.9,69.7 254.8,79.4 
276.9,78.3 290.3,90.3 281.4,90.1 276.7,93.8 266.4,93.8 266.4,96.7 276.9,96.7 285.7,104.1 288.2,103.1 286,98.5 292.1,101.4 
294.2,100.4 294.2,91.3 301.2,93.8 305.1,91.1 302.9,87 	"
      />
      <path
        fill="#BCBEC0"
        d="M267.6,152.6l4.1-6.2l-1.9-1.9l-12.6,5.6v-3.3l12-5.8l19.4-0.8l14.6-7.8v-3.5l-10.7-1.7l-1.4-17.3
l-13.8,5.4v-8.2l-6.6-5.6h-9.1l-24.5,35.7h-6l0.2-11.6l-21.2-11.4l21.2-15.7l12-2.1l-2.5-3.7l18.4-1.9l7.6-7.8l-7-0.8l-9.7,6.4
l1.2-5.4l-4.5-0.4l-1.2-6.6l-7.8,3.5l1.9,4.3l-10.5,5l-18.2-3.5l-9.7,4.5L178,80.6l-44.8,1l-30.9,26l3.5,4.1l0,0l-3.5-4.1
l30.7-26.4l0,0l-7.2-2.9l-37.1,0.2l-14.9,6v6.6l-16.9-0.2l-3.3,4.5l14.2-0.6l-18,7l-8.9,11.8l7.6-0.2l-14.6,9.7l5.2,0.4l27.9-13.4
l32.2-1.2l9.7,9.7l3.7-4.1l-3.3-3.3l0,0l3.3,3.3l-3.7,4.1l-3.7,17.1l6.8,6v3.3l0,0l-24.6,26.6v20.2l9.1,9.1l0,0l0,0l1.4,14.2
l9.7,18.4l4.1-3.1l-7.8-16.3v-9.3h4.5l0.2,8.5l14.6,34.2l23.7,9.9l6-1.6l5.2,5.2l2.5-4.7h5.4l-0.8-6h4.7l6-4.5l0.2-6.6l-6.6-0.2
l-5.2,8.7h-14.6l-7.2-15.3l5.8-7.4l-7.4-14.4l7.4,14.4l13.8-17.3l32.6,0.2l2.1,16.3l5.2,0.2l0.2-20.2l52.8-45l3.7-0.6l1.9-6.4l0,0
l-1.9,6.4l10.1-1.7l-6.6,3.1l0.6,2.7l17.9-6.2l-8.9-0.6L267.6,152.6z M127.9,204.8L127.9,204.8l2.1,3.3L127.9,204.8z M223.2,160.8
h-2.9l-4.1,3.1l-4.3,0.4l0.8-7.2h-3.1l-3.7,2.5l-7,10.3h-4.1l8-12.8l9.3-1.9l-0.6-1.7l-6.2-0.2l-2.9-1.7l-3.7,1.7h-4.3l1.7-3.7
l-8.7-4.1l0,0l8.9,4.1l14.9-3.1l1.9,6.6l3.1,2.3l5-0.4L223.2,160.8L223.2,160.8z M228.4,164.1h-3.5l4.9-3.3l0,0l0,0h3.5
L228.4,164.1z"
      />
      <polygon fill="#BCBEC0" points="255.8,99.8 257.1,96.7 250.3,93.8 244.5,98.5 	" />
      <polygon fill="#BCBEC0" points="235.6,82 234,79.4 228,82 230.2,84.7 	" />
      <polygon fill="#BCBEC0" points="243,73.8 244.9,68.8 232.1,72.8 235.6,76.3 	" />
      <polygon fill="#BCBEC0" points="257.1,71.3 255,68.8 246.1,70.7 247,74 	" />
      <polygon fill="#BCBEC0" points="288,63.9 271.7,63.9 266.1,61.6 260.8,66.2 282.4,68 	" />
      <polygon
        fill="#BCBEC0"
        points="335.3,45.5 290.7,48.8 290.7,51.3 305.8,50.9 303.7,53.6 288,54 290.1,57.7 283.3,56.5 286,60 
274.4,60 276.1,61.6 288.8,61.6 290.9,63.3 309.3,54.8 324.1,51.9 	"
      />
      <polygon fill="#BCBEC0" points="282.5,53.1 279.1,50.3 269.4,54.4 277.7,56 	" />
      <polygon fill="#BCBEC0" points="201,69.5 196.6,67.6 178.1,72.3 181.4,76.3 	" />
      <polygon
        fill="#BCBEC0"
        points="199.3,77.1 189.6,79.4 201.6,84.1 210,80.6 219.1,82.7 226.1,81.2 219.3,78.1 224.5,71.3 
219.3,71.3 216.2,75.4 214.8,71.3 209.4,73.4 203.6,70.9 193.1,74.4 	"
      />
      <polygon
        fill="#BCBEC0"
        points="216.2,243.8 200.1,232.4 191.5,232.4 188.2,235.5 197.9,235.5 205.7,240.7 202.8,243.8 	"
      />
      <polygon
        fill="#BCBEC0"
        points="201.8,247.5 201.8,249.8 203.8,251.6 209.6,251.6 209.6,249.4 207.4,247.5 	"
      />
      <polygon fill="#BCBEC0" points="236.2,250.2 239.5,250.2 240.6,248.3 237.3,248.3 	" />
      <polygon
        fill="#BCBEC0"
        points="169.8,250.6 165.1,250.6 165.9,256.6 160.5,256.6 158,261.3 165.7,265.2 171,255.6 	"
      />
      <polygon fill="#BCBEC0" points="176,246.1 169.8,250.6 171,255.6 	" />
      <polygon
        fill="#BCBEC0"
        points="185.9,275.8 185.5,257.4 169.8,257.6 167.3,262.2 165.7,265.2 171.2,267.7 172.5,268.3 
177.4,274.9 183,282.4 185.1,283.2 187.8,279.5 185.9,278.4 	"
      />
      <polygon
        fill="#BCBEC0"
        points="201.6,278.5 194.1,279.3 191.5,281.5 187.8,279.5 185.1,283.2 193.5,286.1 195.4,283.2 
200.3,283.6 201.6,288.2 203.6,285.5 202.6,282.4 	"
      />
      <polygon
        fill="#BCBEC0"
        points="217.7,244.6 219.5,247.3 216.2,247.3 216.2,248.5 223.6,248.5 223.6,249.8 226.7,247.5 
231.7,247.5 233.1,245.7 223.6,244.6 	"
      />
    </g>
  );
};

export default NorthAmericaSVG;