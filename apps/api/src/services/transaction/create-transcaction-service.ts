import prisma from "@/prisma";
import { appConfig } from "@/utils/config";
import { Transaction } from "@prisma/client";
import { sign } from "jsonwebtoken";
import { v4 as uuidv4 } from 'uuid';
interface CreateTransactionBody extends Omit<Transaction, 'createdAt' | 'updateAt' | 'id'> {}

export const createTransactionService = async (body:CreateTransactionBody) => {
  try {
    const { eventId, userId, quantity, isPointUse, isUseVoucher, userVoucherId, userCouponId, isUseCoupon} = body;

    const user = await prisma.user.findFirst({
      where: { id: Number(userId) },
    });

    if (!user) {
      throw new Error('user not found');
    }

    const userEmail = user.email;

    const token = sign({ id: user.id }, appConfig.jwtSecretKey, {
      expiresIn: '30m',
    });

    const event = await prisma.event.findFirst({
      where: {id: Number(eventId)}
    })

    if (!event) {
      throw new Error('event not found');
    }

    const invoice = uuidv4();

    const totalPrice = event.price * quantity;

    let point = null;

    if (String(isPointUse) === 'true') {
      point = await prisma.user.findFirst({
        where: { id: Number(userId) },
      });

      await prisma.user.update({
        where: { id: Number(userId) },
        data: {
          points: 0,
        },
      });
    }

    let coupon = null;

    if (String(isUseCoupon) === 'true') {
      coupon = await prisma.userCoupon.findFirst({
        where: { id: Number(userCouponId) },
        include: { coupon: true },
      });

      await prisma.userCoupon.update({
        where: { id: Number(userCouponId) },
        data: {
          isUse: true,
        },
      });
    }

    const couponAmount: number = coupon?.coupon.amount || 0; 

    let voucher = null;

    if (String(isUseVoucher) === 'true') {
      voucher = await prisma.userVoucher.findFirst({
        where: { id: Number(userVoucherId) },
        include: { voucher: true },
      });

      await prisma.userVoucher.update({
        where: { id: Number(userCouponId) },
        data: {
          isUse: true,
        },
      });
    }

    const voucherAmount: number = voucher?.voucher.amount || 0;

    const totalDiscount =
      totalPrice - Number(couponAmount) - Number(voucherAmount);

    const total = totalDiscount - user.points;
    const newTransaction = await prisma.transaction.create({
      data: {
        ...body,
        paymentProof: `/transactionProof/`,
        invoice,
        totalPrice,
        userId: Number(userId),
        eventId: Number(eventId),
        quantity: Number(quantity),
        isPointUse: Boolean(isPointUse),
        isUseCoupon: Boolean(isUseCoupon),
        isUseVoucher: Boolean(isUseVoucher),
      },
      include: {
        event: true,
        user: true,
      }
    })

    if (user.points - totalDiscount >= 0) {
      await prisma.user.update({
        where: { id: Number(userId) },
        data: {
          points: user.points - totalDiscount,
        },
      });
    } else if (user.points - totalDiscount < 0) {
      await prisma.user.update({
        where: { id: Number(userId) },
        data: {
          points: 0,
        },
      });
    }
  } catch (error) {
    throw error
  }
}