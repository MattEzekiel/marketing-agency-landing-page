// Outputs: /builtwith.json
import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({params, request}) => {
  const body = await request.json();
  const { to, from, html, subject, text } = body;

  if (!html || !text) {
    return new Response(null, {
        status: 400,
        statusText: "Bad Request",
      }
    )
  }

  const send = await resend.emails.send({
    from: import.meta.env.MAIL_FROM,
    to: import.meta.env.MAIL_TO,
    subject: 'GConsulting contact',
    text,
    html,
  });

  if (send.data) {
    return new Response(
      JSON.stringify({
        name: 'Astro',
        message: send.data,
        success: true,
      }),
      {
        status: 200,
        statusText: "OK",
      }
    );
  } else {
    return new Response(
      JSON.stringify({
        name: 'Astro',
        message: send.error,
        success: false,
      }),
      {
        status: 500,
        statusText: "Internal Server Error",
      }
    );
  }
}
