export const controlledList = (data, value, index) => {
    let changeList = [...data];
    if (index === changeList.length - 1 && !changeList[index]) {
        changeList.push('')
    }
    changeList[index] = value;
    if (!value && index !== changeList.length - 1) {
        changeList.splice(index, 1)
    }
    return changeList
}