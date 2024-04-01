import { revalidatePath } from "next/cache";
export async function POST(request) {
  try {
    const text = await request.text();
    const obj = JSON.parse(text);
    if (obj.model) revalidatePath(`/${obj.model}`, "page");
  } catch (error) {
    return new Response(`Webhook error: ${error.message}`, {
      status: 400,
    });
  }

  return new Response("Success!", {
    status: 200,
  });
}
