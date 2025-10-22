"use client";

import { useState } from "react";
import { spring } from "motion";
import { Button } from "@mui/material";

export default function SpringBox() {
  const [state, setState] = useState(false);

  return (
    <div className="example-container">
      <div className="box" data-state={state} />
      <Button
        variant="contained"
        color="primary"
        onClick={() => setState(!state)}
      >
        Toggle position
      </Button>

      <style jsx>{`
        .example-container .box {
          width: 100px;
          height: 100px;
          background-color: #0055ff;
          border-radius: 10px;

          /* "어떻게" 움직일지 정의 */
          transition: transform ${spring(0.5, 0.8)};

          /* "시작" 위치 정의 */
          transform: translateX(-100%);
        }

        /* 👇👇👇 이 부분이 빠졌었습니다! 👇👇👇
          "도착" 위치 정의:
          data-state 속성이 "true"일 때의 스타일
        */
        .example-container .box[data-state="true"] {
          transform: translateX(100%);
        }
      `}</style>
    </div>
  );
}
