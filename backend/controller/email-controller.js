import Email from "../model/email.js"

export const saveSendEmails = async (req, res) => {
    try {
        console.log("this is body", req.body);
        const email = await new Email(req.body);
        console.log("this is email", email)
         email.save();

        res.status(200).json('email saved successfully');
    }
    catch (error) {
        res.status(500).json(error.message);
    }
}


// export const getEmails = async (req, res) => {
//     try {
//         let emails;

//         if (req.params.type === 'starred') {
//             emails = await Email.find({ starred: true, bin: false })
//         }
//         else if (req.params.type === 'bin') {
//             emails = await Email.find({ bin: true })
//         }
//         else if (req.params.type === 'allmail') {
//             emails = await Email.find({});
//         } else if (req.params.type === 'inbox') {
//             emails = [];
//         } else {
//             emails = await Email.find({ type: req.params.type });
//         }
//         res.status(200).json(emails);
//     }
//     catch (error) {
//         response.status(500).json(error.message);
//     }
// }

// export const deleteEmails = async (req, res)=>{
//     try{
//         await Email.deleteMany({_id: {$in: req.body}})
//         res.status(200).json('emails deleted successfully');
//     }
//     catch(error){
//         res.status(500).json(error.message);

//     }
// }