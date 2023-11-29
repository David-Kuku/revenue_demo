import React, { useEffect, useRef, useState } from 'react';
import { useCloseOnclickOutside } from '../../hooks/useOutsideClickClose';
import colors from '../../utils/colors';
import Text from '../ui/text';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { formatDate2 } from '../../utils/formatDate';
import CustomInput from './CustomInput';
import { TFilter } from '../../types';

interface DateInputProps {
    className?: string
    onChange: (e: string) => void
    tag: string
    filterObj: TFilter
}


const DateInput = ({ onChange, tag, filterObj }: DateInputProps) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [showMenu, setShowMenu] = useState(false);
    const ref = useRef(null)

    useCloseOnclickOutside({ ref, setShow: setShowMenu })

    const handleChange =(date: Date | null)=> {
        if(date){
            setSelectedDate(date)
            onChange(date.toString())
        }
    }
    useEffect(()=>{
        if(Object.keys(filterObj).length === 0){
            setSelectedDate(null)
        }
    },[filterObj])
    return (
        <label >
            <DatePicker
                selected={selectedDate}
                onChange={(date) => handleChange(date)}
                customInput={<CustomInput value={selectedDate?.toString()} tag={tag}/>}
                // maxDate={new Date()}
            />
        </label>
    );
};

export default DateInput;
