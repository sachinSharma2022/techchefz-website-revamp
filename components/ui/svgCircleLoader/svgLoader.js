export const SvgLoader = (props) => {
  if (props.circle == 4) {
    return (
      <svg
        width="510"
        height="510"
        viewBox="0 0 470 510"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="235"
          cy="255"
          r="235"
          fill={props.theme ? "#111111" : "#f1f1f1"}
        />
        <circle
          cx="235"
          cy="255"
          r="230"
          stroke={props.theme ? "#707070" : "#979797"}
          stroke-opacity="0.4"
          stroke-width="10"
        />
        <circle
          className="circleFil"
          cx="235"
          cy="255"
          r="230"
          stroke="url(#paint4_linear_1035_26193)"
          stroke-width="10"
          style={{
            strokeDasharray: props.dashArray,
            strokeDashoffset: props.dashArray,
          }}
          transform={`rotate(-90 ${470 / 2} ${510 / 2})`}
        />
        <g filter="url(#filter0_i_1035_26193)">
          <circle
            cx="234.5"
            cy="254.5"
            r="193.5"
            fill={props.theme ? "#202020" : "#ffffff"}
          />
        </g>
        <g>
          <circle
            className="dot"
            id="4"
            cx="235"
            cy="20"
            r="20"
            fill="#26A0F8"
            stroke-width="2"
            stroke="#26A0F8"
          />
          <text
            x="235"
            y="20"
            text-anchor="middle"
            fill="white"
            alignment-baseline="middle"
            style={{}}
          >
            1
          </text>
        </g>
        <g>
          <circle
            className="dot"
            id="3"
            cx="5"
            cy="235"
            r="20"
            fill="white"
            stroke-width="2"
            stroke="#26A0F8"
          />
          <text
            x="5"
            y="235"
            text-anchor="middle"
            fill="white"
            alignment-baseline="middle"
            style={{}}
          >
            4
          </text>
        </g>
        {/* <g>
                  <circle
                    className="dot"
                    id="4"
                    cx="31"
                    cy="373"
                    r="20"
                    fill="white"
                    stroke-width="2"
                    stroke="#26A0F8"
                  />
                  <text
                    x="31"
                    y="373"
                    text-anchor="middle"
                    fill="white"
                    alignment-baseline="middle"
                    style={{}}
                  >
                    5
                  </text>
                </g> */}
        <g>
          <circle
            className="dot"
            id="2"
            cx="235"
            cy="490"
            r="20"
            fill="white"
            stroke-width="2"
            stroke="#26A0F8"
          />
          <text
            x="235"
            y="490"
            text-anchor="middle"
            fill="white"
            alignment-baseline="middle"
            style={{}}
          >
            3
          </text>
        </g>
        {/* <g>
                  <circle
                    className="dot"
                    id="2"
                    cx="439"
                    cy="373"
                    r="20"
                    fill="white"
                    stroke-width="2"
                    stroke="#26A0F8"
                  />
                  <text
                    x="439"
                    y="373"
                    text-anchor="middle"
                    fill="white"
                    alignment-baseline="middle"
                    style={{}}
                  >
                    3
                  </text>
                </g> */}
        <g>
          <circle
            className="dot"
            id="1"
            cx="460"
            cy="235"
            r="19"
            fill="white"
            stroke-width="2"
            stroke="#26A0F8"
          />
          <text
            x="460"
            y="235"
            text-anchor="middle"
            fill="white"
            alignment-baseline="middle"
            style={{}}
          >
            2
          </text>
        </g>

        <defs>
          <filter
            id="filter0_i_1035_26193"
            x="41"
            y="61"
            width="387"
            height="393"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="6" />
            <feGaussianBlur stdDeviation="6" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0.12 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_1035_26193"
            />
          </filter>
          <linearGradient
            id="paint0_linear_1035_26193"
            x1="181.035"
            y1="229.182"
            x2="243.219"
            y2="255.919"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1E8AF2" />
            <stop offset="1" stop-color="#05BED7" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1035_26193"
            x1="130.482"
            y1="230.612"
            x2="203.917"
            y2="302.296"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1E8AF2" />
            <stop offset="1" stop-color="#05BED7" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1035_26193"
            x1="252.169"
            y1="284.925"
            x2="263.461"
            y2="290.914"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1E8AF2" />
            <stop offset="1" stop-color="#05BED7" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_1035_26193"
            x1="196.812"
            y1="210.37"
            x2="208.104"
            y2="216.359"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1E8AF2" />
            <stop offset="1" stop-color="#05BED7" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_1035_26193"
            x1="5.48334"
            y1="165.7"
            x2="252.068"
            y2="296.342"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1E8AF2" />
            <stop offset="1" stop-color="#05BED7" />
          </linearGradient>
          <clipPath id="clip0_1035_26193">
            <rect
              width="258"
              height="258"
              fill="white"
              transform="translate(106 126)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  } else if (props.circle == 5) {
    return (
      <svg
        width="510"
        height="510"
        viewBox="0 0 470 510"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="235"
          cy="255"
          r="235"
          fill={props.theme ? "#111111" : "#f1f1f1"}
        />
        <circle
          cx="235"
          cy="255"
          r="230"
          stroke={props.theme ? "#707070" : "#979797"}
          stroke-opacity="0.4"
          stroke-width="10"
        />
        <circle
          className="circleFil"
          cx="235"
          cy="255"
          r="230"
          stroke="url(#paint4_linear_1035_26193)"
          stroke-width="10"
          style={{
            strokeDasharray: props.dashArray,
            strokeDashoffset: props.dashArray,
          }}
          transform={`rotate(-90 ${470 / 2} ${510 / 2})`}
        />
        <g filter="url(#filter0_i_1035_26193)">
          <circle
            cx="234.5"
            cy="254.5"
            r="193.5"
            fill={props.theme ? "#202020" : "#ffffff"}
          />
        </g>
        <g>
          <circle
            className="dot"
            id="4"
            cx="235"
            cy="20"
            r="20"
            fill="#26A0F8"
            stroke-width="2"
            stroke="#26A0F8"
          />
          <text
            x="235"
            y="20"
            text-anchor="middle"
            fill="white"
            alignment-baseline="middle"
            style={{}}
          >
            1
          </text>
        </g>
        <g>
          <circle
            className="dot"
            id="3"
            cx="20"
            cy="182"
            r="20"
            fill="white"
            stroke-width="2"
            stroke="#26A0F8"
          />
          <text
            x="20"
            y="182"
            text-anchor="middle"
            fill="white"
            alignment-baseline="middle"
            style={{}}
          >
            5
          </text>
        </g>
        <g>
          <circle
            className="dot"
            id="4"
            cx="108"
            cy="440"
            r="20"
            fill="white"
            stroke-width="2"
            stroke="#26A0F8"
          />
          <text
            x="108"
            y="440"
            text-anchor="middle"
            fill="white"
            alignment-baseline="middle"
            style={{}}
          >
            4
          </text>
        </g>
        <g>
          <circle
            className="dot"
            id="2"
            cx="373"
            cy="435"
            r="20"
            fill="white"
            stroke-width="2"
            stroke="#26A0F8"
          />
          <text
            x="373"
            y="435"
            text-anchor="middle"
            fill="white"
            alignment-baseline="middle"
            style={{}}
          >
            3
          </text>
        </g>
        <g>
          <circle
            className="dot"
            id="2"
            cx="460"
            cy="183"
            r="20"
            fill="white"
            stroke-width="2"
            stroke="#26A0F8"
          />
          <text
            x="460"
            y="183"
            text-anchor="middle"
            fill="white"
            alignment-baseline="middle"
            style={{}}
          >
            2
          </text>
        </g>

        <defs>
          <filter
            id="filter0_i_1035_26193"
            x="41"
            y="61"
            width="387"
            height="393"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="6" />
            <feGaussianBlur stdDeviation="6" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0.12 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_1035_26193"
            />
          </filter>
          <linearGradient
            id="paint0_linear_1035_26193"
            x1="181.035"
            y1="229.182"
            x2="243.219"
            y2="255.919"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1E8AF2" />
            <stop offset="1" stop-color="#05BED7" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1035_26193"
            x1="130.482"
            y1="230.612"
            x2="203.917"
            y2="302.296"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1E8AF2" />
            <stop offset="1" stop-color="#05BED7" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1035_26193"
            x1="252.169"
            y1="284.925"
            x2="263.461"
            y2="290.914"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1E8AF2" />
            <stop offset="1" stop-color="#05BED7" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_1035_26193"
            x1="196.812"
            y1="210.37"
            x2="208.104"
            y2="216.359"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1E8AF2" />
            <stop offset="1" stop-color="#05BED7" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_1035_26193"
            x1="5.48334"
            y1="165.7"
            x2="252.068"
            y2="296.342"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1E8AF2" />
            <stop offset="1" stop-color="#05BED7" />
          </linearGradient>
          <clipPath id="clip0_1035_26193">
            <rect
              width="258"
              height="258"
              fill="white"
              transform="translate(106 126)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  } else {
    return (
      <svg
        width="510"
        height="510"
        viewBox="0 0 470 510"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="235"
          cy="255"
          r="235"
          fill={props.theme ? "#111111" : "#f1f1f1"}
        />
        <circle
          cx="235"
          cy="255"
          r="230"
          stroke={props.theme ? "#707070" : "#979797"}
          stroke-opacity="0.4"
          stroke-width="10"
        />
        <circle
          className="circleFil"
          cx="235"
          cy="255"
          r="230"
          stroke="url(#paint4_linear_1035_26193)"
          stroke-width="10"
          style={{
            strokeDasharray: props.dashArray,
            strokeDashoffset: props.dashArray,
          }}
          transform={`rotate(-90 ${470 / 2} ${510 / 2})`}
        />
        <g filter="url(#filter0_i_1035_26193)">
          <circle
            cx="234.5"
            cy="254.5"
            r="193.5"
            fill={props.theme ? "#202020" : "#ffffff"}
          />
        </g>
        <g>
          <circle
            className="dot"
            id="4"
            cx="235"
            cy="20"
            r="20"
            fill="#26A0F8"
            stroke-width="2"
            stroke="#26A0F8"
          />
          <text
            x="235"
            y="20"
            text-anchor="middle"
            fill="white"
            alignment-baseline="middle"
            style={{}}
          >
            1
          </text>
        </g>
        <g>
          <circle
            className="dot"
            id="3"
            cx="31"
            cy="138"
            r="20"
            fill="white"
            stroke-width="2"
            stroke="#26A0F8"
          />
          <text
            x="31"
            y="138"
            text-anchor="middle"
            fill="white"
            alignment-baseline="middle"
            style={{}}
          >
            6
          </text>
        </g>
        <g>
          <circle
            className="dot"
            id="4"
            cx="31"
            cy="373"
            r="20"
            fill="white"
            stroke-width="2"
            stroke="#26A0F8"
          />
          <text
            x="31"
            y="373"
            text-anchor="middle"
            fill="white"
            alignment-baseline="middle"
            style={{}}
          >
            5
          </text>
        </g>
        <g>
          <circle
            className="dot"
            id="2"
            cx="235"
            cy="490"
            r="20"
            fill="white"
            stroke-width="2"
            stroke="#26A0F8"
          />
          <text
            x="235"
            y="490"
            text-anchor="middle"
            fill="white"
            alignment-baseline="middle"
            style={{}}
          >
            4
          </text>
        </g>
        <g>
          <circle
            className="dot"
            id="2"
            cx="439"
            cy="373"
            r="20"
            fill="white"
            stroke-width="2"
            stroke="#26A0F8"
          />
          <text
            x="439"
            y="373"
            text-anchor="middle"
            fill="white"
            alignment-baseline="middle"
            style={{}}
          >
            3
          </text>
        </g>
        <g>
          <circle
            className="dot"
            id="1"
            cx="439"
            cy="138"
            r="19"
            fill="white"
            stroke-width="2"
            stroke="#26A0F8"
          />
          <text
            x="439"
            y="138"
            text-anchor="middle"
            fill="white"
            alignment-baseline="middle"
            style={{}}
          >
            2
          </text>
        </g>

        <defs>
          <filter
            id="filter0_i_1035_26193"
            x="41"
            y="61"
            width="387"
            height="393"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="6" />
            <feGaussianBlur stdDeviation="6" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0.12 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_1035_26193"
            />
          </filter>
          <linearGradient
            id="paint0_linear_1035_26193"
            x1="181.035"
            y1="229.182"
            x2="243.219"
            y2="255.919"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1E8AF2" />
            <stop offset="1" stop-color="#05BED7" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1035_26193"
            x1="130.482"
            y1="230.612"
            x2="203.917"
            y2="302.296"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1E8AF2" />
            <stop offset="1" stop-color="#05BED7" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1035_26193"
            x1="252.169"
            y1="284.925"
            x2="263.461"
            y2="290.914"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1E8AF2" />
            <stop offset="1" stop-color="#05BED7" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_1035_26193"
            x1="196.812"
            y1="210.37"
            x2="208.104"
            y2="216.359"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1E8AF2" />
            <stop offset="1" stop-color="#05BED7" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_1035_26193"
            x1="5.48334"
            y1="165.7"
            x2="252.068"
            y2="296.342"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1E8AF2" />
            <stop offset="1" stop-color="#05BED7" />
          </linearGradient>
          <clipPath id="clip0_1035_26193">
            <rect
              width="258"
              height="258"
              fill="white"
              transform="translate(106 126)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
};
