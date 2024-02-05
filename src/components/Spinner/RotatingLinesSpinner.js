import { RotatingLines } from 'react-loader-spinner';

export const RotatingLinesSpinner=()=>{
  return (
    <RotatingLines
    strokeColor="#fe5f55"
    strokeWidth="5"
    animationDuration="0.75"
    width="22"
    visible={true}
  />
  )
}
