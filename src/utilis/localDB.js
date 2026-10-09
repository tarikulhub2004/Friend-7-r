const getCallList = () => {
    const allCallList = localStorage.getItem("callList");

    if (allCallList) return JSON.parse(allCallList);
    return [];
}
// console.log(getCallList());

const addCallList = (user) => {
    const allList = getCallList();
    allList.push(user);
    localStorage.setItem("callList", JSON.stringify(allList));
}

// Text
const getTextList = () => {
    const allTextList = localStorage.getItem("textList");

    if (allTextList) return JSON.parse(allTextList);
    return [];
}

const addTextList = (user) => {
    const allList = getTextList();
    allList.push(user);
    localStorage.setItem("textList", JSON.stringify(allList))
}

// Video Call
const getVideoCallList = () => {
    const allVideoList = localStorage.getItem("videoList");

    if (allVideoList) return JSON.parse(allVideoList);
    return [];
}

const addVideoCallList = (user) => {
    const allList = getVideoCallList();
    allList.push(user);
    localStorage.setItem("videoList", JSON.stringify(allList));
}

export { getCallList, addCallList, getTextList, addTextList, getVideoCallList, addVideoCallList }