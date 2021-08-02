const nodeMailer = require("nodemailer");
const transporter = nodeMailer.createTransport({
    service : "gmail", 
    auth : {
        user : "username",
        pass : "yourpassword"
    }
});
const mailOptions = {
    from : "coffeeLearngroup@gmail.com",
    to : "firstEmail@gmail.com, secondEmail@gmail.com",
    subject : "Test Email",
    text : "Hello NodeMailer"
};

transporter.sendMail(mailOptions, (err,info) => {
    if(err){
        console.log(Error("Can ot send Email"))
        console.log(err.message)
    }else{
        console.log(`pending : ${info.pending}`);
        console.log(`messageID : ${info.messageId.split("@")[0].substring(1)}`);
        console.log(`response : ${info.response}`);
        console.log(`reject : ${info.rejected}`);
    }
})