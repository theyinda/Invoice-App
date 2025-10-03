export type InvoiceStatus = "PAID" | "OVERDUE" | "DRAFT" | "PENDING PAYMENT";

export type UserInfo = {
    name: string;
    phone: string;
    email: string;
    address?: string;
    logoUrl?: string;
};
export type CustomerInfo = {
    name: string;
    phone: string;
    email: string;
};

export type PaymentInfo = {
    accountName: string;
    accountNumber: string;
    achRoutingNo: string;
    bankName: string;
    bankAddress?: string;
};
export type ActivityItem = {
    id: string;
    timeLabel: string;
    invoiceId: string;
    actionTitle: string;
    description: string;
    avatarLetter?: string;
    logoUrl?: string;
};

export type InvoiceLineItem = {
    id: string;
    title: string;
    description?: string;
    quantity: number;
    unitPrice: number;
    total: number;
    currency: string;
};


export type InvoiceItem = {
    id: string;
    title: string;
    dueDateLabel: string;
    issueDate: string;
    dueDate: string;
    amount: string;
    note: string;
    status: InvoiceStatus;
    currency?: string;
    sender?: UserInfo;
    customer?: CustomerInfo;
    paymentInfo?: PaymentInfo;
    items?: InvoiceLineItem[];
    activity?: ActivityItem[];
};

export type InvoiceGroup = {
    dateLabel: string;
    invoices: InvoiceItem[];
};

export type Stats = {
    totalPaid: string;
    totalOverdue: string;
    totalDraft: string;
    totalUnPaid: string;
    overdue: string;
    draft: string;
    paid: string;
    unpaid: string;
    currency: string;
};

