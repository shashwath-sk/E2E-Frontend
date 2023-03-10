

const updateContentType = (ContentType,response,setContentType) => {
    const index = ContentType.findIndex((content)=>content.id === response.id);
    const newContentType = [...ContentType];
    newContentType[index] = response;
    setContentType(newContentType);
};

export default updateContentType;