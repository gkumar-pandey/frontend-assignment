export const getAvatarText = (name:string)=> {
    const splitName = name.split(" ");
    let text = '';
    splitName.map((ele)=>{
        text = text + ele[0]
    })
    return text;
}