'use server'

import nodemailer from 'nodemailer'

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const message = formData.get('message') as string

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Web Rayuela" <${process.env.SMTP_FROM || 'rayuelaagenciadigital@gmail.com'}>`,
      replyTo: email,
      to: process.env.CONTACT_EMAIL,
      subject: `[Web Rayuela] Nuevo mensaje de contacto de ${name}`,
      text: `
        Origen: formulario de contacto en la web de Rayuela

        Nombre: ${name}
        Email: ${email}
        Teléfono: ${phone}
        Mensaje: ${message}
      `,
      html: `
        <p style="margin:0 0 16px;padding:12px 16px;background:#f4f0ff;border-left:4px solid #9966FF;color:#333;font-size:14px;">
          Este mensaje fue enviado desde el formulario de contacto en la <strong>web de Rayuela</strong>.
        </p>
        <h1>Nuevo mensaje de contacto</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    })

    return { success: true, message: 'Correo enviado con éxito' }
  } catch (error) {
    console.error('Error al enviar el correo:', error)
    return { success: false, message: 'Error al enviar el correo' }
  }
}

