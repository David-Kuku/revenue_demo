export const formatDate = (dateString: string): string => {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const [year, month, day] = dateString.split('-');
    const monthIndex = parseInt(month, 10) - 1;
    const monthName = months[monthIndex];

    const formattedDay = day.padStart(2, '0');

    return `${monthName.slice(0, 3)} ${formattedDay}, ${year}`;
};

// formatDate('2022-03-02'); // Mar 02, 2022

export const formatDate2 = (inputDate: string): string => {
    const [month, day, year] = inputDate.split('/');
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];
    
    const formattedMonth = months[parseInt(month, 10) - 1];
    const formattedDay = day?.padStart(2, '0');

    return `${formattedDay} ${formattedMonth} ${year}`;
};

// formatDate2('12/01/2023'); // Output: '01 Dec 2023'
