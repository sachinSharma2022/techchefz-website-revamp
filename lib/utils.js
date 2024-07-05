import { getCookie } from "cookies-next"
import { decode } from "js-base64"

export { default as cn } from "clsx"

export function getAuthCookie(providedCookie) {
  const cookie =
    providedCookie || getCookie(process.env.NEXT_PUBLIC_AUTH_COOKIE)
  if (!cookie) return null
  const decodedCookie = decode(cookie).split("#")
  return {
    userId: decodedCookie[0],
    refreshToken: decodedCookie[1],
    jwtAccessToken: decodedCookie[2],
  }
}
export function generateSlug(title) {
  // Convert title to lowercase and replace spaces with dashes
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  // Remove special characters except dashes
  const cleanedSlug = slug.replace(/[^a-z0-9-]/g, "");

  return cleanedSlug;
}

