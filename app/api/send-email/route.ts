import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      business,
      location,
      email,
      phone,
    } = body;

    // Validate required fields
    if (!name || !business || !location || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get SendGrid API key from environment variables
    const sendGridApiKey = process.env.SENDGRID_API_KEY;
    if (!sendGridApiKey) {
      console.error('SENDGRID_API_KEY is not set');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Format the email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      
      <h3>Contact Information</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      
      <h3>Business Information</h3>
      <p><strong>Business:</strong> ${business}</p>
      <p><strong>Location:</strong> ${location}</p>
    `;

    // Send email using SendGrid API
    const sendGridResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${sendGridApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [
            { email: 'ben@marketingsweet.com.au' },
            { email: 'elly@marketingsweet.com.au' },
            { email: 'dylan@marketingsweet.com.au' },
            { email: 'lucas@marketingsweet.com.au' },
            { email: 'felipe@marketingsweet.com.au' },
            { email: 'thomasr@marketingsweet.com.au' },
            { email: 'trent@marketingsweet.com.au' },
            { email: 'taylor@marketingsweet.com.au' },
            ],
            subject: `New Contact Form Submission from ${name}`,
          },
        ],
        from: {
          email: process.env.SENDGRID_FROM_EMAIL || 'noreply@example.com',
          name: 'Contact Form',
        },
        content: [
          {
            type: 'text/html',
            value: emailContent,
          },
        ],
        reply_to: {
          email: email,
          name: name,
        },
      }),
    });

    if (!sendGridResponse.ok) {
      const errorText = await sendGridResponse.text();
      console.error('SendGrid API error:', errorText);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

