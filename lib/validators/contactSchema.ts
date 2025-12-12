import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .min(3, 'Imię i nazwisko jest za krótkie (min. 3 znaki)')
    .max(100, 'Imię i nazwisko jest za długie'),
  email: z.string().email('Podaj poprawny adres e-mail'),
  company: z.string().max(150, 'Nazwa firmy jest za długa').optional().or(z.literal('')),
  projectType: z
    .string()
    .optional()
    .refine(
      (v) => ['', 'landing', 'ecommerce', 'saas', 'consulting', 'other'].includes(v ?? ''),
      'Niepoprawny typ projektu'
    ),
  budget: z
    .string()
    .optional()
    .refine(
      (v) => ['', 'below-5k', '5-15k', '15-30k', '30k-plus', 'not-sure'].includes(v ?? ''),
      'Niepoprawny budżet'
    ),
  message: z
    .string()
    .min(10, 'Wiadomość jest zbyt krótka (min. 10 znaków)')
    .max(3000, 'Wiadomość jest za długa'),
});

export type ContactPayload = z.infer<typeof contactSchema>;
