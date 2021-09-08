/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from "@emotion/react";

export const Emotion = () => {
  const containerStyle = css`
    border: 1px solid #000;
    padding: 2em;
    background-color: green;
  `;

  return (
    <div css={containerStyle}>
      <p>styled jsx</p>
    </div>
  );
};
