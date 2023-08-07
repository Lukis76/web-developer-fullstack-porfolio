import z from 'zod'

export const FormContactSchema = z.object({
  email: z.string().email().nonempty({message: "Required field ( example@gmail.com )"}),
  body: z.string().min(40).max(3000).nonempty({})
})

export type FormContact = z.infer<typeof FormContactSchema> 
