import {
	TooltipProvider,
	Tooltip,
	TooltipTrigger,
	TooltipContent,
} from "@/components/ui/tooltip"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

interface Player {
	name: string
	imageSrc: string
	alt: string
}

interface AvatarGroupProps {
	players: Player[]
}

export default function AvatarGroup({ players }: AvatarGroupProps) {
	const limit = 3
	const extraPlayers = players.length - limit

	return (
		<div className="flex items-center -space-x-2">
			<TooltipProvider delayDuration={0}>
				{players.slice(0, limit).map((player, index) => (
					<Tooltip key={`${player.name}-${index}`}>
						<TooltipTrigger asChild>
							<Avatar className="h-10 w-10 border">
								<AvatarImage src={player.imageSrc} alt={player.alt} />
								<AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
							</Avatar>
						</TooltipTrigger>
						<TooltipContent className="rounded-md bg-muted px-2 py-1 text-sm text-muted-foreground">
							{player.name}
						</TooltipContent>
					</Tooltip>
				))}
				{extraPlayers > 0 && (
					<Tooltip>
						<TooltipTrigger asChild>
							<Avatar className="h-10 w-10 border">
								<AvatarFallback>+{extraPlayers}</AvatarFallback>
							</Avatar>
						</TooltipTrigger>
						<TooltipContent className="rounded-md bg-muted px-2 py-1 text-sm text-muted-foreground">
							{players
								.slice(limit)
								.map((player) => player.name)
								.join(", ")}
						</TooltipContent>
					</Tooltip>
				)}
			</TooltipProvider>
		</div>
	)
}
