import { EmailTemplate } from '@/components/EmailTemplate'
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY ?? 're_NKSZrTXu_Lzee6dpKSEk4AdamabbxKTGv')

export async function POST(req: NextRequest) {
    const body = await req.json()

    try {
        await resend.emails.send({
            from: 'Recruiter <onboarding@resend.dev>',
            to: ['kiu.manoguerra@gmail.com'],
            subject: 'Recruiter interesado',
            react: EmailTemplate({ ...body }),
            text: body.body,
        })

        return NextResponse.json({ status: 'ok' })
    } catch (error) {
        return NextResponse.json({ status: 'error', error })
    }
}
