"use server"

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

export async function sendApplicationEmail(data: FormData) {
  try {
    // In a real environment, we would use nodemailer to send an email
    // But since we're in a preview environment that doesn't support DNS lookup,
    // we'll simulate the email sending process

    console.log("Application data received:", data)

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Log what the email would contain
    const emailContent = `
      New Grant Application from ${data.name}
      Gender: ${data.gender}
      Country: ${data.country}
      Address: ${data.address}
      Email: ${data.email}
      Grant Amount: $${data.grantAmount}
      Phone: ${data.phone}
      Project Description: ${data.projectDescription}
    `

    console.log("Email that would be sent:", emailContent)

    // Return success response
    return {
      success: true,
      message: "Application submitted successfully! (Email sending simulated in preview environment)",
    }
  } catch (error) {
    console.error("Error in application process:", error)
    return {
      success: false,
      message: "Failed to submit application. Please try again later.",
    }
  }
}
