"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export function PaymentModal({
  open,
  onClose,
  onContinue,
}: {
  open: boolean;
  onClose: () => void;
  onContinue: () => void;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[70] bg-black/50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-secondary rounded-2xl max-w-md w-full p-6 shadow-header" onClick={(e) => e.stopPropagation()}>
        <h3 className="text-xl font-bold mb-2">Payment gateway coming soon</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Checkout will be connected in the next phase. For now you can reserve your seat (no charge) or talk to a counselor on {site.phone}.
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <button className="btn-primary flex-1" onClick={onContinue}>
            Continue without payment
          </button>
          <a className="btn-outline flex-1" href={site.whatsapp} target="_blank" rel="noreferrer">
            Talk to counselor
          </a>
        </div>
      </div>
    </div>
  );
}

export function usePaymentFlow(action: () => Promise<void>) {
  const [open, setOpen] = useState(false);
  return {
    open,
    setOpen,
    modal: (
      <PaymentModal
        open={open}
        onClose={() => setOpen(false)}
        onContinue={async () => {
          await action();
          setOpen(false);
        }}
      />
    ),
  };
}
