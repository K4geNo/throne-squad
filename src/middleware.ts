import NextAuth from "next-auth"
import authConfig from "@/services/auth.config"
import { NextResponse } from "next/server"

const { auth } = NextAuth(authConfig)

export default auth((request) => {
	const { pathname, origin } = request.nextUrl
	const { auth } = request
	const nextUrl = (path: string) => new URL(path, origin).toString()

	const protectedRoutes = ["/", "/dashboard", "/profile"] // Adicione suas rotas protegidas aqui
	const isProtectedRoute = protectedRoutes.includes(pathname)

	// Redirecionar se o usuário não estiver autenticado e estiver acessando uma rota protegida
	if (!auth && isProtectedRoute) {
		return Response.redirect(nextUrl("/login"))
	}

	// Redirecionar para registro se autenticado mas sem username
	if (auth && !auth.user?.username && pathname !== "/register") {
		return Response.redirect(nextUrl("/register"))
	}

	// Redirecionar se o usuário já está autenticado e tenta acessar a rota raiz
	if (auth?.user?.username && pathname === "/") {
		return Response.redirect(nextUrl("/"))
	}

	return NextResponse.next()
})

export const config = {
	/*
	 * Match all request paths except for the ones starting with:
	 * - api (API routes)
	 * - _next/static (static files)
	 * - _next/image (image optimization files)
	 * - favicon.ico (favicon file)
	 */
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
