import { create } from 'zustand';

export const useAppStore = create((set) => ({
  mobileMenuOpen: false,
  activeModal: null, // 'consultation' | 'quote' | 'careers' | 'chatbot' | null
  
  setMobileMenuOpen: (isOpen) => set({ mobileMenuOpen: isOpen }),
  openModal: (modalName) => set({ activeModal: modalName }),
  closeModal: () => set({ activeModal: null }),
}));
