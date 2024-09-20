import { signIn } from "@/services/auth"
import { Button } from "../ui/button"

export default function SignInButton() {
	return (
		<form
			action={async () => {
				"use server"
				await signIn("discord", { redirectTo: "/dungeons" })
			}}
		>
			<Button variant="outline" className="h-10 w-full" type="submit">
				Entrar com Discord
			</Button>
		</form>
	)
}
