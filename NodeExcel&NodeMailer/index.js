const express = require('express');
const excel = require('node-excel-export');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const app = express();

app.get('/', (req, res) => {
    const styles = {
        headerDark: {
            fill: {
                fgColor: {
                    rgb: 'FF000000'
                }
            },
            font: {
                color: {
                    rgb: 'FFFFFFFF'
                },
                sz: 14,
                bold: true,
                underline: true
            }
        },
        cellPink: {
            fill: {
                fgColor: {
                    rgb: 'FFFFCCFF'
                }
            }
        },
        cellGreen: {
            fill: {
                fgColor: {
                    rgb: 'FF00FF00'
                }
            }
        }
    };

    //Array of objects representing heading rows (very top)
    const heading = [
        [{
            value: 'a1',
            style: styles.headerDark
        }, {
            value: 'b1',
            style: styles.headerDark
        }, {
            value: 'c1',
            style: styles.headerDark
        }],
        ['a2', 'b2', 'c2'] // <-- It can be only values
    ];

    //Here you specify the export structure
    const specification = {
        customer_name: { // <- the key should match the actual data key
            displayName: 'Customer', // <- Here you specify the column header
            headerStyle: styles.headerDark, // <- Header style
            cellStyle: function (value, row) { // <- style renderer function
                // if the status is 1 then color in green else color in red
                // Notice how we use another cell value to style the current one
                return (row.status_id == 1) ? styles.cellGreen : {
                    fill: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    }
                }; // <- Inline cell style is possible 
            },
            width: 120 // <- width in pixels
        },
        status_id: {
            displayName: 'Status',
            headerStyle: styles.headerDark,
            cellFormat: function (value, row) { // <- Renderer function, you can access also any row.property
                return (value == 1) ? 'Active' : 'Inactive';
            },
            width: '10' // <- width in chars (when the number is passed as string)
        },
        note: {
            displayName: 'Description',
            headerStyle: styles.headerDark,
            cellStyle: styles.cellPink, // <- Cell style
            width: 220 // <- width in pixels
        }
    }

    // The data set should have the following shape (Array of Objects)
    // The order of the keys is irrelevant, it is also irrelevant if the
    // dataset contains more fields as the report is build based on the
    // specification provided above. But you should have all the fields
    // that are listed in the report specification
    const dataset = [{
            customer_name: 'IBM',
            status_id: 1,
            note: 'some note',
            misc: 'not shown'
        },
        {
            customer_name: 'HP',
            status_id: 0,
            note: 'some note'
        },
        {
            customer_name: 'MS',
            status_id: 0,
            note: 'some note',
            misc: 'not shown'
        }
    ]

    // Define an array of merges. 1-1 = A:1
    // The merges are independent of the data.
    // A merge will overwrite all data _not_ in the top-left cell.
    const merges = [{
            start: {
                row: 1,
                column: 1
            },
            end: {
                row: 1,
                column: 10
            }
        },
        {
            start: {
                row: 2,
                column: 1
            },
            end: {
                row: 2,
                column: 5
            }
        },
        {
            start: {
                row: 2,
                column: 6
            },
            end: {
                row: 2,
                column: 10
            }
        }
    ]

    // Create the excel report.
    // This function will return Buffer
    const report = excel.buildExport(
        [ // <- Notice that this is an array. Pass multiple sheets to create multi sheet report
            {
                name: 'Report', // <- Specify sheet name (optional)
                //heading: heading, // <- Raw heading array (optional)
                //merges: merges, // <- Merge cell ranges
                specification: specification, // <- Report specification
                data: dataset // <-- Report data
            }
        ]
    );

    const account = {
        smtp: {
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            secure: false
        },
        user: 'toanlv@younetgroup.com',
        pass: 'Kid_1412lvt9495'
    }

    // https://accounts.google.com/DisplayUnlockCaptcha
    // https://myaccount.google.com/lesssecureapps

    console.log('Credentials obtained, sending message...');

    // NB! Store the account object values somewhere if you want
    // to re-use the same account for future mail deliveries

    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport(smtpTransport({
        service: account.smtp.service,
        host: account.smtp.host,
        auth: {
            user: account.user,
            pass: account.pass
        },
        tls: {
            rejectUnauthorized: false
        }
    }));

    // Message object
    let message = {
        from: 'toanlv@younetgroup.com <toanlv@younetgroup.com>',
        // Comma separated list of recipients
        to: 'toanlv@younetco.com <toanlv@younetco.com>',

        // Subject of the message
        subject: 'Nodemailer is unicode friendly ✔',

        // plaintext body
        text: 'Hello to myself!',

        // HTML body
        html: '<p><b>Hello</b> to myself <img src="cid:note@example.com"/></p>' +
            '<p>Here\'s a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@example.com"/></p>',

        attachments: [{
            filename: "report.xlsx",
            content: report,
            encoding: 'binary',
            contentType: 'application/octet-stream',
            contentTransferEncoding: 'base64'
        }]
    };

    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log('Server is ready to take our messages');
            transporter.sendMail(message, (error, info) => {
                if (error) {
                    console.log('Error occurred');
                    console.log(error.message);
                    return process.exit(1);
                }

                console.log('Email sent successfully!');

                // only needed when using pooled connections
                transporter.close();
                // res.setHeader('Content-Type', 'application/vnd.openxmlformats');
                // res.setHeader("Content-Disposition", "attachment; filename=" + "Report.xlsx");
                // res.end(report, 'binary');
                res.send('Email sent successfully!')
            });
        }
    });


});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));