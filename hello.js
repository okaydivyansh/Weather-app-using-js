const user={
    coursename: "javascript",
    name:"divynash",
    yo:"bye",
    "hehe":"hi",
    welcomeMessage:function(){
        console.log(`${this.name},bhai`);
        console.log(this);
    }
}

user.welcomeMessage();
function hehe()
{
    console.log(this);
}
