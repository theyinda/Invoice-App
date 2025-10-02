

import { http, HttpResponse } from "msw";

import type { InvoiceGroup, ActivityItem, Stats } from "../types/invoice";

const invoices: InvoiceGroup[] = [
    {
        dateLabel: "Today",
        invoices: [
            {
                id: "INV-1001",
                title: "Website Redesign",
                dueDateLabel: "Due Today",
                issueDate: "Nov 2, 2025",
                dueDate: "Oct 2, 2025",
                amount: "$1,200",
                currency: "USD",
                status: "PAID",
                note: "Thank you",
                sender: {
                    name: "ABC Company",
                    phone: "+23479493393",
                    email: "abc@example.com",
                    address: "123 Street, City",
                    logoUrl: "/crop.svg",
                },
                customer: {
                    name: "John Doe",
                    phone: "+1234567890",
                    email: "john@example.com",
                },
                paymentInfo: {
                    accountName: "Access",
                    accountNumber: "123456789",
                    achRoutingNo: "987654321",
                    bankName: "Bank of Example",
                    bankAddress: "456 Bank Street, City",
                },
                items: [
                    {
                        id: "item-1",
                        title: "Design Work",
                        description: "Homepage + About page redesign",
                        quantity: 10,
                        unitPrice: 120,
                        total: 1200,
                        currency: "USD",
                    },
                ],
                activity: [
                    {
                        id: "act-11",
                        timeLabel: "2 hours ago",
                        invoiceId: "INV-1001",
                        actionTitle: "Invoice Sent",
                        description: "Sent invoice INV-1001 to John Doe",
                        logoUrl: "/avatar.svg",
                    },
                    {
                        id: "act-12",
                        timeLabel: "1 hour ago",
                        invoiceId: "INV-1001",
                        actionTitle: "Payment Received",
                        description: "Payment received for INV-1001",
                        logoUrl: "/avatar.svg",
                    },
                ],
            },
            {
                id: "INV-1002",
                title: "SEO Optimization",
                dueDateLabel: "Due Today",
                issueDate: "Nov 2, 2025",
                dueDate: "Oct 2, 2025",
                amount: "$600",
                currency: "USD",
                status: "OVERDUE",
                note: "This is a note for the invoice",
                customer: {
                    name: "Acme Corp",
                    phone: "+1987654321",
                    email: "finance@acme.com",
                },
                sender: {
                    name: "ABC Company",
                    phone: "+23479493393",
                    email: "abc@example.com",
                    address: "123 Street, City",
                    logoUrl: "/crop.svg",
                },
                paymentInfo: {
                    accountName: "GTB",
                    accountNumber: "123456789",
                    achRoutingNo: "987654321",
                    bankName: "Bank of Example",
                    bankAddress: "456 Bank Street, City",
                },
                items: [
                    {
                        id: "item-3",
                        title: "UI/UX Audit",
                        description: "Homepage page audit",
                        quantity: 10,
                        unitPrice: 120,
                        total: 1200,
                        currency: "USD",
                    },
                ],
                activity: [
                    {
                        id: "act-21",
                        timeLabel: "2 hours ago",
                        invoiceId: "INV-1002",
                        actionTitle: "Invoice Sent",
                        description: "Sent invoice INV-1002 to John Doe",
                        logoUrl: "/avatar.svg",
                    },
                    {
                        id: "act-22",
                        timeLabel: "1 hour ago",
                        invoiceId: "INV-1002",
                        actionTitle: "Payment Received",
                        description: "Payment received for INV-1002",
                        logoUrl: "/avatar.svg",
                    },
                ],
            },
        ],
    },
    {
        dateLabel: "Yesterday",
        invoices: [
            {
                id: "INV-1003",
                title: "UI/UX Audit",
                dueDateLabel: "1 Day Ago",
                issueDate: "Nov 1, 2025",
                dueDate: "Oct 1, 2025",
                amount: "$900",
                currency: "USD",
                status: "PENDING PAYMENT",
                note: "Thank you for your business",
                sender: {
                    name: "ABC Company",
                    phone: "+23479493393",
                    email: "abc@example.com",
                    address: "123 Street, City",
                    logoUrl: "/crop.svg",
                },
                customer: {
                    name: "Jane Smith",
                    phone: "+447700900123",
                    email: "jane@example.com",
                },
                paymentInfo: {
                    accountName: "GTB",
                    accountNumber: "123456789",
                    achRoutingNo: "987654321",
                    bankName: "Bank of Example",
                    bankAddress: "456 Bank Street, City",
                },
                items: [
                    {
                        id: "item-3",
                        title: "Email Marketing",
                        description: "",
                        quantity: 10,
                        unitPrice: 120,
                        total: 1200,
                        currency: "USD",
                    },
                ],
                activity: [
                    {
                        id: "act-31",
                        timeLabel: "2 hours ago",
                        invoiceId: "INV-1003",
                        actionTitle: "Invoice Sent",
                        description: "Sent invoice INV-1003 to John Doe",
                        avatarLetter: "Y",
                    },
                    {
                        id: "act-32",
                        timeLabel: "1 hour ago",
                        invoiceId: "INV-1003",
                        actionTitle: "Payment Received",
                        description: "Payment received for INV-1003",
                        logoUrl: "/avatar.svg",
                    },
                ],
            },
        ],
    },
];

const activities: ActivityItem[] = [
    {
        id: "act-11",
        timeLabel: "2 hours ago",
        invoiceId: "INV-1001",
        actionTitle: "Invoice Sent",
        description: "Sent invoice INV-1001 to John Doe",
        logoUrl: "/avatar.svg",
    },
    {
        id: "act-12",
        timeLabel: "1 hour ago",
        invoiceId: "INV-1001",
        actionTitle: "Payment Received",
        description: "Payment received for INV-1001",
        logoUrl: "/avatar.svg",
    },
    {
        id: "act-21",
        timeLabel: "2 hours ago",
        invoiceId: "INV-1002",
        actionTitle: "Invoice Sent",
        description: "Sent invoice INV-1002 to John Doe",
        logoUrl: "/avatar.svg",
    },
    {
        id: "act-22",
        timeLabel: "1 hour ago",
        invoiceId: "INV-1002",
        actionTitle: "Payment Received",
        description: "Payment received for INV-1002",
        logoUrl: "/avatar.svg",
    },
    {
        id: "act-31",
        timeLabel: "1 day ago",
        invoiceId: "INV-1003",
        actionTitle: "Payment Received",
        description: "Payment received for INV-1003",
        logoUrl: "/avatar.svg",
    },
    {
        id: "act-32",
        timeLabel: "1 hour ago",
        invoiceId: "INV-1003",
        actionTitle: "Payment Received",
        description: "Payment received for INV-1003",
        logoUrl: "/avatar.svg",
    },
];

const stats: Stats = {
    totalPaid: "4,120.76",
    totalOverdue: "2,310.50",
    totalDraft: "1,120.90",
    totalUnPaid: "3,210.45",
    overdue: "320",
    draft: "13",
    paid: "1,289",
    unpaid: "520",
    currency: 'USD'
};

export const handlers = [
    http.get("/api/invoices", () => {
        return HttpResponse.json(invoices);
    }),
    http.get("/api/activities", () => {
        return HttpResponse.json(activities);
    }),
    http.get("/api/stats", () => {
        return HttpResponse.json(stats);
    }),
];
