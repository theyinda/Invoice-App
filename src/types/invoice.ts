export type InvoiceStatus = "PAID" | "OVERDUE" | "DRAFT" | "PENDING PAYMENT";

export type InvoiceItem = {
    id: string;
    title: string;
    dueDateLabel: string;
    dueDate: string;
    amount: string;
    status: InvoiceStatus;
    color?: string;
    background?: string;
    border?: string;
};

export type InvoiceGroup = {
    dateLabel: string;
    invoices: InvoiceItem[];
};

export type ActivityItem = {
    timeLabel: string;
    actionTitle: string;
    description: string;
    avatarLetter?: string;
};
