import { keyframes } from 'styled-components'

export const slideUp = keyframes`
  0% {
    transform: translate3d(0, 4vw, 0);
  }
  95% {
    transform: translate3d(0, -0.15vw, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`

export const slideUpLittle = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, -2px, 0);
  }
`

export const slideLeftFixed = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(5vw, 0, 0);
  }
  95% {
    transform: translate3d(-0.15rem,0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

export const slideRightFixed = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(-5vw, 0, 0);
  }
  95% {
    transform: translate3d(0.15rem,0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

export const spanFirstOn = keyframes`
  0% {
    transform: translate(-50%, -300%);
  }

  30% {
    transform: translate(-50%, -50%);
  }
  100% {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`
export const spanFirstOff = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  30% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -300%);
  }
`
export const spanSecondOn = keyframes`
  0% {
    transform: translate(-50%, -50%)
  }
  25% {
    background-color: white;
  }
  50% {
    transform: translate(-50%, -50%) scale(1)
  }
  100% {
    transform: translate(-150%, -50%) scale(0)
  }
`
export const spanSecondOff = keyframes`
  0% {
    transform: translate(-150%, -50%) scale(0);
  }
  25% {
    background-color: white;
  }
  50% {
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    transform: translate(-50%, -50%);
  }
`
export const spanThirdOn = keyframes`
  0% {
    transform: translate(-50%, 200%);
  }
  30% {
    transform: translate(-50%, -50%);
  }
  100% {
    transform: translate(-50%, -50%) rotate(45deg);
  }
`

export const spanThirdOff = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  30% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, 200%);
  }
`

export const moveLeft = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-10rem, 0, 0);
  }
`

export const moveRight = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-10rem, 0, 0);
  }
`

export const moveLeftLeft = keyframes`
  0% {

  }

  100% {
    left: 0;
  }
`

export const slide = ({x1, y1, z1, x2, y2, z2}) => {
  return keyframes`
    0% {
      transform: translate3d(${x1}px, ${y1}px, ${z1}px);
    }

    100% {
      transform: translate3d(${x2}px, ${y2}px, ${z2}px);
    }
  `
}

export const slideAppear = ({x1, y1, z1, x2, y2, z2}) => {
  return keyframes`
    0% {
      transform: translate3d(${x1}px, ${y1}px, ${z1}px);
      opacity: 0;
    }

    100% {
      transform: translate3d(${x2}px, ${y2}px, ${z2}px);
      opacity: 1;
    }
  `
}

export const appear = keyframes`
  0% {
    opacity: 0;
    width: 0;
  }

  100% {
    opacity: 1;
    width: calc(20rem + 10vw);
  }
`

// export const slideFrom = (x) => keyframes`
//   0% {
//     transform: translate3d(${x}px, 0 , 0);
//   }
//
//   100% {
//     transform: translate3d(0, 0 , 0);
//   }
// `
