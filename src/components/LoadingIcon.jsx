
import { TailSpin } from  'react-loader-spinner'

export const LoadingIcon = () => {
    return(
    <TailSpin
        height="80"
        width="80"
        color="#616b75"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    )
}