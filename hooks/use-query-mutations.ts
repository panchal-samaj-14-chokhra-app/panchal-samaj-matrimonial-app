import { authService } from "@/lib/api-services"
import { useMutation } from "react-query"
import { toast } from "react-toastify"

export const useSignupFlow = () => {
  const sendOtpMutation = useMutation({
    mutationFn: authService.sendOtp,
    onError: (error: any) => {
      toast({
        title: "त्रुटि",
        description: error.response?.data?.message || "OTP भेजने में समस्या हुई",
        variant: "destructive",
      })
    },
  })

  const verifyOtpMutation = useMutation({
    mutationFn: authService.verifyOtpSignup,
    onError: (error: any) => {
      toast({
        title: "त्रुटि",
        description: error.response?.data?.message || "OTP सत्यापन में समस्या हुई",
        variant: "destructive",
      })
    },
  })

  const registerMutation = useMutation({
    mutationFn: authService.register,
    onSuccess: () => {
      toast({
        title: "सफल",
        description: "पंजीकरण सफल हो गया। कृपया लॉगिन करें।",
      })
    },
    onError: (error: any) => {
      toast({
        title: "त्रुटि",
        description: error.response?.data?.message || "पंजीकरण में समस्या हुई",
        variant: "destructive",
      })
    },
  })

  return {
    sendOtp: sendOtpMutation,
    verifyOtp: verifyOtpMutation,
    register: registerMutation,
  }
}
