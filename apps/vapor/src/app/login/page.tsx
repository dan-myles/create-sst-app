import { LoginForm } from "@/components/login-form"
import { Mark } from "@/components/mark"

export default function Page() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="/" className="flex items-center gap-2 self-center font-medium">
          <Mark />
        </a>
        <LoginForm />
      </div>
    </div>
  )
}
