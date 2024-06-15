import React from "react"

interface ILoadingOverlayProps {
  isLoading: boolean
}
export const LoadingOverlay: React.FC<ILoadingOverlayProps> = ({isLoading}) => {
  if (!isLoading) {
    return null
  }
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-[999] backdrop-blur-sm bg-gray-950 bg-opacity-80 flex items-center justify-center">
      <div className="w-10 h-10 md:w-20 md:h-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
          <circle
            fill="none"
            strokeOpacity="1"
            stroke="#FFFFFF"
            strokeWidth=".5"
            cx="100"
            cy="100"
            r="0"
          >
            <animate
              attributeName="r"
              calcMode="spline"
              dur="2"
              values="1;80"
              keyTimes="0;1"
              keySplines="0 .2 .5 1"
              repeatCount="indefinite"
            ></animate>
            <animate
              attributeName="stroke-width"
              calcMode="spline"
              dur="2"
              values="0;25"
              keyTimes="0;1"
              keySplines="0 .2 .5 1"
              repeatCount="indefinite"
            ></animate>
            <animate
              attributeName="stroke-opacity"
              calcMode="spline"
              dur="2"
              values="1;0"
              keyTimes="0;1"
              keySplines="0 .2 .5 1"
              repeatCount="indefinite"
            ></animate>
          </circle>
        </svg>
      </div>
    </div>
  )
}
