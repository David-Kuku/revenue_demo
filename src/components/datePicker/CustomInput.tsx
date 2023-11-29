import { TFilter } from "../../types";
import colors from "../../utils/colors";
import { formatDate2 } from "../../utils/formatDate";
import Text from "../ui/text";

interface CustomInputProps {
    value: string | undefined;
    onClick?: () => void;
    tag: string
}


const CustomInput = ({ value, onClick, tag }: CustomInputProps) => {
    const selectedDate = value && formatDate2(value)

    return (
        <div className='w-[190px]' onClick={onClick}>
            <div className='w-full'>
                <div
                    style={{ borderColor: colors.grey_50, backgroundColor: colors.grey_50 }}
                    className="inline-flex justify-between items-center w-full cursor-pointer rounded-md border shadow-sm px-4 py-3 focus:outline-[black]"
                >
                    {
                        selectedDate ?
                        <Text color={colors.black_300} fontSize='14px' fontWeight={500} lineHeight='16px'>
                        {selectedDate}
                    </Text> :
                    <Text color={colors.black_300} fontSize='14px' fontWeight={500} lineHeight='16px'>
                        {tag}
                    </Text>
                    }
                    
                    <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="#CBD5E1"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default CustomInput