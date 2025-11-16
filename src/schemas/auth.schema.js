// client/src/schemas/auth.schema.js
import z from 'zod';

const email = z.email({ message: 'Invalid email format' });

const thaiPhone = z.string().regex(/^0\d{9}$/, {
  message: 'หมายเลขโทรศัพท์ต้องขึ้นต้นด้วย 0 และมี 10 ตัวเลข',
});

// ใช้ union แล้ว transform
const contactSchema = z.union([email, thaiPhone]);

// รวมเป็น login schema
export const loginSchema = z
  .object({
    credential: contactSchema,
    password: z.string().min(5, 'Password must be at least 5 characters'),
  })
  .transform((val) => {
    if (email.safeParse(val.credential).success) {
      return { email: val.credential, password: val.password };
    } else {
      return { phoneNumber: val.credential, password: val.password };
    }
  });

export const registerSchema = z
  .object({
    email: z.email({ message: 'อีเมลไม่ถูกต้อง' }),
    phoneNumber: thaiPhone,
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    password: z
      .string()
      .min(5, { message: 'รหัสผ่านต้องมีอย่างน้อย 5 ตัวอักษร' })
      .max(100, { message: 'รหัสผ่านต้องไม่เกิน 100 ตัวอักษร' }),
    confirmPassword: z.string().min(1, { message: 'โปรดยืนยันรหัสผ่าน' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'รหัสผ่านไม่ตรงกัน',
    path: ['confirmPassword'],
  });

// export const registerSchema = userSchema
//   .pick({
//     email: true,
//     name: true,
//     password: true,
//   })
//   .and(
//     z.object({
//       confirmPassword: z.string().min(1, { message: 'โปรดยืนยันรหัสผ่าน' }),
//     })
//   )
//   .refine((data) => data.password === data.confirmPassword, {
//     message: 'รหัสผ่านไม่ตรงกัน',
//     path: ['confirmPassword'],
//   })
//   .transform((data) => {
//     delete data.confirmPassword;
//     if (data.name === '') {
//       delete data.name;
//     }
//     return data;
//   });
