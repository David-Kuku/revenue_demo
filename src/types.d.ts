export type TUser = {
    email: string,
    first_name: string,
    last_name: string
}

export type TWallet = {
    balance: number,
    ledger_balance: number,
    pending_payout: number,
    total_payout: number,
    total_revenue: number
}
type TMetadata = {
    country: string,
    email: string,
    name: string,
    product_name: string,
    quantity: number,
    type: string
}
export type TTransaction = {
    amount: number,
    date: string,
    type: 'withdrawal' | 'deposit',
    status: 'successful' | 'pending' | 'failed',
    payment_reference: string,
    metadata: TMetadata
}

export type TFilter = {
    days: 'Last 7 days' | 'Today' | 'This month' | 'Last 3 months'
    startDate: string
    endDate: string
    status: string[]
    type: string[]
}
export type TFilterCopy = {
    days: string
    startDate?: string
    endDate?: string
    status: string[]
    type: string[]
    dateRange?: string
}

export type TNavMenu = {
    name: 'Home' | 'Analytics' | 'Revenue' | 'CRM' | 'Apps'
    image: string
}

export type TProfileItem = {
    title: 'Settings' | 'Purchase History' | 'Refer and Earn' |'Integrations' |'Report Bug' |'Switch Account' | 'Logout'
    img: string
}


export type TFilterProps = 'days' | 'startDate' | 'endDate' | 'status' | 'type'