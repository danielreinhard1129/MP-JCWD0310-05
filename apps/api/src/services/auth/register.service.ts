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
      throw new Error('An Account With That Email Already Exists!');
    }

    const hashedPassword = await hashPassword(password);

    //add username
    const existingUsername = await prisma.user.findFirst({
      where: { username: username },
      select: { id: true },
    })
    if (existingUsername) {
      throw new Error('An Account With That Username Already Exists!')
    }


    //add referred
    const existingRefferal = await prisma.user.findFirst({
      where: { referral: referral },
      select: { id: true },
    })
    if (!existingRefferal && referral != '') {
      throw new Error('Invalid Referral Code!')
    }

    const userCoupon = String(
      body.username.substring(0, 3) + Math.ceil(Math.random() * 1000),
    ).toUpperCase();

    //update reffered point

    if (existingRefferal) {
      const findpoint = await prisma.user.findUnique({
        where: { id: existingRefferal.id },
        select: { points: true, pointsExpired: true },
      });

      const newPoint = Number(findpoint?.points) + 10000;

      const nowDate = new Date();
      const updateDate = new Date(
        nowDate.setMonth(nowDate.getMonth() + 3),
      )

      await prisma.user.update({
        where: { id: existingRefferal.id },
        data: { points: newPoint, pointsExpired: updateDate },
      });

      await prisma.coupon.create({
        data: {
          isUse: false,
          code: userCoupon,
          amount: 10000,
          expiredDate: updateDate,
          userId: existingRefferal.id,
        },
      });

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
          // add coupon
          reward: true,
          password: hashedPassword,
          referral: generateReferralCode,
        },
      });
    } else if (role == "customer" && referral == '') {
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