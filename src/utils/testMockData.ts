import { TTransaction } from "../types";

export const mockTransactionData: TTransaction[] = [
    {
        date: '2023-11-23',
        amount: 100,
        payment_reference: 'dsfghjkdskfjg_Strertf',
        status: 'successful', type: 'deposit',
        metadata: {
            country: 'Nigeria',
            email: 'test@gmail.com',
            name: 'test test1',
            product_name: 'Rich dad poor dad',
            quantity: 3, type: 'in progress'
        }
    },
    {
        date: '2023-11-20',
        amount: 300,
        payment_reference: 'dsfghjkdskfjg_Strertf',
        status: 'successful', type: 'deposit',
        metadata: {
            country: 'Nigeria',
            email: 'test@gmail.com',
            name: 'test test1',
            product_name: 'Rich dad poor dad',
            quantity: 3, type: 'in progress'
        }
    },
    {
        date: '2023-11-27',
        amount: 200,
        payment_reference: 'dsfghjkdskfjg_Strertf',
        status: 'successful', type: 'withdrawal',
        metadata: {
            country: 'Nigeria',
            email: 'test@gmail.com',
            name: 'test test1',
            product_name: 'Rich dad poor dad',
            quantity: 3, type: 'in progress'
        }
    },
    {
        date: '2023-09-20',
        amount: 250,
        payment_reference: 'dsfghjkdskfjg_Strerastf',
        status: 'pending', type: 'withdrawal',
        metadata: {
            country: 'Nigeria',
            email: 'test@gmail.com',
            name: 'kuku david',
            product_name: 'Rich dad poor dad',
            quantity: 2, type: 'in progress'
        }
    },
];

export const mockUserData = { email: 'kukudavid@gmail.com', first_name: 'kuku', last_name: 'david' }
export const mockWalletData = {balance: 500, ledger_balance: 100, pending_payout: 300, total_payout: 1000, total_revenue: 60}