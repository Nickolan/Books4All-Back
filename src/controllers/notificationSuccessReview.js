const { transporter } = require("../mailer");
const { USER } = process.env;

const notificationSuccessReview = async (user, newReview, book) => {
  await transporter.sendMail({
    from: `"Books4All"<${USER}>`, //.env
    to: `${user.email}`,
    subject: `Review successfully submitted: ${book.dataValues.title}! `,
    html: `<b> Rating: </b> ${newReview.rating}, <div>  <b>Review:</b> "${newReview.body}".</div>  `,
  });
};

module.exports = { notificationSuccessReview };
