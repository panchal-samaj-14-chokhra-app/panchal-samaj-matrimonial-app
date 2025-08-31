import { useQuery, useMutation, useQueryClient, useInfiniteQuery } from "@tanstack/react-query"
import { profileService, type Profile } from "@/lib/api-services"
import { toast } from "sonner"

// Profile query keys
export const profileKeys = {
  all: ["profiles"] as const,
  lists: () => [...profileKeys.all, "list"] as const,
  list: (filters: Record<string, any>) => [...profileKeys.lists(), filters] as const,
  details: () => [...profileKeys.all, "detail"] as const,
  detail: (id: string) => [...profileKeys.details(), id] as const,
  myProfile: () => [...profileKeys.all, "my-profile"] as const,
}

// Get profiles with filters
export function useProfiles(filters?: {
  gender?: string
  ageMin?: number
  ageMax?: number
  location?: string
  education?: string
  occupation?: string
  page?: number
  limit?: number
}) {
  return useQuery({
    queryKey: profileKeys.list(filters || {}),
    queryFn: () => profileService.getProfiles(filters),
    staleTime: 2 * 60 * 1000, // 2 minutes
  })
}

// Get infinite profiles (for pagination)
export function useInfiniteProfiles(filters?: {
  gender?: string
  ageMin?: number
  ageMax?: number
  location?: string
  education?: string
  occupation?: string
  limit?: number
}) {
  return useInfiniteQuery({
    queryKey: profileKeys.list(filters || {}),
    queryFn: ({ pageParam = 1 }) => profileService.getProfiles({ ...filters, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined
    },
    staleTime: 2 * 60 * 1000,
  })
}

// Get single profile
export function useProfile(id: string) {
  return useQuery({
    queryKey: profileKeys.detail(id),
    queryFn: () => profileService.getProfile(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

// Get user's own profile
export function useMyProfile() {
  return useQuery({
    queryKey: profileKeys.myProfile(),
    queryFn: profileService.getMyProfile,
    staleTime: 5 * 60 * 1000,
  })
}

// Create profile mutation
export function useCreateProfile() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: profileService.createProfile,
    onSuccess: (newProfile) => {
      // Invalidate profiles list
      queryClient.invalidateQueries({ queryKey: profileKeys.lists() })
      // Set my profile cache
      queryClient.setQueryData(profileKeys.myProfile(), newProfile)

      toast.success("प्रोफाइल सफलतापूर्वक बनाई गई!")
    },
    onError: (error: any) => {
      console.error("[v0] Create profile error:", error)
      toast.error(error.response?.data?.message || "प्रोफाइल बनाने में त्रुटि हुई है")
    },
  })
}

// Update profile mutation
export function useUpdateProfile() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Profile> }) => profileService.updateProfile(id, data),
    onSuccess: (updatedProfile) => {
      // Update specific profile cache
      queryClient.setQueryData(profileKeys.detail(updatedProfile.id), updatedProfile)
      // Update my profile cache if it's the user's own profile
      queryClient.setQueryData(profileKeys.myProfile(), updatedProfile)
      // Invalidate profiles list
      queryClient.invalidateQueries({ queryKey: profileKeys.lists() })

      toast.success("प्रोफाइल सफलतापूर्वक अपडेट की गई!")
    },
    onError: (error: any) => {
      console.error("[v0] Update profile error:", error)
      toast.error(error.response?.data?.message || "प्रोफाइल अपडेट करने में त्रुटि हुई है")
    },
  })
}

// Delete profile mutation
export function useDeleteProfile() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: profileService.deleteProfile,
    onSuccess: (_, deletedId) => {
      // Remove from cache
      queryClient.removeQueries({ queryKey: profileKeys.detail(deletedId) })
      // Invalidate profiles list
      queryClient.invalidateQueries({ queryKey: profileKeys.lists() })
      // Clear my profile if it was deleted
      queryClient.removeQueries({ queryKey: profileKeys.myProfile() })

      toast.success("प्रोफाइल सफलतापूर्वक डिलीट की गई!")
    },
    onError: (error: any) => {
      console.error("[v0] Delete profile error:", error)
      toast.error(error.response?.data?.message || "प्रोफाइल डिलीट करने में त्रुटि हुई है")
    },
  })
}

// Upload photos mutation
export function useUploadPhotos() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ profileId, files }: { profileId: string; files: File[] }) =>
      profileService.uploadPhotos(profileId, files),
    onSuccess: (data, variables) => {
      // Invalidate profile to refetch with new photos
      queryClient.invalidateQueries({ queryKey: profileKeys.detail(variables.profileId) })
      queryClient.invalidateQueries({ queryKey: profileKeys.myProfile() })

      toast.success("फोटो सफलतापूर्वक अपलोड की गईं!")
    },
    onError: (error: any) => {
      console.error("[v0] Upload photos error:", error)
      toast.error(error.response?.data?.message || "फोटो अपलोड करने में त्रुटि हुई है")
    },
  })
}
