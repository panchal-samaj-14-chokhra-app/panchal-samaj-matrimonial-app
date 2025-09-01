import type { Metadata } from "next"
import ProfilesClient from "./ProfilesClient"

export const metadata: Metadata = {
  title: "प्रोफाइल्स - पंचाल समाज 14 चोखरा मैट्रिमोनियल",
  description: "सभी सक्रिय प्रोफाइल्स देखें",
}

export default function ProfilesPage() {
  return <ProfilesClient />
}
