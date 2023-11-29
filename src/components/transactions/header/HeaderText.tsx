import React from 'react'
import Text from '../../ui/text'
import colors from '../../../utils/colors'

interface IProps {
    noOfTrxs: number
}
const HeaderText = ({noOfTrxs}: IProps) => {
  return (
    <div className='flex flex-col gap-1'>
        <Text color={colors.black_300} fontSize='24px' fontWeight={700} lineHeight='32px'>{noOfTrxs} transactions</Text>
        <Text color={colors.grey_400} fontSize='14px' fontWeight={500} lineHeight='16px'>Your transactions for All time</Text>
    </div>
  )
}

export default HeaderText