import { addDays, startOfDay, subMonths, subDays } from 'date-fns';
import { TFilter, TTransaction } from '../../../../types';

// Assuming filterCriteria is of type TFilter
export const filterByDays = (data: TTransaction[] | undefined, filterCriteria: TFilter): TTransaction[] | undefined => {
    let filteredData = data;

    if (filterCriteria?.days === 'Last 7 days') {
        const startDate = startOfDay(subDays(new Date(), 7));
        filteredData = filteredData?.filter(item => {
            const itemDate = new Date(item.date);
            return startOfDay(itemDate) >= startDate && startOfDay(itemDate) <= new Date();
        });
    } else if (filterCriteria?.days === 'Today') {
        const startDate = startOfDay(new Date());
        filteredData = filteredData?.filter(item => {
            const itemDate = new Date(item.date);
            return startOfDay(itemDate) >= startDate && startOfDay(itemDate) <= new Date();
        });
    } else if (filterCriteria?.days === 'This month') {
        const startDate = startOfDay(subMonths(new Date(), 1));
        filteredData = filteredData?.filter(item => {
            const itemDate = new Date(item.date);
            return startOfDay(itemDate) >= startDate && startOfDay(itemDate) <= new Date();
        });
    } else if (filterCriteria?.days === 'Last 3 months') {
        const startDate = startOfDay(subMonths(new Date('2023-03-02'), 12));
        console.log(startDate)
        filteredData = filteredData?.filter(item => {
            console.log(item.date)
            const itemDate = new Date(item.date);
            console.log(itemDate)
            return startOfDay(itemDate) >= startDate && startOfDay(itemDate) <= new Date();
        });
    }
    return filteredData;
}
