export const getDataInRange = (startDate, endDate) => {
    const data = [];
    const currentDate = new Date(startDate);
    endDate = new Date(endDate);

    while (currentDate <= endDate) {
        const date = {};
        const dateString = currentDate.toISOString().slice(0, 10);
        date[dateString] = { level: getRandomLevel() };
        data.push(date);
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return data;
};

const getRandomLevel = () => {
    return ~~(Math.random() * 5); // random integer (0 ~ 4)
};

export const getToday = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}-${month < 10 ? `0${month}` : month}-${day}`
}

  