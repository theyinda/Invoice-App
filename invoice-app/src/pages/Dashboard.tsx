// import { useState } from "react";
// import DashboardShell from "../components/DashboardShell";
// import InvoiceList from "../components/InvoiceList";
// import InvoiceModal from "../components/InvoiceModal";

// export default function DashboardPage() {
//     const [selectedInvoice, setSelectedInvoice] = useState<string | null>(null);

//     return (
//         <DashboardShell>
//             <InvoiceList onSelect={setSelectedInvoice} />
//             <InvoiceModal
//                 open={!!selectedInvoice}
//                 invoiceId={selectedInvoice}
//                 onClose={() => setSelectedInvoice(null)}
//             />
//         </DashboardShell>
//     );
// }
