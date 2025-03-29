import { NextApiRequest, NextApiResponse } from 'next';

interface RequestBody {
    amount: number;
    donationType: string;
    name: string;
    email: string;
    phone: string;
}

interface StkPushBody {
    BusinessShortCode: string;
    Password: string;
    Timestamp: string;
    TransactionType: string;
    Amount: number;
    PartyA: string;
    PartyB: string;
    PhoneNumber: string;
    CallBackURL: string;
    AccountReference: string;
    TransactionDesc: string;
}

interface TokenResponse {
    access_token: string;
}

interface StkResponse {
    ResponseCode: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    const { amount, donationType, name, email, phone } = req.body as RequestBody;

    // Validate inputs
    if (!amount || !donationType || !name || !email || !phone) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        // Get M-Pesa access token
        const auth = Buffer.from(
            `${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`
        ).toString('base64');
        const tokenResponse = await fetch(
            'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
            {
                headers: { Authorization: `Basic ${auth}` },
            }
        );
        const tokenData = (await tokenResponse.json()) as TokenResponse;
        const accessToken = tokenData.access_token;

        if (!accessToken) {
            return res.status(500).json({ error: 'Failed to get access token' });
        }

        // Prepare STK push request
        const shortcode = process.env.MPESA_SHORTCODE!;
        const passkey = process.env.MPESA_PASSKEY!;
        const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 14);
        const password = Buffer.from(`${shortcode}${passkey}${timestamp}`).toString('base64');
        const formattedPhone = '254' + phone.slice(1);

        const stkPushBody: StkPushBody = {
            BusinessShortCode: shortcode,
            Password: password,
            Timestamp: timestamp,
            TransactionType: 'CustomerPayBillOnline',
            Amount: amount,
            PartyA: formattedPhone,
            PartyB: shortcode,
            PhoneNumber: formattedPhone,
            CallBackURL: process.env.MPESA_CALLBACK_URL!,
            AccountReference: 'Donation',
            TransactionDesc: `Donation to ${donationType}`,
        };

        const stkResponse = await fetch(
            'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(stkPushBody),
            }
        );
        const stkData = (await stkResponse.json()) as StkResponse;

        if (stkData.ResponseCode === '0') {
            return res.status(200).json({
                message: 'Payment request sent to your phone. Please complete the payment.',
            });
        } else {
            return res.status(500).json({ error: 'Failed to initiate payment' });
        }
    } catch (error) {
        console.error('Error occurred:', error);
        return res.status(500).json({ error: 'Server error occurred' });
    }
}