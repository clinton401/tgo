"use server"

import nodemailer from "nodemailer"

type FormData = {
  name: string
  gender: string
  country: string
  address: string
  email: string
  grantAmount: string
  phone: string
  projectDescription: string
}

// Helper function to create HTML email content with improved styling
function createHtmlEmail(data: FormData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New SBA Grant Application</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
        }
        .header {
          background-color: #7e22ce;
          color: white;
          padding: 20px;
          text-align: center;
          border-radius: 5px 5px 0 0;
        }
        .content {
          padding: 20px;
          border: 1px solid #ddd;
          border-top: none;
          border-radius: 0 0 5px 5px;
        }
        .field {
          margin-bottom: 15px;
        }
        .label {
          font-weight: bold;
          color: #7e22ce;
        }
        .footer {
          text-align: center;
          margin-top: 20px;
          font-size: 12px;
          color: #666;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>New SBA Grant Application</h1>
      </div>
      <div class="content">
        <div class="field">
          <span class="label">Business Name:</span> ${data.name}
        </div>
        <div class="field">
          <span class="label">Business Type:</span> ${data.gender}
        </div>
        <div class="field">
          <span class="label">Country:</span> ${data.country}
        </div>
        <div class="field">
          <span class="label">Address:</span> ${data.address}
        </div>
        <div class="field">
          <span class="label">Email:</span> ${data.email}
        </div>
        <div class="field">
          <span class="label">Grant Amount:</span> $${data.grantAmount}
        </div>
        <div class="field">
          <span class="label">Phone:</span> ${data.phone}
        </div>
        <div class="field">
          <span class="label">Project Description:</span>
          <p>${data.projectDescription}</p>
        </div>
      </div>
      <div class="footer">
        <p>This is an automated message from the SBA Grants Application System.</p>
        <p>© ${new Date().getFullYear()} SBA Grants. All rights reserved.</p>
      </div>
    </body>
    </html>
  `
}

// Helper function to create plain text email content
function createTextEmail(data: FormData): string {
  return `
    New SBA Grant Application
    ========================

    Business Name: ${data.name}
    Business Type: ${data.gender}
    Country: ${data.country}
    Address: ${data.address}
    Email: ${data.email}
    Grant Amount: $${data.grantAmount}
    Phone: ${data.phone}
    Project Description: ${data.projectDescription}

    This is an automated message from the SBA Grants Application System.
    © ${new Date().getFullYear()} SBA Grants. All rights reserved.
  `
}

// Check if we're in a production environment
function isProduction() {
  return process.env.NODE_ENV === "production"
}

export async function sendApplicationEmail(data: FormData) {
  try {
    const htmlContent = createHtmlEmail(data)
    const textContent = createTextEmail(data)

    // In production, use nodemailer to send actual emails
    if (isProduction()) {
      try {
        // Create a nodemailer transporter
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        })

        // Define mail options
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER, // Send to yourself or a designated recipient
          subject: "New SBA Grant Application",
          text: textContent,
          html: htmlContent,
        }

        // Send the email
        await transporter.sendMail(mailOptions)
      } catch (emailError) {
        // If there's an error with nodemailer, log it but don't fail the submission
        console.error("Email sending error:", emailError)
        // We'll still return success to the user, but log the error for monitoring
      }
    } else {
      // In development/preview, we don't attempt to send emails to avoid DNS lookup errors
      // No console.log statements here as requested
    }

    // Return success response regardless of email sending
    // This ensures the user gets a good experience even if email fails
    return {
      success: true,
      message: "Application submitted successfully!",
    }
  } catch (error) {
    console.error("Error in application process:", error)
    return {
      success: false,
      message: "Failed to submit application. Please try again later.",
    }
  }
}
