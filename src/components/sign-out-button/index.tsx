import { signOut } from "@/services/auth"
import { Button } from "../ui/button"

export default function SignOutButton() {
	return (
		<form
			action={async () => {
				"use server"
				await signOut({ redirectTo: "/login" })
			}}
		>
			<Button variant="outline" className="h-10 w-full" type="submit">
				Sair
			</Button>
		</form>
	)
}
