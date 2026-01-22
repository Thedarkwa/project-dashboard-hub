import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

export interface Appointment {
  id: string;
  doctor_id: string;
  patient_id: string;
  appointment_date: string;
  appointment_type: string;
  status: string;
  notes: string | null;
  created_at: string;
  updated_at: string;
  patients?: {
    name: string;
    avatar_url: string | null;
  };
}

export function useAppointments() {
  const { user } = useAuth();

  return useQuery({
    queryKey: ['appointments', user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('appointments')
        .select(`
          *,
          patients (
            name,
            avatar_url
          )
        `)
        .order('appointment_date', { ascending: true });

      if (error) throw error;
      return data as Appointment[];
    },
    enabled: !!user,
  });
}

export function useTodayAppointments() {
  const { user } = useAuth();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  return useQuery({
    queryKey: ['appointments', 'today', user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('appointments')
        .select(`
          *,
          patients (
            name,
            avatar_url
          )
        `)
        .gte('appointment_date', today.toISOString())
        .lt('appointment_date', tomorrow.toISOString())
        .order('appointment_date', { ascending: true });

      if (error) throw error;
      return data as Appointment[];
    },
    enabled: !!user,
  });
}

export function useCreateAppointment() {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: async (appointment: Omit<Appointment, 'id' | 'doctor_id' | 'created_at' | 'updated_at' | 'patients'>) => {
      const { data, error } = await supabase
        .from('appointments')
        .insert({
          ...appointment,
          doctor_id: user?.id,
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['appointments'] });
    },
  });
}

export function useUpdateAppointment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, ...updates }: Partial<Appointment> & { id: string }) => {
      const { data, error } = await supabase
        .from('appointments')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['appointments'] });
    },
  });
}

export function useDeleteAppointment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('appointments')
        .delete()
        .eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['appointments'] });
    },
  });
}
