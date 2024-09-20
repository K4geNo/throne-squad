import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function Home() {
	return (
		<main className="flex h-screen w-full">
			<section className="relative flex h-full w-full items-center justify-center bg-[url('/images/home-bg.jpeg')] bg-cover bg-center">
				<div className="absolute inset-0 bg-zinc-900/90"></div>

				<div className="relative max-w-xl space-y-4 text-center">
					<div className="-ml-3 flex items-center justify-center">
						<img
							src="/images/logos/logo-not-bg.png"
							alt="Throne Squad"
							className="w-64"
						/>
						{/* <p className="text-2xl">Throne Squad</p> */}
					</div>
					<h2 className="text-4xl">
						Encontre seu grupo e domine as dungeons mais desafiadoras!
					</h2>
					<p className="text-zinc-400">
						Em poucos cliques, você pode criar um grupo para a próxima dungeon.
						Defina a data, o horário e convide os jogadores que estão prontos
						para a ação!
					</p>
				</div>
			</section>

			<form className="flex w-full items-center justify-center">
				<Card className="dark mx-auto max-w-sm">
					<CardHeader>
						<CardTitle className="text-2xl">Entrar</CardTitle>
						<CardDescription>
							Para continuar no Throne Squad é necessário fazer login
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="grid gap-4">
							<Button variant="outline" className="h-10 w-full">
								Entrar com Discord
							</Button>
						</div>
					</CardContent>
				</Card>
			</form>
		</main>
	)
}
