import { hashPassword } from '@/lib/bcrypt';
import prisma from '@/prisma';
import { User } from '@prisma/client';

export const registerService = async (
  body: Pick<User, 'email' | 'username' | 'password' | 'referral' | 'role'>,
): Promise<User> => {
  try {
    const { email, password, username, role, referral } = body;
    const existingUser = await prisma.user.findFirst({
      where: { email },
    });

    if (existingUser) {
      throw new Error('Email already exist');
    }

    const hashedPassword = await hashPassword(password);

    //add referred
    const existingRefferal = await prisma.user.findFirst({
      where: { referral },
    })
    if (!existingRefferal && referral != '') {
      throw new Error('Invalid Referral Code')
    }

    //add generate referral code trial
    const generateReferralCode = crypto.randomUUID().slice(0, 6);

    if (role == "customer" && referral != '') {
      return await prisma.user.create({
        data: {
          email: email,
          username: username,
          role: role,
          referred: referral,
          password: hashedPassword,
          referral: generateReferralCode,
        },
      });
    } else if (role == "customer" && referral == '' ){
      return await prisma.user.create({
        data: {
          email: email,
          username: username,
          role: role,
          password: hashedPassword,
          referral: generateReferralCode,
        },
      });
    } else {
      return await prisma.user.create({
        data: {
          email: email,
          username: username,
          role: role,
          password: hashedPassword
        },
      });
    }

  } catch (error) {
    throw error;
  }
};