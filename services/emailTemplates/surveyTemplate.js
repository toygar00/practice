const keys = require("../../config/keys");

module.exports = survey => {
  //

  return `
    <html>
        <body>
            <div>
                <h3>I want your input</h3>
                <p>Please answer following</p>
                <p>${survey.body}</p>
                <div>
                    <a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a>
                </div>
                <div>
                    <a href="${keys.redirectDomain}/api/surveys/thanks">No</a>
                </div>
            </div>
        </body>
    </html>
  `;
};
