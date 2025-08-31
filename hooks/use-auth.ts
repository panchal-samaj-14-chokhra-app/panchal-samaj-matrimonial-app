"use client"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { authService } from "@/lib/api-services"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

// Auth query keys
export const authKeys = {
  all: ["auth"] as const,
  user: () => [...authKeys.all, "user"] as const,
}

// Get current user hook
export function useCurrentUser() {
  return useQuery({
    queryKey: authKeys.user(),
    queryFn: authService.getCurrentUser,
    retry: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

// Login mutation hook
export function useLogin() {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation({
    mutationFn: authService.login,
    onSuccess: (data) => {
      // Store auth data
      localStorage.setItem("auth_token", data.token)
      localStorage.setItem("user_data", JSON.stringify(data.user))

      // Update query cache
      queryClient.setQueryData(authKeys.user(), data.user)

      toast.success("सफलतापूर्वक लॉगिन हो गए!")
      router.push("/profiles")
    },
    onError: (error: any) => {
      console.error("[v0] Login error:", error)
      toast.error(error.response?.data?.message || "लॉगिन में त्रुटि हुई है")
    },
  })
}

// Signup mutation hook
export function useSignup() {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation({
    mutationFn: authService.signup,
    onSuccess: (data) => {
      if (data.token) {
        // Auto-approved user (14 Chokhra member)
        localStorage.setItem("auth_token", data.token)
        localStorage.setItem("user_data", JSON.stringify(data.user))
        queryClient.setQueryData(authKeys.user(), data.user)
        toast.success("सफलतापूर्वक पंजीकरण हो गया!")
        router.push("/profiles")
      } else {
        // Pending approval (Other member)
        toast.success("पंजीकरण सफल! अनुमोदन की प्रतीक्षा करें।")
        router.push("/login")
      }
    },
    onError: (error: any) => {
      console.error("[v0] Signup error:", error)
      toast.error(error.response?.data?.message || "पंजीकरण में त्रुटि हुई है")
    },
  })
}

// Logout mutation hook
export function useLogout() {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation({
    mutationFn: authService.logout,
    onSuccess: () => {
      // Clear auth data
      localStorage.removeItem("auth_token")
      localStorage.removeItem("user_data")

      // Clear query cache
      queryClient.clear()

      toast.success("सफलतापूर्वक लॉगआउट हो गए!")
      router.push("/")
    },
    onError: (error: any) => {
      console.error("[v0] Logout error:", error)
      // Still clear local data even if server request fails
      localStorage.removeItem("auth_token")
      localStorage.removeItem("user_data")
      queryClient.clear()
      router.push("/")
    },
  })
}

// Forgot password mutation hook
export function useForgotPassword() {
  return useMutation({
    mutationFn: authService.forgotPassword,
    onSuccess: () => {
      toast.success("पासवर्ड रीसेट लिंक आपके ईमेल पर भेजा गया है!")
    },
    onError: (error: any) => {
      console.error("[v0] Forgot password error:", error)
      toast.error(error.response?.data?.message || "त्रुटि हुई है")
    },
  })
}
